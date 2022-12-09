package com.backend.bprobackend.security.service;

import com.backend.bprobackend.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class UserInfo {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;




    public UserInfo(Long id, String username) {
        this.id = id;
        this.username = username;

    }

    public static UserInfo build(User user) {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());


        return new UserInfo(
                user.getId(),
                user.getUsername());
    }




    public Long getId() {
        return id;
    }



    public String getUsername() {
        return username;
    }




    public boolean isEnabled() {
        return true;
    }



}
