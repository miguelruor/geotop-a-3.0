import Head from "next/head";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from 'next/image';

import styles from "../../assets/css/carousel.module.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import { ImageAspectRatioRounded } from "@material-ui/icons";

export default function Carousel() {
  return (
    <div className={styles.container}>
      {/*<Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>*/}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          orientation="horizontal"
          totalSlides={3}
          className={styles.carousel}
        >
          <Slider className={styles.carouselArea}>
            <Slide index={0} className={styles.carouselItem}>
              <div>
                <Image src='/img/Pics_Geometry/atply2.jpg' layout="intrinsic" width={400} height={300}/>
              </div>
            </Slide>
            <Slide index={1} className={styles.carouselItem}>
              <div>
                <Image src="/img/Pics_Geometry/atply3.jpg" layout="intrinsic" width={400} height={300}/>
              </div>
            </Slide>
            <Slide index={2} className={styles.carouselItem}>
              <div>
                <Image src="/img/Pics_Geometry/atply5.jpg"  layout="intrinsic" width={400} height={300}/>
              </div>
            </Slide>
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
            <Dot slide={0} />
            <Dot slide={1} />
            <Dot slide={2} />
          </div>
        </CarouselProvider>
    </div>
  );
}