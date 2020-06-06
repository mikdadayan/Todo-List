import React, { Component } from "react";

class NewTodoFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task: ''
        }) 
    }

    render(){
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New Task</label>
                <input type='text' value={this.state.task} name='task' onChange={this.handleChange}/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoFrom;