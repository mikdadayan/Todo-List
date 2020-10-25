import React, { Component } from "react";

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.state = {
            isEditing: false,
            task: this.props.task,
            isDone: false
        }
    }

    handleClick(){
        this.props.remove(this.props.id)
    }

    handleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.update(this.state.task, this.props.id);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    toggleDone(evt){
        if(this.state.isDone){
            evt.target.style.color = '';
            evt.target.style.textDecorationLine  = 'none';
        } else {
            evt.target.style.color = 'grey';
            evt.target.style.textDecorationLine  = 'line-through';
        }
        this.setState({
            isDone: !this.state.isDone
        })
    }

    componentWillUpdate(){
        console.log("COMPONENT WILL UPDATE!")
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.task} name='task' onChange={this.handleChange} type='text'/>
                    <button>Save</button>
                </form>
            </div> 

        } else {
            result = <div>
            <button onClick={this.handleClick}>X</button>
            <button onClick={this.handleEdit}>Edit</button>
            <li onClick={this.toggleDone}>{this.props.task}</li>
        </div>
        }
        return result
    }
}

export default Todo;
