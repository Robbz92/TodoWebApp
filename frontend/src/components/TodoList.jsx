import React, { useEffect, useState } from 'react'
import '../index.css';

export function TodoList() {
    const [todos, setTodos] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:8080/todo/showAll')
            .then((response) => response.json())
            .then((data => {
                console.log("Todo items: ", data);
                setTodos(data);
            }));
    }

    const postTodo = (todoItem) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ todoname: todoItem })
        };

        fetch('http://localhost:8080/todo/addTodo', requestOptions)
            .then(response => response.json())
            .then(window.location.reload(true));
            
    }

    const deleteTodo = (todoId) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch('http://localhost:8080/todo/deleteTodo/' + todoId, requestOptions)
            .then(response => response.json())
            .then(window.location.reload(true));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className='divContainer'>
                <input id="todoItem" type="text" placeholder="Add Todo" size="50"/>
                <button onClick={() => postTodo(document.getElementById("todoItem").value)}>Add</button>
            </div>

            <div className='TodoList'>
                {todos.map(todo => (
                        <li key={todo.id}>{todo.todoname}
                            <button id='todoBtn' onClick={() => deleteTodo(todo.id)}>x</button>
                        </li>
                ))}
            </div>
        </>
    )
}