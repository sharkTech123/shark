import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import {
  FileText,
  ShieldCheck,
  Car,
  Wrench,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "lucide-react";
import alertnessBanner from "../../../assets/alertbg.png";
import essentialDocs from "../../../assets/images/essential-documents-logo.png";
import MotorCertificates from "../../../assets/images/certificateOfMotor.jpg";
import motCertificate from "../../../assets/images/motCertificate.gif";
import certificate2 from "../../../assets/images/CERTIFICATE2.png";

gsap.registerPlugin(ScrollTrigger);

export default function EssentialDocuments() {
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
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] sm:h-[85vh]">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${alertnessBanner})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white">
              Essential <span className="text-cyan-400">Documents</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-white">
        {" "}
        <section className="py-20 bg-slate-50 fade-up">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-10">
            What are your{" "}
            <span className="text-cyan-600 ">Essential Documents?</span>
          </h2>
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={essentialDocs}
              alt="Essential Documents"
              className="rounded-3xl shadow-xl w-full"
            />

            <p className="text-sm sm:text-base lg:text-lg mb-6 text-slate-700">
              The 12th topic is essential documents, it’s a pretty
              self-explanatory topic. It revolves entirely around the documents,
              paperwork and legal requirements that car owners have. This
              includes things like your MOT certificate, driving licence and
              vehicle registration certificate. If you want to pass the theory
              test, and also make sure that you’re legally allowed to be on the
              road, you will need to know this topic inside and out.
            </p>
          </div>
        </section>
        {/* ================= ESSENTIAL LIST ================= */}
        <section className="py-20 bg-white fade-up">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-10">
              What are your{" "}
              <span className="text-cyan-600">Essential Documents?</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Licence - knowing what type of driving licenses you need.",
                "Insurance - car insurance cover types and what you need to drive legally.",
                "MOT Certificate - know the legal requirements for vehicle testing.",
                "Vehicle Excise Duty (tax disc).",
                "Vehicle Registration Document/Certificate.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-3xl shadow-xl border-t-8 border-cyan-500"
                >
                  <CheckCircle className="text-cyan-600 mb-4" />
                  <p className="text-sm sm:text-base lg:text-lg mb-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= CAR INSURANCE ================= */}
        <section className="py-20 bg-gradient-to-br from-cyan-50 to-white fade-up">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-cyan-600 w-10 h-10" />
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Car Insurance
              </h2>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mb-6 text-slate-700">
              Laws and requirments For Road Insurance
            </p>
            <div className="space-y-4">
              {[
                "You must have a valid insurance cover that covers you for at least third party liability.",
                "Third Party Car Insurance covers injury to another person, damage to property and vehicles.",
                "Third Party Fire and Theft covers fire and theft damage to your vehicle.",
                "A cover note is issued before you receive your insurance certificate.",
                "You cannot pay road tax without valid car insurance.",
                "Maximum fine for driving without insurance is £5000.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-lg flex gap-3"
                >
                  <CheckCircle className="text-cyan-500 mt-1" />
                  <p
                    className="text-sm sm:text-base lg:text-lg mb-6 text-slate-700"
                    style={{ marginBottom: "0px" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ================= CERTIFICATE IMAGE ================= */}
        <section className="py-20 bg-slate-50 fade-up">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={MotorCertificates}
              alt="Motor Certificate"
              className="rounded-3xl shadow-xl w-full"
            />

            <p className="text-sm sm:text-base lg:text-lg mb-6 text-slate-700">
              A certificate of motor insurance is proof that you hold the
              minimum 3rd party insurance for your vehicle, as required by law.
              It is a one- or two-page document that you can get from your
              insurance company or broker, if you used one.
            </p>
          </div>
        </section>
        {/* ================= MOT ================= */}
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
          {/* ================= MOT ================= */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Car className="text-red-600 w-8 h-8" />
                <h2 className="text-2xl font-semibold">MOT</h2>
              </div>

              <p>
                An MOT involves dozens of checks on your car, ranging from the
                brakes and fuel system to lights, mirrors, seatbelts, windscreen
                wipers, and exhaust systems. It doesn’t cover the condition of
                the engine, clutch, and gearbox.
              </p>

              <p>
                All cars over three years old need a MOT certificate. The only
                time you can drive a car without an MOT certificate is when
                driving to an MOT test centre for an pre-arranged appointment.
              </p>

              <p>
                An MOT test checks your car is roadworthy, that all parts work
                properly and the car is safe to drive, and that it keeps to the
                legal limits for exhaust emissions.
              </p>

              <p className="text-sm sm:text-base lg:text-lg mb-6 text-slate-600 font-semibold">
                If you drive a car without an MOT certificate you will
                invalidate your insurance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-4 flex justify-center">
              <img
                src={motCertificate}
                alt="MOT Certificate"
                className="max-h-64 object-contain w-full"
              />
            </div>
          </div>

          {/* ================= MOT CERTIFICATE ================= */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-red-600 w-7 h-7" />
              <h3 className="text-xl font-semibold">MOT Certificate</h3>
            </div>

            <p>
              The MOT certificate confirms that your vehicle at the time of its
              test met the minimum acceptable environmental and road safety
              standards required by law. It doesn’t mean that the vehicle is
              roadworthy for the life of the certificate and isn’t a substitute
              for regular maintenance.
            </p>
          </div>

          {/* ================= VEHICLE EXCISE DUTY ================= */}
          <div className="bg-gray-100 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Vehicle Excise Duty (Road Tax)
            </h3>

            <p>
              An MOT involves dozens of checks on your car, ranging from the
              brakes and fuel system to lights, mirrors, seatbelts, windscreen
              wipers, and exhaust systems. It doesn’t cover the condition of the
              engine, clutch, and gearbox.
            </p>
            <p className="font-semibold">
              To prove to a police officer your vehicle is taxed you are
              required to present the following documents:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Current certificate of insurance (COI).</li>
              <li>A valid driving license.</li>
              <li>A valid MOT certificate.</li>
            </ul>

            <p>
              A police officer has the right to ask that you produce driving
              documents, and if you are unable to do so there and then, you will
              be required to produce them at a police station within seven days.
              All documents must be in your name and not anyone else’s.
            </p>
          </div>

          {/* ================= V5C ================= */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="bg-white rounded-xl shadow-lg p-4 flex justify-center">
                <img
                  src={certificate2}
                  alt="Vehicle Registration Document V5C"
                  className="max-h-64 object-contain w-full"
                />
              </div>
              <div
                className="bg-white shadow-md p-3 space-y-4 "
                style={{ marginTop: "0.5rem" }}
              >
                <p>
                  The V5C logbook (also known as the V5 form or document)
                  records the Registered Keeper (or Keepers) of the vehicle.
                  When you have performed that check, and when you actually buy
                  a car (and take possession of it), the owner must legally give
                  you the green ‘new keeper’s details’ slip (V5C/2) of their V5
                  form.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="text-red-600 w-7 h-7" />
                <h2 className="text-2xl font-semibold">
                  Vehicle Registration Document (V5C)
                </h2>
              </div>

              <p>
                The V5C is a paper document issued by the DVLA to the registered
                keeper of a vehicle and is used to confirm proof of ownership
                and the specific details of a vehicle.
              </p>
              <p className="font-semibold">
                Important details about the Vehicle Registration Certificate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>This lists all the important details about the vehicle.</li>
                <li>You must update it when you move house.</li>
                <li>
                  The registered keeper is legally responsible for keeping it up
                  to date.
                </li>
              </ul>

              <p className="font-semibold">
                You should contact the vehicle licensing authority when:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>You change your vehicle.</li>
                <li>You change your name.</li>
                <li>Your permanent address changes.</li>
                <li>Your health affects your driving.</li>
                <li>Your eyesight does not meet the required standards.</li>
              </ul>
            </div>
          </div>

          {/* ================= FINAL RULES ================= */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-red-600 w-7 h-7" />
              <h3 className="text-xl font-semibold">Important Legal Rules</h3>
            </div>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                To supervise a learner driver you must be 21 years of age and
                have held a full licence for more than 3 years in that category.
              </li>
              <li>
                If you get six penalty points on your licence within two years
                of passing your practical driving test your driving licence will
                be revoked. You will have to take and pass the theory and
                practical tests again.
              </li>
              <li>
                You must tell the DVLA if your health is likely to affect your
                driving or if your eyesight doesn't meet the required standard.
              </li>
              <li>
                If a police officer ask to see your documents but you don't have
                them with you, you must take them to a police station within 7
                days.
              </li>
              <li>
                If your vehicle is unused or off the road it must have either a
                SORN declaration or valid insurance.
              </li>
              <li>
                The Pass Plus scheme is to help new drivers improve their basic
                driving skills. Taking it can reduce the cost of car insurance.
              </li>
            </ul>
          </div>
        </section>
        {/* ================= QUIZ CTA ================= */}
        <section className="py-24 bg-gradient-to-br from-cyan-600 to-teal-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Test Yourself</h2>
            <p className="mb-8">
              Click start quiz to test your knowledge and see your result.
            </p>
            <Link to="/takequizCatName/Documents">
              <button className="px-10 py-4 bg-white text-cyan-700 font-bold rounded-full shadow-xl">
                Start Quiz
              </button>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
