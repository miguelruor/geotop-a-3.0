import { RightIcon, LeftIcon } from '../../assets/Icons';
import Image from 'next/image';
import sizes from 'react-sizes';

import styles from "../../assets/css/carousel-v2.module.scss";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";

const Carousel = ({images, showItems, width, height}) => {
  var indices = []
  for(var i=0; i< images.length; i+=1){
    indices.push(i)
  }

  return (
    <div className={styles.container}>
    <main className={styles.main}>
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
              <Slide index={i}>
                  <Image className={styles.carouselItem} src={image} layout="intrinsic" width={width} height={height}/>
              </Slide>
              )}
          </Slider>

          <div className={styles.carouselButtons}>
            <ButtonBack>
              <LeftIcon className={styles.leftArrow}/>
            </ButtonBack>
            <ButtonNext>
              <RightIcon className={styles.rightArrow}/>
            </ButtonNext>
          </div>

          <div className={styles.carouselPoints}>
            {indices.map((i) => <Dot key={i} slide={i}/>)}
          </div>
        </CarouselProvider>
    </main>
    </div>
  );
}

const mapSizesToProps = ({ width }) => ({
  showItems: (width && width < 1050) ? 1 : 3,
  width: (width && width < 650) ? 250 : 350,
  height: (width && width < 650) ? 200 : 262,
});

export default sizes(mapSizesToProps)(Carousel);