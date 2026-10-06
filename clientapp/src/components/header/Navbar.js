import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ShoppingCart,
  User,
  LogOut,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LOGO_SRC from "../../assets/images/White-Logo-Fixed-1024x174.webp";
import { logoutUser } from "../../redux/features/authSlice";

/* -----------------------------------------------------------
   Nav data — grouped so the structure reads as a hierarchy,
   not a flat dump of every page on the site.
----------------------------------------------------------- */
const NAV = [
  {
    label: "Our Courses",
    href: "/",
    type: "menu",
    items: [
      { label: "Manual", href: "/manual", note: "Learn in a manual car" },
      {
        label: "Automatic",
        href: "/automatic-transmisson",
        note: "Learn in an automatic",
      },
      { label: "Intensive", href: "/intensive", note: "Fast-track courses" },
      {
        label: "Simulator",
        href: "/simulator-training",
        note: "Simulator training",
      },
      {
        label: "ADI/PDI Workshops",
        href: "/workshop",
        note: "Instructor workshops",
      },
    ],
  },
  {
    label: "Theory Support",
    href: "/Theory-Support",
    type: "menu",
    items: [
      { label: "Theory Package", href: "/Theory-Support/Theory-package" },
      { label: "Theory Portal", href: "/Theory-Portal" },
      { label: "Learner Portal", href: "/learner-portal" },
      {
        label: "PDI Packages",
        href: "/driving-instructor-packages/instructor-packages",
      },
      { label: "PDI Theory Portal", href: "/ADI-Training-Portal" },
    ],
  },
  {
    label: "Join Our Team",
    href: "/Driving-Instructor-Training",
    type: "menu",
    items: [
      {
        label: "Driving Instructor Training",
        href: "/Driving-Instructor-Training",
      },
      {
        label: "Driving Instructor Packages",
        href: "/driving-instructor-packages/instructor-packages",
      },
      { label: "Franchise", href: "/Driving-Instructor-Franchise" },
      { label: "Business Mentoring", href: "/business-mentoring" },
    ],
  },
  {
    label: "PDI Portal",
    href: "/ADI-Training-Portal",
    type: "menu",
    items: [
      { label: "PDI Part 1", href: "/part-one-theory-questions" },
      { label: "PDI Part 2", href: "/part-two-theory-questions" },
      { label: "PDI Part 3", href: "/part-three-theory-questions" },
    ],
  },
  {
    label: "Privilege Cards",
    href: "/privilege-cards",
    type: "link",
  },
  {
    label: "CSR",
    href: "/Corporate-Responsbilities",
    type: "mega",
    columns: [
      {
        heading: "Environment",
        items: [
          { label: "Electric Car Scheme", href: "/Electric-Car-Scheme" },
          { label: "Going Green Project", href: "/Going-Green-Project" },
          {
            label: "Our Office Green Efforts",
            href: "/Our-Office-Green-Efforts",
          },
        ],
      },
      {
        heading: "Community",
        items: [
          { label: "Community Champions", href: "/Communities-Champions" },
          { label: "Partnerships", href: "/We-Proudly-Support" },
          { label: "Go CV", href: "/Go-Cv" },
        ],
      },
      {
        heading: "Transparency",
        items: [{ label: "The Honest Truth", href: "/The-Honest-Truth" }],
      },
    ],
  },
  {
    label: "Contact",
    href: "/Contact-Us",
    type: "link",
  },
];

