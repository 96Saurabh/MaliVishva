import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './HeroSlider.module.css';
import HeroImg1 from "./Image/HeroImg1.png"
import HeroImg2 from "./Image/HeroImg2.png"
import HeroImg3 from "./Image/HeroImg3.png"

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={styles.hero}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={HeroImg1} alt="Slide 1" />
          <div className={styles.caption}>
            {/* <h1>Welcome to Our Site</h1>
            <p>Best services for you</p> */}
          </div>
        </div>
        <div className={styles.slide}>
          <img src={HeroImg2} 
          alt="Slide 2" />
          <div className={styles.caption}>
            {/* <h1>Discover Great Opportunities</h1>
            <p>Join our platform today</p> */}
          </div>
        </div>
        <div className={styles.slide}>
          <img src={HeroImg3} 
          alt="Slide 2" />
          <div className={styles.caption}>
            {/* <h1>Discover Great Opportunities</h1>
            <p>Join our platform today</p> */}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
