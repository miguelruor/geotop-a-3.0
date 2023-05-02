import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Image from 'next/image';

import meetingData from "../../data/meeting.json";

export async function getStaticProps() {
    return {
        props: meetingData
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: meetingData.meetingId } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function AbstractSubmission(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meetingId} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Venue and Travel Infos</h1>
            <h2>Yucatán</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "60%", paddingRight: "30px" }}>
                    <p>
                        México is amongst the most popular holiday destinations in the world, and Yucatán is arguably
                        one of its most exciting states to visit, with some of México’s most popular tourist attractions and
                        destinations: from Mérida to Chichen Itza, from Cancún to Playa Del Carmen, Tulum, Cozumel
                        and many other.
                    </p>
                    <p>
                        Click <a href="https://drive.google.com/file/d/16NyLjacUX-zxw_vS3whVJNEDHpua2J1h/view?usp=share_link" target='_blank'>HERE</a> to see the key
                        places and the typical driving times on the map.
                    </p>
                    <p>
                        For a quick, updated travel guide click <a href="https://brbgonesomewhereepic.com/yucatan-mexico-travel-guide/" target='_blank'>HERE</a>.
                        For a guide to some of its most beautiful beaches click <a href="https://traveltomerida.com/best-merida-mexico-beaches-in-yucatan/" target='_blank'>HERE</a>.
                    </p>
                </div>
                <div style={{ width: "35%", paddingLeft: "30px" }}>
                    <Image src="/img/meetings/merida24/others/maya.jpg" width={500} height={350} />
                </div>
            </div>

            <h2>Mérida</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "60%", paddingRight: "30px" }}>
                    <p>
                        This is the capital city of Yucatán, about 4 hours driving from Cancún International Airport and about
                        40 minutes driving from Progreso and the nearby coastline beaches (click <a href="https://drive.google.com/file/d/16NyLjacUX-zxw_vS3whVJNEDHpua2J1h/view?usp=share_link" target='_blank'>HERE</a> to see the
                        typical driving times on the map).
                    </p>
                    <p>
                        Mérida is a city of about 1.1 million inhabitants. The Autonomous University of Yucatán (UADY) and the
                        conference hall located in the city centre are at a walking distance from the major tourist attractions,
                        hotels and night life places. Click <a href="https://drive.google.com/file/d/1PoLkC44Z13b0GNKHrT7OUwKDlGzQuqa2/view?usp=share_link" target='_blank'>HERE</a> to see the local map.
                    </p>
                </div>

                <div style={{ width: "35%", paddingLeft: "30px" }}>
                    <Image src="/img/meetings/merida24/others/Merida.png" width={500} height={350} />
                </div>
            </div>


            <h2>Conference Venue</h2>
            <p>
                The conference will be hosted by the Autonomous University of Yucatán (UADY), and it will take place
                in one of its auditoriums, in the central buildings.
            </p>

            <h2>How to get to Mérida from Cancún International Airport</h2>
            {/*<p>
                Major international airlines as well as charter companies have direct flights into Cancún
                International Airport from all over the world, and from more than 40 cities in the United States
                and more than 20 cities in Europe. You can check some key information on operating airlines
                and flights <a href="https://www.cancunairport.com/" target='_blank'>HERE</a>.
            </p>*/}
            <p>
                The overland connection to Mérida by car is a journey
                that varies from 4 hours, by a hired private shuttle
                service or a car rental, to 6-8 hours using local bus
                services offered, for example, by <a href="https://www.ado.com.mx/" target="_blank">ADO</a>,
                the largest bus company in Mexico. Since roads in Yucatan are of high quality, driving standards
                are generally good and fuel is extremely cheap if you compare with European prices, renting a car
                may be the best option. However, do not expect high quality rental cars.
            </p>
            <p>
                To have an idea of the average time and cost of service for various transport solutions
                click <a href="https://drive.google.com/file/d/1i53y2mYIvCA-YLX9JD8wyEMobrehWcCb/view?usp=share_link" target="_blank">HERE</a> to see
                a reference table in US dollars.
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "55%", paddingRight: "30px" }}>
                    <p>
                        There are a few direct flights from US and Canadian cities to Merida (Dallas, Houston, Miami, Toronto, ...).
                        A fast train connection provided by the <a href="https://www.alstom.com/mayan-train-project" target="_blank">Mayan Train</a> between the cities of Mérida
                        and Cancún is expected to be operational from December 2023. This
                        project will connect the states of Chiapas, Tabasco,
                        Campeche, Yucatán and Quintana Roo, totaling 1.545
                        kilometres of train line. If available, this would be a
                        very good solution.
                    </p>
                </div>
                <div style={{ width: "45%", paddingLeft: "30px" }}>
                    <Image src="/img/meetings/merida24/others/MayaTrain_map.jpg" width={700} height={350} />
                </div>
            </div>

        </Background>
    )
}
