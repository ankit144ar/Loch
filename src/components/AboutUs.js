import "../style/AboutUs.css";
import dashboadImage from "../images/Cohorts.png";
import EyeImage from "../images/Eye.svg";

function AboutUs() {
  return (
    <section className="section section-aboutUs">
      <div className="row row-a">
        <div className="col col-6 col-a">
          <img src={dashboadImage} alt="dashboad_Image" />
        </div>
        <div className="col col-6 col-b">
          <div className="iinerContainer">
            <img src={EyeImage} alt="eye" width={"32px"} height={"32px"} />
            <h4>Watch what the whales are doing</h4>
            <p>
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
