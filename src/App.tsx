import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import axios from 'axios'

import AddTodo from './Components/AddTodo/AddTodo';
import Todos from './Components/Todos/Todos'
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
            todos: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res =>
                this.setState({todos: res.data})
            );
    }

    //TODO ADD TO STATE
    addTodo = (newTodo: TodoObj) => {

        this.setState({
            todos: this.state.todos.concat(newTodo)
        })

        // let title = newTodo.title;
        // let id = newTodo.id;
        //
        // axios.post('https://jsonplaceholder.typicode.com/todos', {
        //     id,
        //     title,
        //     completed: false
        // })
        //
        //     .then(res =>
        //         this.setState({todos: this.state.todos.concat(res.data)})
        //     )
    };

    //TODO DELETE FROM STATE
    delTodo = (id: number) => {
        const {todos} = this.state;

        let todosArray = todos.filter(todo => {
            return todo.id !== id;
        });

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({
                todos: todosArray
            }))

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