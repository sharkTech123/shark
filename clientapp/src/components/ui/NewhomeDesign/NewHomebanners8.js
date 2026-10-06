import React, { useState, useRef } from "react";
import {
  Search,
  Phone,
  Award,
  ChevronDown,
  Car,
  Zap,
  BookOpen,
  Grid3x3,
  ShieldCheck,
  MapPin,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
/* ---------------------------------------------------------
   DESIGN CONCEPT
   "Luxury Editorial Light"

   Warm ivory background
   Deep burgundy / wine accent
   Soft rose secondary accent
   Bright borders
   Glassmorphism cards
   Elegant serif typography
--------------------------------------------------------- */

const categories = [
  {
    icon: Car,
    label: "Manual lessons",
    sub: "Clutch and gears",
    tag: "Most booked",
    accent: "red",
    link: "/manual",
  },
  {
    icon: Gauge,
    label: "Automatic lessons",
    sub: "No clutch, no gears",
    accent: "rose",
    link: "/automatic-transmisson",
  },
  {
    icon: Zap,
    label: "Intensive course",
    sub: "Pass in weeks",
    accent: "red",
    link: "/intensive",
  },
  {
    icon: BookOpen,
    label: "Theory support",
    sub: "1-2-1 and online",
    accent: "rose",
    link: "/Theory-Support",
  },
  {
    icon: Grid3x3,
    label: "WorkShop",
    sub: "workshop for driving",
    accent: "red",
    link: "/workshop",
  },
  {
    icon: ShieldCheck,
    label: "Become an instructor",
    sub: "DVSA approved training",
    accent: "rose",
    link: "/driving-instructor-packages/instructor-packages",
  },
  {
    icon: BookOpen,
    label: "PDI Portal",
    sub: "PDI Course for driving Part 1, Part 2 and Part 3",
    accent: "red",
    link: "/ADI-Training-Portal",
  },
  {
    icon: BookOpen,
    label: "Theory Portal",
    sub: "Theory Course for driving",
    accent: "rose",
    link: "/Theory-Portal",
  },
];

const towns = [
  { name: "Coventry", link: "/coventry" },
  { name: "Nuneaton", link: "/nuneaton" },
  { name: "Bedworth", link: "/bedworth" },
  { name: "Rugby", link: "/rugby" },
  { name: "Leamington", link: "/leamington" },
  { name: "Warwick", link: "/warwick" },
  { name: "Solihull", link: "/solihull" },
];

const extraItems = [
  {
    label: "Pass Plus",
    link: "/pass-plus",
  },
  {
    label: "Corporate Responsbilities",
    link: "/Corporate-Responsbilities",
  },

  {
    label: "FAQs",
    link: "/faqs",
  },
  {
    label: "Contact & locations",
    link: "/Contact-Us",
  },

  {
    label: "Blog",
    link: "/blogs",
  },
];

function TiltCard({ children, accent = "red", className = "", style = {} }) {
  const ref = useRef(null);

  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
    mx: 50,
    my: 50,
  });

  const handleMove = (e) => {
    const el = ref.current;

    if (!el) return;

    const r = el.getBoundingClientRect();

    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    setTilt({
      rx: (0.5 - py) * 8,
      ry: (px - 0.5) * 10,
      mx: px * 100,
      my: py * 100,
    });
  };

  const reset = () => {
    setTilt({
      rx: 0,
      ry: 0,
      mx: 50,
      my: 50,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card accent-${accent} ${className}`}
      style={{
        ...style,
        transform: `
          perspective(900px)
          rotateX(${tilt.rx}deg)
          rotateY(${tilt.ry}deg)
          translateZ(0)
        `,
        "--mx": `${tilt.mx}%`,
        "--my": `${tilt.my}%`,
      }}
    >
      {children}
    </div>
  );
}

export default function NewHomebanners8() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const searchTerm = query.trim().toLowerCase();

  const searchResults = [
    ...categories.map((item) => ({
      ...item,
      type: "Service",
      searchText: `${item.label} ${item.sub} ${item.tag || ""}`,
    })),

    ...towns.map((town) => ({
      label: town.name,
      sub: "Driving lessons",
      link: town.link,
      type: "Location",
      searchText: `${town.name} driving lessons`,
    })),

    ...extraItems.map((item) => ({
      ...item,
      sub: "More services",
      type: "Page",
      searchText: item.label,
    })),
  ].filter((item) => item.searchText.toLowerCase().includes(searchTerm));

  return (
    <div className="ndv-root">
      <style>{`

        /* =================================================
           FONT
        ================================================= */

        @import url(
          'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap'
        );


        /* =================================================
           LIGHT LUXURY THEME
        ================================================= */

        .ndv-root {
  --bg-0: #fffaf7;
  --bg-1: #f8edf1;
  --bg-2: #eee5f2;

  --surface: rgba(255, 255, 255, 0.78);
  --surface-soft: rgba(255, 247, 249, 0.72);

  --ink-0: #21151b;
  --ink-1: #5f4a53;
  --ink-2: #927d86;

  /* MAIN LUXURY PALETTE */
  --wine: #68132f;
  --wine-dark: #3c0b20;
  --wine-light: #a83258;
  --red: #68132f;
  --red-dark: #3c0b20;
  --red-light: #a83258;

  --plum: #5b315f;
  --rose: #c76b87;
  --rose-light: #e8aebb;

  --champagne: #e8c89b;

  --line: rgba(91, 49, 95, 0.14);
  --line-bright: rgba(104, 19, 47, 0.28);

  --glass: rgba(255, 255, 255, 0.58);
  --glass-strong: rgba(255, 255, 255, 0.88);

  position: relative;

  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;

  color: var(--ink-0);

  overflow: hidden;

  padding: 56px 5vw 64px;

  background:
    /* top-left wine glow */
    radial-gradient(
      700px 520px at 0% 0%,
      rgba(104, 19, 47, 0.18),
      transparent 68%
    ),

    /* top-right plum glow */
    radial-gradient(
      650px 500px at 100% 5%,
      rgba(91, 49, 95, 0.16),
      transparent 68%
    ),

    /* centre rose glow */
    radial-gradient(
      600px 500px at 50% 35%,
      rgba(232, 174, 187, 0.18),
      transparent 70%
    ),

    /* bottom champagne */
    radial-gradient(
      650px 550px at 80% 100%,
      rgba(232, 200, 155, 0.18),
      transparent 72%
    ),

    /* actual base */
    linear-gradient(
      135deg,
      #fffaf7 0%,
      #fdf5f4 28%,
      #f7eef3 58%,
      #eee8f2 100%
    );
}


        /* =================================================
           SUBTLE GRID
        ================================================= */

.ndv-root::before {
  content: "";

  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      rgba(91, 49, 95, 0.055) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(104, 19, 47, 0.055) 1px,
      transparent 1px
    );

  background-size: 44px 44px;

  mask-image:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.9),
      rgba(0,0,0,0.35)
    );

  -webkit-mask-image:
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.9),
      rgba(0,0,0,0.35)
    );

  pointer-events: none;
  z-index: 0;
}



        /* =================================================
           DECORATIVE GLOW
        ================================================= */

