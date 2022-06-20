package com.example.demo.Services;

import com.example.demo.Entities.Todo;
import com.example.demo.Repositories.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepo todoRepo;

    public List<Todo> showAll() {
        return todoRepo.findAll();
    }

    public void addTodo(Todo todo) {
        todoRepo.save(todo);
    }

    public void deleteTodo(long id) {
        todoRepo.deleteById(id);
    }
}
