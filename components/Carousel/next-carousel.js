import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image';
import sizes from 'react-sizes';

import styles from "../../assets/css/carousel.module.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";

const Carousel = ({images, showItems}) => {
  var indices = []
  for(var i=0; i< images.length; i+=1){
    indices.push(i)
  }

  return (
    <div className={styles.container}>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          orientation="horizontal"
          totalSlides={images.length}
          className={styles.carousel}
          visibleSlides={showItems}
        >
          <Slider className={styles.carouselArea}>
            {images.map((image, i) => 
              <Slide index={i} className={styles.carouselItem}>
                  <Image src={image} layout="intrinsic" width={400} height={300}/>
              </Slide>
              )}
          </Slider>

          <div className={styles.carouselButtons}>
            <ButtonBack>
              <RiArrowLeftSLine size={40} color="#007de7" />
            </ButtonBack>
            <ButtonNext>
              <RiArrowRightSLine size={40} color="#007de7" />
            </ButtonNext>
          </div>

          <div className={styles.carouselPoints}>
            {indices.map(i => <Dot slide={i}/>)}
          </div>
        </CarouselProvider>
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  showItems: (width && width < 650) ? 1 : 2,
});

export default sizes(mapSizesToProps)(Carousel);