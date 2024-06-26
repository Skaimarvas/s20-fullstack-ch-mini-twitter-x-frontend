package com.example.minitwitterspring.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@AllArgsConstructor
@Data
public class ErrorResponse {
   private String message;
   private Instant timestamp;
}
