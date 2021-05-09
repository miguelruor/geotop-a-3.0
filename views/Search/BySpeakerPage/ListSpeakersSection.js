import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./BySpeakerPageStyle";
import Link from 'next/link'
import MenuOpen from '@material-ui/icons/MenuOpen';
import Button from '../../../components/CustomButtons/Button'

const useStyles = makeStyles(styles);

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
                            <Link href={'previous-talks/'+talkID_aux}>
                                <Button 
                                    color='primary' 
                                    className={classes.buttonList}
                                >
                                    {talks[talkID_aux].year}</Button>
                            </Link>
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
                    <h1 className={classes.letter}> 
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