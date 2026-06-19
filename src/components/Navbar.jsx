import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Stethoscope } from "lucide-react";
import "./Navbar.css";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "الخدمات" },
  { to: "/gallery", label: "معرض الأعمال" },
  { to: "/testimonials", label: "آراء المرضى" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // تفعيل تأثير السكرول
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // غلق قائمة الموبايل تلقائياً عند الانتقال لصفحة أخرى
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="logo-icon">
              {/* تم تعديل اللون هنا إلى الأبيض ليناسب الخلفية الذهبية الملكية للبرواز */}
              <Stethoscope size={20} color="#ffffff" strokeWidth={2.5} />
            </div>
            <div>
              <div className="logo-name">Shiny Dental</div>
              <div className="logo-sub">د. أحمد إسلام</div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`nav-link${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="tel:01100690997" className="nav-cta">
            <Phone size={15} />
            <span>01100690997</span>
          </a>

          {/* Hamburger */}
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="القائمة"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`mob-link${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:01100690997" className="btn btn-primary mob-cta">
            <Phone size={16} /> 01100690997
          </a>
        </div>
      )}
    </>
  );
}
