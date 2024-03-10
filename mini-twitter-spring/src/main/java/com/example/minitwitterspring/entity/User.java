package com.example.minitwitterspring.entity;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Map<Long,Tweet> tweets = new HashMap<>();

    private Map<Long,Tweet> likedTweets;

    private Map<Long,Tweet> retweetedTweets;


}
