package com.pmctanker.pmc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pmctanker.pmc.model.User;
import com.pmctanker.pmc.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public boolean login(String email, String password) {
        return userRepository.findByEmail(email)
            .map(u -> u.getPassword().equals(password))
            .orElse(false);
    }
}
