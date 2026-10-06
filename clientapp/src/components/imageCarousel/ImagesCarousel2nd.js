import React, { useState } from "react";
import "./ImageCarousel.css";
import Slider from "react-slick";
import image1 from "../../assets/images/carousel2nd/img1.jpg";
import image2 from "../../assets/images/carousel2nd/img2.jpg";
import image3 from "../../assets/images/carousel2nd/img3.jpg";
import image4 from "../../assets/images/carousel2nd/img4.jpg";
import image5 from "../../assets/images/carousel2nd/img5.jpg";
import image6 from "../../assets/images/carousel2nd/img6.jpg";
import image7 from "../../assets/images/carousel2nd/img7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function ImagesCarousel2nd() {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div
      className="slider-container"
      style={{ color: "white", maxWidth: "1000px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            className={index === slideIndex ? "slide slide-active" : "slide"}
            key={index}>
            <img
              src={img}
              alt=""
              style={{ border: "1px solid rgb(255, 217, 0)" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
