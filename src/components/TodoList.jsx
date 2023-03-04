import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { ACTIONS } from '../reducer/todoReducer'
import TodoItem from './TodoItem'
import TodoOptions from './TodoOptions'
import {gsap} from 'gsap'

gsap.registerPlugin()

const TodoList = ({listsRef}) => {

    const { todos, dispatch } = useContext(TodoContext)

    const [ sortType, setSortType ] = useState('all')

    let notComplete = todos.filter(todo => todo.completed !== true)
    let complete = todos.filter(todo => todo.completed === true)
    
    let startingTodoRef = useRef(null)
    let targetTodoRef = useRef(null)

    const handleDrag = (event, index, type, todos) => {
        switch(type) {
            case 'DRAG_START': {
                startingTodoRef.current = index
                startingTodoRef.elem = event.target
                event.target.classList.add('dragging')
                break
            }
            case 'DRAG_ENTER': {
                event.preventDefault()
                targetTodoRef.current = index
                event.target.classList.add('target')
                break
            }
            case 'DRAG_LEAVE': {
                event.preventDefault()
                event.target.classList.remove('target')
                break
            }
            case 'DRAG_END': {
                event.preventDefault()
                startingTodoRef.elem.classList.remove('dragging')
                let _todos = [...todos]
        
                const draggedItemContent = _todos.splice(startingTodoRef.current, 1)[0]
                _todos.splice(targetTodoRef.current, 0, draggedItemContent)

                startingTodoRef.current = null
                targetTodoRef.current = null

                dispatch({type: ACTIONS.RE_ORDER_TODO, todo:_todos})
                break

            }
        }
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(listsRef.current, {
                x: -5,
                duration: .8,
                stagger: .2,
                autoAlpha: 0,
            })
        })
        return () => ctx.revert()        
    }, [])


    const addToRefs = el => {
        if(el && !listsRef.current.includes(el)) {
            listsRef.current.push(el)
        }
    }

    const clearComplete = () => {
        let x = listsRef.current.filter((current) => {
            return current.children[0].children[0].children[0].attributes.checked !== undefined
        })
        gsap.to(x, {
            x: -800,
            opacity: 0,
            duration: .5,
            autoAlpha: 0,
            backgroundColor: '#7595f8',
            stagger: .2,
            onComplete: () => {
                dispatch({type: ACTIONS.CLEAR_COMP_TODO})
            }
        })
    }

    const onDeleteRefs = (el,id) => {
        gsap.to(el, {
            x: -800,
            opacity: 0,
            duration: .5,
            autoAlpha: 0,
            backgroundColor: '#7595f8',
            onComplete: () => {
                dispatch({type: ACTIONS.DEL_TODO , id: id})
            }
        })
    } 


    return ( 
        <div className="todo-list mx-4 shadow-2xl">
            <ul className="overflow-hidden">
                {   
                    sortType == 'all' && todos.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={todos} index={index} handleDrag={handleDrag} addToRefs={addToRefs} onDeleteRefs={onDeleteRefs}/>
                    ))
                }

                {
                    sortType == 'active' && notComplete.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={notComplete} index={index} handleDrag={handleDrag} addToRefs={addToRefs} onDeleteRefs={onDeleteRefs}/>
                    ))
                }

                {
                    sortType == 'complete' && complete.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={complete} index={index} handleDrag={handleDrag} addToRefs={addToRefs} onDeleteRefs={onDeleteRefs}/>
                    ))
                }
                
            </ul>
            <TodoOptions todos={todos} dispatch={dispatch} sortType={sortType} setSortType={setSortType} completeLength={complete.length} notCompleteLength={notComplete.length} clearComplete={clearComplete}/>
        </div>
     );
}
 
export default TodoList