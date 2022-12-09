package com.backend.bprobackend.repository;

import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RouteRepos extends JpaRepository<Route,Integer> {
    List<Route> findAllByOrderByIdAsc();
}
