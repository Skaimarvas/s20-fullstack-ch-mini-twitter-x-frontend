package com.example.minitwitterspring.entity;


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
@Table(name = "user", schema = "kiwitter")
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

    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Tweet> likedTweets ;


    public void addLikedTweets(Tweet tweet){
        if(likedTweets == null){
            likedTweets = new ArrayList<>();
        }

        if (!likedTweets.contains(tweet)){
            likedTweets.add(tweet);
        }
    }

    public void removedLikedTweets(Tweet tweet){
        if(likedTweets != null){
            likedTweets.remove(tweet);
        }


    }

    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Tweet> retweetedTweets = new ArrayList<>();



}
