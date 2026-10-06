import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  AlertTriangle,
  PhoneCall,
  Wrench,
  Car,
  ShieldCheck,
  Triangle,
  Train,
} from "lucide-react";

import incidentsImg from "../../../assets/images/incidents-pinjk.png";
import bursting from "../../../assets/images/tyerBursting.jpg";
import temptationImg from "../../../assets/images/temptation.png";
import alertnessBanner from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function IncidentsAccidents() {
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
      {/* ================= BANNER ================= */}
      <section className="relative min-h-[65vh] sm:min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${alertnessBanner})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white max-w-3xl">
              Incidents on the <span className="text-red-500">Road</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-slate-200">
              Roads are unpredictable and accidents can happen. Knowing how to
              react safely can protect lives and prevent further danger.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT ARE INCIDENTS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold">
              What are incidents{" "}
              <span className="text-red-600">On The Road?</span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              The 13th topic from the multiple-choice section of the theory test
              is incidents. Let’s face it, out of all of the topics we’ve looked
              at so far, this has to be the most straightforward. The roads can
              be an unpredictable and dangerous place—accidents happen,
              unfortunately. That’s why it’s important that you know how to
              respond to these situations safely, from knowing how to report an
              incident to safely carrying out first aid.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600">
              If you’re involved in an accident that causes damage to another
              person, vehicle, animal, or property, then you’re legally required
              to stop and give your details.
            </p>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
              <h4 className="font-bold text-lg sm:text-xl mb-4 flex items-center gap-3">
                <PhoneCall className="text-red-600" />
                Information You Must Give
              </h4>
              <ul
                className="list-disc list-inside space-y-3 text-sm sm:text-base text-slate-700"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  To identify your location by giving them the number of the
                  marker you’re calling from.
                </li>
                <li>If you belong to a motoring organisation (e.g. AA)</li>
                <li>For details of yourself and your vehicle.</li>
              </ul>
            </div>
          </div>

          <img
            src={incidentsImg}
            alt="Incidents"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* ================= BREAKDOWNS ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 fade-up">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-9 h-9 text-red-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              How to identify breakdowns{" "}
              <span className="text-red-600">before they happen</span>
            </h2>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-lg">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A warning light on your instrument panel is often the first sign
              that you have an issue with your vehicle. Sometimes this can be
              something that you still have time to rectify like your petrol
              running low or sometimes it is an urgent issue that needs dealing
              with ASAP, such as failing breaks. Use your judgement and if
              necessary, stop as soon as it is safe to do so and check the
              problem. You should always check out any strong smell of fuel. You
              should never ignore it, instead stop and investigate as soon as
              you can do so safely.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TYRE BURST ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <img
            src={bursting}
            alt="Tyre Bursting"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Tyres <span className="text-red-600">Bursting</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              A tyre bursting or getting a puncture while you’re driving can
              feel very scary but you must remain calm, hold the steering wheel
              firmly and pull up slowly or roll to a stop at the side of the
              road. This will help protect you and other road users. A tyre
              blowing out when you’re travelling on the motorway is even more
              alarming. If this or another emergency situation happens while
              you’re on a motorway, you should try to get onto the hard
              shoulder. Don’t use your mobile phone, instead find your nearest
              emergency phone, using the marker posts and call for help.
            </p>

            <div className="mt-6 bg-white p-4 sm:p-3 rounded-2xl shadow-md">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">
                If you break down an operator will ask you;
              </h4>
              <ul
                className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-700"
                style={{ paddingLeft: "0px" }}
              >
                <li>
                  To identify your location by giving them the number of the
                  marker you’re calling from.
                </li>
                <li>
                  Whether you belong to a motoring organisation such as AA
                </li>
                <li>For details of yourself and your vehicle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEVEL CROSSINGS ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 fade-up">
          <div className="flex items-center gap-3 mb-6">
            <Train className="w-9 h-9 text-red-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              Level <span className="text-red-600">Crossings</span>
            </h2>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl shadow-lg">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              If you break down on a level crossing, try not to panic. Instead;
              get everyone out of the vehicle and clear of the crossing quickly
              and calmly before calling the signal operator from the emergency
              phone provided. You should only move your vehicle if the operator
              tells you to do so.
              <br />
              You must wait to cross a level crossing if the red signal is
              flashing, even if it continues to flash after a train has gone.
              This is because another train may be coming and you would be
              placing yourself, your passengers and people on the train in
              danger.
            </p>
          </div>
        </div>
      </section>

      {/* ================= POTENTIAL DANGERS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 fade-up">
          <div className="flex items-center gap-3 mb-10">
            <AlertTriangle className="w-9 h-9 text-red-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold">
              Understanding & Avoiding{" "}
              <span className="text-red-600">Potential Dangers</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={temptationImg}
              alt="Level Crossing Dangers"
              className="w-full h-auto rounded-3xl shadow-xl"
            />

            <div className="space-y-6">
              {[
                [
                  "TEMPTATION",
                  "Don't be tempted to jump the lights or race around the barriers - you’re putting lives at risk!",
                ],
                [
                  "ASSUMPTION",
                  "Don’t assume there is only one train or use previous experience to guess when the train is coming. Trains can come from either direction at any time.",
                ],
                [
                  "BLOCKED EXIT",
                  "It is surprisingly easy to end up stuck on the tracks – make sure your exit is clear before driving onto the crossing.",
                ],
              ].map(([title, text], index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-red-500"
                >
                  <h3 className=" text-red-500 mb-2">
                    {index + 1}. {title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAFETY EQUIPMENT ================= */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 fade-up">
          <div className="flex items-center gap-3 mb-10">
            <Car className="w-9 h-9 text-red-600" />
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold">
              Car <span className="text-red-600">Signals</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              [
                ShieldCheck,
                "The Right Equipment",
                "Carrying the right equipment can help reduce the danger of a situation. Carrying a first aid kit, a warning triangle and a fire extinguisher in your car can be helpful for use in an emergency as it could help to prevent or lessen an injury. You shouldn’t take unnecessary risks; you may be able to put out a small fire, for example, but stay safe and know your limitations.",
              ],
              [
                Triangle,
                "Warning Triangle",
                "A warning triangle can help alert other road users to danger or hazards, if you broke down. If you have one you should place it at least 45 metres (147 feet) behind your vehicle. You should never place a warning triangle on a motorway as passing traffic poses too much of a risk.",
              ],
              [
                PhoneCall,
                "Call For Help",
                "Debris on the motorway can be extremely dangerous. If you are driving on one and see something fall from another vehicle, or if anything falls from your own you should never attempt to retrieve yourself. Instead, you should stop at the next emergency telephone and report the hazard to the police.",
              ],
            ].map(([Icon, title, desc], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-xl border-t-8 border-red-500"
              >
                <Icon className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-16 bg-slate-900 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Start Quiz</h2>
        <p className="text-slate-300 mb-6 text-sm sm:text-base">
          Click the start quiz button to begin.
        </p>

        <Link to="/takequizCatName/Incidents--Accidents-and-Emergencies">
          <button className="w-full sm:w-auto px-10 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition">
            Start Quiz
          </button>
        </Link>
      </section>
    </main>
  );
}
