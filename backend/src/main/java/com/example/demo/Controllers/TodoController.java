package com.example.demo.Controllers;

import com.example.demo.Entities.Todo;
import com.example.demo.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/showAll")
    public List<Todo> showAll() {
        return todoService.showAll();
    }

    @PostMapping("/addTodo")
    public void addTodo(@RequestBody Todo todo) {
        todoService.addTodo(todo);
    }

    @DeleteMapping("/deleteTodo/{id}")
    public void deleteTodo(@PathVariable long id) {
        todoService.deleteTodo(id);
    }

    @PostMapping("/updateTodo")
    public void updateTodo(@RequestBody Todo todo) {
        todoService.updateTodo(todo);
    }
}
