import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";
import Link from 'next/link';

const useStyles = makeStyles(styles);

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

export default function AbstractSubmission(props) {

    const classes = useStyles();

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={classes.paragraphTitle}>Guidelines for Contribution</h1>
            <br />
            <p>
                The scope of the meeting is to provide an interdisciplinary platform for cross-fertilization of concepts and techniques
                used in various fields of mathematical physics. The programme will consist of keynote lectures by specialists and
                oral contributions
                from young researchers. According to its scope keynote lectures and contributions should consist of an introduction to
                present concepts and techniques in a way accessible to non-specialists in the field followed by the presentation of some key results.
            </p>
            <p>
                <li>Title and abstract should be prepared pasting text using this <a href="attachments/TEMPLATE.docx">TEMPLATE</a> file; </li>
                <li>rename your file as SURNAME.docx;</li>
                <li>submit your SURNAME.docx file as an attachment to this
                    email <a href="mailto:renzo.ricca@unimib.it?subject=Erice%20Title%20and%20Abstract&body=Before%20sending%20this%20email%2C%20please%20attach%20the%20document%20renamed%20as%20indicated%20in%20the%20%22Guidelines%20for%20Contribution%22%20section.">HERE</a>.</li>
            </p>
            <p>
                Please send your title and abstract as soon as possible, and in any case not later than <b>July 31, 2022</b>.
            </p>
            <p>
                Accepted title and abstract contributions will be listed in alphabetical order and published online as SURNAME.pdf in
                the <Link href={"/" + props.meeting + "/abstract-submission"}>Abstract Submission</Link> section of this website. {props.meeting + "/abstract-submission"}
            </p>
        </Background>
    )
}
