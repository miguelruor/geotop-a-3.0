import React from "react";
import Carousel from "react-slick";
import Card from "../Card/Card.js";
import styles from "../../assets/css/carousel.module.scss"

//import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
//const useStyles = makeStyles(styles);

function renderImages(images) {
  return (
    images.map(src => {
      <>
        <div style={{ padding: "10px" }}>
          <img
            src={src}
            className={styles.slick_image} />
        </div>
      </>
    })
  )
}

export default function SectionCarousel(props) {

  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    adaptiveHeight: true
  };

  return (
    //<div className={classes.section}>
    //  <div className={classes.container}>
    //    <GridContainer>
    //      <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
    <Card carousel>
      <Carousel {...settings} className={styles.slick_slider}>
        {renderImages(props.images)}
      </Carousel>
    </Card>
    //      </GridItem>
    //    </GridContainer>
    //  </div>
    //</div>
  );
}