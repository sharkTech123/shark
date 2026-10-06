import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import bannerImg from "../../../assets/alertbg.png";
import DrivingInstructorHandbook from "../../../assets/images/tmdimh.png";

gsap.registerPlugin(ScrollTrigger);

const trainingMaterialsData = [
  {
    title: "National Standard",
    link: "https://www.gov.uk/government/publications/national-standard-for-driver-and-rider-training/national-standard-for-driver-and-rider-training",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHubgfRmLV-tic-TgN31dYaNhdrH8SjNgjpA&s",
    caption:
      "Defines the skills, knowledge and understanding required for driver and rider training.",
  },
  {
    title: "Highway Code",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-highway-code/",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/26/The_Highway_Code%2C_cover_to_2022_edition.jpg",
    caption: "Essential reading for Band 1, 2 and selected Band 3 questions.",
  },
  {
    title: "Practical Teaching Skills",
    link: "https://www.safedrivingforlife.info/shop/practical-teaching-skills-driving-instructors/",
    image:
      "https://cdn.koganpage.com/media/public/image/xxlarge_9781398607569.jpg",
    caption:
      "DVSA-recommended guide to improve teaching and communication skills.",
  },
  {
    title: "Driving Essential Skills",
    link: "https://www.safedrivingforlife.info/shop/official-dvsa-guide-driving-essential-skills/",
    image:
      "https://the-road-ahead.co.uk/wp-content/uploads/2021/03/dvsa-driving-essential-skills.webp",
    caption: "Covers fundamental driving knowledge for exam preparation.",
  },
  {
    title: "Driving Instructor Handbook",
    link: "https://www.safedrivingforlife.info/shop/driving-instructors-guide/",
    image: DrivingInstructorHandbook,
    caption:
      "Complete reference covering every aspect of becoming a driving instructor.",
  },
  {
    title: "Know Your Traffic Signs",
    link: "https://www.safedrivingforlife.info/shop/know-your-traffic-signs/",
    image:
      "https://m.media-amazon.com/images/I/71nsk6w2ZWL._AC_UF894,1000_QL80_.jpg",
    caption: "Detailed explanations of all UK road signs you may encounter.",
  },
];

export default function TrainingMaterials() {
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
      {/* ================= BANNER ================= */}
      <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                Training <span className="text-red-500">Materials</span>
              </h1>

              <p className="mt-6 text-slate-200 text-sm sm:text-lg leading-relaxed">
                Hand-picked DVSA-recommended resources designed to help you
                confidently pass your ADI Part 1 exam.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/Contact-Us">
                  <button className="px-7 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold text-white shadow-lg">
                    Contact Us
                  </button>
                </Link>

                <Link to="/part-1-trainning-material">
                  <button className="px-7 py-3 bg-white/10 hover:bg-white/20 transition rounded-full font-semibold text-white backdrop-blur">
                    Back to Portal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MATERIALS GRID ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 fade-up">
            <GraduationCap className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Recommended <span className="text-red-600">Books</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainingMaterialsData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden fade-up"
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </a>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-red-600 w-6 h-6" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.caption}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-red-600 font-semibold hover:underline"
                  >
                    View Resource <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl fade-up">
          <div className="flex items-center gap-4 mb-6">
            <ShieldCheck className="w-9 h-9 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Why These Materials Matter
            </h2>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl shadow-xl border-l-8 border-red-500">
            <p className="text-slate-700 text-sm sm:text-lg leading-relaxed">
              Reading the recommended books for the ADI Part 1 exam is crucial
              for your success, as they provide comprehensive coverage of the
              key topics you'll be tested on. These resources are specifically
              designed to deepen your understanding of road safety, driving
              laws, and instructional techniques, ensuring you're fully prepared
              for both the multiple-choice questions and the hazard perception
              test.
              <br />
              <br />
              The material in these books is often aligned with the official
              DVSA syllabus, offering insights that go beyond basic knowledge
              and helping you tackle more challenging questions with confidence.
              By thoroughly studying these books, you'll be better equipped to
              master each section of the exam, avoid common pitfalls, and
              approach the test with the depth of knowledge needed to excel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
