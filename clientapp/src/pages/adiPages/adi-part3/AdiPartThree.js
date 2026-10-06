import React, { useEffect, useState } from "react";
import styles from "./AdiPartThree.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector
import { fetchUserSubscriptions } from "./../../../redux/features/subscriptionSlice";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Sparkles, BookOpenCheck, Lightbulb, Timer } from "lucide-react";
import LessonModules from "./additionalPages/LessonModules";
import { Helmet } from "react-helmet-async";
import httpHandler from "../../../utils/httpHandler";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bannerImg from "../../../assets/images/ten.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AdiPartThree() {
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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);
  const userSubscription = useSelector(
    (state) => state.subscription.userSubscription,
  );
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

  useEffect(() => {
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
            (planCategory === "pdi-part-three packages" ||
              planCategory === "Complete packages")
          );
        });
      if (!hasAccess) {
        navigate("/driving-instructor-packages/instructor-packages"); // Redirect to subscription page if no valid plan found
      }
    }
  }, [userDetails, userSubscription, subscriptionLoaded, dispatch, navigate]);
  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    const verifyPayment = async () => {
      const subscriptionData2 = localStorage.getItem("PdiPartThreeSubsBuy");

      if (!subscriptionData2) return;

      try {
        const parsedData = JSON.parse(subscriptionData2);
        const res = await httpHandler.post(
          "/api/subscription/revolut-payment-success",

          parsedData,
        );

        if (res.data.success) {
          localStorage.removeItem("PdiPartThreeSubsBuy"); // clean up
        } else {
          console.error("Payment verification failed");
        }
      } catch (err) {
        console.error("Verification error:", err);
      }
    };

    verifyPayment();
  }, []);

  // ////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Helmet>
        <title>Driving instructor training in Rugby</title>
        <meta
          name="description"
          content="Explore our Driving Instruction training (PDI) program designed to help new drivers build confidence and refine their skills after passing their test."
        />
        <link
          rel="canonical"
          href="https://smartlearner.com/part-three-theory-questions"
        />
      </Helmet>

      <main className="w-full overflow-hidden font-sans">
        {/* ================= BANNER ================= */}
        <section className="relative h-[75vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bannerImg})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Congratulations on Passing Your{" "}
                <span className="text-emerald-400">Part 2 ADI Exam!</span>
              </h1>

              <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
                <strong>Well done!</strong>
                <br />
                You've successfully completed Part 2 of the Approved Driving
                Instructor (ADI) exam, and you've demonstrated the skills and
                professionalism required to advance to the next step.
              </p>

              <p className="mt-4 text-slate-200 text-sm sm:text-lg">
                Your hard work has paid off — now you're ready for{" "}
                <strong>Part 3</strong>.
              </p>

              <Link to="/Contact-Us">
                <button className="mt-8 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-full text-white font-semibold shadow-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= MOTIVATION SECTION ================= */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
          <div className="container mx-auto px-6 fade-up">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-emerald-500">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Good Luck on Your Journey to{" "}
                <span className="text-emerald-600">Part 3</span>
              </h2>

              <p className="text-slate-700 mb-4">
                You're one step closer to achieving your goal of becoming a
                fully qualified ADI. The skills you're developing now will serve
                you throughout your career, as you help learners become safe and
                confident drivers.
              </p>

              <p className="text-slate-700 mb-4">
                Stay focused, keep practicing, and continue refining your
                teaching techniques. Best of luck in your preparation for Part 3
                – you’ve got this!
              </p>

              <p className="font-semibold text-emerald-600">
                We look forward to hearing about your success!
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHAT'S NEXT ================= */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14 fade-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                What's Next?{" "}
                <span className="text-emerald-600">The Part 3 ADI Exam</span>
              </h2>

              <p className="mt-6 text-slate-700 text-sm sm:text-lg">
                The Part 3 exam is your opportunity to showcase your ability to
                teach others, not just drive. This is the instructional phase of
                the ADI exam, where you will be assessed on how well you can
                convey your driving knowledge, skills, and techniques to a
                learner driver.
              </p>
            </div>

            {/* ================= CARDS ================= */}
            <div className="grid md:grid-cols-3 gap-10">
              {/* CARD 1 */}
              <div className="fade-up bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
                <BookOpenCheck className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Instructing a Learner
                </h3>
                <p className="text-slate-700">
                  Teach a learner driver in a real or simulated scenario,
                  breaking down complex driving tasks and giving clear,
                  effective instructions.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="fade-up bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
                <Lightbulb className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Assessment Areas</h3>
                <p className="text-slate-700">
                  Be evaluated on your planning, communication, feedback,
                  observation, correction skills, and overall professionalism.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="fade-up bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
                <Timer className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Duration</h3>
                <p className="text-slate-700">
                  The exam lasts about an hour, during which you will conduct a
                  full lesson just like a real-world teaching experience.
                </p>
              </div>
            </div>
          </div>

          <section>
            <LessonModules />
          </section>
        </section>
      </main>
    </>
  );
}
