package com.example.minitwitterspring.controller;

import com.example.minitwitterspring.dto.UserDto;
import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.exception.UserException;
import com.example.minitwitterspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/api/profile")
@CrossOrigin("*")
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
    public User login(@RequestBody UserDto userDto){

        User loginUser = userService.findByEmail(userDto.email());

        if(loginUser != null && loginUser.getPassword().equals(userDto.password())){
            return  loginUser;
        }

        throw new UserException("Email or Password is wrong", HttpStatus.BAD_REQUEST);

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
