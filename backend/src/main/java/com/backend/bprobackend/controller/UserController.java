package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.EnumRole;
import com.backend.bprobackend.model.Role;
import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.RoleRepos;
import com.backend.bprobackend.repository.UserRepos;

import com.backend.bprobackend.request.RouteChangeRequest;
import com.backend.bprobackend.request.RouteDeleteRequest;
import com.backend.bprobackend.request.UserChangeRequest;
import com.backend.bprobackend.request.UserDeleteRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/user")
public class UserController {
   @Autowired
    private UserRepos userRepos;
    @Autowired
    private RoleRepos roleRepos;

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
            Set<Role> roles = new HashSet<>();
            Role userRole = roleRepos.findByName(EnumRole.ROLE_EMPLOYEE)
                    .orElseThrow(() -> new RuntimeException("Роль не найдена"));
            roles.add(userRole);
            if (userChangeRequest.isAdmin() == true) {
                Role admin = roleRepos.getById(2);
                roles.add(admin);
            }
            user.setRoles(roles);
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

