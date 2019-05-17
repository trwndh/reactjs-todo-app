import React from 'react';

const Todos=({todos, deleteTodo}) =>{

    const todoList = todos.length?(
        todos.map(todo=>{
            return (
                <div  onClick={()=>{deleteTodo(todo.id)}} DclassName="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ):(
        <p className="center"> Nothing to do </p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;