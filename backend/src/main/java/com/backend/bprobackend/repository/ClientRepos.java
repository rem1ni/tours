package com.backend.bprobackend.repository;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Role;
import com.backend.bprobackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepos extends JpaRepository<Client,Long> {
    List<Client> findAllByOrderByIdAsc();

}
