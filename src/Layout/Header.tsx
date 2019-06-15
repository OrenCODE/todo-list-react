import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className={"headerStyle"}>
            <h3>Todo List</h3>
            <Link className={"linkStyle"} to="/">Home</Link> | <Link className={"linkStyle"} to="/about">About</Link>
        </header>
    )
}

export default Header