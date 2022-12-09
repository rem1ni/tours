package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.Voucher;
import com.backend.bprobackend.repository.RouteRepos;
import com.backend.bprobackend.repository.VoucherRepos;
import com.backend.bprobackend.request.ClientChangeRequest;
import com.backend.bprobackend.request.RouteAddRequest;
import com.backend.bprobackend.request.RouteChangeRequest;
import com.backend.bprobackend.request.RouteDeleteRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/route")
public class RouteController {

    @Autowired
    RouteRepos routeRepos;

    @GetMapping("/all")
    public List<Route> adminAccess(){
        List<Route> routes = routeRepos.findAllByOrderByIdAsc();
        return routes;
    }


    @PostMapping("/create")
    public ResponseEntity<?> newRoute(@RequestBody RouteAddRequest routeAddRequest) {
        Route route= new Route(routeAddRequest.getCountry(),routeAddRequest.getClimate(),routeAddRequest.getDuration(),routeAddRequest.getHotel(),routeAddRequest.getCost());
        routeRepos.save(route);

        return ResponseEntity.ok("success");
    }
    @PostMapping("/delete")
    public ResponseEntity<?> deleteRoute(@RequestBody RouteDeleteRequest routeDeleteRequest) {

        routeRepos.deleteById(routeDeleteRequest.getId());

        return ResponseEntity.ok("success");
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editRoute(@RequestBody RouteChangeRequest routeChangeRequest) {
        Route route = routeRepos.getById(routeChangeRequest.getId());
        route.setClimate(routeChangeRequest.getClimate());
        route.setCost(routeChangeRequest.getCost());
        route.setCountry(routeChangeRequest.getCountry());
        route.setDuration(routeChangeRequest.getDuration());
        route.setHotel(routeChangeRequest.getHotel());
        routeRepos.save(route);

        return ResponseEntity.ok("success");
    }
}
