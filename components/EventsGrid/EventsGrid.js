import styles from "./EventsGrid.module.css";
import NavPills from "../NavPills/NavPills.js";


const EventsGrid = ({ events }) => {

    // function that transform events to NavPills props

    const years = ["2022", "2021"]
    const tabs = years.map(year => ({ tabButton: year }));
    const eventName = "Topological Methods in Mathematical Physics 2022"
    const eventId = 0
    const event = {
        topNote: "Noviembre 2020",
        title: eventName,
        subtitle: "International Conference",
        link: `/events/${eventId}`,
        image: "/img/events/" + eventId + "/event_image.jpg"
    }
    const content = {
        "2022": [
            {
                eventId: 0,
                ...event
            }
        ],
        "2021": [
            {
                eventId: 1,
                ...event
            }
        ]
    }

    return (
        <div className={styles.events_grid} >
            <h3 className={styles.upper_legend}>IC = International Conference <br />AS = Advanced School</h3>
            <div className={styles.container}>
                <NavPills
                    color="primary"
                    horizontal={{
                        tabsGrid: { xs: 12, sm: 2, md: 2 },
                        contentGrid: { xs: 12, sm: 10, md: 10 }
                    }}
                    content={content}
                    tabs={tabs}
                    button_text="See talks"
                />
            </div>
        </div >
    )
}

export default EventsGrid