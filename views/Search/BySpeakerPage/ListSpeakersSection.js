import React, {useState} from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import MenuOpen from '@material-ui/icons/MenuOpen';

//import {db} from '../../../ConfigFirebase';
import ReactHtmlParser from 'react-html-parser';

// For modals

import Button from "../../../components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ListSpeakersSection(props){
    const classes = useStyles();

    // lista con id's de speakers para ordenarlos con respecto al apellido del speaker
    const speakersIDList = props.speakersIDList;

    // speakersDic[speaker_id] = {...}
    // name, surname, middle_initial, completeName, talks: [], years: []
    const speakersDic = props.speakers;
    
    // speakersListByLetter[a] = [speaker1_con_a, speaker2_con_a, ...]
    const speakersListByLetter = props.speakersListByLetter;
    
    // Lista ordenada con primeras letras de todas las apellidos sin acentos
    const lettersInSurname = props.lettersInSurname;

    // talks[talk_id] = objecto con llaves speakerID, year, video, date, title, season, slides, keywords, abstract, warning
    const talks = props.talks;

    // al dar clic en una letra, se pone visitLetters[letter] = True, para mostrar la lista de speakers
    const [visitLetters, setVisitLetters] = useState({});

    //modal activo o no
    const [modal, setModal] = useState(false);
    
    // variables de platica del modal actual al dar clic en detalles de platica
    const[talkTitle,setTalkTitle] = useState('');
    const[talkDate,setTalkDate] = useState('');
    const[talkDescription,setTalkDescription] = useState('');
    const[talkVideo,setTalkVideo] = useState('');
    const[talkPresentation,setTalkPresentation] = useState('');
    const[talkSpeaker,setTalkSpeaker] = useState('');
    const[talkKeywords,setTalkKeywords] = useState([]);
    const[warningNote, setWarningNote] = useState('');

    // lista de speakers que empiezan con letter
    function listWithLetter(letter){
        const listItems = speakersListByLetter[letter].map(speaker => {
            var firstTalk = true;
            return(
                <li style={{listStyleType:'square'}}>
                <h5 style={{fontSize: '20px', fontStyle:'normal'}}>{speakersDic[speaker].surname} {speakersDic[speaker].name} {speakersDic[speaker].middle_initial} 
                {speakersDic[speaker].talks.map(function(talkID) {
                    var talkID_aux = talkID.toString();
                    return (
                        <>
                            {firstTalk ? firstTalk=false  : ', ' }
                            <Button 
                                color='primary' 
                                className={classes.buttonList}
                                onClick = {() => {
                                setModal(true);
                                setTalkTitle(talks[talkID_aux].title);
                                setTalkVideo(talks[talkID_aux].video);
                                setTalkPresentation(talks[talkID_aux].slides);
                                setTalkDescription(talks[talkID_aux].abstract);
                                setTalkKeywords(talks[talkID_aux].keywords);
                                setTalkSpeaker(speakersDic[talks[talkID_aux].speaker_id.toString()].completeName); 
                                setTalkDate(talks[talkID_aux].date); 
                                setWarningNote(talks[talkID_aux].warning);
                            }}>
                                {talks[talkID_aux].year}</Button>
                            <Dialog
                                classes={{
                                root: classes.center,
                                paper: classes.modal
                                }}
                                open={modal}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={() => setModal(false)}
                                aria-labelledby="modal-slide-title"
                                aria-describedby="modal-slide-description"
                            >
                                <DialogTitle
                                    id="classic-modal-slide-title"
                                    disableTypography
                                    className={classes.modalHeader}
                                >
                                    <IconButton
                                        className={classes.modalCloseButton}
                                        key="close"
                                        aria-label="Close"
                                        color="inherit"
                                        onClick={() => {
                                            setModal(false);
                                        }
                                    }
                                    >
                                        <Close className={classes.modalClose} />
                                    </IconButton>
                                    <h2 className={classes.modalTitle} >Talk Details</h2>
                                </DialogTitle>
                                <DialogContent
                                    id="modal-slide-description"
                                    className={classes.modalBody}
                                    >
                                    <p><b>Speaker: </b> {talkSpeaker} </p>
                                    <p><b>Title: </b>{talkTitle} </p>
                                    <p><b>Video: </b> {talkVideo === null ? 'Not available yet.' : <a href={talkVideo} target="_blank">Click here</a>} </p>
                                    {/*Cuando una talk no tiene presentacion, talkSlides es undefined, y en otro caso string*/}
                                    {typeof(talkPresentation) == "undefined" ? null : <><p><b>Slides:</b> <a href={talkPresentation} target="_blank">Click here</a></p></>}
                                    {typeof(warningNote) == "undefined" ? null : <><p><b>Warning: </b>{warningNote}</p></>}
                                    <p><b>Date: </b>{talkDate} </p>
                                    <p><b>Keywords: </b> {talkKeywords.join(', ')}</p>
                                    <p><b>Abstract: </b>{ReactHtmlParser (talkDescription)}</p>
                                </DialogContent>
                                <DialogActions className={classes.modalFooter}>
                                <Button
                                    onClick={() => setModal(false)}
                                    color="danger"
                                    simple
                                >
                                    Close
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </>
                    );  
                })}
                </h5>
                </li>
            );
        }
        
        );
        
        return (
            <ul style={{textAlign: 'left'}}>{listItems}</ul>
        );
    }

    function listAlphabetical(){
        const listItems = lettersInSurname.map(letter => 
                <li 
                    style={{cursor: 'pointer'}}> 
                    <h1 className={classes.title}> 
                        {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                        /> {visitLetters[letter] ? listWithLetter(letter) : null}
                    </h1>
                </li>
        );
        return (
            <ul style={{textAlign: 'left'}}>{listItems}</ul>
        );
    }

    const [count, setCount] = useState(0);

    function onclickLetter(letter){
        var newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count+1);
    }
    return(
        <div className={classes.section}> 
            {listAlphabetical()}
        </div>
    );
}