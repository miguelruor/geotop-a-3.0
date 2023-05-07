import Head from 'next/head';
import React from "react";
import Header from "../Header/Header";
import Footer from "../../Footer/Footer";
import Parallax from "../../Parallax/Parallax.js";
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../views/HomePage/HomePageStyle.js";

// nodejs library that concatenates classes
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function Background(props) {
    const { title, children } = props;

    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>GEOTOP-A</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1" />
            </Head>
            <div>
                <Header
                    color="blue"
                    brand="Admin site"
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                />

                <Parallax style={{ backgroundSize: "auto 100%", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundColor: "black" }} image={"/img/admin/banner.png"}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>{title}</h1>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.containerContent} >
                        <div className={classes.containerContentAux}>
                            {children}
                        </div>
                    </div>
                </div>
                <Footer image={"/img/admin/footer.png"} />
            </div>
        </div >
    )
}
