import Background from '../../components/Proceedings/Background/Background';
import meetingData from "../../data/meeting.json";
import style from "../../assets/css/meetings.module.css";

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

            <h1 className={style.paragraphTitle}>Abstract Submission</h1>
            <h2 style={{ textAlign: "center" }}>Under construction</h2>
            {/*
            <p>
                All abstracts should be prepared following these guidelines. Download the abstract sample
                file <a href="" target="_blank">HERE</a> and fill in the details (session
                acronym, title, name of the author(s), summary and references) keeping everything on ONE
                PAGE only. Please adhere to the style of the file provided, and include at least one key
                reference to the work presented. Once done please save the file as an editable docx file, and
                submit it under the surname of the presenter as SURNAME.docx to the appropriate session
                here below:
            </p>

            <h2>Applications of Geometry and Topology to Biology (DNA)</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>

            <h2>Applications in Physical Sciences (PHYS)</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>

            <h2>Combinatorial Topology of Relational Structures (CTRS)</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>

            <h2>Data Analysis, Machine Learning and AI (DAMLAI)</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>

            <h2>Topological Complexity and LS Category (TCLS)</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>

            <h2>Topological Data Analysis</h2>
            <ul>
                <li><a href="" target="_blank">Keynote (45mins) abstract submission</a></li>
                <li><a href="" target="_blank">Oral (25 mins) abstract submission</a></li>
                <li><a href="" target="_blank">Poster (5 mins) abstract submission</a></li>
            </ul>
            */}

        </Background>
    )
}
