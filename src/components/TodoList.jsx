import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ACTIONS } from '../reducer/todoReducer';
import TodoItem from './TodoItem';
import TodoOptions from './TodoOptions';

const TodoList = () => {

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
                break
            }
            case 'DRAG_ENTER': {
                targetTodoRef.current = index
                break
            }
            case 'DRAG_END': {
                event.preventDefault()
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


    return ( 
        <div className="todo-list mx-4 shadow-2xl">
            <ul className=''>
                {   
                    sortType == 'all' && todos.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={todos} index={index} handleDrag={handleDrag} />
                    ))
                }

                {
                    sortType == 'active' && notComplete.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={notComplete} index={index} handleDrag={handleDrag} />
                    ))
                }

                {
                    sortType == 'complete' && complete.map((todo, index) => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} todos={complete} index={index} handleDrag={handleDrag} />
                    ))
                }
                
            </ul>
            <TodoOptions todos={todos} dispatch={dispatch} sortType={sortType} setSortType={setSortType} completeLength={complete.length} notCompleteLength={notComplete.length} />
        </div>
     );
}
 
export default TodoList;