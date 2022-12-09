package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.User;
import com.backend.bprobackend.repository.ClientRepos;
import com.backend.bprobackend.repository.RoleRepos;
import com.backend.bprobackend.repository.UserRepos;
import com.backend.bprobackend.request.ClientChangeRequest;
import com.backend.bprobackend.request.ClientRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/edit")
    public ResponseEntity<?> newClient(@RequestBody ClientChangeRequest clientChangeRequest) {
        Client client = clientRepos.getById(clientChangeRequest.getId());
        client.setAddress(clientChangeRequest.getAddress());
        client.setName(clientChangeRequest.getName());
        client.setPatronymic(clientChangeRequest.getPatronymic());
        client.setSurname(clientChangeRequest.getSurname());
        client.setPhone(clientChangeRequest.getPhone());
        clientRepos.save(client);

        return ResponseEntity.ok("success");
    }



    @GetMapping("/all")
    public List<Client> adminAccess(){
        List<Client> clients = clientRepos.findAllByOrderByIdAsc();
        return clients;
    }
}

