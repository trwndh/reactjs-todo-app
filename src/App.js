import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos : [
      {id: 1, content: 'buy some ram'},
      {id: 2, content: 'play pes'},
    ]
  }
  deleteTodo=(id)=>{
    // console.log(id);
    let todos = this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todos
    })
  }

  addTodo=(todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }

  render(){
    return (
      <div className="App">
        <h1 className="center blue-text">Todo List</h1>
          <div className="todo-app container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <hr/>
          <AddTodo addTodo={this.addTodo}></AddTodo>
        </div>
      </div>
    );
  }
  
}

export default App;
