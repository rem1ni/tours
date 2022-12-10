package com.backend.bprobackend.controller;
import com.backend.bprobackend.response.JwtResponse;
import com.backend.bprobackend.request.LoginRequest;
import com.backend.bprobackend.request.SignupRequest;
import com.backend.bprobackend.model.EnumRole;
import com.backend.bprobackend.model.Role;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.RoleRepos;
import com.backend.bprobackend.repository.UserRepos;
import com.backend.bprobackend.response.MessageResponse;
import com.backend.bprobackend.security.jwt.JwtUtils;
import com.backend.bprobackend.security.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/user")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepos userRepository;

    @Autowired
    RoleRepos roleRepository;


    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        if (roleRepository.findAll().size() < 1) {
            roleRepository.save(new Role(EnumRole.ROLE_EMPLOYEE));
            roleRepository.save(new Role(EnumRole.ROLE_ADMIN));
            Set<Role> roles = new HashSet<>();
            Role userRole = roleRepository.findByName(EnumRole.ROLE_EMPLOYEE)
                    .orElseThrow(() -> new RuntimeException("Роль не найдена"));
            roles.add(userRole);
            Role admin = roleRepository.getById(2);
            roles.add(admin);
            userRepository.save(new User("Admin", encoder.encode("admin"), roles));

        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }

    @PostMapping("/add")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Username already taken!"));
        }
        User user = new User(signUpRequest.getUsername(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(EnumRole.ROLE_EMPLOYEE)
                    .orElseThrow(() -> new RuntimeException("Role not found."));
            roles.add(userRole);

        }
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("User created"));
    }
}