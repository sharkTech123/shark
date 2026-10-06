import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate

import { fetchUserSubscriptions } from "../../redux/features/subscriptionSlice";

import gsap from "gsap";
import { Helmet } from "react-helmet-async";
import httpHandler from "../../utils/httpHandler";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BookOpen,
  ClipboardList,
  Layers,
  ShieldCheck,
  AlertTriangle,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import bannerImg from "../../assets/alertbg.png"; // <-- change if needed

gsap.registerPlugin(ScrollTrigger);

export default function AdiPartOne() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userId = userDetails?._id;

  const [subscriptionLoaded, setSubscriptionLoaded] = useState(false); // Track when subscription data is loaded

  useEffect(() => {
    // If user is logged in and userId exists, fetch subscription data
    if (userId) {
      dispatch(fetchUserSubscriptions(userId))
        .then(() => setSubscriptionLoaded(true)) // Set subscriptionLoaded to true once data is fetched
        .catch(() => setSubscriptionLoaded(true)); // Handle error and set subscriptionLoaded to true
    }
  }, [dispatch, userId]);

  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription
  );

  useEffect(() => {
    //

    if (!userDetails || Object.keys(userDetails).length === 0) {
      navigate("/pdi-login"); // Redirect to login if user is not logged in
    } else if (userDetails.role === "admin") {
      // Allow admin to access the portal
      return;
    } else if (userDetails.role === "instructortrainee") {
      // Allow admin to access the portal
      return;
    } else if (subscriptionLoaded) {
      const hasAccess =
        Array.isArray(userSubscription) &&
        userSubscription.some((subscription) => {
          const { planCategory } = subscription.subscriptionId || {};
          const { couponApplied } = subscription; // Assuming couponApplied is part of the subscription object

          return (
            subscription.isActive &&
            (planCategory === "pdi-part-one packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);

  //////////////////////////////////////////////////////////////
  useEffect(() => {
    const verifyPayment = async () => {
      const subscriptionData2 = localStorage.getItem("PdiPartOneSubsBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",
          
            parsedData,
          
        );

        if (res.data.success) {
          localStorage.removeItem("PdiPartOneSubsBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

  // //////////////////////////////////////////////////////////////////////////////////////
  const heroTextRef = useRef(null);

  useEffect(() => {
    // Hero text animation
    gsap.fromTo(
      heroTextRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    // Scroll reveal animations
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
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driving instructor training in kenilworth</title>
        <meta
          name="description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test. "
        />
        <meta
          property="og:title"
          content="Driving instructor training in kenilworth "
        />
        <meta
          property="og:description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test."
        />

        <link
          rel="canonical"
          href="https://smartlearner.com/part-one-theory-questions"
        />
      </Helmet>
      {/* ================= HERO / BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroTextRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Welcome to <span className="text-orange-400">PDI</span>
                <br />
                <span className="text-cyan-300">Part One</span>
              </h1>

              <p className="text-slate-200 text-base sm:text-lg lg:text-xl">
                Begin your journey to becoming a professional Approved Driving
                Instructor. Master theory, build confidence, and prepare to
                succeed.
              </p>

              <div className="flex gap-4 pt-4">
                <Link to="/Contact-Us">
                  <button className="px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg transition">
                    Contact Us
                  </button>
                </Link>

                <Link to="/part-1-trainning-material">
                  <button className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition">
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= INTRO ================= */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center fade-up">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              What is <span className="text-orange-500">PDI Part One?</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              The PDI Part One exam tests your theoretical knowledge across key
              driving and instructional topics. It is the foundation of your ADI
              journey and a critical step toward becoming a certified
              instructor.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-10 h-10 text-orange-500" />
              <h3 className="text-xl font-bold">Why It Matters</h3>
            </div>
            <p className="text-slate-600">
              Strong theory knowledge ensures safer driving, better teaching,
              and higher pass rates for both instructors and learners.
            </p>
          </div>
        </div>
      </section>
      {/* ================= STUDY PLAN ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <BookOpen className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Create a{" "}
              <span className="text-orange-500">Strong Study Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-orange-500">
              <ClipboardList className="w-9 h-9 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multiple Choice</h3>
              <p className="text-slate-700">
                The Multiple-Choice section includes 100 questions spread across
                four key areas (bands). To pass, you must answer at least 85
                questions correctly, with a minimum score of 20 out of 25 in
                each band. Even if you score 85 overall, you’ll fail if you
                don’t meet the band-specific requirements, so it’s essential not
                to neglect any section.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-orange-500">
              <Layers className="w-9 h-9 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Daily Routine</h3>
              <p className="text-slate-700">
                Focus on one band per day. This approach ensures balanced
                coverage without overwhelming yourself. Regular, consistent
                study sessions are far more effective than last-minute cramming.
              </p>
            </div>

            <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl border-t-8 border-orange-500">
              <CheckCircle2 className="w-9 h-9 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Exam Ready</h3>
              <p className="text-slate-700">
                Balanced preparation ensures you meet both overall and
                band-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 fade-up">
            Breakdown of <span className="text-orange-500">the Bands</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* BAND 1 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
              <h3 className="text-xl font-bold mb-2">Band 1: Road Procedure</h3>
              <p className="text-slate-700 mb-2">
                <strong>What it covers:</strong> Rules of the road, including
                lane discipline, right-of-way, and how to handle various
                intersections and driving conditions.
              </p>{" "}
              <p className="text-slate-700 mb-2">
                <strong>Why It Matters: </strong>Road procedure is the
                foundation of safe driving, and as an instructor, you need to
                teach these rules clearly.
              </p>
              <p className="text-slate-700">
                <strong>Study Tip:</strong> Familiarize yourself with the
                Highway Code, especially tricky scenarios like roundabouts and
                pedestrian crossings. Practice with mock questions based on
                real-world situations.
              </p>
            </div>

            {/* BAND 2 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
              <h3 className="text-xl font-bold mb-2">
                Band 2: Traffic Signs, Signals, Car Control, Pedestrians, and
                Mechanical Knowledge
              </h3>
              <p className="text-slate-700 mb-2">
                <strong>What it covers:</strong> This band includes traffic
                signs, vehicle control, pedestrian safety, and basic car
                mechanics.
              </p>{" "}
              <p className="text-slate-700 mb-2">
                <strong>Why It Matters: </strong> Understanding traffic signs
                and basic mechanics is critical for safe driving and effective
                teaching.
              </p>
              <p className="text-slate-700">
                <strong>Study Tip:</strong> Use flashcards to memorize traffic
                signs. For mechanical knowledge, focus on the basics—how brakes,
                tires, and the engine work. Practice interpreting signs in
                context.
              </p>
            </div>

            {/* BAND 3 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
              <h3 className="text-xl font-bold mb-2">
                Band 3: Driving Test, Disabilities, and the Law
              </h3>
              <p className="text-slate-700 mb-2">
                <strong>What it covers:</strong> This section focuses on the
                driving test process, disabilities, and legal aspects of
                driving.
              </p>{" "}
              <p className="text-slate-700 mb-2">
                <strong>Why It Matters: </strong> You’ll need to guide students
                through the driving test process, including accommodations for
                drivers with disabilities.
              </p>
              <p className="text-slate-700">
                <strong>Study Tip:</strong> Review DVSA guidelines on the
                driving test. Learn how to adjust your teaching for students
                with disabilities, and study the laws that apply to both drivers
                and instructors.
              </p>
            </div>

            {/* BAND 4 */}
            <div className="fade-up bg-white p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
              <h3 className="text-xl font-bold mb-2">
                Band 4: Publications and Instructional Techniques
              </h3>
              <p className="text-slate-700 mb-2">
                <strong>What it covers:</strong> This band is all about
                teaching—how to effectively communicate driving techniques and
                safety information.
              </p>{" "}
              <p className="text-slate-700 mb-2">
                <strong>Why It Matters: </strong> Being knowledgeable isn’t
                enough—you need to communicate clearly and adapt to different
                learning styles.
              </p>
              <p className="text-slate-700">
                <strong>Study Tip:</strong> Study different teaching techniques.
                Practice explaining complex concepts in simple terms, and create
                sample lesson plans to refine your instructional approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= HAZARD PERCEPTION ================= */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              The Hazard Perception{" "}
              <span className="text-orange-500">Test Explained</span>
            </h2>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <p className="text-slate-700 leading-relaxed mb-6">
              Each clip contains one or more developing hazards, such as
              vehicles, pedestrians and road conditions. You should respond by
              clicking the mouse as soon as you see a hazard developing that may
              result in you, the driver, having to take some action, such as
              changing speed or direction. The earlier you notice a developing
              hazard and make a response, the higher your score. However, you
              must wait until the hazard actually starts to develop and not
              click too early. Your response won’t cause the scene in the video
              to change in any way. However, a red flag will appear at the
              bottom of the screen to show that your response has been noted.
              Before each clip starts, there’ll be a 10-second pause so that you
              can see the new road situation. The hazard perception tests lasts
              about 20 minutes. There are 15 scoreable hazards in total. You can
              score up to five marks on each. The total available score is 75.
            </p>

            <Link
              to="/hazard-preception-part-2"
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition"
            >
              Go to Hazard Perception
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      {/* ================= VIDEO ================= */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="bg-slate-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-bsLPF0Q35Y"
                title="PDI Training Video"
                allowFullScreen
              />
            </div>
            <div className="p-6 flex items-center gap-3">
              <PlayCircle className="text-orange-500" />
              <p className="font-semibold" style={{ marginBottom: "0px" }}>
                Watch & Learn
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Hazard Tips */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Tips for the Hazard Perception Test
            </h3>
            <ul
              className="space-y-3 text-slate-700"
              style={{ paddingLeft: "0px" }}
            >
              <li>
                <strong>Practice Makes Perfect: </strong> Use online resources
                to practice with mock clips.
              </li>
              <li>
                <strong>The Click-Click Technique: </strong> Click twice in
                quick succession when you see a potential hazard.
              </li>
              <li>
                <strong>Stay Alert: </strong> Hazards can appear at any moment,
                so don’t lose focus.
              </li>
              <li>
                <strong>Watch for Dual Hazards: </strong> Keep your attention
                sharp until each video ends.
              </li>
            </ul>
          </div>

          {/* General Tips */}
          <div className="fade-up bg-slate-50 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              General Tips for Success
            </h3>
            <ul
              className="space-y-3 text-slate-700 "
              style={{ paddingLeft: "0px" }}
            >
              <li>
                <strong>Consistency is Key: </strong> Regular study and practice
                are crucial.
              </li>
              <li>
                <strong>Avoid Over-clicking: </strong> Focus on identifying
                hazards early.
              </li>
              <li>
                <strong>Stay Calm and Focused: </strong> Perform better under
                pressure by staying calm.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ================= NEXT STEP ================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Continue?
        </h2>
        <p className="text-slate-300 mb-8">
          Move on to structured training material and quizzes.
        </p>
        <Link to="/part-1-trainning-material">
          <button className="px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 font-semibold shadow-xl transition">
            NEXT PAGE
          </button>
        </Link>
      </section>
    </main>
  );
}
