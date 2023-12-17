import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Divider } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import program from '../../data/program.json';
import { Fragment } from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

// For latex rendering
import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";

const firebaseConfig = {
    apiKey: "AIzaSyB9kb9dysgyJT4FTvnoC_o47QHWKvKzBmM",
    authDomain: "geotop-a.firebaseapp.com",
    projectId: "geotop-a",
    storageBucket: "geotop-a.appspot.com",
    messagingSenderId: "709131646321",
    appId: "1:709131646321:web:478ab34909b14ac22fb2d0",
    measurementId: "G-TP9CQVZ1DT"

};

const app = initializeApp(firebaseConfig); // Initialize Firebase

const processDoc = (doc) => {
    var data = doc.data();
    delete data.createdAt;
    return {
        id: doc.id,
        ...data
    }
}

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    const sessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"];

    var types_participation = {
        "oral": Object.fromEntries(sessions.map((session) => [session, []])),
        "keynote": Object.fromEntries(sessions.map((session) => [session, []])),
        "poster": [],
    }

    const db = getFirestore(app);

    const submissions = await getDocs(
        query(collection(db, meeting), where("accepted", "==", true))
    ).then((querySnapshot) => {
        var submissions = querySnapshot.docs.map((doc) => processDoc(doc)).filter((doc) => doc.contribution != "participant" && doc.number != 52); // quitar asistentes y platica 52 de Rodrigo Fritz
        submissions.sort((a, b) => {
            if (a["number"] < b["number"]) {
                return -1;
            }
            else if (a["number"] > b["number"]) {
                return 1;
            }
            return 0;
        })
        return submissions;
    });

    submissions.forEach((submission) => {
        if (submission.contribution == "poster") {
            types_participation[submission.contribution].push(submission);
        }
        else {
            types_participation[submission.contribution][submission.session].push(submission);
        }
    })

    const table = Object.keys(program["rows"]).map((rowId) => program["rows"][rowId])

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico",
            submissions: types_participation,
            program: table,
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