.ndv-root::after {
  content: "";

  position: absolute;

  right: -180px;
  bottom: -240px;

  width: 700px;
  height: 700px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(104, 19, 47, 0.14) 0%,
      rgba(91, 49, 95, 0.10) 32%,
      rgba(232, 200, 155, 0.08) 48%,
      transparent 72%
    );

  filter: blur(12px);

  pointer-events: none;
  z-index: 0;
}


        /* =================================================
           MAIN GRID
        ================================================= */

     .ndv-grid {
  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns:
    1.05fr
    0.95fr;

  gap: 48px;

  max-width: 1240px;

  margin: 0 auto;

  align-items: center;
}


        @media (max-width: 920px) {
          .ndv-grid {
            grid-template-columns: 1fr;

            gap: 42px;
          }
        }


        /* =================================================
           EYEBROW
        ================================================= */

        .eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          font-family:
            'Inter',
            sans-serif;

          font-size: 11px;

          font-weight: 600;

          letter-spacing: 0.13em;

          text-transform: uppercase;

          color: var(--wine);

          background:
            rgba(143, 24, 48, 0.055);

          border:
            1px solid
            rgba(143, 24, 48, 0.20);

          padding:
            8px 14px;

          border-radius: 999px;

          margin-bottom: 28px;

          box-shadow:
            0 5px 18px
            rgba(143, 24, 48, 0.05);
        }


        .eyebrow .dot {
          width: 6px;

          height: 6px;

          border-radius: 50%;

          background: var(-wine);

          box-shadow:
            0 0 8px
            rgba(143, 24, 48, 0.45);
        }


        /* =================================================
           HEADLINE
        ================================================= */

        .headline {
          font-family:
            'DM Serif Display',
            Georgia,
            serif;

          font-weight: 400;

          font-size:
            clamp(
              46px,
              5.3vw,
              70px
            );

          line-height: 0.98;

          letter-spacing: -0.025em;

          margin: 0;

          color: var(--ink-0);

          max-width: 700px;
        }


        .headline .grad {
  background:
    linear-gradient(
      100deg,
      #3c0b20 0%,
      #68132f 28%,
      #9f3157 55%,
      #c76b87 78%,
      #5b315f 100%
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;

  filter:
    drop-shadow(
      0 8px 20px
      rgba(104, 19, 47, 0.16)
    );
}



        /* =================================================
           LANE
        ================================================= */

        .lane {
          position: relative;

          width: 175px;

          height: 4px;

          margin:
            25px 0 27px;

          border-radius: 999px;

          overflow: hidden;

          background:
            rgba(104, 17, 36, 0.10);

          box-shadow:
            0 3px 12px
            rgba(104, 17, 36, 0.07);
        }


        .lane::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            repeating-linear-gradient(
              90deg,
              var(--wine) 0 20px,
              transparent 20px 32px
            );

          filter:
            drop-shadow(
              0 0 5px
              rgba(143, 24, 48, 0.45)
            );

          animation:
            dash 2.4s linear infinite;
        }


        @keyframes dash {
          to {
            transform:
              translateX(32px);
          }
        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        .sub {
          font-size: 16px;

          line-height: 1.7;

          color: var(--ink-1);

          max-width: 500px;

          margin:
            0 0 26px;
        }


        /* =================================================
           PILLS
        ================================================= */

        .pills {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-bottom: 30px;
        }


        .pill {
          font-size: 12.5px;

          font-weight: 500;

          color: var(--ink-1);

          background:
            rgba(255, 255, 255, 0.78);

          border:
            1px solid
            var(--line);

          padding:
            8px 14px;

          border-radius: 999px;

          box-shadow:
            0 4px 14px
            rgba(104, 17, 36, 0.045);

          transition:
            all 0.25s ease;
        }


        .pill:hover {
          transform:
            translateY(-2px);

          border-color:
            var(--line-bright);

          box-shadow:
            0 7px 18px
            rgba(104, 17, 36, 0.09);
        }


        /* =================================================
           CTA ROW
        ================================================= */

        .cta-row {
          display: flex;

          align-items: stretch;

          gap: 14px;

          margin-bottom: 20px;

          flex-wrap: wrap;
        }


        /* =================================================
           CALL CARD
        ================================================= */

        .call-card {
          display: flex;

          align-items: center;

          gap: 12px;

          padding:
            13px 18px;

          border-radius: 17px;

          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #fff5f5 100%
            );

          border:
            1px solid
            rgba(143, 24, 48, 0.18);

          box-shadow:
            0 14px 30px
            rgba(104, 17, 36, 0.08),

            inset 0 1px 0
            rgba(255, 255, 255, 0.95);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .call-card:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 18px 36px
            rgba(104, 17, 36, 0.12);
        }


        .call-icon {
          width: 39px;

          height: 39px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 12px;

          background:
            linear-gradient(
              145deg,
              var(--red),
              var(--red-dark)
            );

          color: #ffffff;

          box-shadow:
            0 7px 16px
            rgba(143, 24, 48, 0.28);

          flex-shrink: 0;
        }


        .call-num {
          font-family:
            'Inter',
            sans-serif;

          font-size: 15px;

          font-weight: 700;

          letter-spacing: 0.01em;

          color: var(--ink-0);
        }


        .call-hours {
          font-size: 11px;

          color: var(--ink-2);

          margin-top: 3px;
        }


        /* =================================================
           AWARDS
        ================================================= */

        .awards {
          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            12px 15px;

          border-radius: 17px;

          background:
            rgba(255, 255, 255, 0.72);

          border:
            1px solid
            var(--line);

          box-shadow:
            0 10px 26px
            rgba(104, 17, 36, 0.06);

          backdrop-filter:
            blur(12px);
        }


        .award-badge {
          width: 32px;

          height: 32px;

          border-radius: 10px;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            linear-gradient(
              145deg,
              #f4d8dd,
              #fbeef0
            );

          border:
            1px solid
            rgba(143, 24, 48, 0.14);

          color: var(--red);

          flex-shrink: 0;
        }


        .award-text {
          font-size: 11.5px;

          color: var(--ink-2);

          line-height: 1.4;

          max-width: 170px;
        }


        /* =================================================
           HUD
        ================================================= */

        .hud {
        padding: 28px;
  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.92) 0%,
      rgba(255,247,249,0.78) 45%,
      rgba(244,235,246,0.72) 100%
    );

  border:
    1px solid
    rgba(91, 49, 95, 0.14);
    border-radius:28px;

  box-shadow:
    0 35px 80px
    rgba(60, 11, 32, 0.10),

    0 10px 30px
    rgba(91, 49, 95, 0.06),

    inset 0 1px 0
    rgba(255,255,255,0.98);

  backdrop-filter: blur(24px);
}



        .hud::before {
  content: "";

  position: absolute;

  top: 0;
  left: 8%;
  right: 8%;

  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(199,107,135,0.65),
      rgba(232,200,155,0.5),
      rgba(91,49,95,0.45),
      transparent
    );
}



        .hud-head {
          display: flex;

          align-items: baseline;

          justify-content: space-between;

          margin-bottom: 18px;
        }


        .hud-title {
          font-family:
            'DM Serif Display',
            Georgia,
            serif;

          font-size: 22px;

          font-weight: 400;

          color: var(--ink-0);
        }


        .hud-caption {
          font-size: 11px;

          color: var(--ink-2);

          font-style: italic;
        }


        /* =================================================
           SEARCH
        ================================================= */

        .search-box {
          display: flex;

          align-items: center;

          gap: 10px;

          padding:
            13px 15px;

          border-radius: 14px;

          background:
            #fffafa;

          border:
            1px solid
            rgba(104, 17, 36, 0.15);

          margin-bottom: 20px;

          box-shadow:
            inset 0 1px 3px
            rgba(104, 17, 36, 0.025);

          transition:
            border-color 0.2s,
            box-shadow 0.2s,
            transform 0.2s;
        }


        .search-box:focus-within {
          border-color:
            rgba(143, 24, 48, 0.42);

          box-shadow:
            0 0 0 3px
            rgba(143, 24, 48, 0.07),

            0 8px 20px
            rgba(143, 24, 48, 0.06);
        }


        .search-box input {
          flex: 1;

          background: transparent;

          border: none;

          outline: none;

          color: var(--ink-0);

          font-size: 13.5px;
        }


        .search-box input::placeholder {
          color: #aa989b;
        }



          /* =================================================
   SEARCH WRAPPER
================================================= */

