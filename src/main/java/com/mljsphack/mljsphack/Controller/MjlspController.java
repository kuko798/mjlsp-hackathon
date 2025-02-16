package com.mljsphack.mljsphack.Controller;

import com.mljsphack.mljsphack.Service.MjlspService;

import com.mljsphack.mljsphack.Entity.Mjlsp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MjlspController {

    @Autowired // Dependency Injection
    private com.mljsphack.mljsphack.Entity.Mjlsp mjlspService;

    // Different ways to get input from controller:
    // @RequestBody - request payload
    // @PathVariable - in the URI as seen below
    // @RequestParam - in the URI. Ex:https://localhost:8080/api/add?breed=Beagle
    @PostMapping("/add/{event}") // entire URI is https://localhost:8080/api/add
    public Mjlsp addEvent(@RequestBody Mjlsp newEvent, @RequestParam("event") String event,
                          @PathVariable("event") int eventId) {
        return null;
    }

    @GetMapping("/retrieveMjlsp/{name}")
    public Mjlsp getMjlsp(@PathVariable("name") String name) {
        return mjlspService.getTitle(name);
    }

    //@DeleteMapping
    //@PutMapping
}
