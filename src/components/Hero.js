import '../style/Hero.css';
import BellImage from '../images/Bell.svg';
import Slider from "react-slick";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Hero() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
     slidesToShow: 1.75,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  };


  return (
    <section className='section section-hero'>
      <div className='row row-a'>
        <div className='col col-6 col-a'>
            <img src={BellImage} alt='bell' className='image bell-image' width={'32px'} height={'32px'}/>
            <h4>Get notified when a highly correlated whale makes a move</h4>
            <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
        </div>
        <div className='col col-6 col-b'>
          <Slider {...settings}>
            <Card1/>
            <Card2/>
            <Card3/>
          </Slider>
          <div className='sliderOverlay'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
