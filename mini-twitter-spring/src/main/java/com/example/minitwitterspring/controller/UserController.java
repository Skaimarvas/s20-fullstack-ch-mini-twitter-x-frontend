package com.example.minitwitterspring.controller;

import com.example.minitwitterspring.dto.TweetUserDto;
import com.example.minitwitterspring.dto.UserDto;
import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.exception.UserException;
import com.example.minitwitterspring.service.AuthenticationService;
import com.example.minitwitterspring.service.UserService;
import com.example.minitwitterspring.utils.UserDtoConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;

@RestController
@RequestMapping("/v1/api/profile")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;
    private AuthenticationService authenticationService;

    @Autowired
    public UserController(UserService userService, AuthenticationService authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public TweetUserDto register(@RequestBody User user) {
        User savedUser = authenticationService.register(user.getFullName(), user.getUsername(), user.getEmail(), user.getPassword());
        return UserDtoConverter.getInstance().toTweetUserDto(savedUser);
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDto userDto) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        User loginUser = userService.loadUserByUsername(userDto.username());

        if (loginUser != null && passwordEncoder.matches(userDto.password(), loginUser.getPassword())) {
            return authenticationService.login(userDto.username(),userDto.password());
        }
        throw new UserException("Email or Password is wrong", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/logout")
    public User logout(@RequestBody User user) {
        User loginUser = userService.findById(user.getId());

        if (loginUser != null) {
            return loginUser;
        }

        return null;

    }
}
