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

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className='TodoList'>
            {todos.map(todo => (
                <li key={todo.id}>{todo.todoname} {todo.id}</li>
            ))}
         
        </div>
    )
}