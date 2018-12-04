import React, { Component } from 'react'
import 
import TodoList from './TodoList'


class App extends Component {
  render() {
    return (
      <TodoList
        todos={[
          { text: 'First to do from App' },
          { text: 'Second to do from App' }
        ]}
      />

    )
  }
}

export default App;
