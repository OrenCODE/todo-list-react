import React, {Component} from 'react';
import {TodoObj} from '../App'

export interface ITodoItem {
    todo: TodoObj,
    markComplete: () => void,
    delTodo: () => void
}

export default class TodoItem extends Component <ITodoItem> {

    render() {
        const {todo , markComplete , delTodo} = this.props;

        return (
            <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
        )
    }
}