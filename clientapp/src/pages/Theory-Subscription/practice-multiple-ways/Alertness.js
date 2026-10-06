import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/Alertness.module.css";
import { Link } from "react-router-dom";
import alertnessBanner from "../../../assets/alertbg.png";
import fullbeam from "../../../assets/images/main-beam-headlights.jpg";
import deepedBeam from "../../../assets/images/Dipped-Beam-Headlight-Bulb.jpg";
import sidelight from "../../../assets/images/car-sidelights.jpg";
import foglight from "../../../assets/images/foglight.jpg";
import hazardlight from "../../../assets/images/hazardlight.jpg";

import {
  Eye,
  Focus,
  AlertTriangle,
  ShieldCheck,
  Car,
  Wind,
  Coffee,
  Pill,
  Navigation,
  Radio,
  Smartphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Alertness() {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
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
      {/* ================= FIXED BANNER ================= */}
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
                Stay <span className="text-red-500">Alert</span> on the Road
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Alertness and awareness are essential for safe driving. Staying
                focused helps you react quickly and avoid dangerous situations.
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

      {/* ================= WHAT IS ALERTNESS ================= */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              What is <span className="text-red-600">Alertness?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
              The first topic from the theory test is alertness. This refers to
              how alert a driver is whilst behind the wheel. The road can be an
              unpredictable place, so it’s important that a driver does not get
              distracted by things such as: mobile phones and music, is prepared
              for any potential hazard, and, follows road signs and markings
              correctly.
            </p>

            <p className="text-slate-600">
              In this section, we have broken the content down into various
              sections in order to make revision for the topic easier.
              Additionally, it will also serve as a good way to apply the
              knowledge to your own driving.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QoeSNbQJkTQ"
                title="What is Alertness"
                frameBorder="0"
                allowFullScreen
              />
            </div>

            <div className="p-5">
              <h4 className="font-semibold text-lg mb-1">
                Why Alertness Matters
              </h4>
              <p className="text-sm text-slate-600">
                Learn how distractions affect driving and why staying alert
                saves lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AVOID DISTRACTIONS ================= */}
      {/* ================= AVOID DISTRACTIONS ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-12">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Avoid <span className="text-red-600">Distractions</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
            Distractions reduce your awareness, slow your reaction time, and
            increase the risk of accidents. Always keep your focus fully on the
            road.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* RADIO */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Radio className="w-9 h-9 text-red-600 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold">Radio</h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                Adjusting the radio is one of the most common forms of
                distracted driving. At any given time, more than{" "}
                <strong>600,000 drivers</strong> are manipulating electronic
                devices, like radios, while driving, according to The National
                Highway Traffic Safety Administration.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                ✔ Set radio stations before driving
              </p>
            </div>

            {/* SAT NAV */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Navigation className="w-9 h-9 text-red-600 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold">Sat Nav</h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                Vehicle navigation systems can be useful when driving on
                unfamiliar routes. However, they can also distract you and cause
                you to lose control if you try to adjust them while driving.
                Park up in a convenient and safe place before adjusting them.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                ✔ Park safely before making adjustments
              </p>
            </div>

            {/* MOBILE */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-9 h-9 text-red-600 group-hover:scale-110 transition" />
                <h3 className="text-xl font-bold">Mobile Phones</h3>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                Using a mobile phone takes your eyes off the road, hands off the
                wheel, and mind off driving. Drivers using phones are{" "}
                <strong>four times more likely</strong> to be involved in a
                crash.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                ✔ Never use your phone while driving
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6">
          {/* MAIN HEADING */}
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Your <span className="text-red-600">Responsibility</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-10">
            <Focus className="text-red-500 w-6 h-6" />
            <h3 className="text-xl sm:text-2xl font-bold">Focus is Key</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* CARD 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Coffee className="text-red-600 w-8 h-8" />
                <h4 className="text-xl font-semibold">Avoid Fatigue</h4>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                If you’re on the road for a long period of time, you’ll need to
                take precautions to avoid feeling sleepy — any lapse in
                judgement could be catastrophic.
                <br />
                <br />
                Open a window for fresh air or take a rest stop. Plan long
                journeys and take at least a{" "}
                <strong>15-minute break every 2 hours</strong>.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
              <div className="flex items-center gap-4 mb-4">
                <Pill className="text-red-600 w-8 h-8" />
                <h4 className="text-xl font-semibold">Avoid Impairment</h4>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                Avoid alcohol and drugs, as they affect concentration and
                reaction time.
                <br />
                <br />
                Some medication can also impair driving ability — always read
                labels and consult your doctor if unsure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Eye className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Be <span className="text-red-600">Aware</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* AWARE 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-red-500 w-7 h-7" />
                <h4 className="text-xl font-semibold">Check Surroundings</h4>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                Stay alert to what’s happening around you. Check mirrors every
                <strong> 6 seconds</strong> to remain aware of traffic.
                <br />
                <br />
                Be mindful of blind spots such as the windscreen pillar and
                always follow the{" "}
                <strong>MSM (Mirrors, Signal, Manoeuvre)</strong> routine.
              </p>
            </div>

            {/* AWARE 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-500 w-7 h-7" />
                <h4 className="text-xl font-semibold">Limited Visibility</h4>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                If your view is blocked, such as when exiting a closed junction,
                proceed slowly until visibility improves.
                <br />
                <br />
                If you cannot see clearly during a manoeuvre, ask someone to
                guide you safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <ShieldCheck className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Be <span className="text-red-600">Prepared</span>
            </h2>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-2xl border-l-8 border-red-500 max-w-4xl">
            <ul
              className="space-y-4 text-slate-700 list-disc list-inside"
              style={{ paddingLeft: "0px" }}
            >
              <li>
                Your ability to act will be affected by changes in road
                conditions such as bad weather, heavy traffic and unfamiliar
                routes. Be Prepared.
              </li>
              <li>
                You’ve also got to prepare for how your ability to act will be
                affected by changes in road conditions such as bad weather,
                heavy traffic, and unfamiliar routes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <Car className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Overtake with <span className="text-red-600">Caution</span>
            </h2>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <p className="text-slate-700 mb-6">
              Before overtaking, always check the road ahead — even when passing
              a stationary vehicle. Ensure there are no oncoming vehicles,
              pedestrians, or restrictions.
            </p>

            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500 w-6 h-6" />
              Avoid overtaking when:
            </h4>

            <ul
              className="list-disc list-inside space-y-3 text-slate-700"
              style={{ paddingLeft: "0px" }}
            >
              <li>The road narrows</li>
              <li>You cannot clearly see ahead (bends or dips)</li>
            </ul>

            <p className="mt-6 text-slate-700">
              Always check centre and side mirrors before overtaking to ensure
              no other vehicles are manoeuvring.
            </p>
          </div>
        </div>
      </section>

      {/* ================= USING CORRECT LIGHTS ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 fade-up">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Using the <span className="text-red-600">Correct Lights</span>
          </h2>

          {/* Section Description */}
          <p
            className="text-lg sm:text-base lg:text-lg text-slate-700 leading-relaxed"
            style={{ padding: "1rem 0px" }}
          >
            Knowing when and how to use your vehicle lights is essential for
            safety and visibility. Incorrect use can confuse or dazzle other
            road users and may lead to accidents or penalties.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SIDELIGHTS */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={sidelight}
                alt="Sidelights"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Sidelights</h4>
                <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                  You should use your sidelights if you park at night on a road
                  where the speed limit is greater than <strong>30mph</strong>.
                </p>
              </div>
            </div>

            {/* DIPPED BEAM */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={deepedBeam}
                alt="Dipped Headlights"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Dipped Headlights</h4>
                <ul
                  className="text-slate-700 space-y-2 list-disc pl-5"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    Dipped lights are the brightest lights that won’t dazzle
                    other road users.
                  </li>
                  <li>
                    Use them when visibility is reduced, when it’s raining, or
                    when it starts to get darker or cloudier.
                  </li>
                  <li>
                    <strong>Note:</strong> Use dipped headlights at dusk,
                    night-time, or in bad weather.
                  </li>
                </ul>
              </div>
            </div>

            {/* FULL BEAM */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={fullbeam}
                alt="Full Beam Headlights"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Full Beam</h4>
                <ul
                  className="text-slate-700 space-y-2 list-disc pl-5"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    Use full-beam headlights only on unlit stretches of road at
                    night.
                  </li>
                  <li>
                    <strong>Note:</strong> You must switch them off when meeting
                    oncoming traffic, following another vehicle, or driving on
                    bends, as they can dazzle other road users.
                  </li>
                </ul>
              </div>
            </div>

            {/* FOG LIGHTS */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={foglight}
                alt="Fog Lights"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Fog Lights</h4>
                <ul
                  className="text-slate-700 space-y-2 list-disc pl-5"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    Use fog lights only when visibility is reduced to{" "}
                    <strong>100 metres (328 feet)</strong> or less.
                  </li>
                  <li>
                    Using them when visibility is better can put other drivers
                    at risk.
                  </li>
                  <li>
                    <strong>Note:</strong> Rear fog lights can be confused with
                    brake lights as both are red.
                  </li>
                </ul>
              </div>
            </div>

            {/* HAZARD LIGHTS */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
              <img
                src={hazardlight}
                alt="Hazard Lights"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Hazard Lights</h4>
                <ul
                  className="text-slate-700 space-y-2 list-disc pl-5"
                  style={{ paddingLeft: "0px" }}
                >
                  <li>
                    You may use hazard warning lights when your vehicle is
                    stationary and causing a temporary obstruction.
                  </li>
                  <li>
                    This could be due to a breakdown, accident, running out of
                    fuel, or being forced to stop.
                  </li>
                  <li>
                    <strong>Note:</strong> On motorways, they can be used to
                    warn traffic behind you of danger ahead.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.mockTestContainerSection}>
          <div className={styles.quizStartDiv}>
            <section className={styles.startQuizSection}>
              <h2>Start Quiz</h2>
              <h3>All Questions</h3>
              <p>
                Click the start quiz button to start the quiz and See your
                result
              </p>
              <Link to="/takequizCatName/Alertness-quiz">
                {" "}
                <button>Start Quiz</button>
              </Link>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
