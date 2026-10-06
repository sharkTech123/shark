import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Adi3Module.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Navigation,
  Table,
} from "lucide-react";
import backgroundImage from "../../../../assets/images/control-junction.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Adi3Module19() {
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

  const faultData = [
    {
      title: "Accelerator",
      description:
        "The pupil should use the accelerator and clutch to make a smooth start.",
      shortDec: (
        <>
          Reasons to record a fault include:
          <ul style={{padding:"0px"}}>
            <li>1. Making uncontrolled use of the accelerator</li>
            <li>2. Revving excessively</li>
          </ul>
        </>
      ),

      faults: [
        {
          type: "Driving fault",
          example: "Uncontrolled or harsh use of the accelerator",
        },
        {
          type: "Serious fault",
          example:
            "Continuous habitual uncontrolled or harsh use of the accelerator",
        },
        {
          type: "Dangerous fault",
          example:
            "Uncontrolled use of the accelerator leading to a situation involving actual danger",
        },
      ],
    },
    {
      title: "Clutch",
      description:
        "The pupil should use the accelerator and clutch to make a smooth start. The clutch should be depressed before the car stops. They should not allow the car to coast by running on in neutral or with the clutch depressed.",
      faults: [
        {
          type: "Driving fault",
          example:
            "The clutch is not depressed in time when coming to a stop causing the engine to stall, but no other traffic is affected",
        },
        {
          type: "Serious fault",
          example:
            "The clutch is not depressed in time habitually throughout the drive",
        },
        {
          type: "Dangerous fault",
          example:
            "The clutch is not depressed in time when coming to a stop, resulting in the instructor needing to take action to prevent actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Gears",
      description:
        "The pupil should select the correct gear to match the road and traffic conditions.",
      shortDec:
        "They should not allow the car to coast by running on in neutral or with the clutch depressed.",
      faults: [
        {
          type: "Driving fault",
          example:
            "Selecting the wrong gear, resulting in a reduction in vehicle speed with no risk to following vehicles",
        },
        {
          type: "Serious fault",
          example:
            "Selecting the wrong gear, resulting in a sudden reduction in vehicle speed, causing following traffic to alter speed or direction",
        },
        {
          type: "Dangerous fault",
          example:
            "Any situation brought about by a control fault that results in actual danger to the pupil, instructor, general public or property",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Footbrake",
      description:
        "The pupil should use the footbrake smoothly and progressively.",
      faults: [
        {
          type: "Driving fault",
          example: "Uncontrolled or harsh use of footbrake",
        },
        {
          type: "Serious fault",
          example:
            "Uncontrolled or harsh use of footbrake habitually throughout the drive",
        },
        {
          type: "Dangerous fault",
          example:
            "No timely attempt to use the foot brake, resulting in the instructor needing to take action to prevent actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Parking brake",
      description:
        "The pupil should make full use of the parking brake to prevent the car rolling backwards or forwards.",
      faults: [
        {
          type: "Driving fault",
          example:
            "Parking brake not applied for stopping on hill start, car rolls back a short distance",
        },
        {
          type: "Serious fault",
          example:
            "Parking brake not applied for stopping on hill start, car rolls back a significant distance",
        },
        {
          type: "Dangerous fault",
          example:
            "Parking brake not applied for stopping on hill start, car rolls back with a vehicle or other road user behind causing actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Steering",
      description:
        "The pupil should steer the car as smoothly as possible. Steering too early or late may cause the car to hit the kerb or swing out towards another road user.",
      faults: [
        {
          type: "Driving fault",
          example:
            "Steers sufficiently late when turning right at a junction to cause a ‘swan neck’ steering line which is recovered",
        },
        {
          type: "Serious fault",
          example:
            "Steers significantly early when turning left at a junction causing a wheel to mount the pavement",
        },
        {
          type: "Dangerous fault",
          example:
            "Steers significantly late when turning right at a junction, causing a wheel to mount the pavement when there is a pedestrian present causing actual danger - the instructor has to take action to prevent the situation escalating",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Precautions",
      description:
        "Before the engine is started, the pupil should make sure that they are comfortably seated and all controls can be safely operated.",
      faults: [
        {
          type: "Driving fault",
          example:
            "After stalling at a road junction, handbrake applied but pupil attempts to start the engine whilst in gear",
        },
        {
          type: "Serious fault",
          example:
            "At a road junction, engine started whilst in gear, resulting in car entering the new road with potential risk to other road users",
        },
        {
          type: "Dangerous fault",
          example:
            "Any situation brought about by a lack of ability to recognise the need to operate or being unable to operate the controls, which directly affects other traffic or pedestrians and causes actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Ancillary controls",
      description: (
        <>
          The pupil should understand the function of all the controls and
          switches, especially those that have a bearing on road safety. These
          include:
          <ul style={{padding:"0px"}}>
            <li>1. Indicators</li>
            <li>2. Lights</li>
            <li>3. Windscreen wipers</li>
            <li>4. Demisters</li>
            <li>5. Heaters</li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          The pupil should be able to find these controls and operate them
          correctly, when necessary, without looking down or causing a loss of
          control. Reasons to record a fault include:
          <ul style={{padding:"0px"}}>
            <li>1. Failing to use ancillary controls when necessary</li>
            <li>2. Being unable to operate the controls</li>
            <li>
              3. Being unable to locate or operate essential ancillary controls
            </li>
            <li>4. Losing control whilst operating ancillary controls</li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Pupil is not completely familiar with the location and operation of controls. Control of the car is compromised but with no effect on road safety",
        },
        {
          type: "Serious fault",
          example:
            "Pupil is unaware of the location and operation of the controls, resulting in a serious loss of vehicle control and road safety being compromised",
        },
        {
          type: "Dangerous fault",
          example:
            "Any situation brought about by a fault locating or operating ancillary controls that results in actual danger to the pupil, instructor, general public or property",
        },
      ],
      links2: [
        {
          title: "Click to View",
          link: "https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#assessment-criteria",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Move off",
      description: (
        <>
          On the form you need to record any faults made related to:
          <ul style={{padding:"0px"}}>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#safety-marking"
              >
                {" "}
                Safety
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#control-marking"
              >
                {" "}
                Control
              </a>
            </li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Safety:
          <ul style={{padding:"0px"}}>
            <li>Reasons to record a fault under ‘safety’ include:</li>
            <li>1. not checking their blind spot</li>
            <li>2. checking their blind spot at the wrong time</li>
            <li>
              3. moving away unsafely, making a blind spot check only over the
              left shoulder for normal stops and angle starts
            </li>
            <li>
              4.pulling away with the right signal on following the ‘pull up on
              the right and reverse’ exercise
            </li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Incorrect timing of the blind spot check when moving off with no risk to other road users - for example, checking the blind spot after the car has moved off",
        },
        {
          type: "Serious fault",
          example:
            "Moving off into the path of traffic or failing to make observation at all",
        },
        {
          type: "Dangerous fault",
          example:
            "Failure to make observation causes actual danger to the pupil, instructor, general public or property",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Control",
      description: (
        <>
          The pupil should:
          <ul style={{padding:"0px"}}>
            <li>
              1. move off smoothly and safely on a gradient and at an angle
            </li>
            <li>2. make the correct precautionary observations</li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Reasons to record a fault under ‘control’ include:
          <ul style={{padding:"0px"}}>
            <li>1.stalling</li>
            <li>2. moving off with the handbrake applied</li>
            <li>3. rolling backwards when attempting to move off</li>
            <li>4. not engaging a gear when attempting to move off</li>
            <li>5. attempting to pull away in too high a gear</li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Attempts to move away but stalls the engine, no other road users are affected",
        },
        {
          type: "Serious fault",
          example: "Attempts to move away and repeatedly stalls the engine",
        },
        {
          type: "Dangerous fault",
          example:
            "Attempts to move away uphill, stalls the engine and allows car to roll back with another vehicle behind causing actual danger",
        },
      ],
      links2: [
        {
          title: "Click to View",
          link: "https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#assessment-criteria",
        },
      ],
    },

    // ///////////////////////////
    {
      title: "Use of mirrors",
      description: (
        <>
          On the form you need to record any faults made related to:
          <ul style={{padding:"0px"}}>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#signalling-marking"
              >
                {" "}
                signalling
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#changing-direction-marking"
              >
                {" "}
                changing direction
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#changing-speed-marking"
              >
                {" "}
                changing speed
              </a>
            </li>
          </ul>
          <ul style={{padding:"0px"}}>
            The pupil should:
            <li>
              1. make full and effective use of all mirrors fitted to the car
            </li>
            <li>2. use the mirror - signal - manoeuvre (MSM) routine</li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Reasons to record a fault include:
          <ul style={{padding:"0px"}}>
            <li>1. not using the exterior mirrors when essential</li>

            <li>2. using the mirrors but not reacting to the information</li>
            <li>3. not using the mirrors at all</li>
            <li>4. pulling up with no mirror checks</li>
            <li>5. increasing their speed with no mirror checks</li>
            <li>6. making late use of mirrors</li>
          </ul>
          Signalling:
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Mirrors are not used before signalling but no other road users are affected",
        },
        {
          type: "Serious fault",
          example:
            "Mirrors are not used before signalling repeatedly throughout the drive",
        },
        {
          type: "Dangerous fault",
          example:
            "Mirrors are not used before signalling for right turn, vehicle behind has to abandon overtake causing actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Change direction",

      faults: [
        {
          type: "Driving fault",
          example: "Late use of exterior mirror before changing direction",
        },
        {
          type: "Serious fault",
          example:
            "Does not use the exterior mirror before a significant change in direction",
        },
        {
          type: "Dangerous fault",
          example:
            "Any situation brought about by a serious neglect of using the mirrors, resulting in actual danger to the pupil, instructor, general public or property",
        },
      ],
    },

    // /////////////////////////////////
    {
      title: "Change speed",

      faults: [
        {
          type: "Driving fault",
          example:
            "Does not use mirrors before making a normal stop but no other road users are affected",
        },
        {
          type: "Serious fault",
          example:
            "Does not use mirrors before making a normal stop and no signal is given, significantly affecting the following traffic",
        },
        {
          type: "Dangerous fault",
          example:
            "Does not use mirrors before a normal stop and no signal is given, causing actual danger to following traffic",
        },
      ],
      links2: [
        {
          title: "Click to View",
          link: "https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#assessment-criteria",
        },
      ],
    },

    ///////////////////////////////////

    {
      title: "Signals",
      description: (
        <>
          On the form you need to record any faults made related to signals not
          being:
          <ul style={{padding:"0px"}}>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#necessary-marking"
              >
                {" "}
                necessary
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#correct-marking"
              >
                {" "}
                correct
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#timed-marking"
              >
                {" "}
                timed
              </a>
            </li>
            <li>
              The pupil should give clear signals to let other road users know
              the intended course to be taken. Signals shown in the Highway Code
              should only be used if it would help other road users (including
              pedestrians).
            </li>
            <li>
              Signals should be given in good time and cancelled after the
              manoeuvre has been completed.
            </li>
            <li>Pedestrians should not be beckoned to cross the road.</li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Necessary
          <ul style={{padding:"0px"}}>
            <li>Reasons to record a fault under ‘necessary’ include:</li>

            <li>1. failing to re-apply the signal when it self cancels</li>
            <li>2. failing to give a signal where necessary</li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Applies signal but cancels before the change in direction is complete, where another road user is present who would benefit from the signal",
        },
        {
          type: "Serious fault",
          example:
            "Omits an essential signal to inform other road user of a change in direction",
        },
        {
          type: "Dangerous fault",
          example:
            "Omits an essential signal to inform other road user of a change in direction, resulting in actual danger to the pupil, instructor, general public or property",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Correctly",
      description: (
        <>
          Reasons to record a fault under ‘correctly’ include:
          <ul style={{padding:"0px"}}>
            <li>1. signalling unnecessarily</li>
            <li>2. giving wrong arm signals</li>
            <li>3. failing to cancel after use</li>
            <li>
              4. signalling incorrectly (for example signalling left for right
              or right for left)
            </li>
            <li>
              5. flashing the headlights at another driver to proceed or turn
            </li>
            <li>6. having the hazard lights on whilst on the move</li>
            <li>7. making unnecessary use of the horn</li>
            <li>8. beckoning pedestrians </li>
          </ul>
        </>
      ),

      faults: [
        {
          type: "Driving fault",
          example:
            "Does not cancel left signal after leaving roundabout, continues with signal on for sufficient distance with no effect",
        },
        {
          type: "Serious fault",
          example:
            "Does not cancel left signal after leaving roundabout, continues with signal on towards junction on left with vehicle waiting to emerge, has to be asked to cancel signal",
        },
        {
          type: "Dangerous fault",
          example:
            "Beckons pedestrian to cross road causing actual danger, oncoming vehicle has to brake heavily to avoid pedestrian",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Timed",
      description: (
        <>
          Reasons to record a fault under ‘timed’ include:
          <ul style={{padding:"0px"}}>
            <li>1. giving late exit signals at roundabouts</li>
            <li>2. arriving at a junction and then signalling</li>
            <li>3. signalling after starting the manoeuvre</li>
            <li>4. signalling far too early or too late</li>
            <li>
              5. giving a misleading signal before intended left and right turn
            </li>
          </ul>
        </>
      ),

      faults: [
        {
          type: "Driving fault",
          example:
            "Gives a necessary signal late when turning at junction, having a sufficient effect on other road users to warrant recording a fault",
        },
        {
          type: "Serious fault",
          example:
            "Gives a very late signal for turning at junction with traffic present who are significantly affected",
        },
        {
          type: "Dangerous fault",
          example:
            "Gives a very late signal for turning at a junction and causes actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Signals",
      description: (
        <>
          On the form you need to record any faults made related to signals not
          being:
          <ul style={{padding:"0px"}}>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#approach-speed-marking"
              >
                {" "}
                approach speed
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#observation-marking"
              >
                {" "}
                observation
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#turning-right-marking"
              >
                {" "}
                turning right
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#turning-left-marking"
              >
                {" "}
                turning left
              </a>
            </li>
            <li>
              <a
                className={styles.Adi3Module19link}
                href="https://www.gov.uk/guidance/carry-out-mock-driving-tests-for-your-pupils#cutting-corners-marking"
              >
                {" "}
                cutting corners
              </a>
            </li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Approach speed
          <ul style={{padding:"0px"}}>
            <li>
              The pupil should be able to judge the correct speed of approach so
              that the car can enter a junction safely or stop if necessary.
            </li>
            <li>Reasons to record a fault under ‘approach speed’ include:</li>
            <li>1. approaching too fast</li>
            <li>2. approaching too slow</li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Approaches a junction sufficiently quickly that control of the car is compromised",
        },
        {
          type: "Serious fault",
          example:
            "Approaches a junction far too quickly, significantly affecting control of the car",
        },
        {
          type: "Dangerous fault",
          example:
            "Approaches a junction far too quickly, causing the instructor to take action to avoid actual danger",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Observation",
      description: (
        <>
          The pupil should:
          <ul style={{padding:"0px"}}>
            <li>
              1. make effective observations before moving into a junction and
              make sure it is safe before proceeding.
            </li>
            <li>
              2. watch out for cyclists and motorcyclists coming up on their
              left and pedestrians who are crossing
            </li>
          </ul>
        </>
      ),
      shortDec: (
        <>
          Reasons to record a fault under ‘observation’ include:
          <ul style={{padding:"0px"}}>
            <li>1. not taking effective observation before emerging</li>
            <li>
              2. looking both ways but still emerges to affect other road users
            </li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Misjudges the speed and distance of an approaching vehicle, does not compromise safety of other road users",
        },
        {
          type: "Serious fault",
          example:
            "Does not take effective observation before emerging at junctions, emerging into the path of other vehicles",
        },
        {
          type: "Dangerous fault",
          example:
            "Any situation brought about by the severe lack of effective observation that results in actual danger to the pupil, instructor, general public or property",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Turning right",
      description: (
        <>
          The car should be positioned correctly, using the correct lane. When
          turning right, the car should be positioned to the centre of the road
          as is safe. The car should not cut the corner when turning right.
        </>
      ),
      shortDec: (
        <>
          Reasons to record a fault under ‘turning right’ include:
          <ul style={{padding:"0px"}}>
            <li>1. positioning the car too far to the left</li>
            <li>2. positioning the car too far to the right</li>
            <li>
              3. stopping short of the turning point when turning from a major
              to minor road
            </li>
            <li>4. taking an incorrect position before turning right</li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example:
            "Approaches a T junction to turn right and positions the car part way over the central road marking with no effect on any road user",
        },
        {
          type: "Serious fault",
          example:
            "Does not attempt to use a clear available right hand lane when turning right at a major roundabout",
        },
        {
          type: "Dangerous fault",
          example:
            "Approaches a T junction to turn right and positions on the wrong side of the road with a high risk of safety to oncoming traffic",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Turning left",
      description: (
        <>
          When turning left, the car should be over to the left to avoid
          swinging out.
        </>
      ),
      shortDec: (
        <>
          Reasons to record a fault under ‘turning left’ include:
          <ul style={{padding:"0px"}}>
            <li>
              1. positioning the car too far to the right or too close to the
              kerb
            </li>
            <li>2. swinging out prior to reaching the corner</li>
            <li>
              3. positioning the car in an unmarked inappropriate lane to turn
              left
            </li>
          </ul>
        </>
      ),
      faults: [
        {
          type: "Driving fault",
          example: "Approaches a T junction to turn left and brushes the kerb",
        },
        {
          type: "Serious fault",
          example:
            "Habitually positions the car extremely close to the kerb or brushes it when turning left",
        },
        {
          type: "Dangerous fault",
          example:
            "Approaches a T junction to turn left and brushes the kerb, causing the instructor to take action to prevent actual danger to pedestrian close to kerb edge",
        },
      ],
    },
    //////////////////////////////////////
    {
      title: "Cutting corners",
      description: (
        <>
          Record the fault under ‘cutting corners’ if the pupil cuts corners
          when turning from a major to minor road.
        </>
      ),

      faults: [
        {
          type: "Driving fault",
          example:
            "Turning right from a major to minor road with the car positioned part way over the central dividing line of the minor road, with no effect on other road users approaching the junction",
        },
        {
          type: "Serious fault",
          example:
            "Turning right from a major to minor road with the car positioned completely on the wrong side of the road in the minor road with no mitigating circumstances",
        },
        {
          type: "Dangerous fault",
          example:
            "Turning right from a major to minor road with the car positioned completely on the wrong side of the road in the minor road, causing the instructor to take action to prevent actual danger to other road users",
        },
      ],
    },
    //////////////////////////////////////
  ];

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
              Control – <span className="text-emerald-400">Junctions</span>
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
                        <td className="p-3 text-slate-700">{fault.example}</td>
                      </tr>
                    ))}

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
}
