package com.example.demo.Entities;

import javax.persistence.*;

@Entity
@Table(name = "todos")
public class Todo {
    private String todoname;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public Todo() {}

    public Todo(String todoname) {
    	this.todoname = todoname;
    }

    public String getTodoname() {
        return todoname;
    }

    public void setTodoname(String todoname) {
        this.todoname = todoname;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
