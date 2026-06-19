import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن الدكتور" },
  { to: "/services", label: "الخدمات" },
  { to: "/gallery", label: "قبل وبعد" },
  { to: "/testimonials", label: "آراء المرضى" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/booking", label: "احجز موعد" },
  { to: "/contact", label: "تواصل معنا" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-icon">✦</span>
          <span className="logo-text">
            <span className="logo-ar">شايني دنتال</span>
            <span className="logo-en ltr">SHINY DENTAL</span>
          </span>
        </NavLink>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} onClick={() => setOpen(false)}
                end={l.to === "/"}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/booking" className="nav-cta" onClick={() => setOpen(false)}>
              احجز الآن
            </NavLink>
          </li>
        </ul>

        <button
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label="فتح القائمة"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </nav>
  );
}

export default Navbar;
