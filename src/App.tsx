import React from 'react';
import {AddTodo} from './AddTodo/AddTodo'
import {Todo} from './Todo/Todo'
import './App.css';


export type newTodoObj = Record<string, any>

interface IAppState {
    currentTodos: newTodoObj[],
    todos: newTodoObj[]
}

export default class App extends React.Component <any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentTodos: [],
            todos: [
                {name: 'oren', age: '28', belt: 'brown'},
                {name: 'morag', age: '33', belt: 'green'},
                {name: 'nitai', age: '34', belt: 'blue'}
            ]
        }
    }

    addTodoToState = (newTodo: newTodoObj) => {

        this.setState({
            currentTodos: this.state.currentTodos.concat(newTodo)
        })
    };

    delTodoFromState = (id: number) => {
        const {currentTodos} = this.state;

        let todosArray = currentTodos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            currentTodos: todosArray
        })
    };

    render() {

        const {currentTodos} = this.state;

        return (
            <div className="App">
                <div className={"container"}>
                    <h1>Todo App</h1>
                    <AddTodo addTodoToState={this.addTodoToState}/>

                </div>
            </div>
        );
    }
}

// (<div className={"todos"}>
//     {currentTodos.map((todoObj, i) => {
//             return (
//                 <div key={i}>
//                     <Todo id={todoObj.id} text={todoObj.text} date={todoObj.date} time={todoObj.time}
//                           delTodoFromState={this.delTodoFromState}/>
//                 </div>
//             )
//         }
//     )}
// </div>)