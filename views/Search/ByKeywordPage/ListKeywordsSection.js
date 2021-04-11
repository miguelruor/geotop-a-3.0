import React, {useState, useEffect} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from './ByKeywordPageStyle.js';
import MenuOpen from '@material-ui/icons/MenuOpen';

import removeAccents from "remove-accents"

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

export default function ListKeywordsSection(props){
    const classes = useStyles();
    
    // keywords[DNA] = [talk1_id, talk2_id,...]  --- DNA denota una keyword
    const keywords = props.keywords;

    // keywordsListByLetter[a] = [{keyword1_con_a: [talk1_id, talk2_id, ...]}, 
    //                                    {keyword2_con_a: [talk3_id, ...]}, ...]
    const keywordsListByLetter = props.keywordsListByLetter;

    // Lista ordenada con primeras letras de todas las keywords en mayuscula
    const lettersInKeywords = props.lettersInKeywords;
    
    // allTalks[talk_id] = objecto con llaves surname, speaker, year, video, date, title, slides, keywords, abstract, warning
    // speaker es el nombre completo
    const allTalks = props.talks;
    
    // al dar clic en una letra, se pone visitLetters[letter] = True, para mostrar la lista de keywords
    const [visitLetters, setVisitLetters] = useState({});
    
    // variable para poner modal o no
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

    // funcion para poner la lista de keywords que empiezan con letter
    function listWithLetter(letter){
        var orderedKeywords = keywordsListByLetter[letter];

        // ordenar keywords que empiezan con letter sin considerar acentos (removeAccents) ni mayusculas
        orderedKeywords.sort(function(a,b){
            if(removeAccents((Object.keys(a))[0]).toLowerCase() > removeAccents((Object.keys(b))[0]).toLowerCase()){
                return 1;
            }
            if(removeAccents((Object.keys(a))[0]).toLowerCase() < removeAccents((Object.keys(b))[0]).toLowerCase()){
                return -1;
            }
            return 0;
        });

        // Para cada keyword (que es un diccionario) que empieza con letter, imprime

        const listItems = orderedKeywords.map(keyword =>{
            return(
            <li style={{listStyleType:'square'}}> 
            <h5 style={{fontSize: '20px', fontStyle:'normal'}}> 

                {/*Object.keys(keyword) realmente solo tiene una llave, que es la keyword */}
                {Object.keys(keyword).map(function(k) {
                    let first = true;    
                    
                    return (
                       <> 
                       {k} <br/>
                       {keywords[k].map((data) =>{ 
                        return (
                            <>{first ? first = false : ','} {allTalks[data].surname + " "} 
                            <Button 
                                color='primary' 
                                className={classes.buttonList}
                                onClick = {() => {
                                setModal(true);
                                setTalkTitle(allTalks[data].title);
                                setTalkVideo(allTalks[data].video);
                                setTalkPresentation(allTalks[data].slides);
                                setTalkDescription(allTalks[data].abstract);
                                setTalkKeywords(allTalks[data].keywords);
                                setTalkSpeaker(allTalks[data].speaker); 
                                setTalkDate(allTalks[data].date); 
                                setWarningNote(allTalks[data].warning);
                            }}>
                                {allTalks[data].year}</Button>
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
                        )
                       })} </>    
                    )})}
            </h5>
            </li>
            );
        });
        
        return (
            <ul style={{listStyleType:'none'}}>
                {listItems}
            </ul>
        );
    }

    function listAlphabetical(){
        const listItems = lettersInKeywords.map(letter => 
                <li
                    style={{listStyleType:'none'}} > 
                    <h1 className={classes.letter}> 
                        {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                        style={{cursor: 'pointer'}}
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
        let newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count+1);
    }

    return(
        <div className={classes.section} > 
            {listAlphabetical()}
        </div>
    );
}