package com.example.backend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.example.backend.Model.UserModel;

public interface UserRepo extends JpaRepository<UserModel, Long> {

    
} 
