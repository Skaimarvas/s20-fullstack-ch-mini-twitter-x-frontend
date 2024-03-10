package com.example.minitwitterspring.repository;

import com.example.minitwitterspring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Long, User> {
}
