import React, {Component} from 'react';
import {TodoObj} from '../../App'
import TodoItem from '../TodoItem/TodoItem'

export interface ITodos {
    todos: TodoObj[]
    markComplete: (index: number) => void
    delTodo: (index: number) => void
}

class Todos extends Component <ITodos> {

    render() {
        const {todos, markComplete, delTodo} = this.props;
        return (
            <div className={"card todos-card"}>
                <ul className={"list-group list-group-flush"}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo}/>
                ))}
                </ul>
            </div>
        )
    }
}

export default Todos