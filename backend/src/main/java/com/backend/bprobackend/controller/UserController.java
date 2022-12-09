package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.UserRepos;

import com.backend.bprobackend.request.RouteChangeRequest;
import com.backend.bprobackend.request.RouteDeleteRequest;
import com.backend.bprobackend.request.UserChangeRequest;
import com.backend.bprobackend.request.UserDeleteRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/user")
public class UserController {

    private UserRepos userRepos;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    public UserController(UserRepos userRepos) {
        this.userRepos = userRepos;
    }


    // надо доделать безопасность
    @GetMapping("/all")
    public List<User> adminAccess(){
        List<User> users = userRepos.findAllByOrderByIdAsc();
        return users;
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editUser(@RequestBody UserChangeRequest userChangeRequest) {
        User user = userRepos.getById(userChangeRequest.getId());
        if (userRepos.existsByUsername(user.getUsername()))
        {
            return ResponseEntity.ok("fail of century");
        }
        else {
            user.setUsername(userChangeRequest.getUsername());
            user.setPassword(encoder.encode(userChangeRequest.getPassword()));
                    userRepos.save(user);
                    return ResponseEntity.ok("success");
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteUser(@RequestBody UserDeleteRequest userDeleteRequest) {

        userRepos.deleteById(userDeleteRequest.getId());

        return ResponseEntity.ok("success");
    }
}

