package com.backend.bprobackend.repository;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VoucherRepos extends JpaRepository<Voucher,Integer> {

    List<Voucher> findAllByOrderByIdAsc();

}
