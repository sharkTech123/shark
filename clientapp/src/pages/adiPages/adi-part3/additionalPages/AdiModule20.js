import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

import styles from "./Adi3Module.module.css";
import backgroundImage from "../../../../assets/images/control-junction.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Navigation,
  Table,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faultData = [
  {
    title: "Awareness / planning",
    description:
      "Reasons to record a fault under ‘awareness / planning’ include:",
    shortDec: (
      <>
        <ul style={{ padding: "0px" }}>
          <li>
            1. not considering the actions of vulnerable road users such as
            pedestrians, cyclists, motorcyclists and horse riders
          </li>
          <li>2. not anticipating road and traffic conditions in good time</li>
          <li>
            3. reacting to other road users at the last moment rather than in
            good time
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example: "Late reaction to what other road users are doing",
      },
      {
        type: "Serious fault",
        example:
          "Last minute and sudden reaction to other road users compromising their safety",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by a last minute and sudden reaction to other road users that results in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  {
    title: "Clearance",
    description:
      "The pupil should allow plenty of room when passing stationary vehicles and obstructions. They should be able to display the readiness to be prepared to slow down or stop, as a door may open, a child may run out or a vehicle may pull out without warning.",
    shortDec: (
      <>
        <ul style={{ padding: "0px" }}>
          <li>
            Record a fault under ‘clearance’ if the pupil drives too close to
            stationary vehicles and obstructions.
          </li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Passes too close to a stationary vehicle when road conditions allowed the correct clearance",
      },
      {
        type: "Serious fault",
        example:
          "Narrowly avoids a collision with a stationary vehicle when road conditions enable the correct and safe course to be taken",
      },
      {
        type: "Dangerous fault",
        example:
          "Passes dangerously close to or striking a stationary vehicle, resulting in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Following distance",
    description: (
      <>
        The car must always be a safe distance between the pupil and other
        vehicles.
        <ul style={{ padding: "0px" }}>
          <li>1. On wet or slippery roads it takes much longer to stop.</li>
          <li>
            2. When the car has stopped in traffic queues, sufficient space
            should be left to pull out if the vehicle in front has problems.
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        Reasons to record a fault under ‘following distance’ include:
        <ul style={{ padding: "0px" }}>
          <li>1. getting too close to moving vehicles</li>
          <li>2. pulling up too close to vehicle ahead</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example: "Not maintaining the full separation distance required",
      },
      {
        type: "Serious fault",
        example:
          "Driving too close to the vehicle ahead, where the separation distance left little margin for error",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by dangerously driving too close to the car in front that results in actual danger to the pupil, instructor, general public or property - the instructor must take action as necessary to increase separation distance and avoid the possibility of a collision",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Use of speed",
    description: (
      <>
        Reasons to record a fault under ‘use of speed’ include:
        <ul style={{ padding: "0px" }}>
          <li>
            1. driving too fast for prevailing road traffic and weather
            conditions
          </li>
          <li>2. breaking the speed limit</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Driving too fast for the road or traffic conditions for a short period",
      },
      {
        type: "Serious fault",
        example:
          "Driving too fast for the road or traffic conditions, exceeding speed limits",
      },
      {
        type: "Dangerous fault",
        example:
          "Any situation brought about by the inability to meet approaching traffic that results in actual danger to the pupil, instructor, general public or property",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Progress",
    description: (
      <>
        On the form you need to record any faults made related to:
        <ul style={{ padding: "0px" }}>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#appropriate-speed-marking"
            >
              {" "}
              appropriate speed
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#undue-hesitation-marking"
            >
              {" "}
              undue hesitation
            </a>
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        The pupil should drive at a safe and appropriate speed for the
        prevailing road and traffic conditions. Speed limits are not target
        speeds and there will be occasions where pupils need to reduce their
        speed to deal safely with situations such as narrow residential streets
        or busy high streets - this should not be considered as a fault.
        <ul style={{ padding: "0px" }}>
          Appropriate speed <br />
          Reasons to record a fault under ‘appropriate speed’ include:
          <li>
            1. not driving at an appropriate speed for the road and traffic
            conditions
          </li>
          <li>2. holding up following traffic</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Driving at 20mph in a 30mph area with no mitigating circumstances",
      },
      {
        type: "Serious fault",
        example:
          "Driving on a dual carriageway significantly below the permitted speed limit, affecting following road users",
      },
      {
        type: "Dangerous fault",
        example:
          "Driving at a speed significantly below the speed limit and creating a situation that encourages other road users to put themselves at risk",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Undue hesitation",
    description: (
      <>
        Reasons to record a fault under ‘undue hesitation’ include:
        <ul style={{ padding: "0px" }}>
          <li>
            1. stopping unnecessarily at junctions (except traffic light
            controlled junctions) and other hazards
          </li>
          <li>2. not proceeding when it is safe to do so at junctions</li>
        </ul>
      </>
    ),
    faults: [
      {
        type: "Driving fault",
        example:
          "Shows a lack of judgement by not proceeding when it is safe and correct to do so",
      },
      {
        type: "Serious fault",
        example:
          "Stopping and waiting when it is safe and reasonable to proceed",
      },
      {
        type: "Dangerous fault",
        example:
          "Undue hesitation is unlikely to become dangerous in itself unless it creates situations that encourage other road users to put themselves at risk",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Response to signs/signals",
    description: (
      <>
        On the form you need to record any faults made related to:
        <ul style={{ padding: "0px" }}>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-signs-marking"
            >
              {" "}
              traffic signs
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#road-markings-marking"
            >
              {" "}
              road markings
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-lights-marking"
            >
              {" "}
              traffic lights
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#traffic-controllers-marking"
            >
              {" "}
              traffic controllers
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#other-road-users-marking"
            >
              {" "}
              other road users
            </a>
          </li>
          The pupil should:
          <li>
            1. be able to understand and be able to react to all traffic signs
            and road markings
          </li>
          <li>
            2. act correctly at traffic lights, checking that the road is clear
            before proceeding when the green light shows
          </li>
          <li>
            3. obey all signals given by police officers, traffic wardens and
            school crossing patrols
          </li>
          <li>
            4. display the awareness to be able to react to signals given by
            other road users, including people in charge of animals, and be
            ready to act accordingly
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        Traffic signs <br />
        Reasons to record a fault under ‘traffic signs’ include:
        <ul style={{ padding: "0px" }}>
          <li>1. going to the wrong side of a keep left sign</li>
          <li>2. not complying with a stop sign</li>
          <li>3. not complying with a no entry sign</li>
          <li>
            4. driving in a bus lane when times on the sign prohibit its use
          </li>
          <li>5. not complying with mandatory signs</li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Late reaction to a clearly visible sign that shows a lower speed limit change",
      },
      {
        type: "Serious fault",
        example:
          "Attempting to continue into a road with a clearly visible no entry sign",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that requires the instructor to take action in order to prevent actual danger",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Road markings",
    description: (
      <>
        Reasons to record a fault under ‘road markings’ include:
        <ul style={{ padding: "0px" }}>
          <li>1. crossing the solid white centre lines unnecessarily</li>
          <li>2. not conforming to directional arrows</li>
          <li>
            3. stopping in a yellow box junction when the exit is not clear
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Straddling lanes with separate clear visible painted directional arrows in individual lanes on approach to a junction",
      },
      {
        type: "Serious fault",
        example:
          "Entering and stopping in a clearly marked yellow box junction when going ahead at a junction",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that has caused actual danger to other road users",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Traffic lights",
    description: (
      <>
        Reasons to record a fault under ‘traffic lights include:
        <ul style={{ padding: "0px" }}>
          <li>1. waiting at a green filter light when safe to proceed</li>
          <li>
            2. waiting to turn right in a junction, when the red repeater light
            is on the opposite side and it is safe to proceed
          </li>
          <li>3. not conforming to a red light</li>
          <li>4. making a late reaction to the amber traffic light</li>
          <li>5. remaining at the stop line when safe to move forwards</li>
          <li>
            6. stopping beyond the solid white line going into an area
            designated for cyclists
          </li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Late reaction to an amber traffic light, with no effect to safety",
      },
      {
        type: "Serious fault",
        example:
          "Failing to comply correctly and promptly with an appropriate traffic light or breaching a legal requirement",
      },
      {
        type: "Dangerous fault",
        example:
          "A breach of a legal requirement that results in actual danger to the pupil, instructor, general public or property - the instructor may have to take action to avoid a legal requirement being breached",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Traffic controllers",
    description: (
      <>
        Record a fault under ‘traffic controllers’ if the pupil fails to respond
        to:
        <ul style={{ padding: "0px" }}>
          <li>1. police</li>
          <li>2. traffic warden</li>
          <li>3. traffic warden</li>
          <li>4. school crossing patrol</li>
          <li>5. other persons directing traffic</li>
        </ul>
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "A late reaction to a traffic controller holding a stop sign at temporary road works",
      },
      {
        type: "Serious fault",
        example:
          "No reaction to a school crossing controller waiting to step into the road",
      },
      {
        type: "Dangerous fault",
        example:
          "Driving towards a school crossing patrol resulting in the instructor having to take action to prevent actual danger to the public",
      },
    ],
  },

  // ///////////////////////////
  {
    title: "Other road users",
    description: (
      <>
        Record a fault under ‘other road users’ if the pupil does not react
        appropriately to the signals given by other road users.
      </>
    ),

    faults: [
      {
        type: "Driving fault",
        example:
          "Does not continue ahead safely past a car that is signalling and waiting to turn right from a major to minor road",
      },
      {
        type: "Serious fault",
        example:
          "Waiting behind a bus that has clearly signalled and has stopped, inconveniencing following traffic that could overtake",
      },
      {
        type: "Dangerous fault",
        example:
          "A situation that has caused the instructor to take action to prevent actual danger taking place",
      },
    ],
  },
  //////////////////////////////////////
  {
    title: "Examiner took action (ETA)",
    description: (
      <>
        Record a fault under ‘ETA’ if at any point your pupil’s driving becomes
        dangerous and you have to take action to correct it. This action may be:
        <ul style={{ padding: "0px" }}>
          <li>1. physical</li>
          <li>2. verbal</li>

          <h3>Eco (fuel-efficient driving)</h3>
          <li>On the form you can record any faults made related to:</li>

          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#appropriate-speed-marking"
            >
              {" "}
              control
            </a>
          </li>
          <li>
            <a
              className={styles.Adi3Module19link}
              href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#undue-hesitation-marking"
            >
              {" "}
              planning
            </a>
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        The pupil should drive in an eco friendly manner to reduce pollution and
        save fuel. They should:
        <ul style={{ padding: "0px" }}>
          <li>1. plan well ahead and choose appropriate gears</li>
          <li>
            2. avoid heavy braking and over revving of the engine, particularly
            when stopped or moving off
          </li>
          <li>
            3. consider stopping the engine when stopped for long periods of
            time
          </li>
          <li>
            4. Although eco-safe driving is assessed during the driving test, it
            does not affect the overall result. You use this when you give
            feedback at the end of the test.
          </li>
        </ul>
      </>
    ),
  },

  // /////////////////////////////////
  {
    title: "Give feedback at the end of the test",

    description: (
      <>
        The pupil will pass the test if they make:
        <ul style={{ padding: "0px" }}>
          <li>1. no more than 15 driving faults (sometimes called ‘minors’)</li>
          <li>2. no serious or dangerous faults (sometimes called ‘majors’)</li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        When giving the feedback at the end of the test, you could either:
        <ul style={{ padding: "0px" }}>
          <li>1. give the feedback as though you’re the examiner</li>
          <li>2. ask their pupil how they think they did</li>
        </ul>
      </>
    ),
  },

  ///////////////////////////////////

  {
    title: "Giving feedback as though you’re the examiner",
    description: (
      <>
        You could give the result and feedback while still roleplaying as the
        examiner. This will give the pupil a feel for how much feedback the
        examiner will give.
        <ul style={{ padding: "0px" }}>
          <li>
            Offer the pupil a brief explanation of the faults that you have
            recorded on the marking sheet. Explain all serious and dangerous
            faults, and a selection of repeated driving faults.
          </li>
          <li>
            If the pupil fails the test due to making 15 or more driving faults,
            you’ll need to explain all of the faults.
          </li>
        </ul>
      </>
    ),
    shortDec: (
      <>
        <h2>End the mock test and give feedback</h2>
        When the mock test is finished, you can stop roleplaying as the examiner
        and:
        <ul style={{ padding: "0px" }}>
          <li>
            1. give more feedback about their driving during the mock test
          </li>

          <li>2. ask coaching questions about any faults</li>
          <li>
            3. answer any questions they have about the test and how they drove
          </li>
          <li>
            4. use the results of the mock test to plan their future lessons
          </li>
        </ul>
      </>
    ),
  },
];

const Adi3Module20 = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      },
    );

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
        },
      );
    });
  }, []);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="w-full bg-slate-50 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6" ref={headerRef}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              <span className="text-emerald-400">Awareness</span>
            </h1>
            <p className="text-slate-200 max-w-2xl">
              A complete breakdown of control-related faults assessed during
              junction work in the ADI Part 3 test.
            </p>
            <div className="mt-6">
              <Link to="/Contact-Us">
                <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-xl transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STICKY NAV ================= */}
      <section className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-3 flex gap-3 overflow-x-auto">
          {faultData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(`section-${idx}`)}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold bg-slate-100 hover:bg-emerald-100 text-slate-700 transition"
            >
              {item.title}
            </button>
          ))}
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {faultData.map((section, idx) => (
            <div
              key={idx}
              id={`section-${idx}`}
              className="fade-up bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="text-emerald-500" />
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>

              {section.description && (
                <div className="prose max-w-none text-slate-700">
                  {section.description}
                </div>
              )}

              {section.shortDec && (
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 prose max-w-none">
                  {section.shortDec}
                </div>
              )}

              {/* ================= TABLE ================= */}
              {section.faults && (
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 text-left">Fault Type</th>
                        <th className="p-3 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.faults.map((fault, i) => (
                        <tr
                          key={i}
                          className="border-b last:border-none hover:bg-slate-50 transition"
                        >
                          <td className="p-3 font-semibold flex items-center gap-2">
                            {fault.type === "Driving fault" && (
                              <CheckCircle2 className="text-emerald-500" />
                            )}
                            {fault.type === "Serious fault" && (
                              <AlertTriangle className="text-amber-500" />
                            )}
                            {fault.type === "Dangerous fault" && (
                              <ShieldAlert className="text-red-500" />
                            )}
                            {fault.type}
                          </td>
                          <td className="p-3 text-slate-700">
                            {fault.example}
                          </td>
                        </tr>
                      ))}{" "}
                      {section.links2?.map((link, i) => (
                        <tr key={i} className="bg-emerald-50">
                          <td className="p-3 font-semibold">Reference</td>
                          <td className="p-3">
                            <a
                              href={link.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-600 font-semibold hover:underline"
                            >
                              {link.title}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="py-20 bg-slate-900 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">
          Teach Control with Confidence 🚗
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Understanding how control faults are assessed at junctions helps you
          guide learners more effectively and pass ADI Part 3 first time.
        </p>
        <Link to="/adi-videos">
          <button className="px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 font-semibold shadow-xl transition">
            Continue Learning
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Adi3Module20;
