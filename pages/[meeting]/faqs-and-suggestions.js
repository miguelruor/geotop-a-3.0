import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico"
        }
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: "merida24" } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function FaqsAndSuggestions(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>FAQs and Suggestions</h1>
            <br />

            <h3>Any support for students and young researchers?</h3>
            <p>
                Unfortunately no. Some Mexican institutions will support their students for attending the Conference. The goal is to have at least 30 students as attendees.
            </p>

            <h3>Any support for accommodation of speakers or attendees?</h3>
            <p>
                Unfortunately no. The only support that we will have for promoting the attendance is no registration fee. However, visit Merida and the peninsula of Yucatan, you will return for sure in the future.
            </p>

            <h3>What is the weather like in Yucatan Mexico in January?</h3>
            <p>
                January is the best month to visit Yucatan. The daily temperatures in this month reach pleasant 28 °C (83 °F). The temperature of the sea will be perfect at 26 °C (78 °F). At night, temperatures hover around a pleasant 19 °C (65 °F).
            </p>

            <h3>What is the registration fee?</h3>
            <p>
                Free registration fee.
            </p>

            <h3>Should the Attendees be registered in advance?</h3>
            <p>
                Yes. Registration is important for the issuance of the certificate of participation.
                <ul style={{ marginLeft: "-25px" }}>
                    <li><span style={{ color: "grey" }}>Deadline for registration for Attendees:</span> November 30</li>
                </ul>
            </p>

            <h3>What is the general scheme of the scientific program?</h3>
            <p>
                A tentative scheme is this: <a href='https://drive.google.com/file/d/1lr3MPEPzrIgVHFFkbSm-L70tuu47UrTP/view?usp=sharing' target='_blank'>click here</a>.
            </p>

            <h2>Reaching Merida</h2>

            <h3>I. From USA and Canada</h3>
            <p>
                There are some direct flights from a few USA/Canada cities. (Dallas, Houston, Miami, Toronto, LA, ...)
            </p>

            <ol>
                <li>
                    At Merida airport, take an authorized taxi to your hotel.
                    <br /><br />
                    <ul style={{ marginLeft: "-25px" }}>
                        <li>
                            <span style={{ color: "grey" }}>Cost:</span> Around 30 US dollars.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Credit cards:</span> Yes.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Note:</span> Taxis at the airport are expensive, not in the city.

                        </li>
                    </ul>
                </li>

                <br />
                <li>
                    Also, take a 'Va y Ven' route of buses (<a href='https://vayven.yucatan.gob.mx/rutaaeropuerto' target='_blank'>click here</a> to see more information). A couple of bus stations are close to recommended hotels.
                    <br /><br />
                    <ul style={{ marginLeft: "-25px" }}>
                        <li>
                            <span style={{ color: "grey" }}>Cost:</span> Around 2.50 US dollars.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Credit cards:</span> No.
                        </li>
                    </ul>
                </li>
            </ol>

            <h3>II. From Europe</h3>
            <p>
                Fly to Cancun airport. Many direct flights from Paris, Frankfurt, Munich, London, Madrid, ...
            </p>

            <ol>
                <li>
                    Rent a car. Drive to your hotel in Merida (4 hours).
                    <br /><br />
                    <ul style={{ marginLeft: "-25px" }}>
                        <li>
                            <span style={{ color: "grey" }}>Distance:</span> 300 km. It is a long drive after a flight from Europe.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Notes:</span> Buy full insurance even so, it is expensive. Book in advance
                            with a serious company. Book a hotel with free parking places.
                            With a car, you can visit fantastic places around Merida.
                            Gas is half of the price than in Europe. Driving conditions to Merida
                            are good. Gas stations are sparse.
                        </li>
                    </ul>
                </li>

                <br />
                <li>
                    Take an ADO bus (<a href='https://www.ado.com.mx/viajes/terminal-aeropuerto-cancun-t3-a-ciudad-merida-yuc' target='_blank'>click here</a> to see more information).
                    <br /><br />
                    <ul style={{ marginLeft: "-25px" }}>
                        <li>
                            <span style={{ color: "grey" }}>Cost:</span> Around 45 US Dollars.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Credit cards:</span> Yes.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Time:</span> 5 hours.
                        </li>
                        <li>
                            <span style={{ color: "grey" }}>Notes:</span> There are a few direct ADO buses from Cancun airport to Merida. The best terminal in Merida for hotels is Terminal Paseo 60. Otherwise, take an ADO bus to Cancun central ADO station and connect to other ADO bus to Merida. You buy both tickets at the airport. It is a long journey after a flight from Europe.
                        </li>
                    </ul>
                </li>

                <br />
                <li>
                    Take the Maya train. It is advertised to start running in December 2023. It would be a fantastic way to move from Cancun to Merida. However, there is no information available yet.
                </li>
            </ol>

            <p>
                You could spend a few days in Cancun area (Cancun, Riviera Maya, Puerto Morelos, Holbox, Playa del Carmen, Cozumel ...) before or after the Conference.
                In this case, book a hotel with free transportation airport-hotel. Taxi cost to Cancun hotels: 100 US dollars and much more to other places.
            </p>

            <p>
                Cancun airport is 100% tourist oriented. A bit chaotic and crowded. Services at the airport
                are very expensive, as mentioned including taxis. January is high season as Winter is hard in EUROPE/USA/Canada.
                Book any service in advance as shopping there is like in a "mercado", i.e. like a street market
                in any big city.
            </p>

            <h3>III. From Asia</h3>

            <p>
                Fly to Mexico City (flights from Tokyo, Shanghai and Seoul with stops in Tijuana or Monterrey, no change of plane) and then to Merida. Also, fly to an USA city like Houston or Dallas and then to Merida.
            </p>

        </Background>
    )
}
