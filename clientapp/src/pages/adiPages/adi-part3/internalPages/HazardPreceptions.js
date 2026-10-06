import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AlertTriangle,
  Eye,
  Car,
  Users,
  CloudRain,
  Sun,
  Snowflake,
  Wind,
  PlayCircle,
} from "lucide-react";
import bannerImg from "../../../../assets/alertbg.png";
import roundAbouts from "../../../../assets/images/roundabouts.png";
import parkedCars from "../../../../assets/images/parkedCars.png";
import junction from "../../../../assets/images/junction.png";
import bends from "../../../../assets/images/bends.png";
import roadworks from "../../../../assets/images/roadWorks.png";
import roadSurface from "../../../../assets/images/roadSurface.png";
import zebra from "../../../../assets/images/zebraCrossing.png";
import toucan from "../../../../assets/images/toucan.png";
import pelican from "../../../../assets/images/pelican.png";
import puffin from "../../../../assets/images/puffin.png";
import equestrian from "../../../../assets/images/equestrian.png";
import MotorCyclists from "../../../../assets/images/MotorCyclistsImg.png";
import pedestrian from "../../../../assets/images/pedestrian.png";
import cyclists from "../../../../assets/images/Cyclistssss.png";
import carDrivers from "../../../../assets/images/carDrivers.png";
import rain from "../../../../assets/images/rainImg.png";
import ice from "../../../../assets/images/iceImg.png";
import fog from "../../../../assets/images/fogImg.png";
import sun from "../../../../assets/images/sunSet.png";
import emergencyService from "../../../../assets/images/emergencyService.png";
import builtUpTraffic from "../../../../assets/images/builtupTraffic.png";
import Cyclist from "../../../../assets/images/cyclistsImg.png";
import HorseRiders from "../../../../assets/images/horse-ridersImges.png";
import DriversOfLargeVehicle from "../../../../assets/images/diversLargeVehicle.png";
import VehicleCarrying from "../../../../assets/images/vehicalscarrying.png";
import overtakingVehicle from "../../../../assets/images/overtaking vehicles.png";
import disabledPoweredVehicle from "../../../../assets/images/disabledPawer.png";
import OlderDrivers from "../../../../assets/images/olderDrivers.png";

gsap.registerPlugin(ScrollTrigger);

