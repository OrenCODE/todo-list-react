import React, {Component} from 'react';

export interface IAddTodoProps {
    addTodo: (TodoObj: Record<string, any>) => void
}

class AddTodo extends Component <IAddTodoProps> {

    state = {
        title: ''
    };

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event: any) => {
        const {addTodo} = this.props;

        event.preventDefault();
        const todoText = event.target.elements.title.value;
        // const todoDate = event.target.elements.date.value;
        // const todoTime = event.target.elements.time.value;

        if (!todoText) {
            return alert('please enter a todo...')
        }

        const newTodo = {
            id: Math.random(),
            title: todoText,
            completed: false
            // date: todoDate,
            // time: todoTime
        };

        addTodo(newTodo);

        this.setState({
            title: '',
        })
    };

    render() {
        return (
            <div>
                <form className={"form-inline"} onSubmit={this.handleSubmit}>
                    <label htmlFor={"title"}/>
                    <input name={"title"} type={"text"} className={"form-control col sm-2"} placeholder={"Add new Todo here..."}
                           onChange={this.handleChange} value={this.state.title}/>
                    <button className={"btn btn-outline-primary my-2 my-sm-0"} type={"submit"}>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo