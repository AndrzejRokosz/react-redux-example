import React, { Component } from 'react'

import TodoList from './TodoList'



class App extends Component {
  render() {
    console.log('App props', this.props)
    return <TodoList  />
  }
}

export default App
