import React, {Component} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import {v4 as uuid} from 'uuid';

import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }


    addTodo(task){
        const newTask = {...task, id: uuid()}
        this.setState(st => ({
            tasks: [...st.tasks, newTask]
        }))
    }

    remove(id){
        const newTasks = this.state.tasks.filter(t => {
            return t.id !== id
        }) 
        this.setState({tasks: newTasks})
    }

    update(updatedTask, id){
        const updatedTodos = this.state.tasks.map((t) => {
            if(t.id === id){
                return { ...t, task: updatedTask }
            }
            return t;
        });
        this.setState({tasks: updatedTodos})
    }

    componentWillUpdate(prevState, prevProps){
        console.log('IN TODO LIST');
        console.log(prevState)
        console.log(prevProps)
    }

    render(){
        const tasks = this.state.tasks.map(t => {
            return <Todo task={t.task} key={t.id} id={t.id} remove={this.remove} update={this.update}/>
        })
        return (
            <div className='TodoList'>  
                <h1>
                    Todo List <span> A Simple Todo List App.</span>
                </h1>      
                {tasks}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>

        )
    }
}

export default TodoList
