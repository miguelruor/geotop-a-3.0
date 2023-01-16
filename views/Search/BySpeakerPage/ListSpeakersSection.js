import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "./BySpeakerPageStyle";
import Link from 'next/link'
import MenuOpen from '@material-ui/icons/MenuOpen';
import Button from '../../../components/CustomButtons/Button'

const useStyles = makeStyles(styles);

export default function ListSpeakersSection(props) {
    const classes = useStyles();
    // speakersDic[speaker_id] = {...}
    // name, surname, middle_initial, completeName, talks: [{"url": "", "year": ""}]
    const speakersDic = props.speakers;

    // speakersListByLetter[a] = [speaker1_con_a, speaker2_con_a, ...]
    const speakersListByLetter = props.speakersListByLetter;

    // Lista ordenada con primeras letras de todas las apellidos sin acentos
    const lettersInSurname = props.lettersInSurname;

    // al dar clic en una letra, se pone visitLetters[letter] = True, para mostrar la lista de speakers
    const [visitLetters, setVisitLetters] = useState({});

    // lista de speakers que empiezan con letter
    function listWithLetter(letter) {
        const listItems = speakersListByLetter[letter].map(speakerId => {
            var firstTalk = true;
            return (
                <li style={{ listStyleType: 'square' }}>
                    <h5 style={{ fontSize: '20px', fontStyle: 'normal' }}>{speakersDic[speakerId].surname} {speakersDic[speakerId].name} {speakersDic[speakerId].middle_initial}
                        {speakersDic[speakerId].talks.map(function (talkInfo) {
                            return (
                                <>
                                    {firstTalk ? firstTalk = false : ', '}
                                    <Link href={talkInfo.url}>
                                        <Button
                                            color={talkInfo.color}//'primary'
                                            className={classes.buttonList}
                                        >
                                            {talkInfo.year}</Button>
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
            <ul style={{ textAlign: 'left' }}>{listItems}</ul>
        );
    }

    function listAlphabetical() {
        const listItems = lettersInSurname.map(letter =>
            <li
                style={{ cursor: 'pointer' }}>
                <h1 className={classes.letter}>
                    {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                    /> {visitLetters[letter] ? listWithLetter(letter) : null}
                </h1>
            </li>
        );
        return (
            <ul style={{ textAlign: 'left' }}>{listItems}</ul>
        );
    }

    const [count, setCount] = useState(0);

    function onclickLetter(letter) {
        var newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count + 1);
    }
    return (
        <div className={classes.section}>
            {listAlphabetical()}
        </div>
    );
}