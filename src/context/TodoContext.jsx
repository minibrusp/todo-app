import React, { createContext, useReducer } from 'react';
import {v1 as uuidv1 } from 'uuid'
import {todoReducer} from '../reducer/todoReducer'


export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    const [ todos, dispatch ] = useReducer(todoReducer, [
        {
            task: 'Jog around the park 3x',
            completed: false,
            id: uuidv1()
        },
        {
            task: 'sleep 8hrs today',
            completed: false,
            id: uuidv1()
        },
        {
            task: 'drink water',
            completed: false,
            id: uuidv1()
        },
        {
            task: 'bike 1hr',
            completed: true,
            id: uuidv1()
        },
        {
            task: 'run 10mins',
            completed: true,
            id: uuidv1()
        },
    ])

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider