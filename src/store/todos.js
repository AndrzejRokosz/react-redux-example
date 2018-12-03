
const ADD_TODO="ADD_TODO"

export const addTodo=text=>({ ///kreator akcji
    type:ADD_TODO,
    text
})




export default (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
        const newTodo ={text:action.text,completed:false}
            return [...state,newTodo]
        case 'SWITCH_TODO_COMPLETED':
        return[
            ...state.slice(0,action.index),
            {text:state[action.index].text,
            completed:!state[action.index].completed},
            ...state.slice[action.index+1]
        ]



        default:
            return state
    }

    
}