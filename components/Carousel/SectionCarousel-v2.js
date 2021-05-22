import React from "react";
// react component for creating beautiful carousel
//import Carousel from "react-slick";
import Carousel from "./next-carousel";

export default function SectionCarousel({images}) {
  return (
    <div className='section'>
      <Carousel images={images}/>
    </div>
  );
}