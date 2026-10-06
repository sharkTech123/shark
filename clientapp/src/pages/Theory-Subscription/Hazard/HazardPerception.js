import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import alertnessBanner from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

export default function HazardPerception() {
  const videoURLs = [
    "https://www.youtube.com/embed/MpjbrzYnnAY",
    "https://www.youtube.com/embed/Zuu1F4NSWQo",
    "https://www.youtube.com/embed/yrCfp-9Fzlg",
    "https://www.youtube.com/embed/0DXPWBv5hrY",
    "https://www.youtube.com/embed/MozU03NwbQ8",
    "https://www.youtube.com/embed/NoxcCOa_-Yc",
    "https://www.youtube.com/embed/ecnP-gxKBpE",
    "https://www.youtube.com/embed/hRTXP6lemWU",
    "https://www.youtube.com/embed/u8GceoTRmP4",
    "https://www.youtube.com/embed/9ICcf0448Jk",
    "https://www.youtube.com/embed/crQq8m22CY4",
    "https://www.youtube.com/embed/W0nVpLTNzvA",
    "https://www.youtube.com/embed/TQgBE8DtCb8",
    "https://www.youtube.com/embed/JcK1PHR8-sM",
    "https://www.youtube.com/embed/wQ6u_j5e6tc",
    "https://www.youtube.com/embed/JVntebdrC08",
    "https://www.youtube.com/embed/93fzW4izNiA",
    "https://www.youtube.com/embed/9_OTR81MK68",
    "https://www.youtube.com/embed/WAbK4BM1gmI",
    "https://www.youtube.com/embed/oBoY6pMH4Co",
    "https://www.youtube.com/embed/ob1m_mUKVX4",
    "https://www.youtube.com/embed/J5_YIQeKMAw",
    "https://www.youtube.com/embed/_LTAovQiBNI",
    "https://www.youtube.com/embed/vtDqDuCaH2s",
    "https://www.youtube.com/embed/aWxIuaEeSZA",
    "https://www.youtube.com/embed/zBXRL21byF8",
    "https://www.youtube.com/embed/LCjDw34dGnM",
    "https://www.youtube.com/embed/sIQtqZxyLCk",
    "https://www.youtube.com/embed/J1L6-65r18M",
    "https://www.youtube.com/embed/jB3grugHr_0",
    "https://www.youtube.com/embed/atZ-quaxlTs",
    "https://www.youtube.com/embed/nTNQ7MDAdko",
    "https://www.youtube.com/embed/d1VZadRKG3o",
    "https://www.youtube.com/embed/3lmQYLRbKHw",
    "https://www.youtube.com/embed/y4CCEiass1A",
    "https://www.youtube.com/embed/SKZ3iA2O_pg",
    "https://www.youtube.com/embed/yc7Xo-5HAkM",
    "https://www.youtube.com/embed/9Ow5oITdBjE",
    "https://www.youtube.com/embed/zS33g8m3SRg",
    "https://www.youtube.com/embed/5FvyFd81_1k",
  ];

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
            start: "top 90%",
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
                Forget the rest,
                <span className="text-red-500">learn with</span> the best!
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                HAZARD PERCEPTION TEST VIDEOS AND GUIDANCE
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
        {/* ================= HOW TEST WORKS ================= */}
        <section className="py-16 sm:py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="font-extrabold mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                }}
              >
                How does the <span className="text-red-600">Test Work?</span>
              </h2>

              <ul className="space-y-4 text-slate-700">
                {[
                  "Before you start the hazard perception test, you’ll be shown a video about how it works.",
                  "You’ll then watch 14 video clips.",
                  "Feature everyday road scenes.",
                  " Contain at least one ‘developing hazard’ – but one of the clips features 2 developing hazards.",
                  "You get points for spotting the developing hazards as soon as they start to happen.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm sm:text-base leading-relaxed"
                  >
                    <IoMdArrowDropright className="text-red-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="font-bold mb-4"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                }}
              >
                A developing hazard is something that would cause you to take
                action, like changing speed or direction.
              </h3>

              <ul className="space-y-4 text-slate-700">
                {[
                  "You can score up to 5 points for each developing hazard.",
                  "To get a high score, click the mouse as soon as you see the hazard starting to develop.",
                  "You do not lose points if you click and get it wrong. However, you will not score anything if you click continuously or in a pattern.",
                  "You only get one attempt at each clip. You cannot review or change your responses.",
                  "You’ll get the result at the test centre after taking the theory test. You must pass both parts to pass the test. You’ll get a letter with a pass certificate number at the test centre.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm sm:text-base leading-relaxed"
                  >
                    <IoMdArrowDropright className="text-red-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= VIDEOS ================= */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-white fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-extrabold text-center mb-4"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}
            >
              Hazard <span className="text-red-600">Perception Videos</span>
            </h2>

            <p
              className="text-center text-slate-600 mb-10 max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              }}
            >
              Below we have created videos to guide you through hazard
              perception clips.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoURLs.map((url, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition"
                >
                  <div className="relative aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={url}
                      title={`Hazard Video ${index + 1}`}
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
