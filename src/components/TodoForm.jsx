import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ACTIONS } from '../reducer/todoReducer';
import { gsap } from 'gsap'

export default function TodoForm({listsRef}) {

	const [ todo, setTodo ] = useState('')

	const { dispatch } = useContext(TodoContext)

	const handleSubmit = e => {
		e.preventDefault()
		dispatch({type: ACTIONS.ADD_TODO, todos: {task: todo}})
		setTodo('')
		// addAnimationRefs()
	}

	// const addAnimationRefs = () => {
    //     let newList = listsRef.current[listsRef.current.length - 1]
    //     gsap.from(newList, {
    //         y: 10,
    //         duration: .5,
    //         autoAlpha: 0,
    //     })
    // }

	return (
		<form className='bg-neutral-light-verylightgray flex justify-start items-center mb-4 mx-4 px-[20px] py-3 rounded drop-shadow-2xl dark:bg-neutral-dark-verydarkdesaturatedblue sm:py-4 sm:px-[1.3rem]' action="submit" onSubmit={handleSubmit}>	

			<span className='inline-block min-w-[20px] h-[20px] border border-neutral-light-lightgrayishblue rounded-[50%] mr-[12px] sm:mr-[16px] sm:h-[25px] sm:min-w-[25px]'></span>
			<input className='w-full my-0 focus-visible:outline-none text-xs text-neutral-light-verydarkgrayishblue dark:bg-neutral-dark-verydarkdesaturatedblue dark:text-neutral-dark-lightgrayishblue-normal sm:text-base' type="text" 
			name="newTodo" 
			placeholder='Create a new todo...'
			value={todo}
			onChange={e => setTodo(e.target.value)}
			/>

		</form>
	)
}