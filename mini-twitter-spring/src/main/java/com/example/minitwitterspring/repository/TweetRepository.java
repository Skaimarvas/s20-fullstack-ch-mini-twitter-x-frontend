package com.example.minitwitterspring.repository;

import com.example.minitwitterspring.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetRepository extends JpaRepository<Tweet, Long> {

}
