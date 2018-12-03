
const ADD_TODO="ADD_TODO"
const FILTER_TODO="FILTER_TODO"


export const addTodo=text=>({ ///kreator akcji
    type:ADD_TODO,
    text
})

export const filterTodos=input=>({
    type:FILTER_TODO,
    input
})


const INITIAL_STATE={
    allTodos:[],
    filteredTodos:[]
}



export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_TODO':
        const newTodo ={text:action.text,completed:false}

            return {
                ...state,
                allTodos:[...state.allTodos,newTodo]
            }
        case 'SWITCH_TODO_COMPLETED':
        return[
            ...state.slice(0,action.index),
            {text:state[action.index].text,
            completed:!state[action.index].completed},
            ...state.slice[action.index+1]
        ]
        case 'FILTER_TODO':
        return {
            ...state,
            filteredTodos:state.allTodos.filter(todo=>todo.text.includes(action.input))
        }
        default:
            return state
    }

}