package com.example.minitwitterspring.service;

import com.example.minitwitterspring.dto.TweetDto;
import com.example.minitwitterspring.entity.Tweet;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface TweetService {
    List<TweetDto> findAll();
    TweetDto save(Tweet tweet);

    Tweet findById(long id);

    TweetDto remove(long id);
}
