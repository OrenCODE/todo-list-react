import React, {Component} from 'react';
import {TodoObj} from '../../App'

export interface ITodoItem {
    todo: TodoObj,
    markComplete: (index: number) => void,
    delTodo: (index: number) => void
}

class TodoItem extends Component <ITodoItem> {

    render() {
        const {todo, markComplete, delTodo} = this.props;

        return (
            <div key={todo.id} className={"list-group-item"}>
                <input className={"todo-check"} type={"checkbox"} onChange={() => markComplete(todo.id)}/>
                {todo.completed ?
                    <div className={"todo-completed"}>{todo.title}</div>
                    :
                    <div className={"todo-new"}>{todo.title}</div>
                }
                <button className={"btn-sm btn-danger del-todo"} onClick={() => delTodo(todo.id)}>X</button>
            </div>
        )
    }
}

export default TodoItem