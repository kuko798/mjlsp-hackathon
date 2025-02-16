package com.mljsphack.mljsphack.Service;


import com.mljsphack.mljsphack.Entity.Mjlsp;
import com.mljsphack.mljsphack.Repository.MjlspRepo;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpHeaders;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class MjlspService{

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private MjlspRepo mjlspRepo;

    private final String getAPICall = "https://uwmadison.emscloudservice.com/web/AnonymousServersApi.aspx/CustomBrowseEvents";


    public Mjlsp getEvent(String name){
        return mjlspRepo.findByName(name);
    }

    public String fetchExternalData(String username) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer ");
        HttpEntity<String> entity = new HttpEntity<>(headers);
        Htt

        String getURL = getAPICall + username;

        ResponseEntity<String> response = restTemplate.exchange(getURL, HttpMethod.GET, entity, String.class);

        return response.getBody(); // You can process the response further
    }
}

