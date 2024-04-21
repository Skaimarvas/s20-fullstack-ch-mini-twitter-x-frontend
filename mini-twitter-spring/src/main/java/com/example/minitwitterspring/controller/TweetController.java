package com.example.minitwitterspring.controller;


import com.example.minitwitterspring.entity.Tweet;
import com.example.minitwitterspring.entity.User;
import com.example.minitwitterspring.service.TweetService;
import com.example.minitwitterspring.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


/**Notlar:
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
    public List<Tweet> listAll(){
        return tweetService.findAll();
    }

    @GetMapping("tweet/{id}")
    public Tweet findTweet(@PathVariable long id){
        return tweetService.findById(id);
    }

    @PostMapping("/{userId}/tweet")
    @Transactional
    public Tweet postTweet(@PathVariable long userId,@RequestBody Tweet tweet){
        User user = userService.findById(userId);
        if(user != null){
            user.addTweets(tweet);
            tweet.setUser(user);
            return tweetService.save(tweet);
        }
        return null;
    }

    @PutMapping("/update/{userId}/{tweetId}")
    @Transactional
    public Tweet updatedTweet(@RequestBody Tweet tweet, @PathVariable long tweetId, @PathVariable long userId ){
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if(foundTweet != null && foundTweet.getUser().getId() == foundUser.getId()){
            foundTweet.setContent(tweet.getContent());
            return tweetService.save(foundTweet);
        }

        return null;
    }

    @DeleteMapping("/delete/{userId}/{tweetId}")
    @Transactional
    public Tweet removedTweet(@PathVariable long tweetId, @PathVariable long userId){
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if(foundTweet != null && foundTweet.getUser().getId() == foundUser.getId()){
            return tweetService.remove(tweetId);
        }
        return null;
    }

    @PostMapping("/tweet/like/{tweetId}")
    @Transactional
    public List<Tweet> likedTweet(@PathVariable long tweetId){
        Tweet foundTweet = tweetService.findById(tweetId);
        if(foundTweet != null  ){
            foundTweet.setLikeTweet(foundTweet.getLikeTweet() + 1);
            return tweetService.findAll();
        }
        return tweetService.findAll();
    }

    @PostMapping("/unlike/{userId}/{tweetId}")
    @Transactional
    public Tweet unLikedTweet(@PathVariable long userId, @PathVariable long tweetId){
        Tweet foundTweet = tweetService.findById(tweetId);
        User foundUser = userService.findById(userId);
        if(foundTweet != null && foundTweet.getLikeTweet() > 0 && foundUser != null ){
            foundTweet.setLikeTweet(foundTweet.getLikeTweet() - 1);
            foundUser.removeTweets(foundTweet);
            return foundTweet;
        }
        return foundTweet;
    }


}
