import React, { Component } from 'react';

class Todos extends Component {
	constructor(props){
		console.log(props)
		super(props)
	}

	render(){

		const li = this.props.todos.map((item, i)=>{
      		const className = this.props.completed.indexOf(item)=== -1 ? "uncompleted" : "completed"	
      		return <li key={i}
      				   onClick={this.props.toggleCompleted}
      				   className={className}
      				   >{item}</li>

	    })
		return(	
			<ul>
	         {li}
	       </ul>
	       )
		}
}

export default Todos;