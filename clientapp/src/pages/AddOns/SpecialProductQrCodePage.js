import React, { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import redCartImg from "../../assets/images/redCartImg.png";
import redStarImg from "../../assets/images/redStar.png";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

/* ─── Keyframes ─── */
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-18px) rotateY(8deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px #3b82f6aa, 0 0 60px #3b82f622; }
  50% { box-shadow: 0 0 40px #3b82f6cc, 0 0 100px #3b82f644; }
`;

const roadScroll = keyframes`
  0%   { background-position-x: 0; }
  100% { background-position-x: -800px; }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50%       { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const pulse3d = keyframes`
  0%, 100% { transform: perspective(600px) rotateX(0deg) rotateY(0deg) scale(1); }
  25%       { transform: perspective(600px) rotateX(3deg) rotateY(-5deg) scale(1.02); }
  75%       { transform: perspective(600px) rotateX(-2deg) rotateY(5deg) scale(1.01); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ─── Styled Components ─── */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
`;

const BannerSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 480px;
  background: linear-gradient(135deg, #0f0c29 0%, #1a1464 40%, #0d1b8e 70%, #0a2472 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 50%, #3b82f622 0%, transparent 60%),
                radial-gradient(ellipse at 70% 50%, #7c3aed22 0%, transparent 60%);
    pointer-events: none;
  }
`;

const Road = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 40px,
      #facc15 40px,
      #facc15 80px
    );
    animation: ${roadScroll} 0.8s linear infinite;
  }
`;

const CarWrapper3D = styled(motion.div)`
  animation: ${float} 4s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px #3b82f688);
  position: relative;
  z-index: 10;
`;

const CarSVG = styled.svg`
  width: 340px;
  height: auto;
  @media (max-width: 768px) { width: 220px; }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  @media (max-width: 768px) { text-align: center; }
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const HotBadge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const BannerHeadline = styled(motion.h1)`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 1rem;

  span {
    background: linear-gradient(90deg, #facc15, #fb923c, #f43f5e);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }
`;

const BannerSub = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
`;

const ScrollCta = styled(motion.button)`
  background: linear-gradient(135deg, #3b82f6, #7c3aed);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  animation: ${glow} 2.5s ease-in-out infinite;
  font-family: 'Inter', sans-serif;
`;

const Particles = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${sparkle} ${(p) => p.dur}s ease-in-out infinite;
  animation-delay: ${(p) => p.delay}s;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  background: ${(p) => p.color};
  top: ${(p) => p.top}%;
  left: ${(p) => p.left}%;
  opacity: 0;
`;

const CategorySection = styled.section`
  background: linear-gradient(180deg, #f8faff 0%, #eff6ff 100%);
  padding: 4rem 1.5rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  ${(p) =>
    p.active
      ? p.variant === "manual"
        ? `
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        color: white;
        box-shadow: 0 8px 24px #3b82f644;
      `
        : `
        background: linear-gradient(135deg, #dc2626, #f97316);
        color: white;
        box-shadow: 0 8px 24px #ef444444;
      `
      : p.variant === "manual"
      ? `
        background: white;
        color: #1e40af;
        border-color: #3b82f6;
      `
      : `
        background: white;
        color: #dc2626;
        border-color: #ef4444;
      `}
`;

const SectionLabel = styled(motion.div)`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.4rem;
`;

const SectionSub = styled.p`
  color: #64748b;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
`;

const NoticeBar = styled.div`
  max-width: 760px;
  margin: 0 auto 2.5rem;
  background: #fff;
  border: 1px solid #e0e7ff;
  border-radius: 10px;
  padding: 0.75rem 1.5rem;
  text-align: center;
  color: #334155;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 12px #3b82f611;
  span { color: #ef4444; font-weight: 600; }
`;

const ProductGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
`;

const Card = styled(motion.div)`
  background: ${(p) => (p.isoffer ? "linear-gradient(145deg,#fff7ed,#fff1f2)" : "white")};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px #1e40af0d;
  border: ${(p) => (p.isoffer ? "2px solid #fed7aa" : "1px solid #e2e8f0")};
  position: relative;
  transform-style: preserve-3d;
  animation: ${pulse3d} 8s ease-in-out infinite;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  background: ${(p) =>
    p.isoffer
      ? "linear-gradient(135deg,#fde68a22,#fca5a522)"
      : "linear-gradient(135deg,#dbeafe22,#ede9fe22)"};
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  ${Card}:hover & { transform: scale(1.08); }
`;

const ImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f172a88 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  ${Card}:hover & { opacity: 1; }
`;

const ViewBtn = styled.button`
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  color: white;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 0.4rem 1.25rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;

const HotTag = styled(motion.div)`
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #ef4444, #f97316);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  z-index: 5;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const SaleTag = styled(motion.div)`
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  color: #1e40af;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  z-index: 5;
  box-shadow: 0 2px 8px #0003;
  border: 1.5px solid #bfdbfe;
`;

const CardBody = styled.div`
  padding: 1.25rem;
`;

const ProductName = styled.h4`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ExpandBtn = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  font-size: 0.75rem;
  flex-shrink: 0;
  padding-top: 3px;
  &:hover { color: #3b82f6; }
`;

const ProductDesc = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-family: 'Inter', sans-serif;
  ${(p) => (!p.expanded ? "display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" : "")}
`;

const StarRow = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 1rem;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;

const OldPrice = styled.span`
  font-size: 0.85rem;
  text-decoration: line-through;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
`;

const NewPrice = styled(motion.span)`
  font-size: 1.35rem;
  font-weight: 700;
  font-family: 'Rajdhani', sans-serif;
  color: ${(p) => (p.isoffer ? "#dc2626" : "#1d4ed8")};
`;

const CartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QtyBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.minus ? "#fee2e2" : "#dcfce7")};
  color: ${(p) => (p.minus ? "#ef4444" : "#16a34a")};
  transition: background 0.2s;
  &:hover { background: ${(p) => (p.minus ? "#fecaca" : "#bbf7d0")}; }
`;

const QtyCount = styled.span`
  font-weight: 700;
  font-size: 0.95rem;
  min-width: 20px;
  text-align: center;
  font-family: 'Rajdhani', sans-serif;
`;

const AddBtn = styled(motion.button)`
  padding: 0.45rem 1.25rem;
  border-radius: 50px;
  border: 2px solid #22c55e;
  background: white;
  color: #16a34a;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.2s;
  &:hover { background: #16a34a; color: white; }
`;

const ShowMoreBtn = styled(motion.button)`
  margin: 2.5rem auto 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2.5rem;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 0.05em;
  box-shadow: 0 6px 20px #3b82f644;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
`;

/* ─── Particle config ─── */
const PARTICLES = [
  { size: 6,  color: "#facc15", top: 10, left: 8,  dur: 3.2, delay: 0   },
  { size: 4,  color: "#3b82f6", top: 25, left: 85, dur: 2.8, delay: 0.5 },
  { size: 8,  color: "#f43f5e", top: 60, left: 15, dur: 4.0, delay: 1.0 },
  { size: 5,  color: "#a78bfa", top: 80, left: 75, dur: 3.5, delay: 1.5 },
  { size: 7,  color: "#34d399", top: 40, left: 50, dur: 2.5, delay: 0.8 },
  { size: 4,  color: "#fb923c", top: 70, left: 30, dur: 3.8, delay: 0.3 },
  { size: 6,  color: "#facc15", top: 15, left: 65, dur: 3.0, delay: 1.2 },
  { size: 5,  color: "#60a5fa", top: 55, left: 90, dur: 4.2, delay: 0.7 },
];

/* ─── Inline 3D Car SVG ─── */
const Car3D = ({ color = "#3b82f6" }) => (
  <CarSVG viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="1" />
        <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor={color} />
      </linearGradient>
      <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#0f172a" />
      </radialGradient>
      <radialGradient id="wheelShine" cx="35%" cy="35%" r="40%">
        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
      <filter id="glow3d">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>

    {/* Shadow */}
    <ellipse cx="250" cy="218" rx="180" ry="14" fill="#00000044" />

    {/* Roof */}
    <path d="M155 110 Q175 58 240 52 L340 52 Q395 58 400 110Z"
      fill="url(#roofGrad)" stroke="#1e40af" strokeWidth="1.5" />

    {/* Windshield */}
    <path d="M195 110 Q210 68 250 62 L315 62 Q350 68 370 110Z"
      fill="#bfdbfe" opacity="0.85" />

    {/* Body */}
    <rect x="75" y="108" width="362" height="82" rx="16"
      fill="url(#bodyGrad)" stroke="#1e40af" strokeWidth="2" />

    {/* Side windows */}
    <rect x="168" y="116" width="70" height="42" rx="6" fill="#bfdbfe" opacity="0.7" />
    <rect x="250" y="116" width="85" height="42" rx="6" fill="#bfdbfe" opacity="0.6" />

    {/* Door lines */}
    <line x1="248" y1="108" x2="248" y2="190" stroke="#1e40af" strokeWidth="1.5" opacity="0.5" />
    <line x1="345" y1="108" x2="345" y2="190" stroke="#1e40af" strokeWidth="1.5" opacity="0.5" />

    {/* Bonnet */}
    <path d="M75 130 Q65 128 55 135 L45 170 Q50 190 75 190Z"
      fill="#2563eb" />

    {/* Headlight */}
    <ellipse cx="60" cy="150" rx="14" ry="9" fill="#fef08a" opacity="0.95" filter="url(#glow3d)" />
    <ellipse cx="60" cy="150" rx="10" ry="6" fill="#fde047" />

    {/* Tail */}
    <path d="M437 130 Q445 128 460 135 L470 165 Q465 190 437 190Z"
      fill="#1d4ed8" />

    {/* Tail light */}
    <ellipse cx="455" cy="155" rx="12" ry="8" fill="#f87171" opacity="0.9" />
    <ellipse cx="455" cy="155" rx="8" ry="5" fill="#ef4444" />

    {/* Side stripe */}
    <rect x="75" y="165" width="362" height="6" rx="3"
      fill="#60a5fa" opacity="0.5" />

    {/* Front wheel */}
    <circle cx="155" cy="196" r="36" fill="url(#wheelGrad)" />
    <circle cx="155" cy="196" r="36" fill="url(#wheelShine)" />
    <circle cx="155" cy="196" r="22" fill="#1e293b" />
    <circle cx="155" cy="196" r="12" fill="#475569" />
    {[0,60,120,180,240,300].map((a,i)=>(
      <line key={i}
        x1={155 + 12*Math.cos(a*Math.PI/180)}
        y1={196 + 12*Math.sin(a*Math.PI/180)}
        x2={155 + 22*Math.cos(a*Math.PI/180)}
        y2={196 + 22*Math.sin(a*Math.PI/180)}
        stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    ))}
    <circle cx="155" cy="196" r="5" fill="#cbd5e1" />

    {/* Rear wheel */}
    <circle cx="355" cy="196" r="36" fill="url(#wheelGrad)" />
    <circle cx="355" cy="196" r="36" fill="url(#wheelShine)" />
    <circle cx="355" cy="196" r="22" fill="#1e293b" />
    <circle cx="355" cy="196" r="12" fill="#475569" />
    {[0,60,120,180,240,300].map((a,i)=>(
      <line key={i}
        x1={355 + 12*Math.cos(a*Math.PI/180)}
        y1={196 + 12*Math.sin(a*Math.PI/180)}
        x2={355 + 22*Math.cos(a*Math.PI/180)}
        y2={196 + 22*Math.sin(a*Math.PI/180)}
        stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
    ))}
    <circle cx="355" cy="196" r="5" fill="#cbd5e1" />
  </CarSVG>
);

/* ─── Main Component ─── */
function SpecialProductQrCodePage() {
  const navigate  = useNavigate();
  const dispatch  = useDispatch();
  const sectionRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("offers manual");
  const [showAll, setShowAll]       = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [carColor, setCarColor]     = useState("#3b82f6");

  const { productsCategory: data = [], loadingCategory, loading } =
    useSelector((s) => s.product);
  const myCart = useSelector((s) => s.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  /* ── category switch also animates car color ── */
  const handleCategory = (id) => {
    setSelectedCategory(id);
    setShowAll(false);
    setCarColor(id === "offers manual" ? "#3b82f6" : "#ef4444");
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ── cart helpers ── */
  const getProductId  = (p, i) => `${p._id}_${i}_${p.price}`;
  const getCartItem   = (p, i) => myCart.find((c) => c.id === getProductId(p, i));
  const handleIncrease = (id) => dispatch(getIncreaseCart(id, 1));
  const handleDecrease = (id) => dispatch(getDecreaseCart(id, 1));
  const handleAddToCart = (info, idx) => {
    const productId = getProductId(info, idx);
    dispatch(getAddToCart({ id: productId, count: 1, service: info.name, price: info.price }, navigate));
  };

  const filteredProducts = useMemo(() => {
    const selected = data.find((item) => item._id === selectedCategory);
    return selected?.data || [];
  }, [data, selectedCategory]);

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 3);
  const isManual = selectedCategory === "offers manual";

  return (
    <>
      <GlobalStyle />

      {/* ═══════════ 3D BANNER ═══════════ */}
      <BannerSection>
        <Particles>
          {PARTICLES.map((p, i) => <Dot key={i} {...p} />)}
        </Particles>

        {/* Left: copy */}
        <BannerContent>
          <BadgeRow>
            <HotBadge
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}>
              🔥 Exclusive Deals
            </HotBadge>
            <HotBadge
              style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, delay: 0.4 }}>
              ⚡ Limited Time
            </HotBadge>
          </BadgeRow>

          <BannerHeadline
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            Drive Smarter,<br />
            Save <span>Bigger</span>
          </BannerHeadline>

          <BannerSub>
            Premium driving lessons at unbeatable prices — choose Manual or Automatic.
            Book your slot before the offer expires!
          </BannerSub>

          <ScrollCta
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })}>
            View Offers ↓
          </ScrollCta>
        </BannerContent>

        {/* Right: 3D animated car */}
        <CarWrapper3D
          style={{ marginLeft: "3rem" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}>
          <Car3D color={carColor} />
          {/* speed lines */}
          {[30, 50, 70].map((top, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                top: `${top}%`,
                left: "-60px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #60a5fa88)",
                borderRadius: "2px",
              }}
              animate={{ width: ["0px", "55px", "0px"], opacity: [0, 0.7, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.4, ease: "easeInOut" }}
            />
          ))}
        </CarWrapper3D>

        <Road />
      </BannerSection>

      {/* ═══════════ PRODUCT SECTION ═══════════ */}
      <CategorySection ref={sectionRef}>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <SectionTitle>Exclusive Offers</SectionTitle>
          <SectionSub>Hand-picked deals on our most popular lesson packages</SectionSub>
        </SectionLabel>

        {/* Category Tabs */}
        <CategoryTabs>
          {[
            { id: "offers manual",    label: "🚗 Manual Drive Offers",    variant: "manual"    },
            { id: "offers automatic", label: "⚙️ Automatic Drive Offers", variant: "automatic" },
          ].map(({ id, label, variant }) => (
            <TabButton
              key={id}
              variant={variant}
              active={selectedCategory === id ? 1 : 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleCategory(id)}>
              {label}
              {selectedCategory === id && (
                <motion.span
                  layoutId="activeIndicator"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.12)",
                  }}
                />
              )}
            </TabButton>
          ))}
        </CategoryTabs>

        {/* Notice bar */}
        <NoticeBar>
          A mandatory booking fee of{" "}
          <span>£1.00 – £30</span>{" "}
          applies to all orders per purchase. This fee will be shown clearly before you complete your purchase.
        </NoticeBar>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}>
            <ProductGrid>
              {loadingCategory || loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 20, overflow: "hidden", padding: 16 }}>
                    <Skeleton height={200} style={{ borderRadius: 12, marginBottom: 12 }} />
                    <Skeleton width="75%" height={18} style={{ marginBottom: 8 }} />
                    <Skeleton width="55%" height={16} style={{ marginBottom: 12 }} />
                    <Skeleton width="40%" height={28} />
                  </div>
                ))
              ) : visibleProducts.length > 0 ? (
                visibleProducts.map((product, idx) => {
                  const productId = getProductId(product, idx);
                  const inCart    = getCartItem(product, idx);
                  const isExp     = expandedId === productId;

                  return (
                    <Card
                      key={product._id || idx}
                      isoffer={isManual ? 0 : 0}  /* all are offers */
                      layout
                      initial={{ opacity: 0, y: 24, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.07, duration: 0.4 }}
                      whileHover={{ y: -6, boxShadow: "0 16px 40px #3b82f622" }}>

                      {/* Hot Offer badge */}
                      <HotTag
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}>
                        🔥 Hot Offer
                      </HotTag>

                      {/* Sale % badge */}
                      {product.maxPrice && (
                        <SaleTag
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 120, delay: 0.4 }}>
                          SAVE {Math.round(((product.maxPrice - product.price) / product.maxPrice) * 100)}%
                        </SaleTag>
                      )}

                      <ImageBox>
                        <ProductImg
                          src={
                            product.image
                              ? `https://api.smartlearner.com/uploads/${product.image}`
                              : redCartImg
                          }
                          alt={product.name}
                        />
                        <ImgOverlay>
                          <ViewBtn>View Details</ViewBtn>
                        </ImgOverlay>
                      </ImageBox>

                      <CardBody>
                        <ProductName>
                          <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: isExp ? "normal" : "nowrap" }}>
                            {product.name}
                          </span>
                          <ExpandBtn onClick={() => setExpandedId(isExp ? null : productId)}>
                            {isExp ? "▲" : "▼"}
                          </ExpandBtn>
                        </ProductName>

                        <ProductDesc expanded={isExp}>
                          {product.description || "No description available."}
                        </ProductDesc>

                        <StarRow>
                          {[...Array(5)].map((_, i) => (
                            <img key={i} src={redStarImg} alt="star" style={{ width: 18, height: 18 }} />
                          ))}
                        </StarRow>

                        <PriceRow>
                          <Prices>
                            {product.maxPrice && <OldPrice>£{product.maxPrice}</OldPrice>}
                            <NewPrice
                              isoffer={1}
                              animate={{ scale: [1, 1.06, 1] }}
                              transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}>
                              £{product.price}
                            </NewPrice>
                          </Prices>

                          {inCart ? (
                            <CartControls>
                              <QtyBtn minus onClick={() => handleDecrease(productId)}>−</QtyBtn>
                              <QtyCount>{inCart.count}</QtyCount>
                              <QtyBtn onClick={() => handleIncrease(productId)}>+</QtyBtn>
                            </CartControls>
                          ) : (
                            <AddBtn
                              whileHover={{ scale: 1.06 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleAddToCart(product, idx)}>
                              Add to Cart
                            </AddBtn>
                          )}
                        </PriceRow>
                      </CardBody>
                    </Card>
                  );
                })
              ) : (
                <EmptyState>No offers available right now. Check back soon! 🚗</EmptyState>
              )}
            </ProductGrid>
          </motion.div>
        </AnimatePresence>

        {/* Show More / Less */}
        {filteredProducts.length > 3 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ShowMoreBtn
              whileHover={{ scale: 1.06, boxShadow: "0 8px 30px #3b82f655" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll((p) => !p)}>
              {showAll ? "↑ Show Less" : "Show More Offers ↓"}
            </ShowMoreBtn>
          </div>
        )}
      </CategorySection>
    </>
  );
}

export default SpecialProductQrCodePage;