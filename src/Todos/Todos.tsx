import React, {Component} from 'react';
import {TodoObj} from '../App'
import TodoItem from '../TodoItem/TodoItem'

export interface ITodos {
    todos: TodoObj[]
    markComplete: (index: number) => void
    delTodo: (index: number) => void
}

class Todos extends Component <ITodos> {

    render() {
        const {todos, markComplete, delTodo} = this.props;
        return todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo}/>
        ))
    }
}

export default Todos


// export interface ITodos {
//     id: number,
//     text: string,
//     // date: string,
//     // time: string,
//     delTodoFromState: (id: number) => void
// }
//
//
// export class Todos extends React.Component <any, ITodos> {
//
//     render() {
//
//         const {id, text, date, time, delTodoFromState} = this.props;
//         return (
//             <div className={"card"} key={id}>
//                 <p>{text}</p>
//                 {/*<p>{date}</p>*/}
//                 {/*<p>{time}</p>*/}
//                 <button className={"btn btn-primary"} onClick={() => delTodoFromState(id)}>Del</button>
//             </div>
//         )
//     }
// }