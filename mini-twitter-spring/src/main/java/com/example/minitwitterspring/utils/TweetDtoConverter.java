package com.example.minitwitterspring.utils;

import com.example.minitwitterspring.dto.TweetDto;
import com.example.minitwitterspring.entity.Tweet;

import java.util.List;

public class TweetDtoConverter {

    private static TweetDtoConverter instance;
    private TweetDtoConverter(){};
    public static TweetDtoConverter getInstance(){
        if(instance == null){
            instance = new TweetDtoConverter();
        }
        return instance;
    }
    public TweetDto toDto(Tweet tweet){
        if(tweet != null){
            return new TweetDto(
                    tweet.getId(),
                    tweet.getContent(),
                    tweet.getLikeTweet(),
                    tweet.getRetweet(),
                    UserDtoConverter.getInstance().toSimpleUserDtoList(tweet.getLikedByUsers()),
                    UserDtoConverter.getInstance().toSimpleUserDtoList(tweet.getRetweetedByUsers()),
                    tweet.getCreatedAt());
        }
        return null;
    }
    public List<TweetDto> toDtoList(List<Tweet> tweets){

        if (tweets != null) {
            return  tweets.stream().map(tweet -> TweetDtoConverter.getInstance().toDto(tweet)).toList();
        }
        return null;
    }

}
