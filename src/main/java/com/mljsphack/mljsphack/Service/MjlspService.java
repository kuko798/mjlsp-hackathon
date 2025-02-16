package com.Example.m.Service;


import com.Example.mljsphack.mljsphack.Entity.Mjlsp;
import com.Example.mljsphack.mljsphack.Repository.MjlspRepo;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MjlspService{

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private MjlspRepo mjlspRepo;

    private final String getAPICall = "https://example.com/api/user/";


    public Mjlsp getEvent(String name){
        return mjlspRepo.findByName(name);
    }

    public String fetchExternalData(String jwt, String username) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + jwt);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        String getURL = getAPICall + username;

        ResponseEntity<String> response = restTemplate.exchange(getURL, HttpMethod.GET, entity, String.class);

        return response.getBody(); // You can process the response further
    }
}

