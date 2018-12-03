


export const addToCart = (title, price) => (
    {
        type: ADD_ITEM,
        item: {
            title,
            price
        }
    }
)

const INITIAL_STATE = { items: [], cartTotal: 0 }
const ADD_ITEM = 'ADD_ITEM'

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_ITEM:

            return {
                ...state,
                items: [...state.items, action.item],
                cartTotal: state.cartTotal + action.item.price
            }

        default:
            return state
    }

}