import React from 'react'


class TodoList extends React.Component{


    render(){
        return <div>
            {this.props.todos.map(todo=>
                <div>{todo.text}</div>
                )}
        </div>

        
    }
}

export default TodoList