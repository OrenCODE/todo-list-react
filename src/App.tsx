import React from 'react';
import {AddTodo} from './AddTodo/AddTodo'
import './App.css';


type newTodoObj = Record<string, string>

interface IAppState {
    currentTodos: newTodoObj[]
}

export default class App extends React.Component <any, IAppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentTodos: []
        }
    }

    addTodoToState = (newTodo: newTodoObj) => {
        console.log(newTodo);
        this.setState({
            currentTodos: this.state.currentTodos.concat(newTodo)
        })
    };

    render() {
        return (
            <div className="App">
                <AddTodo addTodoToState={this.addTodoToState}/>
            </div>
        );
    }
}
