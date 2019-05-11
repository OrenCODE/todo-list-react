import React from 'react';

export interface ITodo {
    id: number,
    text: string,
    // date: string,
    // time: string,
    delTodoFromState: (id: number) => void
}


export class Todo extends React.Component <any, ITodo> {

    render() {

        const {id, text, date, time, delTodoFromState} = this.props;
        return (
            <div className={"card"} key={id}>
                <p>{text}</p>
                {/*<p>{date}</p>*/}
                {/*<p>{time}</p>*/}
                <button className={"btn btn-primary"} onClick={() => delTodoFromState(id)}>Del</button>
            </div>
        )
    }
}