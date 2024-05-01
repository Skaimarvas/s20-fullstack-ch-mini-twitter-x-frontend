package com.example.minitwitterspring.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;


public record TweetUserDto(long id, String userName,String fullName, String email,List<TweetDto> tweets, List<TweetDto> likedTweets,List<TweetDto> retweetedTweets) {
}
