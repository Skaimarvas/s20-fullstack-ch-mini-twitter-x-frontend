package com.example.minitwitterspring.repository;

import com.example.minitwitterspring.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TweetRepository extends JpaRepository<Tweet, Long> {


}
