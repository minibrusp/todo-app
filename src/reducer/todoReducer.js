import { v1 as uuidv1 } from 'uuid'

export const ACTIONS = {
    LOAD_TODO: 'loadtodo',
    ADD_TODO: 'addtodo',
    DEL_TODO: 'deltodo',
    COMP_TODO: 'completetodo',
    CLEAR_COMP_TODO: 'clearcompletedtodo',
    RE_ORDER_TODO: 'reordertodo',
}

const todoReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.LOAD_TODO: {
            return action.todos
        }
        case ACTIONS.ADD_TODO: {
            return [...state, {
                task: action.todos.task,
                completed: false,
                id: uuidv1()
            }]
        }
        case ACTIONS.DEL_TODO: {
            return state.filter(todo => todo.id !== action.id)
        }
        case ACTIONS.COMP_TODO: {
            return state.map(todo => {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }
        case ACTIONS.CLEAR_COMP_TODO: {
            return state.filter(todo => todo.completed !== true)
        }
        case ACTIONS.RE_ORDER_TODO: {
            return action.todo
        }

        default: return state
    }
}

export {todoReducer}