.search-wrapper {
  position: relative;
  z-index: 20;
}


/* =================================================
   SEARCH RESULTS
================================================= */

.search-results {
  position: absolute;

  top: calc(100% + 8px);

  left: 0;

  right: 0;

  max-height: 360px;

  overflow-y: auto;

  padding: 7px;

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.98);

  border:
    1px solid
    rgba(104, 17, 36, 0.16);

  box-shadow:
    0 24px 55px
    rgba(80, 25, 35, 0.15),

    0 5px 20px
    rgba(80, 25, 35, 0.07);

  backdrop-filter:
    blur(20px);

  animation:
    searchDrop 0.18s ease;
}


@keyframes searchDrop {
  from {
    opacity: 0;

    transform:
      translateY(-6px);
  }

  to {
    opacity: 1;

    transform:
      translateY(0);
  }
}


/* =================================================
   SEARCH RESULT
================================================= */

.search-result {
  display: flex;

  align-items: center;

  gap: 11px;

  padding:
    10px;

  border-radius: 12px;

  text-decoration: none;

  color: inherit;

  transition:
    background 0.18s ease,
    transform 0.18s ease;
}


.search-result:hover {
  background:
    rgba(143, 24, 48, 0.06);

  transform:
    translateX(3px);
}


/* =================================================
   RESULT ICON
================================================= */

