import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import TodoOptions from './TodoOptions';

const TodoList = () => {

    const { todos, dispatch } = useContext(TodoContext)

    const [ sortType, setSortType ] = useState('all')

    const notComplete = todos.filter(todo => todo.completed !== true)
    const complete = todos.filter(todo => todo.completed === true)

    return ( 
        <div className="todo-list mx-4 shadow-2xl">
            <ul className=''>
                {   
                    sortType == 'all' && todos.map(todo => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} />
                    ))
                }

                {
                    sortType == 'active' && notComplete.map(todo => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} />
                    ))
                }

                {
                    sortType == 'complete' && complete.map(todo => (
                        <TodoItem todo={todo.task} id={todo.id} completed={todo.completed} key={todo.id} dispatch={dispatch} />
                    ))
                }
                
            </ul>
            <TodoOptions todos={todos} dispatch={dispatch} sortType={sortType} setSortType={setSortType} completeLength={complete.length} notCompleteLength={notComplete.length} />
        </div>
     );
}
 
export default TodoList;