import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  AlertTriangle,
  Car,
  Truck,
  ShieldCheck,
  PhoneCall,
  Info,
  ArrowRightLeft,
} from "lucide-react";
import { FaRoad } from "react-icons/fa";
import {
  FaTimesCircle,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaTrailer,
  FaCheckCircle,
} from "react-icons/fa";
import motorwayLogo from "../../../assets/images/motorway-logo.png";
import mway from "../../../assets/images/mway.jpg";
import motorwayStuds from "../../../assets/images/motorway-studs-1-rotated.jpg";
import motorwayBreakdowns from "../../../assets/images/brakeDowns.png";
import towingTruck from "../../../assets/images/towingTruck.jpg";
import crawler from "../../../assets/images/crawler.png";
import alertnessBanner from "../../../assets/alertbg.png";
gsap.registerPlugin(ScrollTrigger);

export default function MotorwayRules() {
  return (
    <main className="w-full overflow-hidden font-sans">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${alertnessBanner})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white">
              Motorway <span className="text-red-500">Rules</span>
            </h1>
            <p className="mt-5 text-slate-200 text-base sm:text-lg">
              Understanding motorway rules is essential. Small mistakes can have
              serious consequences for you and others.
            </p>
          </div>
        </div>
      </section>
      {/* ================= WHAT ARE MOTORWAY RULES ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <FaRoad className="w-10 h-10 text-red-600" />
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
                What are <span className="text-red-600">Motorway Rules?</span>
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              The 9th topic from the multiple-choice section in the theory test
              is motorway rules. When it comes to driving on the motorway, small
              mistakes can have huge consequences. If you’re not familiar with
              speed limits, lane discipline and even what to do if you break
              down on the motorway, you could end up endangering yourself and
              the motorists around you.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 flex justify-center">
            <img
              src={motorwayLogo}
              alt="Motorway Logo"
              className="max-w-xs object-contain"
            />
          </div>
        </div>
        <div className="mt-16 text-center fade-up">
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-8">
            The following groups or vehicles cannot travel on the motorway;
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Bicycles",
              "Motorcycles under 50cc",
              "Powered wheelchairs/mobility scooters",
              "Agricultural vehicles",
              "Slow-moving vehicles",
              "Pedestrians",
              "Horse riders",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-5 rounded-2xl shadow-lg border-t-4 border-red-500 hover:scale-105 transition"
              >
                <FaTimesCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* ================= BEFORE A MOTORWAY JOURNEY ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck className="w-10 h-10 text-red-600" />
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
              Before a <span className="text-red-600">Motorway Journey</span>
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-4xl">
            When it comes to driving on the motorway, small mistakes can have
            huge consequences. If you’re not familiar with speed limits, lane
            discipline and even what to do if you break down on the motorway,
            you could end up endangering yourself and the motorists around you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3">
                Joining the Motorway
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base lg:text-lg">
                <li>
                  Use the slip road to build up your speed to match the traffic
                  already on the motorway before merging
                </li>
                <li>Give way to traffic already on the motorway.</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
              <img
                src={mway}
                alt="motorway"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <section className="py-20 fade-up bg-slate-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
              Driving on a Motorway
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto text-base sm:text-lg">
              For most vehicles travelling on the motorway the national speed
              limit applies. For cars and motorcycles this is 70 mph. This limit
              applies to all lanes except those with signs showing a lower speed
              limit, you must obey these.
            </p>
          </div>
        </section>
        <section className="py-20 fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
            {/* LEFT LANE */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-red-500 hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-4">
                <FaArrowCircleLeft className="text-red-600 w-8 h-8" />
                <h3 className="font-bold text-xl">Use the Left Lane</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {[
                  "When joining the motorway.",
                  "Before you leave the motorway.",
                  "Always unless overtaking.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1" style={{width:'50px'}} />
                    <p>{item}</p>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <FaTimesCircle className="text-red-600 mt-1" style={{width:'50px'}} />
                  <p>
                    You shouldn’t overtake on the left unless traffic is moving
                    slowly in queues and the queue on your right is moving more
                    slowly than the one you’re in. In this instance you may
                    overtake on the left.
                  </p>
                </li>
              </ul>
            </div>

            {/* CENTER/RIGHT LANE */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-blue-500 hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-4">
                <FaArrowCircleRight className="text-blue-600 w-8 h-8" />
                <h3 className="font-bold text-xl">Using Center/Right Lane</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {[
                  "The middle and right-hand lanes are to be used only for overtaking other vehicles, and you must return to the left lane when you’ve finished overtaking.",
                  "You should only use the center/right lane as normal running lanes if signs tell you to.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1" style={{width:'50px'}}/>
                    <p>{item}</p>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <FaTimesCircle className="text-red-600 mt-1" style={{width:'50px'}}/>
                  <p>
                    Do not assume the center/right lane are for faster speeds.
                    Even when overtaking you should be careful to not break the
                    speed limit.
                  </p>
                </li>
              </ul>
            </div>

            {/* TOWING */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-green-500 hover:scale-105 transition">
              <div className="flex items-center gap-3 mb-4">
                <FaTrailer className="text-green-600 w-8 h-8" />
                <h3 className="font-bold text-xl">Towing a Trailer</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {[
                  "In normal circumstances. you should only travel in the left lane and use the center lane to overtake.",
                  "If your towing the speed limit is lower for you. The speed limit when towing a trailer on a motorway is 60 MPH.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 mt-1" style={{width:'50px'}}/>
                    <p>{item}</p>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <FaTimesCircle className="text-red-600 mt-1" style={{width:'50px'}} />
                  <p>
                    You should not travel in the right-hand lane of a motorway,
                    unless there are lane closures.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
            Key <span className="text-red-600">terms</span>
          </h2>
          <hr className="border-2 border-red-600 w-full max-w-2xl mx-auto my-6" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={motorwayStuds}
              alt="motorway"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <img
              src={motorwayBreakdowns}
              alt="breakdown"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* ================= BREAKDOWN RULES ================= */}
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
            What to do if you{" "}
            <span className="text-red-600">breakdown or have an accident</span>
          </h1>
          <h3 className="text-center text-lg mb-10">
            Only stop on the motorway if;
          </h3>

          <ul className="max-w-4xl mx-auto bg-slate-50 p-8 rounded-3xl shadow-xl space-y-5">
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>There are red flashing lights above every lane.</p>
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>
                You’re told to do so by the police, Driver and Vehicle Standards
                Agency (DVSA) officers or traffic officers.
              </p>
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>You’re stuck in a traffic jam.</p>
            </li>
            <li className="flex gap-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <p>You have an emergency or breakdown.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-red-50 to-white fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <h3 className="text-xl font-bold mb-4">
              If you are stopped in an emergency on the hard shoulder you
              should:
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  Warn other drivers that you have broken down by switching on
                  your hazard lights.
                </p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  If visibility is poor or its night-time, switch on the
                  sidelights and don’t open the offside doors (those nearest the
                  carriageway). Instead, you and your passengers should leave
                  the vehicle by the nearside doors, away from the traffic.
                </p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  In case another vehicle crashes into yours, you should wait on
                  the embankment near your vehicle, but away from the hard
                  shoulder.
                </p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  When you are ready to return to the carriageway you should
                  wait for a safe gap in the traffic and then drive along the
                  hard shoulder to gain speed before moving out onto the main
                  carriageway in the same way you’d use the slip road when first
                  entering the motorway.
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
            <h3 className="text-xl font-bold mb-4">
              You should use one of the emergency telephones if you’re able to.
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  Normally at one-mile intervals. Marker posts at 100-metre
                  intervals point you in the direction of the nearest phone.
                </p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  Connected directly to a control centre, where the operator
                  will deal with your call and direct the appropriate services
                  to help you.
                </p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>
                  You should stand facing the oncoming traffic if you need to
                  use the emergency telephone. This is so that you can see any
                  hazards approaching.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-6">
          <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              If you cannot get onto the{" "}
              <span className="text-red-600">
                Hard shoulder when you break down, you should:
              </span>
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Obey all speed limits.</p>
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <p>Keep a safe distance from the vehicle ahead.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={towingTruck}
            alt="towing"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-xl font-bold mb-4">
              Joining <span className="text-red-600">The Motorway</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaTimesCircle className="text-red-600 mt-1" />
                <p>
                  Use the slip road to build up your speed to match the traffic
                  already on the motorway before merging
                </p>
              </li>
              <li className="flex gap-3">
                <FaTimesCircle className="text-red-600 mt-1" />
                <p>Give way to traffic already on the motorway.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= SMART MOTORWAYS ================= */}
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-extrabold mb-6">
            Smart Motorway and{" "}
            <span className="text-red-600">Motorway Signs</span>
          </h1>
          <ul className="bg-slate-50 p-8 rounded-3xl shadow-xl space-y-4">
            <li className="flex gap-3">
              <FaTimesCircle className="text-red-600 mt-1" />
              <p>
                Smart motorways are a contentious topic, but for now, they’re
                here to stay. Many people are of the opinion that smart
                motorways are more dangerous than conventional motorways,
                because of the lack of a hard shoulder.
              </p>
            </li>
            <li className="flex gap-3">
              <FaTimesCircle className="text-red-600 mt-1" />
              <p>
                A smart motorway is a section of a motorway that uses traffic
                management methods to increase capacity and reduce congestion
                in, particularly busy areas. These methods include using the
                hard shoulder as a running lane and using variable speed limits
                to control the flow of traffic.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* ================= CRAWLER LANE ================= */}
      <section className="py-20 bg-slate-50 fade-up">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={crawler}
            alt="crawler lane"
            className="rounded-3xl shadow-2xl  object-cover"
            style={{ maxWidth: "300px", width: "100%" }}
          />
          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <ul>
              <li className="flex gap-3 align-center">
                <FaTimesCircle className="text-red-600 mt-1" />
                <p>
                  Crawler Lane – Where the motorway goes uphill steeply, there
                  may be a separate lane for slow-moving vehicles, known as a
                  crawler lane. This helps the faster-moving traffic to flow
                  more easily and will be signposted.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= LINK ================= */}
      <section className="py-10 text-center text-black bg-white">
        <p>
          To view all Motorway Road Signs{" "}
          <a
            className="text-pink-500 font-semibold"
            href="https://assets.publishing.service.gov.uk/media/656ef4271104cf0013fa74ef/know-your-traffic-signs-dft.pdf"
          >
            Click Here
          </a>
          – You will find all the motorway signs from pages 89 to 93.
        </p>
      </section>
      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
            Test Yourself
          </h2>
          <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2">Start Quiz</h3>
            <p className="mb-6">
              Click the start quiz button to start the quiz and See your result
            </p>
            <Link to="/takequizCatName/Motorway-Rules">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-semibold shadow-lg">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
