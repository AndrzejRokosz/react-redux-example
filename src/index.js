import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore, combineReducers} from 'redux'
import todos, {addTodo,filterTodos,toggleTodo,deleteTodo} from './store/todos'///reducer 
import counter,{increment,decrement,reset} from './store/counter'
import cart, {addToCart} from './store/cart'

//Redux here
const rootReducer =combineReducers({
todos,
counter,
cart


})
const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //redux chrome dev tools
    )
//

console.warn(store.getState())
store.dispatch(addTodo('Go to shoping'))
store.dispatch(addTodo('Go somewhere'))
store.dispatch(addTodo('alalal'))
store.dispatch(addTodo('bububu'))
store.dispatch(addTodo('dododo'))
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(addTodo('sdsdsdsd'))
store.dispatch(filterTodos('Go'))

console.warn(store.getState())
store.dispatch(addToCart('allalaa',15))
store.dispatch(deleteTodo(0))



window.increaseCounter=()=>store.dispatch(increment())
window.dodajTodo=(text)=>store.dispatch(addTodo(text))
window.toggleTodo=(index)=>store.dispatch(toggleTodo(index))


ReactDOM.render(<App />, document.getElementById('root'))


