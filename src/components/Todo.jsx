import React, { useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {

    let listsRef = useRef([])
    listsRef.current = []

    return ( 
        <main className='dark:z-[3] dark:relative max-w-[575px] mx-auto my-0'>
                    <TodoForm listsRef={listsRef}/>
                    <TodoList listsRef={listsRef}/>
                <div className='text-center text-xs text-neutral-light-darkgrayishblue mt-28 dark:text-neutral-dark-darkgrayishblue sm:mt-12'>
                <p>Drag and drop to reorder list</p>
                </div>
            </main>
     )
}
 
export default Todo;