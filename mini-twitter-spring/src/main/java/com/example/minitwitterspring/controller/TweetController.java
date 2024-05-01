package com.example.minitwitterspring.controller;


import com.example.minitwitterspring.dto.TweetDto;
import com.example.minitwitterspring.entity.Tweet;
import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.service.TweetService;
import com.example.minitwitterspring.service.UserService;
import com.example.minitwitterspring.utils.TweetDtoConverter;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Notlar:
 * Ctrl + Alt + O(letter) : remove unuse packages
 * Ctrl + Alt + L: reformat code
 * i)Tweet'i güncellediğimde otomatik user'ın tweets'lerinden de güncelliyor. Bu tweet'in kullanıcısından güncellemeye gerek yokmuş.
 */


@RestController
@RequestMapping("/v1/api/kiwitter")
@CrossOrigin("*")
public class TweetController {

    private final TweetService tweetService;
    private final UserService userService;

    @Autowired
    public TweetController(TweetService tweetService, UserService userService) {
        this.tweetService = tweetService;
        this.userService = userService;
    }

    @GetMapping("/tweet")
    public List<TweetDto> listAll() {
        return tweetService.findAll();
    }

    @GetMapping("tweet/{id}")
    public TweetDto findTweet(@PathVariable long id) {
        Tweet foundTweet = tweetService.findById(id);
        if (foundTweet != null) {
            return TweetDtoConverter.getInstance().toDto(foundTweet);
        }
        return null;
    }

    @PostMapping("/{userId}/tweet")
    @Transactional
    public TweetDto postTweet(@PathVariable long userId, @RequestBody Tweet tweet) {
        User user = userService.findById(userId);
        if (user != null) {
            user.addTweets(tweet);
            tweet.setUser(user);
            return tweetService.save(tweet);
        }
        return null;
    }

    @PutMapping("/update/{userId}/{tweetId}")
    @Transactional
    public TweetDto updatedTweet(@RequestBody Tweet tweet, @PathVariable long tweetId, @PathVariable long userId) {
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if (foundTweet != null && foundTweet.getUser().getId() == foundUser.getId()) {
            foundTweet.setContent(tweet.getContent());
            tweetService.save(foundTweet);
            return TweetDtoConverter.getInstance().toDto(foundTweet);
        }
        return null;
    }

    @PostMapping("/tweet/like/{userId}/{tweetId}")
    @Transactional
    public List<TweetDto> likeTweet(@PathVariable long tweetId, @PathVariable long userId) {
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if (foundTweet != null && foundUser != null && !foundUser.getLikedByUser().contains(foundTweet)) {
            foundTweet.setLikeTweet(foundTweet.getLikeTweet() + 1);
            foundUser.addLikedTweets(foundTweet);
            foundTweet.addLikedByUser(foundUser);
            return tweetService.findAll();
        }
        return tweetService.findAll();
    }

    @DeleteMapping("/tweet/like/{userId}/{tweetId}")
    @Transactional
    public List<TweetDto> unlikeTweet(@PathVariable long tweetId, @PathVariable long userId) {
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if (foundTweet != null && foundTweet.getLikeTweet() > 0 && foundUser.getLikedByUser().contains(foundTweet) ) {
            foundTweet.setLikeTweet(foundTweet.getLikeTweet() - 1);
            foundTweet.removeLikedByUser(foundUser);
            foundUser.removeLikedTweets(foundTweet);
            return tweetService.findAll();
        }
        return tweetService.findAll();
    }

    @PostMapping("/tweet/retweet/{userId}/{tweetId}")
    @Transactional
    public List<TweetDto> retweetTweet(@PathVariable long tweetId, @PathVariable long userId) {
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if (foundTweet != null && foundUser != null && !foundUser.getRetweetedByUsers().contains(foundTweet)) {
            foundTweet.setRetweet(foundTweet.getRetweet() + 1);
            foundUser.addRetweets(foundTweet);
            foundTweet.addRetweetByUser(foundUser);
            return tweetService.findAll();
        }
        return tweetService.findAll();
    }

    @DeleteMapping("/tweet/retweet/{userId}/{tweetId}")
    @Transactional
    public List<TweetDto> unretweetTweet(@PathVariable long tweetId, @PathVariable long userId) {
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if (foundTweet != null && foundTweet.getRetweet() > 0) {
            foundTweet.setRetweet(foundTweet.getRetweet() - 1);
            foundTweet.removeRetweetByUser(foundUser);
            foundUser.removeRetweets(foundTweet);
            return tweetService.findAll();
        }
        return tweetService.findAll();
    }


}
