import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Fuel,
  Car,
  Disc,
  Route,
  Volume1,
  Lock,
  ParkingSquare,
  Leaf,
  BatteryCharging,
  AlertTriangle,
} from "lucide-react";
import styles from "./css/Alertness.module.css";

import orangeSafety from "../../../assets/alertbg.png";
import routePlanning from "../../../assets/images/routesPlanning.jpg";
import vehicleS from "../../../assets/images/vehicalS.jpeg";
import parking from "../../../assets/images/parkingImg.jpg";
import enviromentIssue from "../../../assets/images/enviromentalIssueImg.jpg";
import GeneralIssue from "../../../assets/images/ORANGE-SAFETY.png";
import GeneralIssue2 from "../../../assets/images/generalTips.jpg";

const SafetyAndRoad = () => {
  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-fixed"
          style={{ backgroundImage: `url(${orangeSafety})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Safety & <span className="text-red-500">Your Vehicle</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn how vehicle maintenance, responsibility, and preparation
                play a vital role in road safety.
              </p>

              <Link to="/Contact-Us">
                <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS SAFETY ================= */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
              What is{" "}
              <span className="text-red-600">Safety in Your Vehicle?</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              The 3rd topic from the multiple-choice section of the theory test
              is safety and your vehicle. While most of the topics we’ve
              previously covered have focused on the rules of the road, road
              safety and your overall attitude towards driving, this one looks
              at how you need to maintain your vehicle and why it’s your
              responsibility to do so.
            </p>

            <p className="mt-3 text-slate-600">
              It also covers other safety considerations that you need to think
              about every time you get behind the wheel.
            </p>
          </div>

          <img
            src={GeneralIssue}
            alt="Vehicle Safety"
            className="rounded-3xl shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* ================= VEHICLE SAFETY ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-4 mb-10">
            <ShieldCheck className="w-9 h-9 text-red-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
              Vehicle <span className="text-red-600">Safety</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: GeneralIssue,
                icon: <Fuel className="w-8 h-8 text-red-600 mb-3" />,
                title: "Fuel Consumption",
                points: [
                  " High fuel consumption can be caused by accelerating, high speed driving, harsh braking and unnecessary weight on the roof rack.",
                  "Fuel consumption can be reduced by smooth driving, lowering speed, proper maintenance of the vehicle and, missing out some gears while driving.",
                ],
              },
              {
                img: vehicleS,
                icon: <Car className="w-8 h-8 text-red-600 mb-3" />,
                title: "Steering & Engine Oil",
                points: [
                  "Heavy steering is caused by under-inflated tyres.",
                  "Do not turn the steering wheel when stationary as this can damage the wheel itself and the tyres.",
                  "Always check oil levels before a long journey and be aware that too much oil can cause a leak.",
                  "Dispose of old oil at a registered local authority site.",
                ],
              },
              {
                img: parking,
                icon: <Volume1 className="w-8 h-8 text-red-600 mb-3" />,
                title: "Horn, Suspension and the exhaust",
                points: [
                  "Horns must not be used in built-up areas between 11.30 pm and 7.00 am.",
                  "If the car keeps bouncing when you press down on the front wing, this means that the shock absorbers are worn and need replacing.",
                  "The catalytic converter is located on the exhaust system and reduces toxic gas emissions.",
                ],
              },
              {
                img: vehicleS,
                icon: <Car className="w-8 h-8 text-red-600 mb-3" />,
                title: "Tyres and Wheels",
                points: [
                  "Tyre pressures should be regularly checked when the tyres are cold.",
                  "Under-inflated tyres can lead to poor braking, increased fuel consumption and heavy steering.",
                  "Excessive and uneven tyre wear can be caused by a defective braking or suspension system or poor wheel alignment.",
                  "The minimum tread depth must be 1.6 mm over ¾ of the tread breadth.",
                  "Tyres that have cuts in the side wall are illegal and must be replaced.",
                ],
              },
              {
                img: parking,
                icon: <BatteryCharging className="w-8 h-8 text-red-600 mb-3" />,
                title: "Batteries and General",
                points: [
                  "Most modern batteries are sealed and require no maintenance. Old style batteries need topping up with distilled water to just above the battery cell plates.",
                  "Used batteries are toxic and should be taken to a garage or local authority site.",
                  "Headlights, seat belts and the windscreen must be maintained in good condition by law.",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 sm:h-48 md:h-52 lg:h-56 w-full object-cover"
                />
                <div className="p-6 sm:p-8 border-t-8 border-red-500">
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <ul
                    className="list-disc list-inside text-slate-700 space-y-1"
                    style={{ paddingLeft: "0px" }}>
                    {item.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROUTE & SECURITY ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              img: routePlanning,
              icon: <Route className="w-7 h-7 text-red-600" />,
              title: "Route Planning",
              text: "Allow plenty of time for your journey, avoiding busy times if possible to avoid delays and help reduce congestion. • Study maps or an internet route planner, printing it out if necessary and plan alternative routes in case of unforeseen circumstances.",
            },
            {
              img: vehicleS,
              icon: <Lock className="w-7 h-7 text-red-600" />,
              title: "Vehicle Security",
              text: "• Remove valuables or lock them out of sight and install a security coded radio. • Park in a well-lit area or a secure car park and engage the steering lock when parked. • Install an immobiliser and etch the car number on the windows. • Lock the car and remove the key when parked and never leave an unattended vehicle with the engine running. •Don’t leave vehicle documents in the car.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-l-8 border-red-500">
              <img
                src={item.img}
                alt={item.title}
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PARKING & ENVIRONMENT ================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              img: parking,
              icon: <ParkingSquare className="w-7 h-7 text-red-600" />,
              title: "Parking",
              text: " Do not park where your vehicle will cause an obstruction e.g. near a bus stop, on the brow of a hill or where the curb is lowered for wheelchair users. • Parking lights must be used if you are parking on a road where the speed limit is more than 30 mph.",
            },
            {
              img: enviromentIssue,
              icon: <Leaf className="w-7 h-7 text-red-600" />,
              title: "Environmental Issues",
              text: "• Road transport is responsible for 20% of all emissions, causing air pollution, consumption of natural resources and damage to buildings. • Environmentally friendly vehicles can reduce noise pollution, excessive traffic in towns and can be electricity powered. • The MOT exhaust emission test helps protect the environment. • By reducing speed, servicing your vehicle properly, using gentle acceleration and avoiding frequent, short trips, you too can help the environment.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                {item.icon}
                <h4 className="text-lg sm:text-xl font-semibold mt-2">
                  {item.title}
                </h4>
                <p className="text-slate-700 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GENERAL TIPS ================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-9 h-9 text-red-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                General <span className="text-red-600">Tips</span>
              </h2>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
              <p className="text-slate-700 leading-relaxed">
                Many of the questions in the safety section require answers that
                are governed by law and the regulations must be learnt
                accordingly. You may also be asked about warning lights on the
                dashboard panel, including when an indicator is on, whether
                headlights should be dipped or on full beam and the use of
                hazard lights.
              </p>
            </div>
          </div>

          <img
            src={GeneralIssue2}
            alt="General Vehicle Safety Tips"
            className="rounded-3xl shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-[420px] object-cover"
          />
        </div>{" "}
        <section className={styles.mockTestContainerSection}>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>Click start quiz to test your knowledge</p>
              <Link to="/takequizCatName/Safety-and-Your-Vehicle">
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SafetyAndRoad;
