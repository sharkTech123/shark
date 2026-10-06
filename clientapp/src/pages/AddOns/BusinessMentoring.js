import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Bolt, Users, Clipboard, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import styled from "styled-components";
import redStarImg from "../../assets/images/redStar.png";
import CallBackForm from "../../components/forms/CallBackForm";
import redCartImg from "../../assets/images/redCartImg.png";
import defaultImg from "../../assets/images/bannerCart.png";
import { Quote } from "lucide-react";
import tommyImg from "../../assets/IMG_3318.JPG";
import bookImg from "../../assets/IMG_3341.JPG";
import smartlearnerLogo from "../../assets/images/smartlearnerLogo-removebg-preview.png";

import styles from "./BusinessCoaching.module.css";

export default function BusinessMentoringPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.productsCategory);
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const workshopCategory = products.find(
    (cat) => cat._id === "businessmentoring"
  );

  const handleAddToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  const handleIncrease = (id) => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = (id) => {
    dispatch(getDecreaseCart(id, 1));
  };

  const Container = styled.div``;

  const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #002a36ff;
    margin: 2rem 0px;
  `;

  const Grid = styled.div`
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  `;

  const Card = styled(motion.div)`
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    max-width: 400px;
    margin: 0px auto;
  `;

  const Img = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
  `;

  const Content = styled.div`
    padding: 1.2rem;
  `;

  const Name = styled.h3`
    font-size: 1.4rem;
    color: #222;
    margin: 0;
  `;

  const Price = styled.p`
    font-size: 1.1rem;
    color: #555;
  `;

  const StarWrapper = styled.div`
    display: flex;
    gap: 5px;
    padding: 0.5rem 0;
  `;

  const ActionButtons = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-top: 1rem;
  `;

  const Button = styled.button`
    padding: 0.4rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    background-color: crimson;
    color: white;
    cursor: pointer;
  `;

  const QuantityWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: crimson;
      color: white;
      font-weight: bold;
      border: none;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      cursor: pointer;
    }
  `;

  const sectionRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const testimonials = [
    {
      text: "After illness took me off the road with no income, Tommy helped me rebuild my business and confidence. I achieved more than I ever thought possible.",
      author: "G.O",
    },
    {
      text: "I wanted to grow my driving school, and with Tommy’s guidance I now have 16 franchisees and a thriving business.",
      author: "S.R",
    },
  ];

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* HERO */}
        <header className=" grid md:grid-cols-2 gap-10 items-center">
          {/* === FLOATING IMAGES AT TOP === */}

          {/* === LEFT SECTION === */}
          <div className="relative">
            <div className="absolute top-5 right-5 z-10">
              {/* BOOK IMAGE */}
              <motion.img
                src={bookImg}
                alt="SmartLearner Book"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full shadow-2xl ring-4 ring-amber-400 object-cover bg-white transition-transform duration-300"
                initial={{ y: -20, opacity: 0, rotate: -10 }}
                animate={{
                  y: [0, -8, 0],
                  opacity: 1,
                  rotate: [0, 5, 0],
                }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg  sm:mt-18 md:mt-24 ">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-amber-400/20 p-3 ring-2 ring-amber-300">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase text-amber-600">
                    Mentoring
                  </p>
                  <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    Smartlearner Business Mentoring Program
                  </h1>
                  <em className="block text-gray-600 text-sm md:text-base mt-1">
                    with Tommy Sandhu
                  </em>
                </div>
              </div>

              <p className="mt-6 text-slate-700 leading-relaxed text-sm md:text-base">
                This program is designed for driving school owners and
                instructors who want to grow from a one-person operation into a
                successful, scalable business.
                <br />
                Over 10 structured modules, you’ll receive hands-on mentoring,
                business tools, and proven strategies used to build one of the
                UK’s most successful driving school brands{" "}
                <strong
                  style={{
                    color: "gold",
                  }}>
                  SmartLearner
                </strong>
                .
                <br />
                Each month includes two 90-minute 1:1 coaching sessions and
                access to tailored guidance throughout the program.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  onClick={handleScroll}
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-md transform hover:-translate-y-1 transition">
                  Book your free consultation today
                </Link>
              </div>
            </motion.div>
          </div>

          {/* === RIGHT SECTION === */}

          <div className="relative">
            <div className="absolute top-1 right-5  z-20 ">
              {/* AUTHOR IMAGE */}
              <motion.img
                src={tommyImg}
                alt="Tommy Sandhu"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full shadow-2xl ring-4 ring-sky-400 object-cover bg-white transition-transform duration-300"
                initial={{ y: -20, opacity: 0, rotate: 10 }}
                animate={{
                  y: [0, -6, 0],
                  opacity: 1,
                  rotate: [0, -5, 0],
                }}
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white to-sky-100 shadow-lg sm:mt-18 md:mt-24">
              <h3 className="text-lg text-slate-800">
                Who I Am — <span className="font-bold">Tommy Sandhu</span>{" "}
                Business Mentor
              </h3>
              <p className="mt-3 text-slate-700 leading-relaxed text-sm md:text-base">
                I’m the Director of Smartlearner, a business I built from
                scratch when everyone said it couldn’t be done — and I proved
                them wrong.
                <br />
                Over the past two decades, I’ve built multiple successful,
                award-winning businesses and helped countless professionals do
                the same. I know what it’s like to start with an idea, face
                setbacks, and wonder how to turn effort into real progress —
                because I’ve lived it.
                <br />
                Now, I use that experience to help business owners like you grow
                faster, avoid costly mistakes, and build a business that truly
                works for you.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-600 mt-1" />
                  <div>
                    <p className="font-semibold">90min 1-to-1</p>
                    <p className="text-xs text-slate-600">
                      Fortnightly — live or online
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Bolt className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="font-semibold">Practical systems</p>
                    <p className="text-xs text-slate-600">
                      Tested strategies for driving schools
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold">Networking</p>
                    <p className="text-xs text-slate-600">
                      Access to industry contacts
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clipboard className="w-5 h-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-semibold">Resources</p>
                    <p className="text-xs text-slate-600">
                      Templates, scripts and tools
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </header>

        <Container style={{ marginTop: "4rem" }}>
          <Grid>
            {workshopCategory?.data?.map((product, index) => {
              const productId = `${product._id}_${index}_${product.price}`;
              const inCart = myCart.find((item) => item.id === productId);
              return (
                <Card
                  key={product._id}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Content>
                    <Name>{product.name}</Name>
                    <Price>£ {product.price}</Price>
                    <StarWrapper>
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={redStarImg}
                          alt="star"
                          style={{ width: 20, height: 20 }}
                        />
                      ))}
                    </StarWrapper>

                    <ActionButtons>
                      <Button onClick={() => navigate("/businessSubs-cart")}>
                        Book
                      </Button>
                    </ActionButtons>
                  </Content>
                </Card>
              );
            })}
          </Grid>
        </Container>

        <section
          id="how"
          className="mt-16 bg-gradient-to-tr from-white/60 to-sky-50 p-8 rounded-2xl shadow-inner">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            Who Is This Program For?
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Established
                </strong>{" "}
                driving instructors ready to grow their business
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  {" "}
                  New business
                </strong>{" "}
                owners looking for structure and systems
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Franchise
                </strong>{" "}
                operators seeking sustainable expansion
              </p>
            </motion.div>
            <motion.div
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Instructors
                </strong>{" "}
                who want to transition from self-employed to business owner
                mindset
              </p>
            </motion.div>
          </div>
        </section>

        {/* //////////////////////////////////////////////// */}
        <section
          id="how"
          className="mt-16 bg-gradient-to-tr from-white/60 to-sky-50 p-8 rounded-2xl shadow-inner">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            Program Structure
          </motion.h2>
          <p className="text-sm text-slate-600 mt-2">
            Each module combines practical exercises, real-life mentoring, and
            step-by-step tools designed for growth. You’ll have:
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">10 study modules</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow"
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}>
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  {" "}
                  2 × 90-minute
                </strong>{" "}
                1:1 mentoring sessions per month
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Ongoing support
                </strong>{" "}
                via email between sessions
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Tools and templates
                </strong>{" "}
                to systemise your business
              </p>
            </motion.div>
          </div>
        </section>

        {/* ////////////////////////////////////////////////// */}
        <section
          id="how"
          className="mt-16 bg-gradient-to-tr from-white/60 to-sky-50 p-8 rounded-2xl shadow-inner">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            Program Benefits
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Learn how
                </strong>{" "}
                to scale your business sustainably
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Create consistent
                </strong>{" "}
                income through systems and structure
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Build a brand
                </strong>{" "}
                that stands out in your local market
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Gain financial{" "}
                </strong>{" "}
                clarity and control
              </p>
            </motion.div>
            <motion.div
              style={{
                background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                color: "white",
              }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow">
              <p className=" mt-2">
                <strong
                  style={{
                    color: "gold",
                  }}>
                  Develop leadership
                </strong>{" "}
                confidence and strategic vision
              </p>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-800">
            10-Module Overview
          </motion.h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Setting Your Vision & Foundation",
                desc: "Clarify your goals and business direction.",
                icon: <Star className="w-6 h-6 text-amber-500" />,
              },
              {
                title: "Understanding Supply, Demand & Market Shift",
                desc: "Learn to adapt your business to market conditions.",
                icon: <Bolt className="w-6 h-6 text-emerald-500" />,
              },
              {
                title: "Money Mastery",
                desc: "Forecast, manage cash flow, and understand profitability.",
                icon: <Clock className="w-6 h-6 text-sky-500" />,
              },
              {
                title: "Marketing & Community Engagement",
                desc: "Grow your presence online and locally.",
                icon: <Users className="w-6 h-6 text-indigo-500" />,
              },
              {
                title: "Building & Managing a Team",
                desc: "Recruit, train, and lead a growing team.",
                icon: <Clipboard className="w-6 h-6 text-purple-500" />,
              },
              {
                title: "Systems & Operations Management",
                desc: "Streamline operations with scalable systems.",
                icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
              },
              {
                title: "Branding & Customer Experience",
                desc: "Build a trusted local brand and customer loyalty.",
                icon: <Users className="w-6 h-6 text-emerald-600" />,
              },
              {
                title: "Growth Through Partnerships & Expansion",
                desc: "Explore franchising and collaboration models.",
                icon: <Star className="w-6 h-6 text-sky-600" />,
              },
              {
                title: "Leadership & Mindset",
                desc: "Develop confidence and lead your business effectively.",
                icon: <Clipboard className="w-6 h-6 text-rose-500" />,
              },
              {
                title: "Long-Term Strategy & Legacy Planning",
                desc: "Create sustainability and a business that outlasts you.",
                icon: <Bolt className="w-6 h-6 text-indigo-600" />,
              },
            ].map((b, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                style={{
                  background: "linear-gradient(135deg, #00116dde, #0028ade1)",
                }}
                className=" rounded-2xl p-5 shadow hover:shadow-lg border border-slate-100 text-light">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-xl ring-1 ring-slate-100">
                    {b.icon}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-light-800"
                      style={{
                        color: "gold",
                      }}>
                      {b.title}
                    </h4>
                    <p className="text-sm text-light">{b.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL / TRUST BAR */}

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-12">
            What Our Mentored Say
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-800/70 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-yellow-400/40 hover:border-yellow-300 transition-all duration-500">
                <Quote className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
                <p className="text-lg text-gray-100 italic leading-relaxed">
                  {t.text}
                </p>
                <div className="mt-4 font-bold text-yellow-400 text-xl">
                  – {t.author}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <section
          style={{ maxWidth: "600px", margin: "1rem auto" }}
          ref={sectionRef}>
          <CallBackForm />
        </section>

        {/* CONTACT / CTA */}
        <section className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <motion.div className="flex-1 bg-gradient-to-r from-amber-50 to-sky-50 rounded-2xl p-6 shadow-inner">
            <p className="text-slate-700">
              "The SmartLearner way isn’t just about teaching students — it’s
              about building a business that drives itself."
            </p>
            <p className="mt-4 font-semibold">— Tommy Sandhu</p>
          </motion.div>
        </section>

        <footer className="mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Business Mentoring — ORDIT & Fleet
          Registered
        </footer>
      </div>
    </div>
  );
}
