package com.example.minitwitterspring.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;
import java.util.List;


public record TweetDto(long id, String content, int likedCount, int retweetCount, List<SimpleUserDto> likedByUser, List<SimpleUserDto> retweetedByUser, Instant createdAt) {

}
