package com.example.minitwitterspring.service;

import com.example.minitwitterspring.entity.Tweet;

import java.util.List;

public interface TweetService {
    List<Tweet> findAll();
    Tweet save(Tweet tweet);

    Tweet findById(long id);

    Tweet remove(long id);
}
