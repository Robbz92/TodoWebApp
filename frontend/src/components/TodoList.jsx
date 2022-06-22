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

    const postTodo = () => {
        const todoItem = document.getElementById("todoItem").value;

        if (todoItem.length > 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todoname: todoItem })
            };

            fetch('http://localhost:8080/todo/addTodo', requestOptions)
                .then(response => response.json())
                .then(window.location.reload(true));
        }
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

    const showEditSettings = (todoId) => {
        const input = document.getElementById(todoId+"input");
        const saveBtn = document.getElementById(todoId+"btn");

        if (input.style.display === 'none') {
            input.style.display = 'block';
            saveBtn.style.display = 'block';
        }
        else {
            input.style.display = 'none';
            saveBtn.style.display = 'none';
        }
    }

    const editTodo = (todoId) => {
        const todoItem = document.getElementById(todoId+"input").value
        console.log(todoItem)
        
        if (todoItem.length > 0) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todoname: todoItem, id: todoId })
            };
            
            fetch('http://localhost:8080/todo/updateTodo', requestOptions)
                .then(response => response.json())
                .then(window.location.reload(true));
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='divContainer'>
                <input id="todoItem" type="text" placeholder="Add Todo" size="50"/>
                <button id="additem" onClick={() => postTodo()}>Create</button>
            </div>

            <div className='TodoList'>
                {todos.map(todo => (
                    <li id = "todoLi" key={todo.id}>
                        <p id="todoName">{todo.todoname}
                            <button className='todoBtn' onClick={() => deleteTodo(todo.id)}>x</button>
                            <button className='todoBtn' id ="editTodoForm" onClick={() => showEditSettings(todo.id)}>=</button>
                        </p>
                        
                        <input className="editTodo" id={todo.id+"input"} type="text" placeholder='Edit todo'/>
                        <button className='saveTodo' id={todo.id +"btn"} onClick={() => editTodo(todo.id)}>Save</button>
                    </li>
                ))}
            </div>
        </>
    )
}