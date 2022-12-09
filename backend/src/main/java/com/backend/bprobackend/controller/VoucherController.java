package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.Voucher;
import com.backend.bprobackend.repository.VoucherRepos;
import com.backend.bprobackend.request.RouteAddRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/voucher")
public class VoucherController {
    VoucherRepos voucherRepos;

    @GetMapping("/all")
    public List<Voucher> adminAccess(){
        List<Voucher> vouchers = voucherRepos.findAllByOrderByIdAsc();
        return vouchers;
    }



}
