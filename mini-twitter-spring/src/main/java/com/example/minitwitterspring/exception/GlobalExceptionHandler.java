package com.example.minitwitterspring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handler(UserException exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage(), Instant.now());
        return new ResponseEntity<>(errorResponse,exception.getStatus());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handler(Exception exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage(), Instant.now());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
