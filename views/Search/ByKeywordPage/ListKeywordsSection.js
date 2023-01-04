import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'
import styles from './ByKeywordPageStyle.js';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Button from '../../../components/CustomButtons/Button'

const useStyles = makeStyles(styles);

export default function ListKeywordsSection(props) {
    const classes = useStyles();

    // keywords[keyword1] = [{"surname": "", "year": "", "url": "", color: ""},...]
    const keywords = props.keywords;

    // keywordsListByLetter[a] = [keyword1_con_a, keyword2_con_a, ...]
    const keywordsListByLetter = props.keywordsListByLetter;

    // Lista ordenada con primeras letras de todas las keywords en mayuscula
    const lettersInKeywords = props.lettersInKeywords;

    // al dar clic en una letra, se pone visitLetters[letter] = True, para mostrar la lista de keywords
    const [visitLetters, setVisitLetters] = useState({});

    // funcion para poner la lista de keywords que empiezan con letter
    function listWithLetter(letter) {
        var orderedKeywords = keywordsListByLetter[letter];
        // Para cada keyword (que es un diccionario) que empieza con letter, imprime

        const listItems = orderedKeywords.map(keyword => {
            let first = true;
            return (
                <li style={{ listStyleType: 'square' }}>
                    <h5 style={{ fontSize: '20px', fontStyle: 'normal' }}>
                        {keyword} <br />
                        {keywords[keyword].map((data) => {
                            return (
                                <>{first ? first = false : ','} {data.surname + " "}
                                    <Link href={data.url}>
                                        <Button
                                            color={data.color}
                                            className={classes.buttonList}>
                                            {data.year}
                                        </Button>
                                    </Link>
                                </>
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