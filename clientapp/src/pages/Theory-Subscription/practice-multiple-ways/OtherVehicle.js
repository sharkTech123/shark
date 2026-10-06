import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  Truck,
  Bus,
  TramFront,
  Wind,
  Caravan,
  ShieldCheck,
} from "lucide-react";

import alertnessBanner from "../../../assets/alertbg.png";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import largeVehicleJunction from "../../../assets/images/truck-oncoming-trasffic.jpg";
import largeVehicle from "../../../assets/images/behindLargeVehicle.jpg";
import trams from "../../../assets/images/trams.jpg";
import busses from "../../../assets/images/London-bus.jpg";
import towingcars from "../../../assets/images/tick-green.jpg";
import sideWinds from "../../../assets/images/side-Winds.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function OtherVehicle() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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

  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url(${alertnessBanner})`,
          }}
        />

        {/* Dark Overlay (controls opacity) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Other <span className="text-red-500">Type</span> of vehicle
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Understanding how different vehicles behave on the road helps
                you anticipate hazards, make better decisions, and drive safely.
              </p>

              <Link to="/Contact-Us">
                <button
                  className="mt-6 sm:mt-8 px-6 py-2.5 sm:px-7 sm:py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-sm sm:text-base font-semibold text-white shadow-lg"
                  style={{ border: "none" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        {/* ================= LARGE VEHICLES AT JUNCTIONS ================= */}
        <section className="py-12 sm:py-16 bg-slate-50 fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2 items-center">
            <img
              src={largeVehicleJunction}
              alt="Large vehicle junction"
              className="w-full aspect-[16/10] object-cover rounded-2xl shadow-xl"
            />

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold flex gap-2 items-center">
                <Truck className="text-red-600" />
                Large Vehicles at
                <span className="text-red-600">Junctions/Roundabouts</span>
              </h2>

              <ul
                className="mt-4 space-y-3 text-sm sm:text-base text-slate-700"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  The 7th topic is Other Types of Vehicles. Large vehicles often
                  need to take unorthodox paths at junctions/roundabouts because
                  of their size.
                </li>
                <li>
                  For example, it’s not uncommon to see a large truck indicate
                  left but position to the right. They do this to make it easier
                  for them to turn. If you see a truck turning in front of you
                  you should always leave plenty of room to allow them to turn
                  safely.
                </li>
                <li>
                  Large vehicles can also hide overtaking traffic so always be
                  extra cautious when pulling out at junctions when large
                  vehicles are oncoming. Remember larger vehicles mean larger
                  hazards!
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= BEHIND LARGE VEHICLES ================= */}
        <section className="py-12 sm:py-16 bg-white fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                When Behind <span className="text-red-600">Large Vehicles</span>
              </h2>

              <ul
                className="mt-4 space-y-3 text-sm sm:text-base text-slate-700"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  You must stay well behind a large vehicle as because of the
                  size they often obstruct your view of the road. It’s advisable
                  to leave extra room between your vehicle and theirs as it
                  allows you to see more clearly what is up ahead.
                </li>
                <li>
                  Please remember that before you overtake a larger vehicle you
                  need a clear view. This is because of their length they are
                  longer they take more time to pass.
                </li>
                <li>
                  Beware of surface spray coming from large vehicles when
                  driving behind them on a wet road. If it’s affecting your view
                  drop back.
                </li>
              </ul>
            </div>

            <img
              src={largeVehicle}
              alt="Driving behind a large vehicle"
              className="order-1 lg:order-2 w-full aspect-[16/10] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </section>

        {/* ================= PUBLIC TRANSPORT ================= */}
        <section className="py-12 sm:py-16 fade-up bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2">
              <Bus className="text-red-600" /> Public Transport
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  img: trams,
                  title: "Trams",
                  icon: <TramFront />,
                  pros: ["Eco-friendly"],
                  cons: ["Cannot steer", "Dangerous rails"],
                },
                {
                  img: busses,
                  title: "Buses",
                  icon: <Bus />,
                  pros: ["Give way when safe"],
                  cons: ["Watch for pedestrians"],
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                  <img
                    src={item.img}
                    className="w-full h-44 object-cover rounded-xl"
                    alt=""
                  />
                  <h3 className="mt-4 font-semibold flex items-center gap-2">
                    {item.icon} {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm" style={{paddingLeft:"0px"}}>
                    {item.pros.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <FaCheckCircle className="text-green-600 mt-1" /> {p}
                      </li>
                    ))}
                    {item.cons.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <FaTimesCircle className="text-red-600 mt-1" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TOWING ================= */}
        <section className="py-16 sm:py-20 bg-white fade-up">
          <div className="container mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
                <Caravan className="text-red-600" /> Towing a Caravan
              </h2>

              <p className="mt-4 text-slate-700 text-sm sm:text-base">
                When towing a caravan it is advisable to use an extended-side
                arm mirror. This is because towing a large trailer or caravan
                can greatly reduce your view of the road behind. By using an
                extended-arm side mirror so that you can see clearly behind and
                down both sides of the caravan, or trailer.
              </p>
            </div>

            <img
              src={towingcars}
              alt="Towing a caravan"
              className="w-full h-[260px] sm:h-[340px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </section>

        {/* ================= SIDE WINDS ================= */}
        <section className="py-16 sm:py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
                <Wind className="text-red-600" /> Side Winds
              </h2>

              <ul
                className="mt-4 space-y-4 text-slate-700 text-sm sm:text-base"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  High-sided vehicles are most affected by windy weather, but
                  strong gusts can also blow a car, cyclist, motorcyclist or
                  horse rider off course. This can happen on open stretches of
                  road exposed to strong crosswinds, or when passing bridges or
                  gaps in hedges.
                </li>
                <li>
                  In very windy weather your vehicle may be affected by
                  turbulence created by large vehicles. Motorcyclists are
                  particularly affected, so keep well back from them when they
                  are overtaking a high-sided vehicle.
                </li>
              </ul>
            </div>

            <img
              src={sideWinds}
              alt="Side winds"
              className="w-full h-[260px] sm:h-[340px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </section>

        {/* ================= QUIZ CTA ================= */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white text-center">
          <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Test Yourself
          </h2>
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            Start the quiz now and check your understanding of other types of
            vehicles.
          </p>

          <Link to="/takequizCatName/Other-Types-of-Vehicles">
            <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg shadow-lg">
              Start Quiz
            </button>
          </Link>
        </section>
      </section>
    </main>
  );
}