.search-result-icon {
  width: 34px;

  height: 34px;

  border-radius: 10px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      #8f1830,
      #681124
    );

  box-shadow:
    0 5px 12px
    rgba(143, 24, 48, 0.22);
}


/* =================================================
   RESULT CONTENT
================================================= */

.search-result-content {
  flex: 1;

  min-width: 0;
}


.search-result-title {
  font-size: 13px;

  font-weight: 600;

  color: #241719;
}


.search-result-sub {
  margin-top: 2px;

  font-size: 10.5px;

  color: #8c7477;
}


/* =================================================
   RESULT TYPE
================================================= */

.search-result-type {
  font-size: 8px;

  font-weight: 700;

  letter-spacing: 0.07em;

  text-transform: uppercase;

  color: #8f1830;

  background:
    rgba(143, 24, 48, 0.07);

  border:
    1px solid
    rgba(143, 24, 48, 0.13);

  padding:
    4px 6px;

  border-radius: 5px;
}


/* =================================================
   NO RESULTS
================================================= */

.no-results {
  display: flex;

  align-items: center;

  gap: 11px;

  padding: 18px 14px;

  color: #8c7477;
}


.no-results > svg {
  color: #8f1830;

  flex-shrink: 0;
}


.no-results div {
  display: flex;

  flex-direction: column;

  gap: 3px;
}


