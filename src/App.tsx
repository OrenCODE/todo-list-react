import React, {Component} from 'react';
// import {AddTodo} from './AddTodo/AddTodo'

import {Todos} from './Todos/Todos'

import './App.css';


// export type newTodoObj = Record<string, any>
export type TodoObj = Record<string, any>

interface IAppState {
    // currentTodos: newTodoObj[],
    todos: TodoObj[]
}

export default class App extends Component <any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            // currentTodos: [],
            todos: [
                {id: 1, title: 'finish this app', completed: false},
                {id: 2, title: 'create storage', completed: false},
                {id: 3, title: 'connect storage to database', completed: false}
            ]
        }
    }

    // addTodoToState = (newTodo: newTodoObj) => {
    //
    //     this.setState({
    //         currentTodos: this.state.currentTodos.concat(newTodo)
    //     })
    // };


    markComplete = () => {
      console.log('check')
    };

    delTodo = () => {
        console.log('check2')
    };


    // delTodoFromState = (id: number) => {
    //     const {currentTodos} = this.state;
    //
    //     let todosArray = currentTodos.filter(todo => {
    //         return todo.id !== id
    //     });
    //
    //     this.setState({
    //         currentTodos: todosArray
    //     })
    // };

    render() {

        // const {currentTodos} = this.state;

        return (
            <div className="App">
                <div className={"container"}>
                    <h1>Todo App</h1>
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </div>
            </div>
        );
    }
}

// (
// <AddTodo addTodoToState={this.addTodoToState}/>
// <div className={"todos"}>
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