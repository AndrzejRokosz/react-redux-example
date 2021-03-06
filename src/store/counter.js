
export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})
export const reset = () => ({
    type: RESET
})



const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET ='RESET'
export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return (state + 1)
        case DECREMENT:
            return (state - 1)
        case RESET:
            return 0

        default:
            return state;
    }
}