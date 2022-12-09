package com.backend.bprobackend.Responses;

import javax.persistence.criteria.CriteriaBuilder;

public class VaucherResponse {
    private Integer idroute;
    private Integer idclient;


    public Integer getIdroute() {
        return idroute;
    }

    public void setIdroute(Integer idroute) {
        this.idroute = idroute;
    }

    public Integer getIdclient() {
        return idclient;
    }

    public void setIdclient(Integer idclient) {
        this.idclient = idclient;
    }
}
