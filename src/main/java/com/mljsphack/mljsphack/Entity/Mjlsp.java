import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

@Entity
@Data // Generates toString, getters, setters, etc.
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "mjlspevent_table")
public class Mjlsp {

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date;

    @Id
    @SequenceGenerator(name = "mjlsp_seq", sequenceName = "mjlsp_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "mjlsp_seq")


    private Integer id; // Primary Key

    @Column(name = "BuildingId")
    private int buildingId;

    @Column(name = "GroupTypeId")
    private int groupTypeID;

    @Column(name = "GroupId")
    private int groupId;

    @Column(name = "EventTypeId")
    private int eventTypeId;

    @Column(name = "RoomId")
    private int roomID;

    @Column(name = "StatusId")
    private int statusID;

    @Column(name = "ZeroDisplayOnWeb")
    private int zeroDisplayOnWeb;

    @Column(name = "HeaderUrl")
    private String headerUrl;

    @Column(name = "Title")
    private String title;

    @Column(name = "Format")
    private int format;

    @Column(name = "Rollup")
    private int rollup;

    @Column(name = "PageSize")
    private int pageSize;

    @Column(name = "DropEventsInPast")
    private boolean dropEventsInPast;

    @Column(name = "EncryptD")
    private String encryptD;

    @Column(name = "attendees")
    private int attendees;
}
