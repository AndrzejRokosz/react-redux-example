import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore, combineReducers} from 'redux'


//Redux here
const rootReducer =combineReducers({})
const store=createStore(rootReducer)
//

ReactDOM.render(<App />, document.getElementById('root'))


