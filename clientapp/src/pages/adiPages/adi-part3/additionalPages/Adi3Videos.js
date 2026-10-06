import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Adi3Module.module.css";
import backgroundImage from "../../../../assets/images/adi3videos.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Route,
  Eye,
  ParkingSquare,
  Navigation,
  FilePenLine,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
export default function Adi3Videos() {
  const videoURLs = [
    "https://www.youtube.com/embed/voP165d_Vak",
    "https://www.youtube.com/embed/5TejFMpXXdk",
    "https://www.youtube.com/embed/nKup6MspIx0",
    "https://www.youtube.com/embed/z0_U61zG4dI",
    "https://www.youtube.com/embed/Oskqy7_ZpVA",
    "https://www.youtube.com/embed/KnL-BYM2dKw",
    "https://www.youtube.com/embed/Z0yo2TjJwww",
    "https://www.youtube.com/embed/_CZw4BryhGI",
    "https://www.youtube.com/embed/_MqygK1Dq7A",
    "https://www.youtube.com/embed/TniF-FH7Yxc",
    "https://www.youtube.com/embed/GFc3vzymSHM",
    "https://www.youtube.com/embed/JJn7ND4Xxos",
    "https://www.youtube.com/embed/69CeNTW1TvE",
    "https://www.youtube.com/embed/5hrmbP59ov8",
    "https://www.youtube.com/embed/da__4gZJr6A",
    "https://www.youtube.com/embed/dI06Xz0Xy1E",
    "https://www.youtube.com/embed/dlYO5uD0Lyc",
    "https://www.youtube.com/embed/RwyzvoWACxs",
    "https://www.youtube.com/embed/5BtyVoEYi7Y",
    "https://www.youtube.com/embed/qYdhiEXfmt8",
    "https://www.youtube.com/embed/mTJ45L4Ksdk",
    "https://www.youtube.com/embed/p9nArUzvBUQ",
    "https://www.youtube.com/embed/u9TF_TQ9iZQ",
    "https://www.youtube.com/embed/6aTAPdPu1jo",
    "https://www.youtube.com/embed/k0xvLyB03lo",
    "https://www.youtube.com/embed/VDui3vq6hFk",
    "https://www.youtube.com/embed/_I2c20gJlsw",
    "https://www.youtube.com/embed/M3nLt_SCpuM",
    "https://www.youtube.com/embed/uPKcxrcdTcI",
    "https://www.youtube.com/embed/ZVxnHmALzJ4",
    "https://www.youtube.com/embed/9i2jtjDHqlM",
    "https://www.youtube.com/embed/pM34_NmzIag",
    "https://www.youtube.com/embed/ncw4tPr4wJo",
    "https://www.youtube.com/embed/YeNMi5sN_uo",
    "https://www.youtube.com/embed/z_Jz84zBIxc",
    "https://www.youtube.com/embed/O-MubDB_qng",
    "https://www.youtube.com/embed/34g9SZuOy7k",
    "https://www.youtube.com/embed/h4LGen5ic_4",
    "https://www.youtube.com/embed/W7T5-lMbw7Q",
    "https://www.youtube.com/embed/0QzUOvw4Xjo",
    "https://www.youtube.com/embed/KE936GRRRUk",
    "https://www.youtube.com/embed/weUCo2vnYIk",
    "https://www.youtube.com/embed/To8ziitW1v8",
    "https://www.youtube.com/embed/7ka_dx1jUGA",
    "https://www.youtube.com/embed/o9muCTSrbKU",
    "https://www.youtube.com/embed/bOsan5fCy-8",
    "https://www.youtube.com/embed/ZhrMFuJIvSQ",
    "https://www.youtube.com/embed/AApwhdpgDSg",
    "https://www.youtube.com/embed/4-ItAzv4koE",
    "https://www.youtube.com/embed/Mfsp5T8RBx0",
    "https://www.youtube.com/embed/QTgnO-rVu9s",
    "https://www.youtube.com/embed/QoJqpqFsAO4",
    "https://www.youtube.com/embed/oTSq725wP-Q",
    "https://www.youtube.com/embed/7be-irjDQQ8",
    "https://www.youtube.com/embed/Hxy1c_nJwp0",
    "https://www.youtube.com/embed/_nXUlRhagag",
    "https://www.youtube.com/embed/_nXUlRhagag",
    "https://www.youtube.com/embed/bfNWsJpeZoM",
    "https://www.youtube.com/embed/79ISXySHUL4",
    "https://www.youtube.com/embed/m5GpAC3kQjY",
    "https://www.youtube.com/embed/feiGFeaHoOs",
    "https://www.youtube.com/embed/uP__51HXOAM",
    "https://www.youtube.com/embed/fZ1tXWu_25A",
    "https://www.youtube.com/embed/6HFZuV51X4o",
    "https://www.youtube.com/embed/mmBEB-tAXzA",
    "https://www.youtube.com/embed/-8syVRiEVJs",
    "https://www.youtube.com/embed/dBi_K3FKQKg",
    "https://www.youtube.com/embed/v8Ijlll4CxA",
    "https://www.youtube.com/embed/CxE9vCOPUXo",
    "https://www.youtube.com/embed/CwLxMpgo3z8",
    "https://www.youtube.com/embed/ZywSJtUJ8PY",
    "https://www.youtube.com/embed/xZJlwvFKjGA",
    "https://www.youtube.com/embed/4K00oQDw7vs",
    "https://www.youtube.com/embed/EIdyprnki9A",
    "https://www.youtube.com/embed/g9WeZjQ0j30",
    "https://www.youtube.com/embed/m2I3jaikL3s",
    "https://www.youtube.com/embed/kyuFNV40-sQ",
    "https://www.youtube.com/embed/gO7BUvs3ppQ",
    "https://www.youtube.com/embed/ZHGdqXMROIY",
    "https://www.youtube.com/embed/Cq4HttIjFuA",
    "https://www.youtube.com/embed/YjJ1ERBMtlA",
    "https://www.youtube.com/embed/ysUo5j6O1C4",
    "https://www.youtube.com/embed/JmoPSe5l9sA",
    "https://www.youtube.com/embed/u9Eqd_Y33fc",
    "https://www.youtube.com/embed/KEtEkQSTfCY",
    "https://www.youtube.com/embed/Cz4p3ZQA_d4",
    "https://www.youtube.com/embed/0y5t-WQnNQU",
    "https://www.youtube.com/embed/i5Qy8xLJlto",
    "https://www.youtube.com/embed/BvkhdTdbLLQ",
    "https://www.youtube.com/embed/c3_L6HRbLuM",
    "https://www.youtube.com/embed/ByYa-N3VxwQ",
    "https://www.youtube.com/embed/MZwinuvL9HM",
    "https://www.youtube.com/embed/I0JKMN2xsy4",
    "https://www.youtube.com/embed/6U5oYCPQaPg",
    "https://www.youtube.com/embed/d_nDbVzu3Mk",
    "https://www.youtube.com/embed/7X98X4WyGyw",
    "https://www.youtube.com/embed/MkDw1ESJuFU",
    "https://www.youtube.com/embed/1jsftw9ZRKs",
    "https://www.youtube.com/embed/eh545_LiBeo",
    "https://www.youtube.com/embed/HSJA0Pq2o_k",
    "https://www.youtube.com/embed/Ic6etg36oFo",
    "https://www.youtube.com/embed/RW823rokfuw",
    "https://www.youtube.com/embed/nuWgReBy95Q",
    "https://www.youtube.com/embed/f5mPsbve1jw",
    "https://www.youtube.com/embed/5TbEhHWQo84",
    "https://www.youtube.com/embed/0Wf8m_UdsMw",
    "https://www.youtube.com/embed/mzxcQIeZ35Q",
    "https://www.youtube.com/embed/da8gHMDX8r0",
    "https://www.youtube.com/embed/GPnaj7p10_w",
    "https://www.youtube.com/embed/E7CF8_lye-o",
    "https://www.youtube.com/embed/QQPv9Uw5tAM",
    "https://www.youtube.com/embed/l25qpbCPdI8",
    "https://www.youtube.com/embed/fQZnKjkHvxg",
    "https://www.youtube.com/embed/OxSQAEArlnM",
    "https://www.youtube.com/embed/rnvf_VQHGjA",
    "https://www.youtube.com/embed/EUTwW9wTLbg",
    "https://www.youtube.com/embed/F-3gn9cw7mU",
    "https://www.youtube.com/embed/rLb4ryBfHnQ",
  ];
  const [visibleCount, setVisibleCount] = useState(10); // start with 10

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
      <section className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-teal-900/50" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div ref={heroRef} className="max-w-3xl space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Adi <span className="text-teal-400"> part 3 </span> Videos
              </h1>

              <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
                <strong>Well done!</strong>
                <br />
              </p>

              <p className="mt-4 text-slate-200 text-sm sm:text-lg">
                Your hard work has paid off — now you're ready for{" "}
                <strong>Part 3</strong>.
              </p>

              <Link to="/Contact-Us">
                <button className="mt-8 px-8 py-3 bg-teal-500 hover:bg-orange-600 transition rounded-full text-white font-semibold shadow-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  fade-up">
          <h2
            className="font-extrabold text-center mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            Watch <span className="text-teal-600"> Our Video</span>
          </h2>

          <p
            className="text-center text-slate-600 mb-10 max-w-3xl mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            }}
          >
            Below we have created videos to guide you through Adi part 3 Videos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoURLs.slice(0, visibleCount).map((url, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition"
              >
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={url}
                    title={`Adi Video ${index + 1}`}
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        {visibleCount < videoURLs.length && (
          <div className={styles.loadMoreWrapperVideo}>
            <button className={styles.loadMoreBtnVideo} onClick={loadMore}>
              Load More Videos
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
