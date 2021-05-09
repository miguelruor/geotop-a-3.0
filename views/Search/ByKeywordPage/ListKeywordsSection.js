import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'
import styles from './ByKeywordPageStyle.js';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Button from '../../../components/CustomButtons/Button'

import removeAccents from "remove-accents";

const useStyles = makeStyles(styles);

export default function ListKeywordsSection(props) {
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

    // funcion para poner la lista de keywords que empiezan con letter
    function listWithLetter(letter) {
        var orderedKeywords = keywordsListByLetter[letter];

        // ordenar keywords que empiezan con letter sin considerar acentos (removeAccents) ni mayusculas
        orderedKeywords.sort(function (a, b) {
            if (removeAccents((Object.keys(a))[0]).toLowerCase() > removeAccents((Object.keys(b))[0]).toLowerCase()) {
                return 1;
            }
            if (removeAccents((Object.keys(a))[0]).toLowerCase() < removeAccents((Object.keys(b))[0]).toLowerCase()) {
                return -1;
            }
            return 0;
        });

        // Para cada keyword (que es un diccionario) que empieza con letter, imprime

        const listItems = orderedKeywords.map(keyword => {
            return (
                <li style={{ listStyleType: 'square' }}>
                <h5 style={{ fontSize: '20px', fontStyle: 'normal' }}>

                    {/*Object.keys(keyword) realmente solo tiene una llave, que es la keyword */}
                    {Object.keys(keyword).map(function (k) {
                        let first = true;

                        return (
                            <>
                                {k} <br />
                                {keywords[k].map((data) => {
                                    return (
                                        <>{first ? first = false : ','} {allTalks[data].surname + " "}
                                            <Link href={'previous-talks/'+ data}>
                                                <Button
                                                    color='primary'
                                                    className={classes.buttonList}>
                                                    {allTalks[data].year}
                                                </Button>
                                            </Link>
                                        </>
                                    )
                                })} </>
                        )
                    })}
                </h5>
                </li>
            );
        });

        return (
            <ul style={{ listStyleType: 'none' }}>
                {listItems}
            </ul>
        );
    }

    function listAlphabetical() {
        const listItems = lettersInKeywords.map(letter =>
            <li
                style={{ listStyleType: 'none' }} >
                <h1 className={classes.letter}>
                    {letter} <MenuOpen
                        onClick={onclickLetter.bind(this, letter)}
                        style={{ cursor: 'pointer' }}
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
        let newVisit = visitLetters;
        newVisit[letter] = !newVisit[letter];
        setVisitLetters(newVisit);
        setCount(count + 1);
    }

    return (
        <div className={classes.section} >
            {listAlphabetical()}
        </div>
    );
}