import React from "react";
// react component for creating beautiful carousel
//import Carousel from "react-slick";
import Carousel from "./next-carousel";
import Card from "../Card/Card.js";
import Image from 'next/image';

function renderCarouselImage(src, imagesDirectory) {
  return (
    <>
    <div style={{padding: "10px"}}>
      <Image 
        src={imagesDirectory+src}  
        width={200}
        height={200}/>
    </div>
    </>
  );
}
//layout="responsive"
//className="slick-image" 

function renderImages(images, imagesDirectory) {
  const n_images = images.length;

  let imgs = [];
  for (let i = 0; i<n_images; i++) {
    //imgs.push(renderCarouselImage(images[i].default));
    imgs.push(renderCarouselImage(images[i], imagesDirectory));
  }

  return imgs;
}

export default function SectionCarousel({geometryImages, topologyImages}) {
  
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
  
  const imagesDirectory = "/img";

  const listGeometryImages = renderImages(geometryImages, imagesDirectory+"/Pics_Geometry/");
  const listTopologyImages = renderImages(topologyImages, imagesDirectory+"/Pics_Topology/");

  return (
    //<div className={classes.section}>
    //  <div className={classes.container}>
    //    <GridContainer>
    //      <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
    <>
      <Carousel />
    </>
      /*<Card carousel>
        <Carousel {...settings}>
          {listGeometryImages.map(image => image)}
          {listTopologyImages.map(image => image)}
        </Carousel>
      </Card>*/
    //      </GridItem>
    //    </GridContainer>
    //  </div>
    //</div>
  );
}