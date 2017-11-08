import React, { Component } from 'react';

class Todos extends Component {
	constructor(props){
		console.log(props)
		super(props)
	}


	render(){
		//i is the position in the todos array
		const li = this.props.todos.map((item, i)=>{
			let el;

			if(this.props.editPosition === i){
				el = <input value={item} onChange={this.props.edit}/>
			} else{
				const className = this.props.completed.indexOf(item)=== -1 ? "uncompleted" : "completed"
				el = <li onClick={this.props.toggleCompleted} className={className}>{item}</li>
			}

      		return <div key={i}>
      				{el}
      				<button value={item} onClick={this.props.remove}>delete</button>
                	<button onClick={()=>this.props.editClicked(i)} >edit</button>
            </div>
	    })
		return(	
			<ul>
	         {li}
	       </ul>
	       )
		}
}

export default Todos;