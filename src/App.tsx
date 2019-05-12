import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"

import AddTodo from './AddTodo/AddTodo';
import Todos from './Todos/Todos'
import About from './Pages/About';
import Header from './Layout/Header'

import './App.css';

export type TodoObj = Record<string, any>

interface IAppState {
    todos: TodoObj[]
}

class App extends Component <any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {

            todos: [
                {id: 1, title: 'finish this app', completed: false},
                {id: 2, title: 'create storage', completed: false},
                {id: 3, title: 'connect storage to database', completed: false}
            ]
        }
    }

    //TODO ADD TO STATE
    addTodo = (newTodo: TodoObj) => {

        this.setState({
            todos: this.state.todos.concat(newTodo)
        })
    };

    //TODO TOGGLE COMPLETE
    markComplete = (id: number) => {
        const {todos} = this.state;

        this.setState({
            todos: todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    };

    //TODO DELETE FROM STATE
    delTodo = (id: number) => {
        const {todos} = this.state;

        let todosArray = todos.filter(todo => {
            return todo.id !== id;
        });

        this.setState({
            todos: todosArray
        });
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

        const {todos} = this.state;

        return (
            <Router>
                <div className="App">
                    <div className={"container"}>
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                    </div>
                </div>
                <Route path="/about" component={About}/>
            </Router>
        );
    }
}

export default App


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