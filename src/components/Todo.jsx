import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    return ( 
        <main className='dark:z-[3] dark:relative'>
            <TodoForm />
            <TodoList />
            <div className='text-center text-xs text-neutral-light-darkgrayishblue mt-28 dark:text-neutral-dark-darkgrayishblue'>
            <p>Drag and drop to reorder list</p>
            </div>
        </main>
     )
}
 
export default Todo;