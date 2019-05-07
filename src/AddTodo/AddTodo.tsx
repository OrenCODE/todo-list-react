import React from 'react';

export interface ITodoProps {
    addTodoToState: (newTodoObj: Record<string, string>) => void
}

export class AddTodo extends React.Component <ITodoProps> {

    onSubmit = (event: any) => {

        const {addTodoToState} = this.props;

        event.preventDefault();
        const todoText = event.target.elements.todoText.value;
        const todoDate = event.target.elements.todoDate.value;
        const todoTime = event.target.elements.todoTime.value;

        const newTodo = {
            text: todoText,
            date: todoDate,
            time: todoTime
        };

        addTodoToState(newTodo);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor={"todoText"}/>
                    <input type={"text"} name={"todoText"}/>
                    <label htmlFor={"todoDate"}/>
                    <input type={"date"} name={"todoDate"}/>
                    <label htmlFor={"todoTime"}/>
                    <input type={"time"} name={"todoTime"}/>
                    <button type={"submit"}>Add Todo</button>
                </form>
            </div>
        )
    }
}