export default function NavbarHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // desktop hover/focus menu key
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const accountRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Get logged-in user from Redux
  const userDetails = useSelector((state) => state.auth.userDetails);
  // Don't rely on local component state for authentication
  const loggedIn = Boolean(userDetails?.username);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sldr-root">
      <style>{CSS}</style>

      {/* ---------- utility bar ---------- */}
      <div className="sldr-utility">
        <div className="sldr-utility-inner">
          <div className="sldr-contact">
            <a href="tel:+4402475092784" className="sldr-contact-link">
              <Phone size={13} strokeWidth={2.25} />
              <span>02475 092 784</span>
            </a>
            <span className="sldr-dash-divider" aria-hidden="true" />
            <a
              href="mailto:admin@smartlearner.com"
              className="sldr-contact-link"
            >
              <Mail size={13} strokeWidth={2.25} />
              <span>admin@smartlearner.com</span>
            </a>
          </div>

          <div className="sldr-utility-actions">
            <div className="sldr-account" ref={accountRef}>
              {" "}
              <button
                className="sldr-account-btn"
                onClick={() => setAccountOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={accountOpen}
              >
                {" "}
                <User size={13} strokeWidth={2.25} />{" "}
                <span> {loggedIn ? "My Account" : "Login / Register"} </span>{" "}
                <ChevronDown
                  size={12}
                  className={
                    "sldr-chev" + (accountOpen ? " sldr-chev-open" : "")
                  }
                />{" "}
              </button>{" "}
              <div
                className={
                  "sldr-account-panel" + (accountOpen ? " sldr-panel-open" : "")
                }
              >
                {" "}
                {loggedIn ? (
                  <>
                    {" "}
                    <button
                      type="button"
                      className="sldr-account-item"
                      onClick={() => {
                        setAccountOpen(false);
                        navigate("/my-account");
                      }}
                    >
                      {" "}
                      <User size={14} /> My Account{" "}
                    </button>{" "}
                    <button
                      type="button"
                      className="sldr-account-item sldr-account-item-btn"
                      onClick={async () => {
                        setAccountOpen(false);
                        await dispatch(logoutUser());
                        navigate("/");
                      }}
                    >
                      {" "}
                      <LogOut size={14} /> Logout{" "}
                    </button>{" "}
                  </>
                ) : (
                  <button
                    type="button"
                    className="sldr-account-item"
                    onClick={() => {
                      setAccountOpen(false);
                      navigate("/register");
                    }}
                  >
                    {" "}
                    <User size={14} /> Login / Register{" "}
                  </button>
                )}{" "}
              </div>{" "}
            </div>

            <a href="/cart" className="sldr-cart" aria-label="Cart">
              <ShoppingCart size={15} strokeWidth={2.25} />
              <span className="sldr-cart-dot" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- main nav ---------- */}
      <div className={"sldr-main" + (scrolled ? " sldr-main-scrolled" : "")}>
        <div className="sldr-main-inner">
          <a
            href="/"
            className="sldr-logo-wrap"
            aria-label="Smart Learner — home"
          >
            <span className="sldr-logo-blink" aria-hidden="true" />
            <img src={LOGO_SRC} alt="Smart Learner" className="sldr-logo-img" />
          </a>

          <nav className="sldr-nav-desktop" aria-label="Primary">
            <ul className="sldr-nav-list">
              {NAV.map((item) => (
                <li
                  key={item.label}
                  className="sldr-nav-item"
                  onMouseEnter={() =>
                    item.type !== "link" && setOpenMenu(item.label)
                  }
                  onMouseLeave={() => item.type !== "link" && setOpenMenu(null)}
                >
                  <a
                    href={item.href}
                    className={
                      "sldr-navlink" +
                      (openMenu === item.label ? " sldr-navlink-open" : "")
                    }
                  >
                    {item.label}
                    {item.type !== "link" && (
                      <ChevronDown
                        size={13}
                        className={
                          "sldr-chev" +
                          (openMenu === item.label ? " sldr-chev-open" : "")
                        }
                      />
                    )}
                  </a>

                  {item.type === "menu" && (
                    <div
                      className={
                        "sldr-dropdown" +
                        (openMenu === item.label ? " sldr-dropdown-open" : "")
                      }
                    >
                      <ul>
                        {item.items.map((sub) => (
                          <li key={sub.label}>
                            <a href={sub.href} className="sldr-dropdown-link">
                              <span
                                className="sldr-dropdown-mark"
                                aria-hidden="true"
                              />
                              <span>
                                {sub.label}
                                {sub.note && <em>{sub.note}</em>}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.type === "mega" && (
                    <div
                      className={
                        "sldr-mega" +
                        (openMenu === item.label ? " sldr-dropdown-open" : "")
                      }
                    >
                      {item.columns.map((col) => (
                        <div className="sldr-mega-col" key={col.heading}>
                          <p className="sldr-mega-heading">{col.heading}</p>
                          <ul>
                            {col.items.map((sub) => (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  className="sldr-dropdown-link"
                                >
                                  <span
                                    className="sldr-dropdown-mark"
                                    aria-hidden="true"
                                  />
                                  <span>{sub.label}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={"sldr-burger" + (mobileOpen ? " sldr-burger-open" : "")}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ---------- mobile panel ---------- */}
      <div className={"sldr-mobile" + (mobileOpen ? " sldr-mobile-open" : "")}>
        <ul className="sldr-mobile-list">
          {NAV.map((item) => {
            const hasChildren = item.type !== "link";
            const isOpen = mobileAccordion === item.label;
            const children =
              item.type === "mega"
                ? item.columns.flatMap((c) => c.items)
                : item.items;
            return (
              <li key={item.label} className="sldr-mobile-item">
                <div className="sldr-mobile-row">
                  <a href={item.href} className="sldr-mobile-link">
                    {item.label}
                  </a>
                  {hasChildren && (
                    <button
                      className="sldr-mobile-toggle"
                      onClick={() =>
                        setMobileAccordion(isOpen ? null : item.label)
                      }
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown
                        size={16}
                        className={
                          "sldr-chev" + (isOpen ? " sldr-chev-open" : "")
                        }
                      />
                    </button>
                  )}
                </div>
                {hasChildren && (
                  <div
                    className={
                      "sldr-mobile-sub" +
                      (isOpen ? " sldr-mobile-sub-open" : "")
                    }
                  >
                    <ul>
                      {children.map((sub) => (
                        <li key={sub.label}>
                          <a href={sub.href}>{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="sldr-mobile-footer">
          <a href="tel:+4402475092784" className="sldr-contact-link">
            <Phone size={14} /> 02475 092 784
          </a>
          <a href="mailto:admin@smartlearner.com" className="sldr-contact-link">
            <Mail size={14} /> admin@smartlearner.com
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="sldr-scrim" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

.sldr-root {
  --bg-void: #0a0b0d;
  --bg-panel: #121418;
  --bg-panel-2: #181b20;
  --line-red: #e0362b;
  --line-red-soft: rgba(224, 54, 43, 0.35);
  --amber: #f2a93b;
  --text-hi: #f4f5f6;
  --text-mid: #9aa0a6;
  --text-dim: #666c73;
  --hairline: rgba(255, 255, 255, 0.08);
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  position: relative;
  z-index: 50;
  color: var(--text-hi);
  -webkit-font-smoothing: antialiased;
}

.sldr-root * { box-sizing: border-box; }

/* ---------------- utility bar ---------------- */
.sldr-utility {
  background: var(--bg-panel);
  border-bottom: 1px solid var(--hairline);
}
.sldr-utility-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 7px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
}
.sldr-contact { display: flex; align-items: center; gap: 12px; }
.sldr-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-mid);
  text-decoration: none;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
}
.sldr-contact-link:hover { color: var(--line-red); }
.sldr-dash-divider {
  width: 0;
  height: 12px;
  border-left: 1px dashed var(--hairline);
}
.sldr-utility-actions { display: flex; align-items: center; gap: 18px; }

.sldr-account { position: relative; }
.sldr-account-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--text-mid);
  font: inherit;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  cursor: pointer;
  padding: 4px 2px;
  transition: color 0.2s ease;
}
.sldr-account-btn:hover { color: var(--text-hi); }
.sldr-chev { transition: transform 0.25s ease; }
.sldr-chev-open { transform: rotate(180deg); }

.sldr-account-panel {
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  background: var(--bg-panel-2);
  border: 1px solid var(--hairline);
  border-radius: 10px;
  min-width: 190px;
  padding: 6px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  z-index: 80;
}
.sldr-panel-open { opacity: 1; visibility: visible; transform: translateY(0); }
.sldr-account-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 9px 10px;
  border-radius: 6px;
  color: var(--text-hi);
  text-decoration: none;
  font-size: 13px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s ease;
}
.sldr-account-item:hover { background: rgba(255, 255, 255, 0.06); }
.sldr-account-item-btn { color: var(--line-red); }

.sldr-cart {
  position: relative;
  display: inline-flex;
  color: var(--text-mid);
  transition: color 0.2s ease, transform 0.2s ease;
}
.sldr-cart:hover { color: var(--text-hi); transform: translateY(-1px); }
.sldr-cart-dot {
  position: absolute;
  top: -3px;
  right: -4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--line-red);
  box-shadow: 0 0 0 2px var(--bg-panel);
}

/* ---------------- main nav ---------------- */
.sldr-main {
  background: var(--bg-void);
  border-bottom: 1px solid var(--hairline);
  transition: box-shadow 0.3s ease;
}
.sldr-main-scrolled { box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45); }
.sldr-main-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.sldr-logo-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.sldr-logo-img {
  height: 34px;
  width: auto;
  display: block;
  filter: drop-shadow(0 0 0 rgba(224, 54, 43, 0));
  transition: filter 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.sldr-logo-wrap:hover .sldr-logo-img {
  transform: translateY(-1px) scale(1.035);
  filter: drop-shadow(0 4px 18px var(--line-red-soft));
}
.sldr-logo-blink {
  position: absolute;
  left: -10px;
  top: 50%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--amber);
  opacity: 0;
  transform: translateY(-50%);
}
.sldr-logo-wrap:hover .sldr-logo-blink {
  animation: indicatorBlink 0.9s steps(1, end) infinite;
}
@keyframes indicatorBlink {
  0%, 45% { opacity: 1; box-shadow: 0 0 8px 2px var(--amber); }
  50%, 100% { opacity: 0; box-shadow: none; }
}

.sldr-nav-desktop { display: none; }
@media (min-width: 1080px) {
  .sldr-nav-desktop { display: block; }
}
.sldr-nav-list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.sldr-nav-item { position: relative; }
.sldr-navlink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px 13px;
  color: var(--text-mid);
  text-decoration: none;
  font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s ease;
}
.sldr-navlink:hover, .sldr-navlink-open { color: var(--text-hi); }
.sldr-navlink::after {
  content: '';
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: 4px;
  height: 2px;
  background-image: repeating-linear-gradient(
    90deg,
    var(--line-red) 0px,
    var(--line-red) 8px,
    transparent 8px,
    transparent 16px
  );
  background-size: 200% 100%;
  opacity: 0;
  transform: scaleX(0.6);
  transform-origin: left center;
  transition: opacity 0.25s ease, transform 0.3s ease;
}
.sldr-navlink:hover::after, .sldr-navlink-open::after {
  opacity: 1;
  transform: scaleX(1);
  animation: dashMove 0.8s linear infinite;
}
@keyframes dashMove {
  from { background-position: 0 0; }
  to { background-position: -32px 0; }
}

/* dropdown */
.sldr-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 240px;
  background: var(--bg-panel-2);
  border: 1px solid var(--hairline);
  border-radius: 12px;
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.5);
  z-index: 70;
}
.sldr-dropdown-open { opacity: 1; visibility: visible; transform: translateY(0); }
.sldr-dropdown ul { list-style: none; margin: 0; padding: 0; }
.sldr-dropdown-link {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 9px 10px;
  border-radius: 8px;
  color: var(--text-hi);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  transition: background 0.15s ease, padding-left 0.2s ease;
}
.sldr-dropdown-link:hover { background: rgba(255, 255, 255, 0.06); padding-left: 13px; }
.sldr-dropdown-link em {
  display: block;
  font-style: normal;
  font-size: 11.5px;
  color: var(--text-dim);
  margin-top: 1px;
}
.sldr-dropdown-mark {
  width: 6px;
  height: 2px;
  margin-top: 8px;
  flex-shrink: 0;
  background: var(--line-red);
  transition: width 0.2s ease;
}
.sldr-dropdown-link:hover .sldr-dropdown-mark { width: 12px; }

/* mega menu (CSR) */
.sldr-mega {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, -8px);
  display: flex;
  gap: 28px;
  min-width: 560px;
  background: var(--bg-panel-2);
  border: 1px solid var(--hairline);
  border-radius: 14px;
  padding: 20px 22px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
  z-index: 70;
}
.sldr-mega.sldr-dropdown-open { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
.sldr-mega-col { flex: 1; min-width: 150px; }
.sldr-mega-heading {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber);
  margin: 0 0 8px;
  padding-bottom: 8px;
  border-bottom: 1px dashed var(--hairline);
}
.sldr-mega-col ul { list-style: none; margin: 0; padding: 0; }

.sldr-burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9px;
  border: 1px solid var(--hairline);
  background: var(--bg-panel);
  color: var(--text-hi);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}
.sldr-burger:hover { background: var(--bg-panel-2); }
.sldr-burger-open { transform: rotate(90deg); }
@media (min-width: 1080px) {
  .sldr-burger { display: none; }
}

/* ---------------- mobile panel ---------------- */
.sldr-mobile {
  position: relative;
  max-height: 0;
  overflow: hidden;
  background: var(--bg-void);
  transition: max-height 0.4s ease;
  z-index: 60;
}
.sldr-mobile-open { max-height: 80vh; overflow-y: auto; }
@media (min-width: 1080px) {
  .sldr-mobile, .sldr-scrim { display: none !important; }
}





.sldr-mobile-list { list-style: none; margin: 0; padding: 6px 16px; }
.sldr-mobile-item { border-bottom: 1px solid var(--hairline); }
.sldr-mobile-row { display: flex; align-items: center; justify-content: space-between; }
.sldr-mobile-link {
  flex: 1;
  padding: 14px 4px;
  color: var(--text-hi);
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.sldr-mobile-toggle {
  background: none;
  border: none;
  color: var(--text-mid);
  padding: 10px;
  cursor: pointer;
}
.sldr-mobile-sub {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.sldr-mobile-sub-open { max-height: 400px; }
.sldr-mobile-sub ul { list-style: none; margin: 0; padding: 0 4px 12px 14px; }
.sldr-mobile-sub a {
  display: block;
  padding: 8px 0;
  color: var(--text-mid);
  text-decoration: none;
  font-size: 13.5px;
  border-left: 2px dashed var(--hairline);
  padding-left: 12px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.sldr-mobile-sub a:hover { color: var(--text-hi); border-color: var(--line-red); }

.sldr-mobile-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-top: 1px solid var(--hairline);
}
.sldr-mobile-footer .sldr-contact-link { font-size: 13px; }

.sldr-scrim {
  position: fixed;
  inset: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 55;
}

@media (prefers-reduced-motion: reduce) {
  .sldr-root * { animation: none !important; transition: none !important; }
}

.sldr-navlink:focus-visible,
.sldr-mobile-link:focus-visible,
.sldr-dropdown-link:focus-visible,
.sldr-account-btn:focus-visible,
.sldr-burger:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 2px;
  border-radius: 4px;
}
  @media (max-width: 432px) {
  .sldr-contact { display: none !important; }
}
`;
