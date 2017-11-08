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
  
  deleteItem(e){
    const state = this.state;
    console.log(this.state)
    const index = state.todos.indexOf(e.target.value)
    state.todos.splice(index, 1);
    this.setState(state);
  }

  editItem(e){
    const state= this.state;
    // find the index of the previous value in the todos array
    const i = this.state.todos.indexOf(e.target.defaultValue)
    const c = this.state.completed.indexOf(e.target.defaultValue)
    // remove the item from the array
    this.state.todos.splice(i, 1, e.target.value)
    if (c != -1){
      this.state.completed.splice(i, 1, e.target.value)  
    }
    // to get react to know about this
    this.setState(state)
  }

  editClicked(i){
    this.setState({editPosition:i})
  }

  render() {
    return (
    <div>
      <h1> Todo List</h1>
        <Todos 
          todos={this.state.todos} 
          completed={this.state.completed} 
          toggleCompleted={this.toggleCompleted.bind(this)} 
          remove={this.deleteItem.bind(this)}
          edit={this.editItem.bind(this)}
          editPosition={this.state.editPosition}
          editClicked={this.editClicked.bind(this)}
          />
          
          <form onSubmit={this.submit.bind(this)}>
            <input 
            placeholder="New Todo" 
            onChange={this.newTodoChanged.bind(this)} 
            value={this.state.newTodo}/>
          </form>
    </div>
    );
  }
}

export default App;
