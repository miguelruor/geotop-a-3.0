import Slider from "react-slick";
import styles from "../../assets/css/carousel.module.css"

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToScroll: 1,
  arrows: false,
  swipe: true,
  variableWidth: true,
  slidesToShow: 3,
  className: styles.slider,
  responsive: [
    {
      breakpoint: 600,
      settings: { 
        slidesToShow: 1
      },
    },
    {
      breakpoint: 1000,
      settings: { 
        slidesToShow: 2
      },
    }
  ],
};
// className="slick-slider" en el primer div
const Carousel = ({ images }) => {
  return (
    <>
      <div className={styles.container}>
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <img src={image}/>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
