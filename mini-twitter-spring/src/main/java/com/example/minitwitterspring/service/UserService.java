package com.example.minitwitterspring.service;

import com.example.minitwitterspring.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Don't forget to add @Service annotation!
 */

@Service
public interface UserService  {
   List<User> findAll();
   User save(User user);
   User findById(long id);

   User findByEmail(String email);

   User remove(long id);

   User loadUserByUsername(String username);
}
