package com.example.minitwitterspring.controller;

import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/profile")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        User loginUser = userService.findById(user.getId());

        if(loginUser != null){
            return  loginUser;
        }

        return null;

    }

    @PostMapping("/logout")
    public User logout(@RequestBody User user){
        User loginUser = userService.findById(user.getId());

        if(loginUser != null){
            return  loginUser;
        }

        return null;

    }
}
