package com.example.minitwitterspring.service;

import com.example.minitwitterspring.entity.Tweet;
import com.example.minitwitterspring.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ITweetService implements TweetService{

    private final TweetRepository tweetRepository;

    @Autowired
    public ITweetService(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    @Override
    public List<Tweet> findAll() {
        return tweetRepository.findAll();
    }

    @Override
    public Tweet save(Tweet tweet) {
        return tweetRepository.save(tweet);
    }

    @Override
    public Tweet findById(long id) {
        Optional<Tweet> foundTweet = tweetRepository.findById(id);
        if(foundTweet.isPresent()){
            return foundTweet.get();
        }
        return null;
    }

    @Override
    public Tweet remove(long id) {
        Tweet tweet = findById(id);
        if(tweet != null){
            tweetRepository.delete(tweet);
            return tweet;
        }
        return null;
    }
}
