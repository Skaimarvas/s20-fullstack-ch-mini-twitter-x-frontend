package com.example.minitwitterspring.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name = "tweet", schema = "kiwitter")
public class Tweet {

    private long id;
    private String text;
    private int like;
    private int retweet;


}
