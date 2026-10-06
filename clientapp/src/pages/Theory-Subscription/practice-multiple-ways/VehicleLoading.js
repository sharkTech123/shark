import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import styles from "./css/VehicleLoading.module.css";

import trailerLarge from "../../../assets/images/trailer-large-1024x492.jpg";
import roofRack from "../../../assets/images/Roof-Racks-20-1024x683.jpg";
import carryingPassenger from "../../../assets/images/carryingPassenger.jpg";
import alertnessBanner from "../../../assets/alertbg.png";
import { ShieldCheck, AlertTriangle, Car, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VehicleLoading() {
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
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${alertnessBanner})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Vehicle <span className="text-red-500">Loading</span>
              </h1>
              <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Learn how to load your vehicle safely, tow trailers and
                caravans, use roof racks, and ensure safety for yourself and
                other road users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS VEHICLE LOADING ================= */}
      <section className="bg-white fade-up">
        <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                What is <span className="text-red-600">Vehicle Loading?</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-slate-700 leading-relaxed">
                The 14th topic is Vehicle Loading. The vehicle loading section
                of the driving theory test contains questions about how to load
                your vehicle, towing trailers and caravans, and the use of roof
                racks, etc. The questions in this section are all to do with the
                safety of yourself and other road users, minimizing
                environmental impact and costs of fuel, as well as staying
                within the law.
              </p>

              <p className="mt-6 text-slate-700 font-semibold">
                Effects of vehicle loading on fuel consumption.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-slate-700">
                It is important to note that the extra weight you’re carrying
                will increase your vehicle’s fuel consumption. This will
                increase even more if you’re carrying a load on a roof rack due
                to the increased wind resistance and drag this creates.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
              <img
                src={trailerLarge}
                alt="Vehicle Loading"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= LOADING SAFELY ================= */}
        <section className="py-16 sm:py-20 lg:py-28 fade-up">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Loading Your{" "}
                <span className="text-red-600">Vehicle Safely</span>
              </h2>
            </div>

            <ul
              className="list-disc list-inside text-slate-700 space-y-3 pl-5 text-sm sm:text-base md:text-lg"
              style={{ paddingLeft: "0PX" }}
            >
              <li>
                Before attempting to load your vehicles with people or goods,
                you should ensure that you know how to do so safely and the
                effects that carrying loads may have.
              </li>
              <li>
                There may be a tendency to think that as long as you have space
                in your car, it is safe to fill it. However, this would be
                incorrect and unsafe as you’d be putting yourself at risk of
                overloading your car. Overloading can seriously affect the
                vehicle’s handling, especially the steering and braking, and
                therefore makes it much harder to drive smoothly, and respond to
                road conditions and hazards in a safe and timely manner.
              </li>
              <p className="font-semibold">
                Once you have ensured that you have a suitable amount to load
                into your vehicle without overloading, you need to make sure
                that you load your vehicle carefully to avoid upsetting its
                stability. You can do this by:
              </p>
              <li>
                Making sure that the load is securely fastened, with rope,
                bungee cord or a seatbelt, so that it can’t move when you’re
                cornering or braking.
              </li>
              <li>
                Ensuring that your load doesn’t obstruct your view when you’re
                driving, or stick out where it could be dangerous or obstructive
                to other road users.
              </li>
              <li>Distributing the weight evenly.</li>
            </ul>
          </div>
        </section>

        {/* ================= CAR HANDLING ================= */}
        <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Car <span className="text-red-600">Handling</span> When Carrying
                Heavy Loads
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-slate-700 leading-relaxed">
                Carrying a load may affect how your car handles, even if it’s
                not overloaded. For example, carrying goods on a roof rack will
                increase wind resistance which may make your vehicle less
                stable. If you are using a roof rack, you need to be aware of
                the fact that the load is exposed to the elements, and you may
                therefore need to protect it from rain, sleet or snow by
                covering it. Specially-designed roof boxes are available, which
                cut down the wind resistance and help to ensure that loads are
                kept secure and dry.
              </p>
              <p className="font-semibold">
                The effect of carrying goods on your car’s handling and
                suspension mean that, when you’re carrying or towing a heavy
                load, you may need to make adjustments to your vehicle, such as:
              </p>
              <ul
                className="list-disc list-inside text-slate-700 space-y-3 pl-5 text-sm sm:text-base md:text-lg"
                style={{ paddingLeft: "0PX" }}
              >
                <li>Increasing the air pressure of your tires.</li>
                <li>Adjusting the aim of your headlights.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
              <img
                src={roofRack}
                alt="Roof Rack Load"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* ================= CARRYING PASSENGERS ================= */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white fade-up">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={carryingPassenger}
                alt="Carrying Passengers"
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
                Carrying <span className="text-red-600">Passengers Safely</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-lg text-slate-700 leading-relaxed">
                Carrying goods can be tricky, but ensuring the safety of
                passengers is vital. All passengers MUST wear seat belts,
                provided they are fitted. This is the responsibility of you as
                the driver, regardless of the passenger’s age. If the passenger
                is under 14 years of age, they must wear a suitable restraint
                when travelling in your vehicle. The type of restraint varies
                with the age of the child and may be a baby carrier, child seat
                or booster seat (and can be front or rear facing) but it MUST be
                suitable for the child’s weight and size.
              </p>
            </div>
          </div>
        </section>

        {/* ================= START QUIZ ================= */}
        <section className={styles.mockTestContainerSection}>
          <section className={styles.startQuizSection}>
            <h2>Start Quiz</h2>
            <h3>All Questions</h3>
            <p>
              Click the start quiz button to start the quiz and see your result
            </p>
            <Link to="/takequizCatName/Vehicle-Loading">
              <button>Start Quiz</button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
