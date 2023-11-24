import "../style/Testimonial.css";
import LogoImg from "../images/Vector.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
  var data = [
    {
      name: "Jack F",
      company: "Ex Blackrock PM",
      description:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
      size: "clamp(310px, 10%, 373px)",
    },
    {
      name: "Yash P",
      company: "Research, 3poch Crypto Hedge Fund",
      description:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
      size: "clamp(310px, 10%, 373px)",
    },
    {
      name: "Shiv S",
      company: "Co-Founder Magik Labs",
      description:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
      size: "clamp(310px, 10%, 551px)",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
  };

  return (
    <section className="section section-testimonials">
      <h5 className="testimonialsHeading">Testimonials</h5>
      <div className="row">
        <div className="col col-a">
          <img src={LogoImg} alt="logo" className="image logoImg" />
        </div>
        <div className=" col col-b">
          <Slider {...settings}>
            {data.map((item, key) => (
              <div
                className="testimonial"
                key={key}
                style={{ width: item.size }}
              >
                <div className="testimonialContent">
                  <div className="testimonialHeader">
                    <p>
                      <span className="testimonialName">{item.name}</span>
                      <span className="testtimonialCompany">
                        {item.company}
                      </span>
                    </p>
                  </div>
                  <p className="testimonialDescription">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
