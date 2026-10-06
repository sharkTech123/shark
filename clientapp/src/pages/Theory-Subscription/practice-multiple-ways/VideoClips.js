import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import styles from "./css/VehicleLoading.module.css";
import Lplateimg from "../../../assets/images/L-Plate.jpg";
import alertnessBanner from "../../../assets/alertbg.png";
gsap.registerPlugin(ScrollTrigger);

export default function VideoClips() {
  const videoURLs = [
    "https://www.youtube.com/embed/R_R0tDWry7Y",
    "https://www.youtube.com/embed/Bz5vUmXG2eg",
    "https://www.youtube.com/embed/7-piGp7tw90",
    "https://www.youtube.com/embed/KPpjQw9U4Pg",
    "https://www.youtube.com/embed/87-vlN6K8lw",
    "https://www.youtube.com/embed/XbqGW2bFSgc",
    "https://www.youtube.com/embed/9FlCxeP7QPs",
    "https://www.youtube.com/embed/m7voGvNBjXY",
    "https://www.youtube.com/embed/QLFxPP9axq8",
  ];

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
      {/* ================= BANNER ================= */}
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
                Topic: <span className="text-red-500">Video</span> clips
              </h1>

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
        {/* ================= WHAT ARE VIDEO CLIPS ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
                What are <span className="text-red-600">video clips?</span>
              </h2>
              <ul className="list-disc list-inside space-y-4 text-slate-700">
                <li>
                  At the end of your theory test you will be shown a video clip,
                  you will then have 3 questions to answer based on these
                  videos.
                </li>
                <li>
                  You can play the video clip as many times as you would like
                  during the 3 questions.
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {videoURLs.slice(0, 2).map((url, index) => (
                <div
                  className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
                  key={index}
                >
                  <iframe
                    className="w-full h-full"
                    src={url}
                    title={`Video Clip ${index + 1}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TYPES OF QUESTIONS ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              What type of{" "}
              <span className="text-red-600">questions can I get?</span>
            </h2>
            <ul className="list-disc list-inside space-y-4 text-slate-700">
              <li>Questions may vary depending on the video clip shown.</li>
              <li>
                For example, you may see a clip of a carvan swerving side to
                side on a motorway, questions can be surrounding the hazard that
                is happening, you may also get questions such as the speed limit
                for the road.
              </li>
              <li>
                It is important to take note of every detail in the video, look
                out for road signs, road markings, weather condtions etc.
              </li>
            </ul>
          </div>
        </section>

        {/* ================= TEST YOURSELF ================= */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-white fade-up">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10">
              Test <span className="text-red-600">Yourself</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoURLs.map((url, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.02] transition"
                >
                  <div className="relative aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={url}
                      title={`Video Clip ${index + 1}`}
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
