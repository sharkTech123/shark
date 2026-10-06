import React from "react";
import Slider from "react-slick";
import {
  FaMusic,
  FaGlassCheers,
  FaTablets,
  FaMoneyBill,
  FaMobileAlt,
  FaUserInjured,
  FaCarCrash,
  FaTachometerAlt,
  FaBed,
  FaBicycle,
} from "react-icons/fa";
import "./Truths.css";
import { useState } from "react";

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

export default function Truths() {
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

  const slides = [
    {
      icon: <FaMusic id="featuresIcon" />,
      title: "1. Distractions",
      link: "https://thehonesttruth.co.uk/pages/distractions",
      description:
        "Music, mobiles, laughing and joking. All signs of a good time, but in a car these things all increase the risk of a collision. Inattention is the most common reason for car crashes and one of the biggest problems facing you as a new driver is carrying friends in your car.",
    },
    {
      icon: <FaGlassCheers id="featuresIcon" />,
      title: "2. Drink Driving",
      link: "https://thehonesttruth.co.uk/pages/drink-driving",
      description:
        "1 in five deaths involve alcohol. Young men aged 16-24 are more likely to die from an alcohol-related road traffic collision and are the cause of over 400 deaths each year.",
    },
    {
      icon: <FaTablets id="featuresIcon" />,
      title: "3. Drugs",
      link: "https://thehonesttruth.co.uk/pages/drugs",
      description:
        "Research by Transport Research Laboratory (TRL) found that 17% of drivers who die in road crashes (more than one in six) have traces of illegal drugs in their system, which may have affected their driving.",
    },
    {
      icon: <FaMoneyBill id="featuresIcon" />,
      title: "4. Insurance",
      link: "https://thehonesttruth.co.uk/pages/insurance",
      description:
        "Insurance can be expensive and the biggest factors that influence your premium are age and where you live. However, using popular price comparison websites, you can easily save up to 35% of the cost of your insurance.",
    },
    {
      icon: <FaMobileAlt id="featuresIcon" />,
      title: "5. Mobile Phones",
      link: "https://thehonesttruth.co.uk/pages/using-a-mobile-phone",
      description:
        "A good driver is completely focused on the road. Always. Using a hand-held or hands-free mobile phone while driving is a distraction and increases the risk of a driver crashing.",
    },
    {
      icon: <FaUserInjured id="featuresIcon" />,
      title: "6. Seatbelts",
      link: "https://thehonesttruth.co.uk/pages/seatbelts",
      description:
        "In a crash, someone not wearing a seatbelt is twice as likely to die as someone who is using one. Research indicates that approximately one-third of those killed in collisions weren’t wearing a seatbelt.",
    },
    {
      icon: <FaCarCrash id="featuresIcon" />,
      title: "7. Showing Off",
      link: "https://thehonesttruth.co.uk/pages/showing-off",
      description:
        "Fancy a £150 fine and a long walk home? The police have the power to seize your vehicle if, after receiving a warning, you drive carelessly or without reasonable consideration for other road users.",
    },
    {
      icon: <FaTachometerAlt id="featuresIcon" />,
      title: "8. Speeding",
      link: "https://thehonesttruth.co.uk/pages/speeding",
      description:
        "Excessive speed contributes to 12% of all injury-causing crashes, 18% of crashes resulting in a serious injury, and 28% of all fatal crashes. Around 500 people are killed each year in Britain due to speeding.",
    },
    {
      icon: <FaBed id="featuresIcon" />,
      title: "9. Tiredness",
      link: "https://thehonesttruth.co.uk/pages/tiredness",
      description:
        "Young drivers are statistically more likely to crash because they are twice as likely to undertake a journey while feeling tired. One in four young drivers admit to continuing to drive while experiencing signs of fatigue.",
    },
    {
      icon: <FaBicycle id="featuresIcon" />,
      title: "10. Road Users",
      link: "https://thehonesttruth.co.uk/pages/passing",
      description:
        "Around 45,000 cyclists and pedestrians are killed or injured on Britain’s roads every year. Cyclists are 30 times more likely to be seriously injured in a collision than a car occupant.",
    },
  ];

  return (
    <div>
      <div className="mainFeatures">
        <div
          className="slider-container"
          style={{ color: "white", maxWidth: "1000px", margin: "0 auto" }}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }>
                <div className="column">
                  <a href={slide.link}>
                    <span>{slide.icon}</span>
                    <h3>{slide.title}</h3>
                  </a>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
