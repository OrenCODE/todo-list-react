import React from 'react';
import {AddTodo} from './AddTodo/AddTodo'
import {Todo} from './Todo/Todo'
import './App.css';


export type newTodoObj = Record<string, string>

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

    delTodoFromState = (id: number) => {
        console.log(id);
    };

    render() {

        const {currentTodos} = this.state;

        return (
            <div className="App">
                <header>Todo App</header>
                <AddTodo addTodoToState={this.addTodoToState}/>
                <div className={"todos"}>
                    {currentTodos.map((todoObj, i) => {
                            return (
                                <div key={i}>
                                    <Todo id={i} text={todoObj.text} date={todoObj.date} time={todoObj.time}
                                          delTodoFromState={this.delTodoFromState}/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}
