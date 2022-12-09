package com.backend.bprobackend.model;


import javax.persistence.*;

@Entity
@Table(name="vouchers")
public class Voucher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "routes_voucher",
            joinColumns = @JoinColumn(name = "voucher_id"),
            inverseJoinColumns = @JoinColumn(name = "route_id"))
    private Route route;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "clients_voucher",
            joinColumns = @JoinColumn(name = "voucher_id"),
            inverseJoinColumns = @JoinColumn(name = "client_id"))
    private Client client;


    private String time;

    private Integer count;
    private Double discount;


    public Voucher() {
    }


    public Voucher(Route route, Client client, String time, Integer count, Double discount) {
        this.route = route;
        this.client = client;
        this.time = time;
        this.count = count;
        this.discount = discount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
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
