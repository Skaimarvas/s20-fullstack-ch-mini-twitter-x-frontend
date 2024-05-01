package com.example.minitwitterspring.utils;

import com.example.minitwitterspring.dto.SimpleUserDto;
import com.example.minitwitterspring.dto.TweetUserDto;
import com.example.minitwitterspring.entity.User;

import java.util.List;

public class UserDtoConverter {
    private static UserDtoConverter instance;
    private UserDtoConverter(){};
    public static UserDtoConverter getInstance(){
        if(instance == null){
            instance = new UserDtoConverter();
        }
        return instance;
    }

    public SimpleUserDto toSimpleUserDto(User user){
        if(user != null){
            return new SimpleUserDto(user.getId(), user.getUserName(), user.getFullName(), user.getEmail());
        }
        return null;
    }
    public List<SimpleUserDto> toSimpleUserDtoList(List<User> users){
        if(users != null){
            return users.stream().map(user ->
                    UserDtoConverter.getInstance().toSimpleUserDto(user)).toList();

        };

        return null;
    }

    public TweetUserDto toTweetUserDto(User user){
        if(user != null){
            return new TweetUserDto(
                    user.getId(),
                    user.getUserName(),
                    user.getFullName(),
                    user.getEmail(),
                    TweetDtoConverter.getInstance().toDtoList(user.getTweets()),
                    TweetDtoConverter.getInstance().toDtoList(user.getLikedByUser()),
                    TweetDtoConverter.getInstance().toDtoList(user.getLikedByUser()) );
        }
        return null;
    }
    public List<TweetUserDto> toTweetUserList(List<User> users){
        if(users != null){
            return users.stream().map(user ->
                   UserDtoConverter.getInstance().toTweetUserDto(user)).toList();

        };

        return null;
    }
}
