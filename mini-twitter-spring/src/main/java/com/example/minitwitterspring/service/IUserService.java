package com.example.minitwitterspring.service;

import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IUserService implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public IUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findById(long id) {
        Optional<User> foundUser = userRepository.findById(id);
        if(foundUser.isPresent()){
            return foundUser.get();
        }
        return null;
    }

    @Override
    public User remove(long id) {
        User user = findById(id);
        if(user != null){
            userRepository.delete(user);
            return user;
        }
        return null;
    }
}
