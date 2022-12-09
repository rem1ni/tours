package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Voucher;
import com.backend.bprobackend.repository.VoucherRepos;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
