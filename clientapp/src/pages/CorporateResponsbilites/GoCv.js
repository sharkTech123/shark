import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Utensils,
  Sparkles,
  Users,
  Target,
  Award,
  ChevronDown,
  Calendar,
  MapPin,
  Gift,
  Star,
} from "lucide-react";

import goCv from "../../assets/images/goCVwhiteLogo.png";
import coventryCityCouncil from "../../assets/images/coventryCityCouncil.png";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AccordionItem = ({
  title,
  content,
  icon: Icon,
  defaultActive,
  index,
}) => {
  const [isActive, setIsActive] = useState(defaultActive || false);
  const contentRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    // Animate accordion items on scroll
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [index]);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      ref={itemRef}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-indigo-100"
    >
      <button
        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "text-gray-800 hover:bg-white/50"
        }`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-indigo-100"}`}
          >
            <Icon
              className={`w-6 h-6 ${isActive ? "text-white" : "text-indigo-600"}`}
            />
          </div>
          <span className="font-bold text-lg">{title}</span>
        </div>
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 bg-white/70 backdrop-blur-sm">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-300 cursor-pointer"
    >
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default function GoCv() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const logosRef = useRef(null);
  const collaborationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".logo-item",
        {
          opacity: 0,
          scale: 0.6,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          clearProps: "transform",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Hero section animations
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      // Logos animation

      // Collaboration section
      gsap.fromTo(
        collaborationRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: collaborationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Go CV Partnership | SmartLearner</title>
        <link rel="canonical" href="https://smartlearner.com/Go-Cv" />
        <meta
          name="description"
          content="SmartLearner is proud to partner with Go CV to offer exclusive benefits to Coventry residents. Discover how this partnership makes learning to drive more accessible and affordable."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div ref={titleRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">
                Community Partnership
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              GO CV PARTNERSHIP
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Empowering Coventry Communities Together
            </p>
          </div>

          {/* Logo Section */}
          <div
            ref={logosRef}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            <div className="logo-item  p-4 rounded-2xl  hover:scale-105 transition-transform duration-300">
              <img
                src={goCv}
                alt="Go CV"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="logo-item">
              <Star
                className="w-12 h-12 text-yellow-300 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="logo-item p-4 rounded-2xl  hover:scale-105 transition-transform duration-300">
              <img
                src={smartlearnerLogo}
                alt="SmartLearner"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="logo-item">
              <Star
                className="w-12 h-12 text-yellow-300 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
            <div className="logo-item   p-4 rounded-2xl  hover:scale-105 transition-transform duration-300">
              <img
                src={coventryCityCouncil}
                alt="Coventry City Council"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full h-16 md:h-24 fill-gray-50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="container mx-auto px-4 py-20">
        <div ref={collaborationRef} className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  IN COLLABORATION WITH
                </h2>
              </div>

              <div className="mb-8">
                <img
                  src="/src/assets/images/White-Logo-Fixed-1024x174.png"
                  alt="SmartLearner"
                  className="h-16 w-auto"
                />
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span>
                    SmartLearner Driving School regularly sponsors and partners
                    with GO CV to support events and attractions for
                    underprivileged individuals and families in Coventry.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>
                    Our Collaboration helps fund local businesses and projects,
                    providing low-cost or free tickets to local events.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span>
                    Together, SmartLearner and GO CV strive to offer the best
                    deals for Coventry residents, benefiting the entire
                    community.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-gradient-to-b from-white to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a difference in the Coventry community through dedicated
              partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Heart}
              title="Community Support"
              description="Supporting underprivileged families and individuals across Coventry"
              index={0}
            />
            <FeatureCard
              icon={Gift}
              title="Event Sponsorship"
              description="Providing access to local events and attractions"
              index={1}
            />
            <FeatureCard
              icon={MapPin}
              title="Local Focus"
              description="Strengthening bonds within the Coventry community"
              index={2}
            />
          </div>
        </div>
      </div>

      {/* Sponsorships Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-600 font-semibold">
                Our Initiatives
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              SPONSORSHIPS
            </h2>
            <p className="text-xl text-gray-600">
              Discover our community initiatives and partnerships
            </p>
          </div>

          <div className="space-y-6">
            <AccordionItem
              title="SEND YOUR LOVE DONATIONS"
              content="In December 2021, SmartLearner Driving School supported the Coventry Food Network's 'Send Your Love' campaign, sanctioned by Coventry City Council, to provide food for vulnerable families. Our Hen Lane (Holbrooks) office became a food drop-off point, enabling donations. For those unable to drop off food, our instructors collected donations across Coventry. Every Christmas, we participate in donating food to the food bank."
              icon={Heart}
              defaultActive={true}
              index={0}
            />
            <AccordionItem
              title="FAMILY TICKETS TO DINNER & THEATRE"
              content="SmartLearner Driving School in support and in partnership with Go CV, sponsored a £50 dinner voucher at The Mulberry Coventry, followed by a family ticket of 4 seats for the spectacular magical panto 'Beauty & the Beast' donated by Belgrade Theatre, Coventry. Go CV registered followers, audience and card users had the chance to win free dinner and tickets to the theatre, through the Facebook competition set by the Go CV page."
              icon={Utensils}
              index={1}
            />
            <AccordionItem
              title="FAMILY TICKETS FOR FIRE DISPLAYS"
              content="In light of the Bonfire night, In November 2021, SmartLearner Driving School sponsored tickets for a family of 4, in the celebration of sports and community, followed by annual fireworks display at Coventry Rugby Club. All Go CV registered card users had the opportunity to win these free tickets through the Go CV Facebook page."
              icon={Sparkles}
              index={2}
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Together, we can continue to support and strengthen our Coventry
            community
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2">
              <Users className="w-5 h-5" />
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
