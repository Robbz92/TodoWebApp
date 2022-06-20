package com.example.demo.Repositories;

import com.example.demo.Entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<Todo, Long> {

}
