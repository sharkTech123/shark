import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import httpHandler from "../../../utils/httpHandler";
import bannerImg from "../../../assets/alertbg.png";
import smartlearnerLogo from "../../../assets/images/White-Logo-Fixed-1024x174.png";
import { useSelector, useDispatch } from "react-redux"; 
import LessonAccordation from "./additionalPagess/LessonAccordation";
import { fetchUserSubscriptions } from "./../../../redux/features/subscriptionSlice";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  PlayCircle,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdiPartTwo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);



  
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
    // Fetch user subscriptions

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
            (planCategory === "pdi-part-two packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
      // Check the subscription plan category
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);
  ////////////////////////////////////////
  useEffect(() => {
    const verifyPayment = async () => {
      const subscriptionData2 = localStorage.getItem("PdiPartTwoSubsBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",
          
            parsedData,
          
        );

        if (res.data.success) {
          localStorage.removeItem("PdiPartTwoSubsBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

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
        },
      );
    });
  }, []);

  return (
    <main className="w-full overflow-hidden font-sans">
      <Helmet>
        <title>Driving instructor training in Doncaster</title>
        <meta
          name="description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test."
        />
      </Helmet>

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[75vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Welcome to <span className="text-red-500">PDI Part Two</span>
            </h1>

            <p className="mt-6 text-slate-200 text-lg leading-relaxed">
              Well done on successfully passing your Part 1 ADI Exam! 
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 px-7 py-3 rounded-full bg-red-600 hover:bg-red-700 transition font-semibold text-white shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="bg-white">
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="flex items-center gap-3 text-3xl font-bold mb-8">
              <PlayCircle className="w-8 h-8 text-red-600" />
              Watch Our Video
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
              <iframe
                className="w-full h-[320px]"
                src="https://www.youtube.com/embed/G3ccqQJwM-k"
                title="PDI Intro Video"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ================= INTRO TEXT ================= */}
        <section className="py-14 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed">
              Now, as you step into Module 2, you'll dive deeper into the
              practical elements of your training. The Part 2 ADI Exam is a
              crucial milestone, designed to test your driving ability to an
              exceptional standard. To help you prepare, this guide is
              structured into 11 comprehensive modules, each focusing on the key
              skills and knowledge you'll need to succeed.
            </p>
          </div>
        </section>

        {/* ================= WHAT TO EXPECT ================= */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-extrabold mb-6">
              What to <span className="text-red-600">Expect?</span>
            </h2>

            <button
              onClick={() => setOpen1(!open1)}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full 
             bg-gradient-to-r from-red-600 to-red-500 
             text-white font-semibold shadow-xl 
             hover:shadow-2xl hover:scale-[1.03] active:scale-95 
             transition-all duration-300"
            >
              <ArrowDownCircle
                className={`w-6 h-6 transition-transform duration-300 
      ${open1 ? "rotate-180" : ""}`}
              />
              <span>Click Me</span>
            </button>

            {open1 && (
              <div className="mt-8 bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-semibold mb-4">
                  In this module, you'll explore a blend of theory and practical
                  advice to help you master:
                </h3>

                <ul className="space-y-3 text-slate-700" style={{paddingLeft:"0px"}}>
                  <li className="flex gap-2">
                    <CheckCircle className="text-red-500" /> Advanced driving
                    techniques.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-red-500" /> Hazard perception
                    and anticipation.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-red-500" /> Vehicle control,
                    safety, and awareness.
                  </li>
                </ul>
                <p>
                  While this guide offers a strong foundation, we strongly
                  encourage you to seek practical training from a qualified ADI
                  trainer. Hands-on experience is essential to solidify your
                  skills and build confidence in real-world scenarios.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= PART 2 TEST ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-extrabold mb-4">
              What is the <span className="text-red-600">Part 2 Test?</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The Part 2 ADI test is designed to assess your driving ability to
              a very high standard. The aim is to ensure that you can drive
              safely, smoothly, and confidently while setting a positive example
              for learner drivers.
            </p>
            {/* CLICK BUTTON */}
            <button
              onClick={() => setOpen2(!open2)}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full 
                 bg-gradient-to-r from-red-600 to-red-500 
                 text-white font-semibold shadow-xl 
                 hover:shadow-2xl hover:scale-[1.03] transition"
            >
              <ArrowDownCircle
                className={`w-6 h-6 transition-transform ${
                  open2 ? "rotate-180" : ""
                }`}
              />
              Click Me
            </button>
            {open2 && (
              <>
                <div className="mt-10 grid lg:grid-cols-2 gap-8">
                  {/* VIDEO CARDS */}
                  {["ORyqaIi3BCk", "cdPRimqZ12s"].map((id) => (
                    <div
                      key={id}
                      className="bg-slate-50 rounded-3xl shadow-xl overflow-hidden"
                    >
                      <iframe
                        className="w-full h-[280px]"
                        src={`https://www.youtube.com/embed/${id}`}
                        allowFullScreen
                      />
                    </div>
                  ))}

                  {/* INFO BOX */}
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
                  <ul className="space-y-4 text-slate-700">
                    <li>
                      <strong>Duration:</strong> Around one hour
                    </li>
                    <li>
                      <strong>Sections: There are two main sections:</strong>
                    </li>
                    <li>
                      <strong>Eyesight Test:</strong>
                      1. Eyesight Test: 27.5 meters if the plate is old-style,
                      or 26.5 meters if the plate is new-style
                    </li>
                    <li>
                      <strong>Driving Ability Assessment:</strong>
                      2. Driving Ability Assessment: Includes five key aspects
                      of driving.
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-red-50 to-white fade-up">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-extrabold mb-6">
              What Does the <span className="text-red-600">Test Involve?</span>
            </h2>

            {/* CLICK BUTTON */}
            <button
              onClick={() => setOpen3(!open3)}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full 
                 bg-gradient-to-r from-red-600 to-red-500 
                 text-white font-semibold shadow-xl 
                 hover:shadow-2xl hover:scale-[1.03] transition"
            >
              <ArrowDownCircle
                className={`w-6 h-6 transition-transform ${
                  open3 ? "rotate-180" : ""
                }`}
              />
              Click Me
            </button>

            {open3 && (
              <div className="mt-10 space-y-8">
                {/* BOX 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">
                   The driving ability test includes a mix of:
                  </h3>

                  <ul className="space-y-3 text-slate-700">
                    <li>
                      <strong>General Driving:</strong> Driving in various environments (e.g., urban, rural, and motorways).
                    </li>
                    <li>
                      <strong>Manoeuvres:</strong> You'll be asked to complete one or more of the following:
                      <ul className="list-disc list-inside ml-4">
                        <li>Parallel park</li>
                        <li>Reverse into a parking bay</li>
                        <li>Forward bay park & reverse out</li>
                        <li>
                          Pull up on the right-hand side, reverse two car
                          lengths, and rejoin traffic
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Independent Driving:</strong>
                      Following directions from road signs or a sat-nav for around 20 minutes.
                    </li>
                  </ul>
                </div>

                {/* BOX 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-red-500">
                  <h3 className="text-xl font-semibold mb-4">
                   Assessment Criteria:
                  </h3>

                  <ul className="space-y-3 text-slate-700">
                    <li>✔ You are allowed up to six driving faults (similar to minors in a learner test).</li>
                    <li>✔ Serious or dangerous faults (similar to majors) will result in a fail.</li>
                    <li>
                      ✔ The examiner is looking for a level of driving that would set a good example to your learners.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================= ACCORDION ================= */}
        <section className="py-12 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 max-w-6xl">
            <LessonAccordation />
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-slate-900 text-slate-300 py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
            <img src={smartlearnerLogo} alt="logo" className="max-w-xs" />

            <div>
              <p className="flex gap-2 items-center">
                <Phone className="text-red-500" /> +44-02475092784
              </p>
              <p className="flex gap-2 items-center mt-2">
                <Mail className="text-red-500" /> admin@smartlearner.com
              </p>
            </div>

            <div>
              <p className="flex gap-2 items-start">
                <MapPin className="text-red-500 mt-1" />4 Wheel Wright Building,
                Hen Lane, Coventry, CV6 4LB
              </p>

              <div className="flex gap-4 mt-4">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
