package com.example.minitwitterspring.entity;


import com.example.minitwitterspring.dto.TweetDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@NoArgsConstructor
@Data
@Entity
@Table(name = "user", schema = "public")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Tweet> tweets ;

    @JsonIgnore
    @ManyToMany(mappedBy = "likedByUsers")
    private List<Tweet> likedByUser;

    @JsonIgnore
    @ManyToMany(mappedBy = "retweetedByUsers")
    private List<Tweet> retweetedByUsers ;

    public void addTweets(Tweet tweet){
        if(tweets == null){
            tweets = new ArrayList<>();
        }
        this.tweets.add(tweet);
    }
    public void removeTweets(Tweet tweet){
        if(tweets != null ){
            tweets.remove(tweet);
        }
    }
    public void addLikedTweets(Tweet tweet){
        if(likedByUser == null){
            likedByUser = new ArrayList<>();
        }
            likedByUser.add(tweet);
    }
    public void removeLikedTweets(Tweet tweet){
        if(likedByUser != null){
            likedByUser.remove(tweet);
        }
    }
    public void addRetweets(Tweet tweet){
        if(retweetedByUsers == null){
            retweetedByUsers = new ArrayList<>();
        }
        this.retweetedByUsers.add(tweet);
    }
    public void removeRetweets(Tweet tweet){
        if(retweetedByUsers != null){
            retweetedByUsers.remove(tweet);
        }
    }




}
