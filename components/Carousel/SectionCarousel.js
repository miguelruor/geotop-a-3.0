import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import Card from "../Card/Card.js";
import Image from 'next/image';

function renderCarouselImage(src) {
  return (
    <>
    <div style={{padding: "10px"}}>
      <Image 
        src={src}  
        className="slick-image" />
    </div>
    </>
  );
}

function renderImages(images) {
  const n_images = images.length;

  let imgs = [];
  for (let i = 0; i<n_images; i++) {
    //imgs.push(renderCarouselImage(images[i].default));
    imgs.push(renderCarouselImage(images[i]));
  }

  return imgs;
}

export default function SectionCarousel({geometryImages,topologyImages}) {
  
  //const classes = useStyles();
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    adaptiveHeight: true
  };

  // Funcion para leer todos los archivos de una carpeta (npm install --save-dev webpack@4.44.2 webpack-cli)
  function importAll(r) {
    return r.keys().map(r);
  }
  
  return (
    //<div className={classes.section}>
    //  <div className={classes.container}>
    //    <GridContainer>
    //      <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card carousel>
            <Carousel {...settings}>
              {renderImages(geometryImages)}
              {renderImages(topologyImages)}
            </Carousel>
          </Card>
    //      </GridItem>
    //    </GridContainer>
    //  </div>
    //</div>
  );
}