.no-results strong {
  color: #241719;

  font-size: 13px;
}


.no-results span {
  font-size: 10.5px;
}


/* =================================================
   CLEAR BUTTON
================================================= */

.search-clear {
  border: none;

  background: transparent;

  color: #8c7477;

  font-size: 20px;

  line-height: 1;

  padding: 0 3px;

  cursor: pointer;
}


.search-clear:hover {
  color: #8f1830;
}


/* =================================================
   LINK RESET
================================================= */

.category-link {
  width: 100%;

  display: flex;

  align-items: center;

  gap: 12px;

  text-decoration: none;

  color: inherit;
}


.more-link {
  color: inherit;

  text-decoration: none;

  transition:
    color 0.2s ease;
}


.more-link:hover {
  color: #8f1830;
}



        .kbd {
          font-family:
            'JetBrains Mono',
            monospace;

          font-size: 10px;

          color: var(--ink-2);

          background:
            #ffffff;

          border:
            1px solid
            var(--line);

          border-radius: 6px;

          padding:
            3px 7px;
        }


        /* =================================================
           SECTION LABEL
        ================================================= */

        .section-label {
          font-family:
            'Inter',
            sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          color: var(--red);

          margin:
            0 0 12px;
        }


        /* =================================================
           CATEGORY GRID
        ================================================= */

        .cat-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 11px;

          margin-bottom: 22px;
        }


        @media (max-width: 480px) {
          .cat-grid {
            grid-template-columns: 1fr;
          }
        }


        /* =================================================
           TILT CARD
        ================================================= */

        .tilt-card {
          position: relative;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 14px;

          border-radius: 17px;

           background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.88),
      rgba(255, 246, 248, 0.66)
    );

          border:
    1px solid
    rgba(104, 19, 47, 0.11);

          cursor: pointer;

          transition:
            background 0.25s,
            border-color 0.25s,
            box-shadow 0.25s,
            transform 0.2s;

          transform-style:
            preserve-3d;

          will-change:
            transform;

          box-shadow:
    0 8px 24px
    rgba(60, 11, 32, 0.045),
    inset 0 1px 0
    rgba(255,255,255,0.95);
        }


        .tilt-card::before {
          content: "";

          position: absolute;

          inset: 0;

          border-radius: inherit;

          background:
            radial-gradient(
              180px circle at
              var(--mx)
              var(--my),
              rgba(143, 24, 48, 0.08),
              transparent 62%
            );

          opacity: 0;

          transition:
            opacity 0.25s;

          pointer-events: none;
        }


        .tilt-card:hover {
            background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.98),
      rgba(250, 235, 241, 0.90)
    );

  border-color:
    rgba(104, 19, 47, 0.24);

  box-shadow:
    0 18px 40px
    rgba(60, 11, 32, 0.11),

    0 0 0 1px
    rgba(199, 107, 135, 0.05);
        }


        .tilt-card:hover::before {
          opacity: 1;
        }


        .accent-red:hover {
          box-shadow:
            0 16px 34px
            rgba(143, 24, 48, 0.12);
        }


        .accent-rose:hover {
          box-shadow:
            0 16px 34px
            rgba(198, 111, 130, 0.15);
        }


        /* =================================================
           ICON TILE - RED
        ================================================= */

        .icon-tile {
          position: relative;

          width: 40px;

          height: 40px;

          flex-shrink: 0;

          border-radius: 12px;

          display: flex;

          align-items: center;

          justify-content: center;

          transform:
            translateZ(24px);
        }


        .accent-red .icon-tile {
  background:
    linear-gradient(
      145deg,
      #8f2548 0%,
      #68132f 48%,
      #3c0b20 100%
    );

  box-shadow:
    0 9px 20px
    rgba(104, 19, 47, 0.30),

    inset 0 1px 0
    rgba(255, 255, 255, 0.28);

  color: #fff;
}



        /* =================================================
           ICON TILE - ROSE
        ================================================= */

        .accent-rose .icon-tile {
  background:
    linear-gradient(
      145deg,
      #e1a0b2 0%,
      #c76b87 48%,
      #8f3c5a 100%
    );

  box-shadow:
    0 9px 20px
    rgba(199, 107, 135, 0.28),

    inset 0 1px 0
    rgba(255, 255, 255, 0.5);

  color: #fff;
}



        /* =================================================
           CATEGORY TEXT
        ================================================= */

        .cat-text {
          transform:
            translateZ(14px);
        }


        .cat-label {
          font-size: 13px;

          font-weight: 600;

          color: var(--ink-0);

          display: flex;

          align-items: center;

          gap: 6px;
        }


        .cat-sub {
          font-size: 11px;

          color: var(--ink-2);

          margin-top: 3px;
        }


        .cat-badge {
          font-family:
            'Inter',
            sans-serif;

          font-size: 7.5px;

          font-weight: 700;

          letter-spacing: 0.04em;

          text-transform: uppercase;

          padding:
            3px 6px;

          border-radius: 5px;

          background:
            rgba(143, 24, 48, 0.08);

          color: var(--red);

          border:
            1px solid
            rgba(143, 24, 48, 0.16);
        }


        /* =================================================
           TOWN CHIPS
        ================================================= */

        .chip-row {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-bottom: 6px;
        }


        .chip {
          font-size: 11.5px;

          font-weight: 500;

          color: var(--ink-1);

          background:
            rgba(255, 255, 255, 0.82);

          border:
            1px solid
            rgba(104, 17, 36, 0.13);

          padding:
            7px 11px;

          border-radius: 999px;

          display: flex;

          align-items: center;

          gap: 5px;

          box-shadow:
            0 3px 10px
            rgba(104, 17, 36, 0.025);

          transition:
            border-color 0.2s,
            color 0.2s,
            transform 0.2s,
            box-shadow 0.2s;
        }


        .chip svg {
          color: var(--red);
        }


        .chip:hover {
          border-color:
            rgba(143, 24, 48, 0.30);

          color: var(--red);

          transform:
            translateY(-2px);

          box-shadow:
            0 7px 15px
            rgba(104, 17, 36, 0.07);
        }


        /* =================================================
           MORE TOGGLE
        ================================================= */

        .more-toggle {
          display: flex;

          align-items: center;

          gap: 6px;

          width: 100%;

          margin-top: 14px;

          padding:
            12px 4px;

          background: transparent;

          border: none;

          border-top:
            1px solid
            rgba(104, 17, 36, 0.14);

          color: var(--ink-1);

          font-size: 12.5px;

          font-weight: 500;

          cursor: pointer;

          transition:
            color 0.2s;
        }


        .more-toggle:hover {
          color: var(--red);
        }


        .more-toggle svg {
          color: var(--red);

          transition:
            transform 0.25s;
        }


        .more-toggle.open svg {
          transform:
            rotate(180deg);
        }


        .more-panel {
          max-height: 0;

          overflow: hidden;

          transition:
            max-height 0.3s ease;
        }


        .more-panel.open {
          max-height: 200px;
        }


        .more-list {
          padding-top: 6px;

          font-size: 11.5px;

          color: var(--ink-2);

          line-height: 2;
        }


        /* =================================================
           RESPONSIVE
        ================================================= */

        @media (max-width: 600px) {

          .ndv-root {
            padding:
              40px 20px 48px;
          }

          .hud {
            padding: 20px;
          }

          .hud-head {
            align-items: flex-start;

            flex-direction: column;

            gap: 4px;
          }

          .headline {
            font-size: 48px;
          }

          .call-card,
          .awards {
            width: 100%;
          }

          .awards {
            justify-content: flex-start;
          }
        }

      `}</style>

      <div className="ndv-grid">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div>
          <div className="eyebrow">
            <span className="dot" />
            Est. 2004 — Coventry &amp; the West Midlands
          </div>

          <h1 className="headline">
            Let's get you
            <br />
            <span className="grad">on the road.</span>
          </h1>

          <div className="lane" />

          <p className="sub">
            Tell us what you're here for and we'll take you straight to it —
            lessons, theory, intensive courses or instructor training. No popup
            to close, no menus to dig through.
          </p>

          <div className="pills">
            <span className="pill">⚙ Manual &amp; automatic</span>

            <span className="pill">📍 7 towns covered</span>

            <span className="pill">🎓 Instructor training</span>
          </div>

          <div className="cta-row">
            <div className="call-card">
              <div className="call-icon">
                <Phone size={17} />
              </div>

              <div>
                <div className="call-num">02475 092784</div>

                <div className="call-hours">
                  Mon–Fri 9am–7pm · Sat–Sun 10am–4pm
                </div>
              </div>
            </div>

            <div className="awards">
              <div className="award-badge">
                <Award size={15} />
              </div>

              <div className="award-badge">
                <Award size={15} />
              </div>

              <div className="award-badge">
                <Award size={15} />
              </div>

              <div className="award-text">
                Driving school award finalist, three years running
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT PANEL
        ================================================= */}

        <div className="hud">
          <div className="hud-head">
            <div className="hud-title">Find what you need</div>

            <div className="hud-caption">every page, one click away</div>
          </div>

          {/* SEARCH */}

          {/* SEARCH */}

          <div className="search-wrapper">
            <div className="search-box">
              <Search size={16} color="#8f7a7d" />

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try 'become an instructor'…"
              />

              {query && (
                <button
                  className="search-clear"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  ×
                </button>
              )}

              <span className="kbd">/</span>
            </div>

            {/* SEARCH RESULTS */}

            {query.trim() && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => {
                    const Icon = item.icon || Search;

                    return (
                      <a
                        href={item.link}
                        className="search-result"
                        key={`${item.type}-${item.label}`}
                      >
                        <div className="search-result-icon">
                          <Icon size={16} />
                        </div>

                        <div className="search-result-content">
                          <div className="search-result-title">
                            {item.label}
                          </div>

                          <div className="search-result-sub">{item.sub}</div>
                        </div>

                        <span className="search-result-type">{item.type}</span>
                      </a>
                    );
                  })
                ) : (
                  <div className="no-results">
                    <Search size={17} />

                    <div>
                      <strong>No results found</strong>

                      <span>Try manual, automatic, Coventry or instructor</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CATEGORY TITLE */}

          <p className="section-label">Go straight to…</p>

          {/* CATEGORY CARDS */}

          <div className="cat-grid">
            {categories.map(({ icon: Icon, label, sub, tag, accent, link }) => (
              <TiltCard key={label} accent={accent}>
                <a href={link} className="category-link">
                  <div className="icon-tile">
                    <Icon size={18} />
                  </div>

                  <div className="cat-text">
                    <div className="cat-label">
                      {label}

                      {tag && <span className="cat-badge">{tag}</span>}
                    </div>

                    <div className="cat-sub">{sub}</div>
                  </div>
                </a>
              </TiltCard>
            ))}
          </div>

          {/* TOWNS */}

          <p className="section-label">Lessons in</p>

          <div className="chip-row">
            {towns.map((town) => (
              <a
                href={town.link}
                key={town.name}
                style={{ textDecoration: "none" }}
              >
                <p className="chip">
                  <MapPin size={11} />

                  {town.name}
                </p>
              </a>
            ))}
          </div>

          {/* MORE */}

          <button
            className={`more-toggle ${showAll ? "open" : ""}`}
            onClick={() => setShowAll((s) => !s)}
          >
            <ChevronDown size={15} />
            Everything else
          </button>
          <div className={`more-panel ${showAll ? "open" : ""}`}>
            <div className="more-list">
              Refresher lessons &nbsp;·&nbsp; Pass Plus &nbsp;·&nbsp; FAQs
              <br />
              Contact &amp; locations &nbsp;·&nbsp; Blog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
