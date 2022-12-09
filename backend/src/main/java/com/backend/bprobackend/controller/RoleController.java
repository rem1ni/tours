package com.backend.bprobackend.controller;


import com.backend.bprobackend.model.EnumRole;
import com.backend.bprobackend.model.Role;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.RoleRepos;
import com.backend.bprobackend.repository.UserRepos;
import com.backend.bprobackend.request.RoleRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bpro")
public class RoleController {
    @Autowired
    UserRepos userRepository;
    @Autowired
    RoleRepos roleRepository;
    @PostMapping("/role")
    public ResponseEntity<?> RoleAddUser(@RequestBody RoleRequest roleRequest) {
        User user=userRepository.getById(roleRequest.getIduser());
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(EnumRole.ROLE_EMPLOYEE)
        .orElseThrow(() -> new RuntimeException("Роль не найдена"));
        roles.add(userRole);
        if (roleRequest.getCheck1()==1) {
            Role employee = roleRepository.getById(2);
            roles.add(employee);
        }
        if (roleRequest.getCheck2()==1) {
            Role admin = roleRepository.getById(3);
            roles.add(admin);
        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok("success");
    }
}