export default function HazardPerception() {
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
      <section className="relative h-[70vh] lg:h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Hazard <span className="text-red-500">Perception</span>
            </h1>

            <p className="mt-6 text-slate-200 text-base sm:text-lg leading-relaxed">
              Learn to identify developing hazards early, react correctly, and
              stay safe on the road with expert guidance.
            </p>

            <Link to="/Contact-Us">
              <button className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl transition">
                <AlertTriangle className="w-5 h-5" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO VIDEO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-extrabold">
                What is <span className="text-red-600">Hazard Perception?</span>
              </h2>

              <p className="mt-4 text-slate-700 text-lg leading-relaxed">
                Hazard perception is the ability to recognise potential dangers
                early and respond safely. The earlier you spot hazards, the more
                time you have to react.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/SdQRkmdhwJs"
                  title="Hazard Perception Test"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <PlayCircle className="text-red-600" />
                <p
                  className="text-sm text-slate-600"
                  style={{ marginBottom: "0px" }}
                >
                  Official DVSA Hazard Perception Guide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATIC HAZARDS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-10">
            <Eye className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-extrabold">
              Static <span className="text-red-600">Hazards</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              roundAbouts,
              parkedCars,
              junction,
              bends,
              roadworks,
              roadSurface,
            ].map((img, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={img}
                  alt="hazard"
                  className="h-68 w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CROSSINGS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-10">
            <Users className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-extrabold">
              Pedestrian <span className="text-red-600">Crossings</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[zebra, toucan, pelican, puffin, equestrian].map((img, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={img}
                  alt="crossing"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-10">
            <Users className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-extrabold">
              Moving <span className="text-red-600">Hazards</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[emergencyService, builtUpTraffic, Cyclist].map((img, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <img
                  src={img}
                  alt="crossing"
                  className="h-60 w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROAD USERS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-12">
            <Car className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-extrabold">
              Road User & <span className="text-red-600">What to do</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: pedestrian,
                title: "Pedestrians",
                dec: "If you see pedestrians in the road, be patient and wait for them to finish crossing. On country roads there may be no pavement, so look out for pedestrians in the road. They may be walking towards you on your side of the road.",
              },
              {
                img: carDrivers,
                title: "Car Drivers",
                dec: "Hazards caused by other drivers are all too common and can lead to emotional reactions. An emotional reaction may affect your ability to drive safely and could increase your likelihood of causing an incident. Stay calm and make allowances for other drivers. Remember, even experienced drivers can make mistakes.",
              },
              {
                img: MotorCyclists,
                title: "MotorCyclists",
                dec: "Look out for motorcyclists, especially when you’re emerging from a junction, turning into a road on your right or changing lanes or moving out to overtake.",
              },
              {
                img: cyclists,
                title: "Cyclists",
                dec: "Be aware of cyclists and give them plenty of room. They may wobble or swerve to avoid drains or potholes. At junctions or traffic lights, give cyclists time to turn or pull away. When travelling in slow traffic, before you turn left, check for cyclists filtering through the traffic on your left.",
              },
              {
                img: HorseRiders,
                title: "Horse Riders",
                dec: "Horses can be unpredictable and easily spooked. Reduce your speed and give them plenty of room when overtaking.",
              },
              {
                img: DriversOfLargeVehicle,
                title: "Drivers Of LargeVehicle",
                dec: "If you see a bus at a bus stop, remember that people may get off and then cross the road, or that the bus may be about to move off. School buses might stop at places other than bus stops. At some bridges, high vehicles may need to use the centre of the road to be able to pass underneath. Large goods vehicles over 13 metres long have red and yellow markings at the back of the vehicle.",
              },
              {
                img: VehicleCarrying,
                title: "VehicleCarrying",
                dec: "Some vehicles have information signs on the back, to show that they contain a hazardous load. Learn what the signs mean.",
              },
              {
                img: overtakingVehicle,
                title: "Overtaking Vehicle",
                dec: "Watch out for vehicles, especially motorcyclists, overtaking and cutting in front of you. If you need to, drop back to keep a safe distance from the vehicle in front. When turning right, don’t forget to check to your right for overtaking vehicles before making the turn.",
              },
              {
                img: disabledPoweredVehicle,
                title: "Disabled Powered Vehicle",
                dec: "Reduce your speed and be careful. These small vehicles are extremely vulnerable on the road because they’re difficult to see and they travel slow.",
              },
              {
                img: OlderDrivers,
                title: "Older Drivers",
                dec: "Older drivers may not react very quickly, so be patient with them. You can practise spotting hazards in everyday situations such as when you’re on a bus, as a passenger in a car, or riding a bicycle.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-2 rounded-2xl shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-60 w-full object-cover rounded-2xl mb-4"
                />
                <div className="py-1 px-2">
                  {" "}
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p>{item.dec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEATHER HAZARDS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-10">
            <CloudRain className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl font-extrabold">
              Weather <span className="text-red-600">Hazards</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CloudRain,
                img: rain,
                label: "Rain",
                dec: "Double your distance from the vehicle in front to four seconds.",
              },
              {
                icon: Snowflake,
                img: ice,
                label: "Ice",
                dec: "Slow down and increase your separation distance: allow up to 10 times the gap you’d leave in the dry.",
              },
              {
                icon: Wind,
                img: fog,
                label: "Fog",
                dec: "Slow down and use dipped headlights.",
              },
              {
                icon: Sun,
                img: sun,
                label: "Bright Sun",
                dec: "Be aware that sunlight can dazzle you or other drivers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-40 w-full object-cover"
                />
                <div className="p-3 flex items-center gap-3">
                  <item.icon className="text-red-600" />
                  <h4 className="font-semibold">{item.label}</h4>
                </div>{" "}
                <div className="py-1 px-3">
                  <p>{item.dec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h2 className="text-4xl font-extrabold">Ready for Hazard Videos?</h2>
        <p className="mt-4 text-lg">
          Practice real hazard perception clips and test your skills.
        </p>

        <Link to="/hazard-perception">
          <button className="mt-8 px-10 py-4 bg-white text-red-600 rounded-full font-semibold shadow-2xl hover:scale-105 transition">
            Start Hazard Videos
          </button>
        </Link>
      </section>
    </main>
  );
}
