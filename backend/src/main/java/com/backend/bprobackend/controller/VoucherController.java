package com.backend.bprobackend.controller;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Route;
import com.backend.bprobackend.model.Voucher;
import com.backend.bprobackend.repository.VoucherRepos;
import com.backend.bprobackend.request.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tour/voucher")
public class VoucherController {
    @Autowired
    VoucherRepos voucherRepos;

    @GetMapping("/all")
    public List<Voucher> adminAccess(){
        List<Voucher> vouchers = voucherRepos.findAllByOrderByIdAsc();
        return vouchers;
    }

    @PostMapping("/edit")
    public ResponseEntity<?> editVoucher(@RequestBody VoucherEditRequest voucherEditRequest) {
        Voucher voucher = voucherRepos.getById(voucherEditRequest.getId());
        voucher.setClient(voucherEditRequest.getClient());
        voucher.setCount(voucherEditRequest.getCount());
        voucher.setDiscount(voucherEditRequest.getDiscount());
        voucher.setTime(voucherEditRequest.getTime());
        voucher.setRoute(voucherEditRequest.getRoute());
        voucher.setClient(voucherEditRequest.getClient());
        voucherRepos.save(voucher);
        return ResponseEntity.ok("success");
    }

    @PostMapping("/create")
    public ResponseEntity<?> newVoucher(@RequestBody VoucherRequest voucherRequest) {
        Voucher voucher = new Voucher(voucherRequest.getRoute(),voucherRequest.getClient(),voucherRequest.getTime(),voucherRequest.getCount(),voucherRequest.getDiscount());
        voucherRepos.save(voucher);

        return ResponseEntity.ok("success");
    }

}
