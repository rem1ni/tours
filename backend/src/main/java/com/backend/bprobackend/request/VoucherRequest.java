package com.backend.bprobackend.request;

import com.backend.bprobackend.model.Client;
import com.backend.bprobackend.model.Route;

public class VoucherRequest {

    private Integer idroute;
    private Long idclient;
    private String time;

    private Integer count;
    private Double discount;


    public Integer getIdroute() {
        return idroute;
    }

    public void setIdroute(Integer idroute) {
        this.idroute = idroute;
    }

    public Long getIdclient() {
        return idclient;
    }

    public void setIdclient(Long idclient) {
        this.idclient = idclient;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }
}
