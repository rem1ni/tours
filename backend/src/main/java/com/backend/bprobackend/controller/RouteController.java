package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.Voucher;
import com.backend.bprobackend.repository.RouteRepos;
import com.backend.bprobackend.repository.VoucherRepos;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/route")
public class RouteController {

    RouteRepos routeRepos;

    @GetMapping("/all")
    public List<Route> adminAccess(){
        List<Route> routes = routeRepos.findAllByOrderByIdAsc();
        return routes;
    }

}
