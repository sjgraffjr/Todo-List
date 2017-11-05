import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos.js';

class App extends Component {
  constructor(props){

    super(props)

    this.state = {
      todos: [],
      completed: [],
      newTodo: ''
    }

  }
  toggleCompleted(e){
    const i = this.state.completed.indexOf(e.target.textContent);
    if(i === -1){
      this.state.completed.push(e.target.textContent)
    }else{
      this.state.completed.splice(i, 1)
    }
    this.setState(this.state)
  }
  newTodoChanged(e){
    this.setState({newTodo: e.target.value})
  }

  submit(e){
    e.preventDefault()
    const newTodo = this.state.newTodo 
    this.setState({todos:this.state.todos.concat(newTodo),
                  newTodo: ''})
  }

  render() {
    
    return (
    <div>
     <h1> Todo List</h1>
       <Todos todos={this.state.todos} 
              completed={this.state.completed}
              toggleCompleted={this.toggleCompleted.bind(this)}/>
        <form onSubmit={this.submit.bind(this)}>
          <input placeholder="New Todo" onChange={this.newTodoChanged.bind(this)} value={this.state.newTodo}/>
          </form>
      </div>
    );
  }
}

export default App;
