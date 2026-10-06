import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  BookOpen,
  TrafficCone,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Bell,
  ArrowLeftRight,
  Section,
} from "lucide-react";

import { FaCheckCircle } from "react-icons/fa";

// ================= IMAGES =================
import bannerImg from "../../../assets/alertbg.png";
import turnLeftSign from "../../../assets/images/turn-left-ahead-sign.jpg";
import circleOrders from "../../../assets/images/30-red-150x150.jpg";
import triangleAhead from "../../../assets/images/triangle.png";
import oneWyroad from "../../../assets/images/one-way-rectangle-equals-information.png";
import stopSign from "../../../assets/images/stop-sign-150x150.jpg";
import giveWay from "../../../assets/images/576px-Give-Way-sign.svg.png";
import NoSpeed from "../../../assets/images/no-speed-lim.png";
import capture from "../../../assets/images/Capture.png";
import NoMotorVehicle from "../../../assets/images/No-motor-Vehicles@3x.png";
import MauritiusRoad from "../../../assets/images/Mauritius_Road_Signs.png";
import TwoWayRoad from "../../../assets/images/Two-way_traffic_straight.svg-1024x905.png";
import peopleWalking from "../../../assets/images/peopleWalking.jpg";
import capture1 from "../../../assets/images/Capture-1.png";
import endDual from "../../../assets/images/endDual.png";
import traffLights from "../../../assets/images/traf-lights.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function RoadTraffic() {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, rotateX: 90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );

    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => <span key={i}>{char}</span>);

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] sm:h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-4xl text-white">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight"
            >
              {splitText("Topic: Road and Traffic Signs")}
            </h1>
          </div>
        </div>
      </section>

      {/* ================= WHAT ARE SIGNS ================= */}
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-5 flex items-center gap-3">
              <BookOpen className="text-pink-600" />
              What are road and{" "}
              <span className="text-pink-600">Traffic Signs?</span>
            </h2>

            <p className="text-slate-700 leading-relaxed">
              The 11th topic from the theory test is road and traffic signs.
              Whilst all of the topics we’ve covered (and are going to cover)
              are vital in helping you become a safe driver, road and traffic
              signs probably take the cake in terms of importance. Once you get
              behind the wheel in your lessons, you’ll need to be able to
              identify road and traffic signs and know what action(s) you need
              to take. Otherwise, you could end up endangering yourself and
              other road users.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl flex justify-center">
            <img
              src={turnLeftSign}
              alt="turnLeftSign"
              className="w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= YOU WILL LEARN ================= */}
      <section className="bg-white">
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8">
              In this section of multiple choice,{" "}
              <span className="text-pink-600">you’ll find out about:</span>
            </h2>

            <ul className="bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              {[
                "The shapes of road signs",
                "Road markings",
                "The colours of traffic lights and their sequences",
                "Motorway warning lights",
                "The signals used by other drivers and by police officers",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm sm:text-base">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= SIGN SHAPES ================= */}
        <section className="py-16 sm:py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
              What do the <span className="text-pink-600">shapes of signs</span>{" "}
              mean?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: circleOrders,
                  title: "Circle = Orders",
                  text: "signs give orders – they must be followed to stay within the law. Circles with a red border tell you what you must not do (e.g. take a U-turn). Blue circles usually give positive instruction, such as ‘turn left ahead’.",
                },
                {
                  img: triangleAhead,
                  title: "Triangle = Warning",
                  text: "Triangular signs warn. Road signs in the shape of an equilateral triangle are designed to warn you about the road layout or any hazards that lie ahead, such as sharp bends. They almost always have a red border.",
                },
                {
                  img: oneWyroad,
                  title: "Rectangle = Information",
                  text: "Rectangular signs inform. Blue rectangular signs give information on motorways, green signs direct you on primary roads, while white signs give directions on minor roads. Rectangular signs can also indicate bus lanes and congestion charge zones.",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl shadow-xl text-center"
                >
                  <img
                    src={box.img}
                    alt={box.title}
                    className="mx-auto mb-4 h-24"
                  />
                  <h4 className="font-bold text-xl mb-3">{box.title}</h4>
                  <p className="text-slate-600">{box.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMMON SIGNS (REPEATED SECTIONS) ================= */}
        {[
          {
            title: "National Speed Limit",
            img: NoSpeed,
            points: [
              "A white circular sign with a single black diagonal stripe through it tells you that the national speed limit applies on the upcoming stretch of road. It supersedes any previous speed limit signs you may have had to adhere to, such as passing through temporary roadworks. But what are the national speed limits?",
              "Built-up area: On a road where there are street lamps placed no more than 200 yards apart, the speed limit is 30mph for all vehicles. Single carriageway: For cars and vans, the speed limit is 60mph, or 50mph if you’re towing a trailer or caravan. Dual carriageway and motorway: It’s 70mph for cars and vans, or 60mph if you’re towing a trailer or caravan. Of course, even when the national speed limit applies, it might not always be safe to drive at that speed, so use your common sense on this.",
            ],
          },
          {
            title: "No Waiting / Urban Clearway",
            img: capture,
            points: [
              "‘No waiting’ signs are easily confused with ‘no stopping’ signs. Rather than displaying a red cross, they feature a single diagonal red stripe on the same blue background.",
              "Drivers are allowed to drop off or pick up a passenger in a no waiting zone, although anything longer is prohibited.",
              "The signs are almost always used alongside (or within) rectangular yellow signs which show details of enforcement hours.",
            ],
          },
          {
            title: "No Motor Vehicles",
            img: NoMotorVehicle,
            points: [
              "This sign means that you must not drive any motor vehicle down a road where this is displayed. It could be that the area is reserved for pedestrians and cyclists only.",
              "This no motor vehicles sign showing a motorbike over a car is sometimes misunderstood to mean only cars and motorcycles are permitted.",
            ],
          },
          {
            title: "No Overtaking",
            img: MauritiusRoad,
            points: [
              "There are several reasons why you might see this sign – it is often displayed when the road has poor visibility or if it’s too narrow for safe overtaking.",
              "It also warns you when there’s a high risk of vehicles pulling out from parking spaces or driveways that would increase the risk of a head-on collision.",
            ],
          },
          {
            title: "Two-Way Traffic Straight Ahead",
            img: TwoWayRoad,
            points: [
              "Sometimes you’ll see a red triangular sign with two black arrows pointing in opposite directions. These are used to make you aware that you’re about to leave a separated one-way street and enter a two-way road.",
              "If the arrows are positioned vertically, it means the road you’re driving on will soon carry two-way traffic.",
              "You should keep to the left-hand side of the road and be aware of oncoming traffic. If they’re horizontal, it indicates that you’ll have to turn either left or right to join the two-way road ahead.",
            ],
          },
          {
            title: "People Walking Along The Road",
            img: peopleWalking,
            points: [
              "A sign showing the silhouette of an adult and child holding hands lets drivers know that pedestrians might be present on the road ahead. Like other warning signs, it appears in a red triangle.",
              "A second sign reading ‘No footway for X yds’ may also feature where pedestrians may be in the road for longer distances.",
            ],
          },
          {
            title: "Road Narrows",
            img: capture1,
            points: [
              "This ‘bottleneck’ sign looks very similar to the ‘dual carriageway ends’ sign, except for one key difference; the vertical lines remain separate despite coming closer together.",
              "Pay special attention to nearby road markings, as the width of lanes will begin to change.",
            ],
          },
          {
            title: "End Of Dual Carriageway",
            img: endDual,
            points: [
              "This ‘bottleneck’ sign looks very similar to the ‘dual carriageway ends’ sign, except for one key difference; the vertical lines remain separate despite coming closer together.",
              "Pay special attention to nearby road markings, as the width of lanes will begin to change.",
            ],
          },
        ].map((section, idx) => (
          <section key={idx} className="py-10 bg-slate-50 fade-up">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center" style={{placeItems:"center"}}>
              <img
                src={section.img}
                alt={section.title}
                className="rounded-3xl shadow-2xl"
                style={{ maxWidth: "300px", width: "100%" }}
              />
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="text-green-600 mt-1" />
                      <p>{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* ================= TRAFFIC LIGHTS ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={traffLights}
              alt="Traffic Lights"
              className="rounded-3xl shadow-2xl"
              style={{ maxWidth: "500px", width: "100%" }}
            />
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold mb-4">Traffic Lights</h3>
              <p className="text-slate-700 leading-relaxed">
                Traffic lights are signalling devices positioned at road
                intersections, pedestrian crossings, and other locations to
                control the flows of traffic. They work in a sequence and
                different colours instruct you to do a different thing.
              </p>
            </div>
          </div>
        </section>
        {/* ================= CAR SIGNALS ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                Car <span className="text-pink-600">Signals</span>
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Understanding how drivers communicate using signals is essential
                for safe driving.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* ================= INDICATING ================= */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-8 text-center">
                <div className="flex justify-center mb-5">
                  <ArrowLeftRight className="w-14 h-14 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold mb-4">Indicating</h3>

                <p className="text-slate-600 leading-relaxed">
                  Indicating is the most common signal you will see and use to
                  tell other drivers that you wish to turn. To avoid confusing
                  other road users you should ensure that your indicators are
                  cancelled after you’ve turned and be aware that another driver
                  may have left their indicator on by mistake.
                </p>
              </div>

              {/* ================= CAR HORN ================= */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-8 text-center">
                <div className="flex justify-center mb-5">
                  <Bell className="w-14 h-14 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold mb-4">Car Horn</h3>

                <p className="text-slate-600 leading-relaxed">
                  Another way of signalling your intentions is to use your horn
                  or lights to alert another road user to the fact that you are
                  there. You must not use your horn between 11.30 pm and 7.00 am
                  when driving in a built-up area or when your car is
                  stationary. The only exception to this is if another road user
                  has placed you in danger.
                </p>
              </div>

              {/* ================= CAR LIGHTS ================= */}
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-8 text-center">
                <div className="flex justify-center mb-5">
                  <Lightbulb className="w-14 h-14 text-green-600" />
                </div>

                <h3 className="text-xl font-bold mb-4">Car Lights</h3>

                <p className="text-slate-600 leading-relaxed">
                  Like your horn, headlights are to only be used to alert other
                  road users of your presence. You can use your hazard warning
                  lights briefly to warn drivers behind you that there’s an
                  obstruction ahead if you’re driving on a motorway or
                  unrestricted dual carriageway.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUIZ ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-6">Test Yourself</h2>

            <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-2">Start Quiz</h3>
              <p className="mb-6">
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Road-and-Traffic-Signs">
                <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full text-white font-semibold shadow-lg">
                  Start Quiz
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