export default function ScientificProgramme(props) {

    const cellStyleBase = { border: "1px solid rgba(224, 224, 224, 1)" };
    const headerStyle = { ...cellStyleBase, backgroundColor: "rgba(250, 250, 250, 1)" };

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 id="programme" className={style.paragraphTitle}>Scientific Programme</h1>

            <p>You can download the Book of Abstracts and programme directly from <a href="https://drive.google.com/file/d/19nXbr7KG4MaLH9nuqC89cg7tEmmall9k/view?usp=sharing" target='_blank'>HERE</a>.</p>

            <p>
                AR = Audiovisual Room “Dr. Eduardo Urzaiz”, AUD1 = Auditorium 1 “Manuel Cepeda Peraza”, AUD2 = Auditorium 2 “Salón de Consejo”
            </p>

            <TableContainer component={Paper} style={{ maxHeight: 500 }}>
                <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table" style={{ width: 1800 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={headerStyle}></TableCell>
                            <TableCell align="center" style={headerStyle}><b>January 7</b></TableCell>
                            <TableCell align="center" style={headerStyle} colSpan={2}><b>January 8</b></TableCell>
                            <TableCell align="center" style={headerStyle}><b>January 9</b></TableCell>
                            <TableCell align="center" style={headerStyle} colSpan={2}><b>January 10</b></TableCell>
                            <TableCell align="center" style={headerStyle} colSpan={2}><b>January 11</b></TableCell>
                            <TableCell align="center" style={headerStyle}><b>January 12</b></TableCell>
                            <TableCell align="center" style={headerStyle}><b>January 13</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.program.map((row, idx) => {

                            return <TableRow key={`row_${idx}`}>
                                {
                                    row.map((cell, cellIdx) => {

                                        const keyCell = `cell_${idx}_${cellIdx}`;
                                        const doubleCols = new Set([2, 5, 7]);
                                        const rowSpanProp = { rowSpan: 2 };
                                        const specialCells = new Set(["Welcome Words", "<i>AUD1</i>"]);

                                        if (cell == "-") {
                                            return null;
                                        }

                                        var modifiedCell;

                                        var cellStyle = cellIdx > 0 ? cellStyleBase : headerStyle;

                                        const separation = cell.split("(");
                                        if (separation.length == 2 && separation[1].split(")")[0].length < 4) {
                                            var talkId = separation[1].split(")")[0];
                                            modifiedCell = `<a href="#talk_${talkId}">${cell}</a>`;
                                        }
                                        else {
                                            modifiedCell = cell;
                                        }

                                        if (
                                            (doubleCols.has(cellIdx) && row[cellIdx + 1] == "-" && idx > 0 && props.program[idx - 1][cellIdx + 1].slice(3, 11) != "Keynote:")
                                            || (idx > 0 && props.program[idx - 1][cellIdx].slice(3, 11) == "Keynote:")
                                            || (specialCells.has(cell) && doubleCols.has(cellIdx) && idx == 0 && cellIdx < 7)
                                        ) {

                                            return <TableCell key={keyCell} align="center" style={cellStyle} colSpan={2} {...(cell.length > 11 && cell.slice(3, 11) == "Keynote:" ? rowSpanProp : {})} >
                                                <Latex>{modifiedCell}</Latex>
                                            </TableCell>;
                                        }

                                        return <TableCell key={keyCell} align="center" style={cellStyle} {...(cell.length > 11 && cell.slice(3, 11) == "Keynote:" ? rowSpanProp : {})}>
                                            <Latex>{modifiedCell}</Latex>
                                        </TableCell>;
                                    })
                                }
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


            <h1 className={style.paragraphTitle}>Keynote speakers</h1>
            {
                Object.keys(props.submissions["keynote"]).map((session, idx) => <Fragment key={`keynote_${idx}`}>
                    <h2 style={{ textAlign: "center" }}>{session}</h2>
                    <Divider />
                    {
                        props.submissions["keynote"][session].map(talk => <Fragment key={`talk_${talk.number}`}>
                            <div id={`talk_${talk.number}`} style={{ height: "60px", width: "20px" }}></div>
                            <p>
                                {talk.number}) <b>{talk.completeName}</b> - {talk.institution}
                            </p>
                            <p style={{ textAlign: "center" }}><i>{talk.title}</i></p>
                            <p>
                                <Latex>{talk.abstract}</Latex>
                            </p>
                            <div style={{ height: "60px", width: "20px" }}></div>
                            <Divider />
                        </Fragment>
                        )
                    }
                </Fragment >
                )
            }
            <h1 className={style.paragraphTitle}>Oral contributions</h1>
            {
                Object.keys(props.submissions["oral"]).map((session, idx) => <Fragment key={`oral_${idx}`}>
                    <h2 style={{ textAlign: "center" }}>{session}</h2>
                    <Divider />
                    {
                        props.submissions["oral"][session].map(talk => <Fragment key={`talk_${talk.number}`}>
                            <div id={`talk_${talk.number}`} style={{ height: "60px", width: "20px" }}></div>
                            <p>
                                {talk.number}) <b>{talk.completeName}</b> - {talk.institution}
                            </p>
                            <p style={{ textAlign: "center" }}><i>{talk.title}</i></p>
                            <p>
                                <Latex>{talk.abstract}</Latex>
                            </p>
                            <div style={{ height: "60px", width: "20px" }}></div>
                            <Divider />
                        </Fragment>
                        )
                    }
                </Fragment>
                )
            }
            <h1 className={style.paragraphTitle}>Posters</h1>
            <Divider />
            {
                props.submissions["poster"].map(talk => <Fragment key={`talk_${talk.number}`}>
                    <div id={`talk_${talk.number}`} style={{ height: "60px", width: "20px" }}></div>
                    <p>
                        {talk.number}) <b>{talk.completeName}</b> - {talk.institution}
                    </p>
                    <p style={{ textAlign: "center" }}><i>{talk.title}</i></p>
                    <p>
                        <Latex>{talk.abstract}</Latex>
                    </p>
                    <div style={{ height: "60px", width: "20px" }}></div>
                    <Divider />
                </Fragment>
                )
            }

            <a href="#programme" style={{ textDecoration: "none", color: "inherit" }}>
                <Fab variant="extended" style={{ padding: "10px", position: "fixed", bottom: "20px", right: "40px", backgroundColor: "white" }}>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Go back
                </Fab>
            </a>
        </Background>
    )
}
