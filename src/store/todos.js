
const ADD_TODO = "ADD_TODO"
const FILTER_TODO = "FILTER_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
const DELETE = "DELETE"

export const addTodo = text => ({ ///kreator akcji
    type: ADD_TODO,
    text
})

export const filterTodos = input => ({
    type: FILTER_TODO,
    input
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index
})

export const deleteTodo = index => ({
    type: DELETE,
    index
})


const INITIAL_STATE = {
    allTodos: [],
    visibleTodos: [],
    input:''
}



export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = { text: action.text, completed: false }

            return {
                ...state,
                allTodos: [...state.allTodos, newTodo]
            }
        case 'SWITCH_TODO_COMPLETED':
            return [
                ...state.slice(0, action.index),
                {
                    text: state[action.index].text,
                    completed: !state[action.index].completed
                },
                ...state.slice[action.index + 1]
            ]
        case 'FILTER_TODO':
            return {
                ...state,
                visibleTodos: state.allTodos.filter(todo => todo.text.includes(action.input)),
                input:action.input
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                allTodos: state.allTodos.map((todo, index) => {
                    if (index === action.index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        case 'DELETE':
            return {
                ...state,
                allTodos: state.allTodos.filter((todo,index) => !(index === action.index))
            }
        default:
            return state
    }

}