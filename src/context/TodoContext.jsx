import React, { createContext, useEffect, useReducer, useState } from 'react'
import {v1 as uuidv1 } from 'uuid'
import {todoReducer} from '../reducer/todoReducer'


export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    const [ todos, dispatch ] = useReducer(todoReducer, [
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
    ])

    useEffect(() => {
        console.log(
            JSON.parse(localStorage.getItem('todos'))
        )
        if(localStorage.getItem('todos')) {
            console.log('YES I GOT IT')
        } else {
            console.log('NO ITEM')
        }
    }, [])

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