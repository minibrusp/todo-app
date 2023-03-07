import { v1 as uuidv1 } from 'uuid'

export const ACTIONS = {
    LOAD_TODO: 'loadtodo',
    ADD_TODO: 'addtodo',
    DEL_TODO: 'deltodo',
    COMP_TODO: 'completetodo',
    CLEAR_COMP_TODO: 'clearcompletedtodo',
    RE_ORDER_TODO: 'reordertodo',
    RE_ORDER_TODO_V2: 'reordertodo'
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

            switch(action.sorting) {
                case 'all': {

                    let _todos = [...state]
        
                    const draggedItemContent = _todos.splice(action.starting, 1)[0]
                    _todos.splice(action.target, 0, draggedItemContent)

                    // return action.todo
                    return _todos
                }
                
                case 'complete':
                case 'active': {
                    // console.log(`start : ` , action.starting)
                    // console.log(`target : ` , action.target)
                    // console.log(` starting` ,action.todo[action.starting])
                    // console.log(` starting ID: ` ,action.todo[action.starting].id)
                    // console.log(` target` ,action.todo[action.target])
                    // console.log(` target ID: ` ,action.todo[action.target].id)
                    // console.log(`is starting id and target id same? `, 
                    // action.todo[action.starting].id ==  action.todo[action.target].id ? true : false)

                    // loop through original todo 
                    // then look for Index using ID 
                    // then save it to the variable
                    // the splice the positions
                    // then return the new state of 

                    console.log(action.sorting)

                    let _todos = [...state]

                    const StartingOriginalIndex = state.findIndex(todo => todo.id == action.todo[action.starting].id)
                    const TargetOriginalIndex = state.findIndex(todo => todo.id == action.todo[action.target].id)
                    

                    // console.log(`starting original index `, StartingOriginalIndex)
                    // console.log(`starting original index `, TargetOriginalIndex)
                    // console.log(action.todo.length)

                    const draggedItemContent = _todos.splice(StartingOriginalIndex, 1)[0]
                    _todos.splice(TargetOriginalIndex, 0, draggedItemContent)
                    

                    return _todos
                }

                

                default: return state
            }

            
        }

        case ACTIONS.RE_ORDER_TODO_V2: {
            return action.todo
        }

        default: return state
    }
}

export {todoReducer}