import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">✦</span>
              <span>
                <span className="footer-logo-ar">شايني دنتال</span>
                <span className="footer-logo-en ltr">SHINY DENTAL</span>
              </span>
            </div>
            <p>عيادة د. أحمد إسلام لطب الأسنان — بنها، القليوبية. رعاية شاملة لأسنانك بثقة واحترافية عالية.</p>
            <div className="footer-social">
              <a href="https://web.facebook.com/D.AhmedEslam/?_rdc=1&_rdr#" target="_blank" rel="noreferrer" aria-label="فيسبوك">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="إنستجرام">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={`https://wa.me/201100690997`} target="_blank" rel="noreferrer" aria-label="واتساب">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4C7.1 4 3.1 8 3.1 12.95c0 1.6.42 3.15 1.2 4.5L3 21l3.65-1.27a9 9 0 0 0 4.4 1.12h.04c4.95 0 8.95-4 8.95-8.95a8.86 8.86 0 0 0-2.44-5.58z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>روابط سريعة</h4>
            <ul>
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">عن الدكتور</Link></li>
              <li><Link to="/services">الخدمات</Link></li>
              <li><Link to="/gallery">قبل وبعد</Link></li>
              <li><Link to="/testimonials">آراء المرضى</Link></li>
              <li><Link to="/faq">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>خدماتنا</h4>
            <ul>
              <li><Link to="/services#whitening">تبييض الأسنان</Link></li>
              <li><Link to="/services#implants">زراعة الأسنان</Link></li>
              <li><Link to="/services#orthodontics">تقويم الأسنان</Link></li>
              <li><Link to="/services#veneers">قشور الأسنان</Link></li>
              <li><Link to="/services#rootcanal">علاج العصب</Link></li>
              <li><Link to="/services#pediatric">طب أسنان الأطفال</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>تواصل معنا</h4>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                بنها، القليوبية، مصر
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="ltr">01100690997</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                السبت – الخميس: ١١ص – ١١م
              </li>
            </ul>
            <Link to="/booking" className="footer-book-btn">احجز موعد الآن</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Shiny Dental Clinic — د. أحمد إسلام. كل الحقوق محفوظة.</span>
          <span className="footer-made">صُنع بـ ❤️ في مصر</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
