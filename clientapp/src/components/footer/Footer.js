import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLock,
  FaArrowUp,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { locationPages, otherLinks } from "../../assets/data/quicklinks";
import logo from "../../assets/images/White-Logo-Fixed-1024x174.png";

const socialLinks = [
  { href: "https://www.facebook.com/smartlearnerdrivingschool", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com/smartlearnerdrivingschool", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.snapchat.com/add/smartlearner", label: "Snapchat", Icon: FaSnapchatGhost },
  { href: "https://twitter.com/smartlearner", label: "X (Twitter)", Icon: FaXTwitter },
  { href: "https://www.youtube.com/@SmartLearnerDrivingSchool", label: "YouTube", Icon: FaYoutube },
];

const hours = [
  { days: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
  { days: "Sat – Sun", time: "10:00 AM – 4:00 PM" },
];

/**
 * Fades + slides a section in the first time it scrolls into view.
 * Used to give the footer one orchestrated reveal instead of
 * animating every element separately.
 */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function RevealColumn({ delay = 0, className = "", children }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function FooterNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group relative inline-block text-sm text-[#93AC9F] transition-colors duration-200 hover:text-[#EAF3EC] focus-visible:text-[#EAF3EC] focus-visible:outline-none"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#2FBE73] transition-all duration-300 ease-out group-hover:w-full motion-reduce:transition-none" />
    </Link>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071912] text-[#93AC9F] font-sans" >
      {/* Top band */}
      <div className="border-b border-[#1B3A28] bg-gradient-to-b from-[#0D2418] to-[#071912]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Brand */}
            <RevealColumn delay={0} className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5675B]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D]" />
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2FBE73] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2FBE73]" />
                  </span>
                </span>
                <img src={logo} alt="SmartLearner Driving School" className="h-8 w-auto" />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-relaxed">
                Founded in 2004, SmartLearner is the leading independent
                driving school in the West Midlands. Our in-car iPads send
                lesson summaries and progress updates straight to your phone
                after every lesson.
              </p>

              <ul style={{paddingLeft:"0px" }}  className="mt-6 flex items-center gap-3" aria-label="Follow SmartLearner on social media">
                {socialLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a style={{textDecoration:"none"}} 
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B3A28] text-[#93AC9F] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#2FBE73] hover:bg-[#2FBE73] hover:text-[#071912] focus-visible:-translate-y-1 focus-visible:bg-[#2FBE73] focus-visible:text-[#071912] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FBE73] focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:transform-none"
                    >
                      <Icon className="text-sm" />
                    </a>
                  </li>
                ))}
              </ul>
            </RevealColumn>

            {/* Quick Links */}
            <RevealColumn delay={100} className="lg:col-span-2">
              <nav aria-label="Quick links">
                <h3 className="mb-4 text-sm font-semibold text-[#EAF3EC]">Quick Links</h3>
                <ul style={{paddingLeft:"0px" }} className="space-y-3">
                  {otherLinks.map((item, index) => (
                    <li key={index}>
                      <FooterNavLink style={{textDecoration:"none"}} to={item.path}>{item.display}</FooterNavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </RevealColumn>

            {/* Locations */}
            <RevealColumn delay={200} className="lg:col-span-3">
              <nav aria-label="Locations">
                <h3 className="mb-4 text-sm font-semibold text-[#EAF3EC]">Locations</h3>
                <ul style={{paddingLeft:"0px" }} className="space-y-3">
                  {locationPages.map((item, index) => (
                    <li key={index}>
                      <FooterNavLink style={{textDecoration:"none"}} to={item.path}>{item.display}</FooterNavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </RevealColumn>

            {/* Hours + Contact */}
            <RevealColumn delay={300} className="lg:col-span-3">
              <h3 className="mb-4 text-sm font-semibold text-[#EAF3EC]">Opening Hours</h3>
              <table className="mb-6 w-full text-sm">
                <tbody className="divide-y divide-[#1B3A28]/60">
                  {hours.map((row) => (
                    <tr key={row.days}>
                      <td className="py-1.5 pr-2">{row.days}</td>
                      <td className="py-1.5 text-right text-[#EAF3EC]/90">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3 className="mb-4 text-sm font-semibold text-[#EAF3EC]">Get in Touch</h3>
              <address className="space-y-3 text-sm not-italic">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 text-[#2FBE73]/80" aria-hidden="true" />
                  <span>West Midlands, United Kingdom</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#2FBE73]/80" aria-hidden="true" />
                  <a style={{textDecoration:"none", color:'white'}}  href="tel:+4402475092784" className="transition-colors hover:text-[#EAF3EC]">
                    02475 092 784
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-[#2FBE73]/80" aria-hidden="true" />
                  <a style={{textDecoration:"none",color:'white'}}  href="mailto:admin@smartlearner.com" className="transition-colors hover:text-[#EAF3EC]">
                    admin@smartlearner.com
                  </a>
                </p>
              </address>
            </RevealColumn>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#05130D]">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="order-3 text-center text-xs text-[#5C7669] md:order-1 md:text-left">
              © {year} SmartLearner · Managed by{" "}
              <a style={{textDecoration:"none"}}  href="https://smartlearner.com" className="text-[#93AC9F] transition-colors hover:text-[#EAF3EC]">
                smartlearner.com
              </a>
            </p>

            <ul style={{paddingLeft:"0px" }} className="order-1 flex items-center gap-4 text-lg text-[#5C7669] md:order-2" aria-label="Accepted payment methods">
              <li className="transition-colors hover:text-[#EAF3EC]">
                <FaCcVisa aria-label="Visa" />
              </li>
              <li className="transition-colors hover:text-[#EAF3EC]">
                <FaCcMastercard aria-label="Mastercard" />
              </li>
              <li className="transition-colors hover:text-[#EAF3EC]">
                <FaCcAmex aria-label="American Express" />
              </li>
              <li className="transition-colors hover:text-[#EAF3EC]">
                <FaCcDiscover aria-label="Discover" />
              </li>
              <li className="flex items-center gap-1.5 rounded-full border border-[#1B3A28] px-2.5 py-1 text-xs">
                <FaLock className="text-[11px]" aria-hidden="true" /> SSL Secure
              </li>
            </ul>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group order-2 flex items-center gap-2 rounded-full border border-[#1B3A28] bg-[#0D2418] py-2 pl-4 pr-3 text-xs font-medium text-[#EAF3EC] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(47,190,115,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FBE73] focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:transform-none md:order-3"
            >
              Back to top
              <FaArrowUp className="text-[11px] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;