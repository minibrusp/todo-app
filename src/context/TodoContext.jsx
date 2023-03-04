import React, { createContext, useEffect, useReducer, useState } from 'react'
import {v1 as uuidv1 } from 'uuid'
import {ACTIONS, todoReducer} from '../reducer/todoReducer'


export const TodoContext = createContext()

let initialTodos = [
    {
        task: 'Complete online Javascript course',
        completed: true,
        id: uuidv1()
    },
    {
        task: 'Jog around the park 3x',
        completed: false,
        id: uuidv1()
    },
    {
        task: '10 minutes meditation',
        completed: false,
        id: uuidv1()
    },
    {
        task: 'Read for 1 hour',
        completed: false,
        id: uuidv1()
    },
    {
        task: 'Pick up groceries',
        completed: false,
        id: uuidv1()
    },
    {
        task: 'Complete Todo App Frontend Mentor',
        completed: false,
        id: uuidv1()
    },
]

const TodoContextProvider = ({children}) => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialTodos, () => {
        const localTodos = JSON.parse(localStorage.getItem('todos'))
        return localTodos ? localTodos : initialTodos
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider