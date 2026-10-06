import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  GraduationCap,
  Shield,
  Car,
  Leaf,
  Users,
  Heart,
  Trophy,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

// Import images
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import smartlearnerSupoort from "../../assets/images/smartlearnerSupportImg.png";
import bylc from "../../assets/images/BYLC.png";
import wmfs from "../../assets/images/WestMidLand.png";
import jaguarlandrover from "../../assets/images/jaguar.jpg";
import governmentLogo from "../../assets/images/Highways_England.jpg";
import coventry from "../../assets/images/Coventry.jpg";
import coventryAir from "../../assets/images/Electric-Fleet.jpg";
import gocv from "../../assets/images/gocv.png";
import greendino from "../../assets/images/Green-Dino.png";
import coventrycollege from "../../assets/images/covcollege.png";
import sqa from "../../assets/images/SQA.png";
import thehonesttruth from "../../assets/images/THT_logo.png";
import treecouncil from "../../assets/images/trreeCouncil.jpg";
import unhcr from "../../assets/images/ARC.png";
import nuneatonlionsclub from "../../assets/images/Lion-Club.png";
import bedwortheagles from "../../assets/images/unitedToAchieve.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function WeProudlySupport() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const partnerships = [
    {
      id: 1,
      name: "Intelligent Instructor Awards",
      image: smartlearnerSupoort,
      description:
        "We have won the title of Regional Driving School of the year 2 years running at the Intelligent Instructor Awards.",
      link: "https://www.intelligentinstructor.co.uk/intelligent-instructor-award-winners-2022/",
      icon: Trophy,
      category: "Awards",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 2,
      name: "BYLC",
      image: bylc,
      description:
        "We work closely with BYLC to provide educational experiences on road safety to young people across Warwickshire.",
      link: "http://www.bylc.org.uk/",
      icon: GraduationCap,
      category: "Education",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      name: "West Midlands Fire Service",
      image: wmfs,
      description:
        "We have attended many events alongside the West Midlands Fire Service to assist in their road safety VR experiences.",
      link: "https://www.wmfs.net/",
      icon: Shield,
      category: "Safety",
      color: "from-red-500 to-rose-600",
    },
    {
      id: 4,
      name: "Jaguar Land Rover",
      image: jaguarlandrover,
      description:
        "We work with Jaguar Land Rover on their Employee Learner Scheme to help employees to learn new skills such as learning to drive.",
      link: "https://wellbeing.jaguarlandrover.com/learning-at-jlr",
      icon: Car,
      category: "Corporate",
      color: "from-slate-600 to-slate-800",
    },
    {
      id: 5,
      name: "Highways England",
      image: governmentLogo,
      description:
        "We attend events with Highway England to promote road safety but also support other projects they are part of such as the 'Electric Fleet First Campaign'",
      link: "https://www.gov.uk/government/organisations/highways-england",
      icon: Shield,
      category: "Government",
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 6,
      name: "Coventry City Council",
      image: coventry,
      description:
        "We have worked on many road projects with the Coventry City Council. These include; Electric Fleet First, Kick Starter Scheme, and other road safety aspects.",
      link: "https://www.coventry.gov.uk/",
      icon: Users,
      category: "Government",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 7,
      name: "Electric Fleet First",
      image: coventryAir,
      description:
        "We are taking part in the 'Electric Fleet First Campaign'. We have been using our electric car to promote going green to our instructors and pupils",
      link: "https://www.coventry.gov.uk/pollution-1/air-quality/8",
      icon: Zap,
      category: "Environment",
      color: "from-lime-500 to-green-600",
    },
    {
      id: 8,
      name: "Go CV",
      image: gocv,
      description:
        "We work alongside Go CV to help provide less fortunate families, who live in Coventry, with days out completely free of charge.",
      link: "https://go-cv.co.uk/",
      icon: Heart,
      category: "Community",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 9,
      name: "Green Dino",
      image: greendino,
      description:
        "We work with Green Dino to support their projects that include virtual reality simulated driving lessons and even online driving lessons. These project are proven to help increase driver safety while decreasing the amount of lessons needed",
      link: "https://en.greendino.nl/",
      icon: Leaf,
      category: "Innovation",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: 10,
      name: "SQA",
      image: sqa,
      description:
        "We work with SQA to deliver the 'Safe Road User Award' which gives young people the chance to earn a qualification while helping them prepare for their theory and change their attitude towards road safety.",
      link: "https://www.sqa.org.uk/sqa/70972.html",
      icon: Award,
      category: "Education",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 11,
      name: "Coventry College",
      image: coventrycollege,
      description:
        "We work with College Coventry as a work placement for apprentices. We love taking young people on and helping them develop into industries they care about including Management, Marketing, and Admin.",
      link: "https://www.coventrycollege.ac.uk/",
      icon: GraduationCap,
      category: "Education",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 12,
      name: "The Honest Truth",
      image: thehonesttruth,
      description:
        "We are part of 'The Honest Truth' which is a national road safety campaign across England. Their mission is to deliver no-nonsense, straight-talking road safety education, hence the name.",
      link: "https://www.thehonesttruth.co.uk/",
      icon: Shield,
      category: "Safety",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 13,
      name: "Tree Council",
      image: treecouncil,
      description:
        "We work with the local tree wardens to help plant trees in local parks, schools, and communal areas. This is part of our going green scheme!",
      link: "https://treecouncil.org.uk/",
      icon: Leaf,
      category: "Environment",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 14,
      name: "UNHCR Afghanistan",
      image: unhcr,
      description:
        "We supported a family of 8 in Afghanistan by sending food and supplies during hardship.",
      link: "https://www.unhcr.org/uk/afghanistan.html",
      icon: Heart,
      category: "Humanitarian",
      color: "from-sky-500 to-blue-600",
    },
    {
      id: 15,
      name: "Nuneaton Lions Club",
      image: nuneatonlionsclub,
      description:
        "We regularly donate to Nuneaton Lions Club. They encourage people to join together and take action to better their local community.",
      link: "https://nuneatonlionsclub.org/",
      icon: Users,
      category: "Community",
      color: "from-yellow-500 to-amber-600",
    },
    {
      id: 16,
      name: "Bedworth Eagles JFC",
      image: bedwortheagles,
      description:
        "We sponsor Bedworth Eagles JFC helping young children to chase their dreams of becoming professional footballers while staying active.",
      link: "https://bedwortheagles.com/",
      icon: Trophy,
      category: "Sports",
      color: "from-blue-500 to-sky-600",
    },
  ];

  const stats = [
    { label: "Active Partnerships", value: "16+", icon: Users },
    { label: "Years of Collaboration", value: "10+", icon: Award },
    { label: "Communities Impacted", value: "50K+", icon: Heart },
    { label: "Awards Won", value: "5+", icon: Trophy },
  ];

  useEffect(() => {
    if (!heroRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      /* -------- HERO -------- */
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
        },
      );

      /* -------- STATS -------- */
      const statItems = Array.from(statsRef.current.children);

      gsap.fromTo(
        statItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        },
      );

      /* -------- CARDS -------- */
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: (index % 3) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });

      /* 🔥 IMPORTANT */
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>We Proudly Support</title>
        <link
          rel="canonical"
          href="https://smartlearner.com/We-Proudly-Support"
        />
        <meta
          name="description"
          content="Explore partnership opportunities with SmartLearner. Collaborate with us to drive innovation, expand reach, and create impactful learning experiences across the UK."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">
                Building Stronger Communities Together
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IN PARTNERSHIP
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                WITH EXCELLENCE
              </span>
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Collaborating with leading organizations to create meaningful
              impact across education, safety, and community development.
            </p>

            <div className="flex items-center justify-center gap-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white/90 font-medium">
                16+ Active Partnerships
              </span>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-20">
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnerships Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Valued Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Together, we're making a difference in road safety, education, and
            community development across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partnerships.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative"
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${partner.color} shadow-lg`}
                    >
                      {partner.category}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        style={
                          partner.name === "UNHCR Afghanistan"
                            ? { backgroundColor: "white", borderRadius: "50%" }
                            : {}
                        }
                      />
                    </div>

                    {/* Icon overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/90 group-hover:to-purple-600/90 transition-all duration-500 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-0 group-hover:scale-100" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                      {partner.name}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                      {partner.description}
                    </p>

                    {/* Action Button */}
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${partner.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in making a positive impact on road safety, education, and
            community development across the UK.
          </p>
          
        </div>
      </div>
    </div>
  );
}
