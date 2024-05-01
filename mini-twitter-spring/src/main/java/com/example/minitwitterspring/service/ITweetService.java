package com.example.minitwitterspring.service;

import com.example.minitwitterspring.dto.TweetDto;
import com.example.minitwitterspring.dto.TweetUserDto;
import com.example.minitwitterspring.entity.Tweet;
import com.example.minitwitterspring.repository.TweetRepository;
import com.example.minitwitterspring.utils.TweetDtoConverter;
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
    public List<TweetDto> findAll() {
        return tweetRepository.findAll().stream().
                map((tweet) ->
                TweetDtoConverter.getInstance().toDto(tweet)).toList();
    }

    @Override
    public TweetDto save(Tweet tweet) {
        Tweet savedTweet = tweetRepository.save(tweet);
        return TweetDtoConverter.getInstance().toDto(savedTweet);
    }

    @Override
    public Tweet findById(long id) {
        Optional<Tweet> foundTweet = tweetRepository.findById(id);
        return foundTweet.orElse(null);
    }

    @Override
    public TweetDto remove(long id) {
        Optional<Tweet> foundTweet = tweetRepository.findById(id);
        if (foundTweet.isPresent()) {
            tweetRepository.delete(foundTweet.get());
            return TweetDtoConverter.getInstance().toDto(foundTweet.get());


        }
        return null;
    }
}
