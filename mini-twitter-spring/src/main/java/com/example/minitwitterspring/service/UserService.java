package com.example.minitwitterspring.service;

import com.example.minitwitterspring.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
   List<User> findAll();
   User save(User user);
   User findById(long id);

   User findByEmail(String email);

   User remove(long id);
}
