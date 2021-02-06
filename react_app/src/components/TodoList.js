import React from 'react'
import './styles/todolist.css'

function TodoList() {
    return (
        <div id = "container">
            <h1>To Do List<i class="fa fa-plus"></i></h1>
            <input type="text" placeholder="Add New Todo"></input>
            <ul>
                <li><span><i class="fa fa-trash"></i></span> Go To Potions Class</li>
                <li><span><i class="fa fa-trash"></i></span> Buy New Robes</li>
                <li><span><i class="fa fa-trash"></i></span> Visit Hagrid</li>
            </ul>
        </div>
    )
}

export default TodoList
