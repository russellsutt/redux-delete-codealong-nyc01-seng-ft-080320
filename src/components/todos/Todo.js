import React from 'react'

const Todo = props => {
    
    return (
        <div>
            <li>{props.todo.text}</li>
            <button onClick={() => { props.deleteTodo(props.todo)}}>Delete</button>
        </div>
    )
}

export default Todo;
