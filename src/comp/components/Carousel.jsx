import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import CSAbasket from "../../assets/CSAbasket.jpg";
import CSAmap from "../../assets/CSAmap.jpg";
import CSAvariety from "../../assets/CSAvariety.jpg";
import CSAwide from "../../assets/CSAwide.jpg";

function DarkVariantExample() {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider data-bs-theme="dark" {...settings} style={{ zIndex: "-1" }}>
      <div>
        <img className="d-block w-100" src={CSAbasket} alt="First slide" />
      </div>
      <div>
        <img className="d-block w-100" src={CSAmap} alt="Second slide" />
      </div>
      <div>
        <img className="d-block w-100" src={CSAvariety} alt="Third slide" />
      </div>
      <div>
        <img className="d-block w-100" src={CSAwide} alt="Third slide" />
      </div>
    </Slider>
  );
}

export default DarkVariantExample;
