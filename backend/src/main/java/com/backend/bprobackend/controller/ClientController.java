package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.ClientRepos;
import com.backend.bprobackend.repository.RoleRepos;
import com.backend.bprobackend.repository.UserRepos;
import com.backend.bprobackend.request.ClientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/client")
public class ClientController {

    @Autowired
    ClientRepos clientRepos;


    @PostMapping("/create")
    public ResponseEntity<?> newClient(@RequestBody ClientRequest clientRequest) {
        Client client= new Client(clientRequest.getSurname(),clientRequest.getName(),clientRequest.getPatronymic(),clientRequest.getAddres(), clientRequest.getPhone());
        clientRepos.save(client);

        return ResponseEntity.ok("success");
        }
    }

