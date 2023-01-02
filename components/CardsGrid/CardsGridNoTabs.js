import styles_upper from "./CardsGrid.module.css";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import styles from "../../assets/jss/material-kit-react/components/navPillsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import Button from "../CustomButtons/Button.js";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles(styles);

const CardsGridNoTabs = ({ cardsContent, upper_legend, button_text }) => {

    // cardsContent = { tabText: [card1, card2, ...], ... }
    // each card has topNote, title, subtitle, link, image path
    // upper_legend = text to be displayed above the grid
    // button_text = text to be displayed in the button of each card

    const classes = useStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );

    return (
        <div className={styles_upper.cards_grid} >
            {upper_legend ? <h3 className={styles_upper.upper_legend}>{upper_legend}</h3> : null}
            <div className={styles_upper.container}>
                <div>
                    <GridContainer style={{ justifyItems: "stretch", padding: "5%" }}>
                        {cardsContent.map((card) => {
                            return (
                                <GridItem xs={12} sm={6} md={4}>
                                    <Card plain className={classes.layout} style={{ margin: "0px", textAlign: "center" }}>
                                        <div className={classes.layoutItem}>
                                            <h4
                                                className={classes.cardTitle}
                                                style={{ textAlign: "left" }}
                                            >
                                                <small className={classes.smallTitle}>
                                                    {card.topNote}
                                                </small>
                                            </h4>
                                        </div>
                                        {/* Antes la imagen estaba dentro de un GridItem con clase classes.itemGrid*/}
                                        <div className={classes.layoutItem}>
                                            <Image
                                                src={card.image}
                                                width={230}
                                                height={230}
                                                className={imageClasses}
                                            />
                                        </div>
                                        <div className={classes.layoutItem}>
                                            <h4 className={classes.cardTitle}>
                                                {card.title}
                                                <br />
                                                <small className={classes.smallTitle}>
                                                    {card.subtitle}
                                                </small>
                                            </h4>
                                        </div>
                                        <div className={classes.layoutItem}>
                                            <Link href={card.link}>
                                                <Button
                                                    round
                                                    color="primary"
                                                    className={classes.button}
                                                >
                                                    {button_text ?? "Details"}
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                </GridItem>
                            );
                        })}
                    </GridContainer>
                </div>
            </div>
        </div >
    )
}

export default CardsGridNoTabs