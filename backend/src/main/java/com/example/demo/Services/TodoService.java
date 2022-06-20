package com.example.demo.Services;

import com.example.demo.Repositories.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class TodoService {
    @Autowired
    private TodoRepo todoRepo;
}
