import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Link from "next/link";

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

export default function SocialProgramme(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Social Programme</h1>
            <br />
            <p>
                <b>Important: All tickets should be acquired at Registration Desk no later than Monday January 8. Number of places available limited. First come first serve basis.</b>
            </p>
            <h3>January 7, Friends Gathering (19:00 - 21:00)</h3>
            <p>Hotel Boutique Piedra de Agua (location at <Link href={"/" + props.meeting + "/accomodation-and-meals#map_hotels"}>Accommodation and Meals</Link>)</p>
            <ul>
                <li>30 places available for students to enjoy one free drink.</li>
                <li>30 places available for non-students. Drinks pay at the place.</li>
            </ul>

            <h3>January 9, Friends Gathering (20:00 - 22:00)</h3>
            <p>Hotel Boutique Piedra de Agua (location at <Link href={"/" + props.meeting + "/accomodation-and-meals#map_hotels"}>Accommodation and Meals</Link>)</p>
            <ul>
                <li>30 places available for students to enjoy one free drink.</li>
                <li>30 places available for non-students. Drinks pay at the place.</li>
            </ul>

            <h3>January 11, Dinner (19:30 - 22:00)</h3>
            <p>Museo de la Gastronomía Yucateca (location at <Link href={"/" + props.meeting + "/accomodation-and-meals#map_bars"}>Accommodation and Meals</Link>)</p>
            <p><a href="https://drive.google.com/file/d/1cX9fqsJw2pAYF0ZnWnR5AsONEo5G6rQ3/view?usp=sharing" target='_blank'>Menu</a></p>
            <ul>
                <li>20 places available for students. Cost $400.00 mxn.</li>
                <li>30 places available for non-students. Cost $750.00 mxn.</li>
            </ul>

            <h3>January 12, Tour</h3>
            <p>Cenotes Santa Bárbara (location at <Link href={"/" + props.meeting + "/culture-tourism#map"}>Culture and Tourism</Link>)</p>
            <p>Leaving at 1 pm, main door Centro Cultural. Returning Merida 8 pm</p>
            <ul>
                <li>20 places available for students. Cost $300.00 mxn.</li>
                <li>20 places available for non-students. Cost $500.00 mxn. </li>
            </ul>
            <p>Includes transportation and a box lunch. Additionally, participants must pay an entrance fee to the cenotes $350.00 mxn. Alternatively, pay at the entrance $470 which includes access to the cenotes and a meal at the restaurant (excluding beverages).</p>

            <h3>January 13, Party (19:30 - 22:00)</h3>
            <p>Kioyú Sky Lounge (location at <Link href={"/" + props.meeting + "/accomodation-and-meals#map_bars"}>Accommodation and Meals</Link>)</p>
            <p><a href="https://drive.google.com/file/d/1cX9fqsJw2pAYF0ZnWnR5AsONEo5G6rQ3/view?usp=sharing" target='_blank'>Menu</a></p>
            <ul>
                <li>20 places available for students. Cost $400.00 mxn.</li>
                <li>20 places available for non-students. Cost $600.00 mxn.</li>
            </ul>

            <hr />

            <p><b>Note: Just cash in mxn (Mexican pesos) accepted.</b></p>

        </Background >
    )
}
