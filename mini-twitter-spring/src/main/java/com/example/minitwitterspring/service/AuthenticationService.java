package com.example.minitwitterspring.service;


import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.repository.UserRepository;
import com.example.minitwitterspring.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User register (String fullName, String userName, String email, String password){
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User();
        user.setFullName(fullName);
        user.setUserName(userName);
        user.setEmail(email);
        user.setPassword(encodedPassword);

        return userRepository.save(user);
    }

    public String login(String username, String password){
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return generateJwtToken(username,password);
        } catch (BadCredentialsException ex){
            throw new RuntimeException("Invalid username or password");
        }
    }

    private String generateJwtToken(String username,String password){
        return JwtTokenUtil.generateToken(username, password);
    }
}
