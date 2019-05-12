import React, {Component} from 'react';
import {TodoObj} from '../App'

export interface ITodoItem {
    todo: TodoObj,
    markComplete: (index: number) => void,
    delTodo: (index: number) => void
}

class TodoItem extends Component <ITodoItem> {

    render() {
        const {todo, markComplete, delTodo} = this.props;

        return (
            <div key={todo.id}>
                {todo.completed ?
                    <div>
                        <input type={"checkbox"} onChange={() => markComplete(todo.id)}/>
                        <p className={"todo-completed"}>{todo.title}</p>
                    </div>
                    :
                    <div>
                        <input type={"checkbox"} onChange={() => markComplete(todo.id)}/>
                        <p>{todo.title}</p>
                    </div>
                    }

                <button className={"btn-sm btn-danger"} onClick={() => delTodo(todo.id)}>Del</button>
            </div>
        )
    }
}

export default TodoItem