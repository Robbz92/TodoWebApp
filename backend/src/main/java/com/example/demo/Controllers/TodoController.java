package com.example.demo.Controllers;

import com.example.demo.Entities.Todo;
import com.example.demo.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/showAll")
    public List<Todo> showAll() {
        return todoService.showAll();
    }
}
