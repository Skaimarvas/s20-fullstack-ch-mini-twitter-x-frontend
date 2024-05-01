package com.example.minitwitterspring.entity;


import com.example.minitwitterspring.dto.TweetUserDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "tweet", schema = "public")
public class Tweet {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "content")
    private String content;

    @Column(name = "like_tweet")
    private int likeTweet;

    @Column(name = "retweet")
    private int retweet;

    @Column(name = "created_at")
    @CreationTimestamp
    private Instant createdAt;

    @JsonBackReference
    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "liked_tweet",
            joinColumns = @JoinColumn(name = "tweet_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> likedByUsers;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "retweet",
            joinColumns = @JoinColumn(name = "tweet_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> retweetedByUsers;

    public void addLikedByUser(User user){
        if(likedByUsers == null){
            likedByUsers = new ArrayList<>();
        }
        likedByUsers.add(user);
    }

    public void removeLikedByUser(User user){
        if(likedByUsers != null && user != null){
            likedByUsers.remove(user);
        }
    }

    public void addRetweetByUser(User user){
        if(retweetedByUsers == null){
            retweetedByUsers = new ArrayList<>();
        }
        retweetedByUsers.add(user);
    }

    public void removeRetweetByUser(User user){
        if(retweetedByUsers != null && user != null){
            retweetedByUsers.remove(user);
        }
    }

}
