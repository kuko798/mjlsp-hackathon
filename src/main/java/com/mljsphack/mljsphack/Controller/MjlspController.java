import com.Example.mljsphack.mljsphack.Entity.Mjlsp;
import com.Example.mljsphack.mljsphack.Service.MjlspService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MjlspController {

    @Autowired // Dependency Injection
    private MjlspService mjlspService;

    // Different ways to get input from controller:
    // @RequestBody - request payload
    // @PathVariable - in the URI as seen below
    // @RequestParam - in the URI. Ex:https://localhost:8080/api/add?breed=Beagle
    @PostMapping("/add/{event}") // entire URI is https://localhost:8080/api/add
    public Mjlsp addEvent(@RequestBody Mjlsp newEvent, @RequestParam("event") String event,
                          @PathVariable("event") int eventId) {
        return mjlspService.addNewEvent(newEvent, breed, eventId);
    }

    @GetMapping("/retrieveMjlsp/{name}")
    public Mjlsp getMjlsp(@PathVariable("name") String name) {
        return mjlspService.getEvent(name);
    }

    //@DeleteMapping
    //@PutMapping
}
