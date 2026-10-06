import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BookOpen,
  Brain,
  MessageCircle,
  Target,
  Layers,
  AlertTriangle,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

import bannerImg from "../../../assets/alertbg.png";

gsap.registerPlugin(ScrollTrigger);

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
      <section className="relative h-[70vh] sm:h-[85vh] w-full">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Glossary of <span className="text-red-500">Terms</span>
              </h1>

              <p className="mt-5 text-sm sm:text-lg lg:text-xl text-slate-200 leading-relaxed">
                Explore professional driving instructor training materials,
                explanations, terminology, and teaching concepts designed to
                strengthen your instructional skills.
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link to="/Contact-Us">
                  <button className="px-7 py-3 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold text-white shadow-lg">
                    Contact Us
                  </button>
                </Link>

                <Link to="/part-1-trainning-material">
                  <button className="px-7 py-3 bg-white/90 hover:bg-white transition rounded-full font-semibold text-slate-800 shadow-lg">
                    Back to Portal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 fade-up">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Why These <span className="text-red-600">Materials Matter</span>
            </h2>

            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              It is common for all types of trades / industries to have a set of
              phrases that make no sense to anyone who is not in that trade /
              industry. This is commonly known as <strong>“Jargon”</strong>. To
              that effect, we have included many of the phrases and
              abbreviations that get used on within driving instruction. You
              should take your time to familiarise yourself with as many as
              possible, they will help you when giving instruction and have a
              better knowledge, understanding of the industry.
            </p>

            <p className="text-slate-600 leading-relaxed">
              The following terms are ones that you will encounter throughout
              your teaching career. These may not be familiar to you unless you
              have the experience of teaching or training, so therefore these
              may seem difficult terms to remember or understand. It would be
              wise to remember that{" "}
              <strong>It’s not difficult — it’s just new.</strong> in the same
              way that it is difficult to remember the names of everyone you
              work with, until you have heard their names a few times and you
              become more familiar with them.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE CONCEPTS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Core <span className="text-red-600">Teaching Concepts</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {/* CCL */}
            <ConceptCard
              icon={Brain}
              title="Client-Centred Learning (CCL)"
              text="Lessons should be planned around the pupil’s needs and goals. The instructor must actively involve the pupil in decision-making and tailor teaching methods to match preferred learning styles."
            />

            {/* Levels of Listening */}
            <ConceptCard
              icon={MessageCircle}
              title="Levels of Listening"
              list={[
                {
                  title: "Cosmetic",
                  desc: "It seems like we’re listening, but we’re not really.",
                },
                {
                  title: "Conversational",
                  desc: "We’re listening, but also talking and thinking about our own situation.",
                },
                {
                  title: "Active",
                  desc: "We are generally focused on what the other person is saying.",
                },
                {
                  title: "Deep",
                  desc: "We are much more focused, particularly on what the other person means.",
                },
              ]}
            />

            {/* GROW Technique */}
            <ConceptCard
              icon={Target}
              title="GROW Technique"
              list={[
                {
                  title: "Goal",
                  desc: "What do we want to achieve?",
                },
                {
                  title: "Reality",
                  desc: "Where are we now?",
                },
                {
                  title: "Options",
                  desc: "What are our alternative strategies?",
                },
                {
                  title: "Way Forward",
                  desc: "How are we going to achieve our goals?",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= LEARNING STYLES ================= */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-6 fade-up">
          <div className="flex items-center gap-4 mb-12">
            <Layers className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Learning <span className="text-red-600">Methods</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <InfoCard
              title="Rote: Learning by repetition"
              icon={GraduationCap}
              text="In a teaching sense it could be used in the early stages of learning to drive, when instructions are repeated over and over again, for example to familiarize the pupil with the use of the controls. It's also a method of learning facts and figures, such as stopping distances."
            />

            <InfoCard
              title="Gestalt: Learning by understanding"
              icon={Lightbulb}
              text="Once a pupil is familiar with the basic principles of driving they must learn to apply these themselves. If they understand the meaning of what has been taught, then this will be possible."
            />
          </div>
        </div>
      </section>

      {/* ================= COMMUNICATION ================= */}
      {/* ================= FULL GLOSSARY CONTENT ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl space-y-10">
          <div className="flex items-center gap-4 mb-10 fade-up">
            <BookOpen className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Training <span className="text-red-600">Glossary & Concepts</span>
            </h2>
          </div>

          {/* ===== CARD START ===== */}
          <GlossaryCard title="Transfer of Learning: Previously acquired skills and knowledge.">
            <p>
              By using a familiar example of a skill known to the pupil, a new
              skill may be taught. For example, you could explain that the pupil
              should use the brakes gently and progressively by relating how
              they use the brakes on their push bike. This idea of progressing
              from the known to the unknown should be used throughout a course
              of tuition.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Negative Transfer: When old learning conflicts with new learning.">
            <p>
              When old learning conflicts with new learning. For example, you
              will commonly hear the words “.....my last instructor didn't say
              that”. Such situations must be handled with care so as not to
              confuse the pupil altogether.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Learning Plateau: A temporary lull in the learning process.">
            <p>
              In the initial stages, the pupil's learning can be rapid. However,
              at a certain point, a level will be reached where progress is
              slowed or even halted, before improving again. This is quite
              normal and to be expected. For the instructor, it is the point
              that the instructor should change the way they present a subject
              or change the subject completely to do something fresh. This is
              important to prevent the pupil losing confidence.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Open Questions: Those with several possible answers.">
            <p>
              Generally, any question starting with “who”, “what”, “where”,
              “when”, “why” or “how” is an open question. The advantage of this
              type of question are twofold:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                It makes the pupil think of a fuller answer to the question.
              </li>
              <li>
                It means that you don't have to ask as many questions to achieve
                the same result.
              </li>
            </ul>
          </GlossaryCard>

          <GlossaryCard title="Closed Questions: Those with only one correct answer.">
            <p>
              Usually, these can be answered with a simple yes or no. They are
              not much use to you as an instructor, because they tell you very
              little about a pupil's knowledge. For example, you could ask two
              pupils the same question - “Do you know how the clutch works?” and
              get the same answer - “Yes”. But one of those pupils may only have
              a basic knowledge that needs to be expanded, whilst the other
              could have a degree in mechanical engineering.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Rhetorical Questions: Not requiring an answer.">
            <p>
              An example could be saying to a pupil who has failed their test -
              “I bet you're a bit upset, aren't you?”
            </p>
          </GlossaryCard>

          <GlossaryCard title="Communication:">
            <p>
              The art of conveying meaning by an interchange of ideas or
              experience. Good communication skills are a must for a driving
              instructor. Communication can be defined as: the ability to impart
              knowledge and ideas to cause a change in behavior or attitude.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Communication: Profoundly deaf pupil">
            <p>
              Ask the pupil how they would like you to communicate with them, as
              they will already have some strategies.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Dutch Reach: Opening the door">
            <p>
              Open the car door safely, instead of using the hand closest to the
              door, it means you reaching across to open the door with the hand
              furthest away from the door, to avoid the door swinging out and
              facing the traffic, which is considered safer.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Emergency Refuge Area: Stopped in an area before re-joining.">
            <p>
              Use the emergency telephone as you may be on a smart motorway
              where you have stopped in an emergency before rejoining, the
              services will close a lane in order to rejoin as they will have a
              reduced speed limit also in operation.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Motorways: broken down walking distance">
            <p>
              You have emergency telephone connected to emergency control
              centres, so would need to walk a maximum distance of ½ mile if
              between two phones and can walk either side of ½ mile.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Overtaking on the left:">
            <p>
              Traffic in queues, not if someone is moving slower, i.e. lane
              hogging. When others are making you slow down or stop, so you can
              do this in one-way systems.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Psychomotor Domain: Physical skills.">
            <p>
              The sphere of the brain that is concerned with physical skills.
              For example: a pupil has a problem in this area if they keep
              putting on the windscreen wipers instead of the indicators.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Cognitive Domain: Knowledge.">
            <p>
              That part of the brain that deals with memory, understanding and
              the acquisition of factual knowledge.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Affective Domain: Attitudes.">
            <p>
              The part of the brain that deals with emotions and attitudes is
              known as the affective domain. It takes more than knowledge and
              physical ability to carry out a task properly – an individual's
              attitude must also be correct. For example: a speeding pupil may
              know, when asked, that the speed limit is 30mph, he may be able to
              physically get the car to abide by the limit – but does he want to
              and how would he feel if he ran over a child?
            </p>
          </GlossaryCard>

          <GlossaryCard title="Skill: Ability or expertise.">
            <p>Often acquired by training.</p>
          </GlossaryCard>

          <GlossaryCard title="Skills analysis:">
            <p>
              The technique of breaking down a skill into its component parts,
              to understand how and why it is done.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Objective: Goal or aim.">
            <p>
              These must be set at the beginning of any session of tuition, so
              that the pupil clearly understands what is expected of them.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Aim: A broad statement of intent.">
            <p>
              This appears to be the same as above, but used in an instructional
              sense, it is not so well defined. For example: an objective may be
              that a pupil is able to reverse into a limited opening. The aim is
              to do it perfectly. The objective should and indeed will be
              reached, but the aim may not be, as the pupil may need a lot more
              practice than there is time for in that lesson.
            </p>
            <p>
              Kinaesthetic: Feedback to the brain from muscles and limbs. For
              example: the pupil's ability to feel the bite point of the clutch
              during a hill start.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Teaching Systems: Explanation, Demonstration, Practice">
            <p>
              A skill must first be explained verbally, then an example shown,
              possibly by demonstration, and finally practised to assess if
              understanding has been achieved. Note that demonstration does not
              necessarily mean actually doing it yourself; often the use of
              diagrams or other material will be sufficient.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Learning: A change of behavior.">
            <p>
              The ultimate aim of teaching and the final link in the educational
              chain.
            </p>
            <p>
              Lessons: Periods of educational training. These must be
              structured, progress from what is unknown to what is known, have a
              clearly defined objective, and be tailored to suit the individual.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Perception: The interpretation of information collected by the senses.">
            <p>
              The brain gives meaning to sensory information by comparing it to
              previous experience or knowledge.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Sight: 75% of knowledge is received visually.">
            <p>Use visual aids wherever appropriate.</p>
          </GlossaryCard>

          <GlossaryCard title="Hearing: Verbal information is the hardest to learn.">
            <p>
              Only 10% of what a pupil is told will be remembered. I hear and I
              forget; I see and I remember; I do and I understand.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Barriers to communication:">
            <p>
              Barriers to communication stop you from communicating effectively
              with your pupil. They may be intrinsic or extrinsic, but you need
              to be aware of them and overcome or avoid them wherever possible.
              The biggest single barrier is usually the environment – the place
              you choose to conduct a lesson can be more important to the
              pupil's ability to learn than anything else.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Extrinsic: External">
            <p>
              Any outside influence on a pupil's ability to pay attention – such
              as traffic flow, noise, weather conditions etc.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Intrinsic: Internal">
            <p>
              The opposite of extrinsic, these are internal influences, such as
              the state of the pupil's health, anxiety, fear and so on.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Learning: Isn’t always a continuous process – can reach the learning plateau">
            <p>
              If a pupil stops making progress, discuss blocks to progress and
              develop strategies to overcome them. Sometimes, pupils need time
              to consolidate before moving on, as something may be blocking
              their progress.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Learning Goals: Taking time to establish and have an effective plan">
            <p>
              This involves you being provided with the information you need to
              make an effective plan and having the pupil in the planning
              process so you have both agreed to something together.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Feedback:">
            <p>
              Feedback is an exchange between the pupil and instructor to assess
              whether satisfactory understanding and progress are taking place.
              It is best carried out at the earliest opportunity to aid learning
              and understanding of their progress.
            </p>
          </GlossaryCard>

          <GlossaryCard title="ALERT – DIRECT – INFORM (ADI):">
            <p>
              This is the recommended way of directing a pupil during a driving
              lesson:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Alert:</strong> “I would like you to”
              </li>
              <li>
                <strong>Direct:</strong> “Turn right”
              </li>
              <li>
                <strong>Identify:</strong> “At the junction ahead”
              </li>
              <li>
                <strong>Alert:</strong> “At the roundabout ahead”
              </li>
              <li>
                <strong>Direct:</strong> “Take the road to the right”
              </li>
              <li>
                <strong>Identify:</strong> “It's the third exit”
              </li>
            </ul>
          </GlossaryCard>

          <GlossaryCard title="Mechanical: The Four-Stroke Cycle">
            <p>
              The four-stroke cycle of an engine includes: Induction,
              Compression, Ignition/Power, and Exhaust.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Differential:">
            <p>
              The differential unit is part of the transmission system and
              allows the inside driven wheel to turn slower when cornering. This
              helps accommodate the fact that the outside wheel has further to
              travel, allowing the vehicle to corner smoothly.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Dual (or Divided Line) Braking System:">
            <p>
              Modern cars are fitted with a dual braking system. By having a
              second, separate hydraulic brake line and master cylinder, the
              likelihood of complete brake failure is vastly reduced should a
              loss of brake fluid occur in part of the system. This system
              ensures that one front wheel and its diagonally opposite rear
              wheel can still be used to stop the vehicle.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Four-Wheel Drive:">
            <p>
              The main advantage of four-wheel drive is increased traction,
              particularly on loose or slippery surfaces. Improved traction
              reduces the possibility of a vehicle's wheels sliding in some
              circumstances, thus enhancing road holding.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Brake Fade:">
            <p>
              The term is used to describe the condition when the brakes of a
              vehicle lose their efficiency due to overheating. Disc brakes are
              less susceptible to brake fade than drum brakes because their
              brake pads are not as enclosed and therefore cool more
              efficiently.
            </p>
          </GlossaryCard>

          <GlossaryCard title="ABS – Anti-lock Braking System – Harsh Braking:">
            <p>
              Prevents brakes from locking as they apply and reapply and reduces
              the chance of skidding. You can hear this when activated and must
              keep pressure applied. They can be ineffective on surface water
              due to reduced grip and can cause aquaplaning.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Spongy Footbrake:">
            <p>If there was air in the hydraulic braking system.</p>
          </GlossaryCard>

          <GlossaryCard title="Heavy Steering:">
            <p>Under inflated tyres cause heavy steering.</p>
          </GlossaryCard>

          <GlossaryCard title="Catalytic Converter:">
            <p>
              The catalytic converter, if fitted, is part of the exhaust system
              and is fitted in order to reduce harmful emissions.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Colour Blind Drivers:">
            <p>
              Distinguish between red or flashing amber at level crossings.
              Flashing red side to side means stop, flashing up and down means
              amber and proceed with caution.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Extended Test: Difference">
            <p>
              If someone has lost their licence the judge will decide if this is
              needed. It lasts around 70 minutes, which is 30 minutes longer
              than a standard test.
            </p>
          </GlossaryCard>

          <GlossaryCard title="Adapted Vehicles for the Driving Test">
            <ul className="list-disc pl-5 space-y-1">
              <li>Steering ball for one-handed steering</li>
              <li>Hand operated brake and accelerator</li>
              <li>Left side accelerator pedal</li>
              <li>Infrared remote control for controls</li>
              <li>Extra mirrors for rear visibility</li>
            </ul>
            <p className="mt-2">
              Vehicles may also be adapted with ultra-light power steering,
              reduced brake effort, or semi-automatic gearbox operation.
            </p>
          </GlossaryCard>
        </div>
      </section>
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function ConceptCard({ icon: Icon, title, text, list }) {
  return (
    <div className="group bg-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition border-t-8 border-red-500 fade-up">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-9 h-9 text-red-600 group-hover:scale-110 transition" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {text && <p className="text-slate-700 leading-relaxed mb-4">{text}</p>}

      {list && (
        <ul className="space-y-2  list-inside text-slate-700">
          {list.map((item, index) => (
            <li key={index}>
              <span className="font-semibold" style={{ color: "green" }}>
                {item.title}
              </span>
              {item.desc && ` – ${item.desc}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoCard({ title, text, icon: Icon }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-red-500">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-red-600" />
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}
function GlossaryCard({ title, children }) {
  return (
    <div className="fade-up bg-white p-8 sm:p-10 rounded-3xl shadow-xl border-l-8 border-red-500">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900">
        {title}
      </h3>
      <div className="text-slate-700 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}
