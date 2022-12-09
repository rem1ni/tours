package com.backend.bprobackend.repository;

import com.backend.bprobackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepos extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username); // поиск

    Boolean existsByUsername(String username); // есть ли такой пользователь

    List<User>  findAllByOrderByIdAsc();
}
