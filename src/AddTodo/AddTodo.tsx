import React from 'react';

export interface IAddTodoProps {
    addTodoToState: (newTodoObj: Record<string, any>) => void
}

export class AddTodo extends React.Component <IAddTodoProps> {

    state = {
        text: '',
        // date: '',
        // time: ''
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event: any) => {

        const {addTodoToState} = this.props;

        event.preventDefault();
        const todoText = event.target.elements.text.value;
        // const todoDate = event.target.elements.date.value;
        // const todoTime = event.target.elements.time.value;

        const newTodo = {
            id: Math.random(),
            text: todoText,
            // date: todoDate,
            // time: todoTime
        };

        addTodoToState(newTodo);

        this.setState({
            text: '',
            // date: '',
            // time: ''
        })
    };

    render() {
        return (
            <div>
                <form className={"searchForm"} onSubmit={this.handleSubmit}>
                    <label htmlFor={"text"}/>
                    <input id={"text"} type={"text"} className={"form-control"} onChange={this.handleChange}
                           value={this.state.text}/>
                    {/*<label htmlFor={"date"}/>*/}
                    {/*<input id={"date"} type={"date"} className={"form-control"} onChange={this.handleChange}*/}
                           {/*value={this.state.date}/>*/}
                    {/*<label htmlFor={"todoTime"}/>*/}
                    {/*<input id={"time"} type={"time"} className={"form-control"} onChange={this.handleChange}*/}
                           {/*value={this.state.time}/>*/}
                    <button className={"btn btn-primary"} type={"submit"}>Add Todo</button>
                </form>
            </div>
        )
    }
}