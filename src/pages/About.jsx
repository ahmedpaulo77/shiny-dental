import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 1. استدعاء مكتبة الترجمة فوق
import {
  GraduationCap, Award, Users, Clock,
  CheckCircle, CalendarDays, MapPin, Phone
} from "lucide-react";
import "./About.css";

// رابط صورة الطبيب
const doctorImg = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80";

export default function About() {
  const { t } = useTranslation(); // 2. تشغيل فانكشن الترجمة جوه المكون

  // مصفوفة الشهادات والمؤهلات (تأخذ قيمها المترجمة من ملف i18n.js)
  const credentials = [
    { Icon: GraduationCap, title: t("cred_title_1"), sub: t("cred_sub_1") },
    { Icon: Award,         title: t("cred_title_2"), sub: t("cred_sub_2") },
    { Icon: Award,         title: t("cred_title_3"), sub: t("cred_sub_3") },
    { Icon: Users,         title: t("cred_title_4"), sub: t("cred_sub_4") },
  ];

  // مصفوفة ميزات العيادة (تأخذ قيمها المترجمة من ملف i18n.js)
  const clinicFeatures = [
    t("feat_1"), t("feat_2"), t("feat_3"), t("feat_4"),
    t("feat_5"), t("feat_6"), t("feat_7"), t("feat_8")
  ];

  return (
    <main className="about-page">
      {/* رأس الصفحة */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">{t("nav_about")}</span>
          <h1>{t("about_title")}</h1>
          <p>{t("about_sub")}</p>
        </div>
      </div>

      {/* ── قسم البروفايل والطبيب ── */}
      <section className="doctor-section">
        <div className="container doctor-inner">

          <div className="doctor-photo-wrap">
            <div className="doctor-photo">
              <img src={doctorImg} alt="Dr Ahmed Islam" />
            </div>
            <div className="doctor-badge-row">
              <div className="doc-badge">
                <Clock size={16} color="#c9a96e" />
                <span>{t("badge_experience")}</span>
              </div>
              <div className="doc-badge">
                <Users size={16} color="#c9a96e" />
                <span>{t("badge_patients")}</span>
              </div>
            </div>
          </div>

          <div className="doctor-text">
            <span className="eyebrow">{t("about_word")}</span>
            <h2>{t("about_heading")}</h2>
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
            
            <ul className="doctor-points">
              {[
                t("doc_point_1"),
                t("doc_point_2"),
                t("doc_point_3"),
                t("doc_point_4"),
              ].map((p, i) => (
                <li key={i}>
                  <CheckCircle size={16} color="#c9a96e" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking" className="btn btn-primary" style={{ marginTop:"24px", width: "fit-content" }}>
              <CalendarDays size={17} />
              {t("about_btn")}
            </Link>
          </div>

        </div>
      </section>

      {/* ── قسم المؤهلات والشهادات ── */}
      <section className="credentials-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{t("cred_eyebrow")}</span>
            <h2>{t("cred_heading")}</h2>
          </div>
          <div className="cred-grid">
            {credentials.map(({ Icon, title, sub }, i) => (
              <div key={i} className="cred-card">
                <div className="cred-icon">
                  <Icon size={24} color="#c9a96e" strokeWidth={1.8} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── قسم تجهيزات العيادة ── */}
      <section className="clinic-section">
        <div className="container clinic-inner">
          <div className="clinic-text">
            <span className="eyebrow">{t("clinic_eyebrow")}</span>
            <h2>{t("clinic_heading")}</h2>
            <p>{t("clinic_desc")}</p>
            <ul className="clinic-list">
              {clinicFeatures.map((f, i) => (
                <li key={i}>
                  <CheckCircle size={16} color="#c9a96e" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="clinic-map">
            <div className="map-placeholder">
              <MapPin size={40} color="#c9a96e" strokeWidth={1.5} />
              <h4>{t("map_title")}</h4>
              <p>{t("map_sub")}</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: "8px" }}>
                {t("map_btn")}
              </a>
            </div>
            <div className="contact-quick">
              <a href="tel:01100690997" className="cq-item">
                <Phone size={18} color="#c9a96e" />
                <div>
                  <span className="cq-label">{t("contact_call_label")}</span>
                  <span className="cq-val ltr">01100690997</span>
                </div>
              </a>
              <a href="https://wa.me/201100690997" target="_blank" rel="noreferrer" className="cq-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.098 1.508 5.822L.057 23.578a.5.5 0 0 0 .608.607l5.913-1.547A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.595-.5-5.09-1.374l-.362-.214-3.758.984.999-3.656-.234-.38A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                <div>
                  <span className="cq-label">{t("contact_whatsapp_label")}</span>
                  <span className="cq-val ltr">+20 110 069 0997</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* بنر الحجز السفلي */}
      <section className="about-cta-banner">
        <div className="container cta-inner">
          <h2>{t("banner_heading")}</h2>
          <p>{t("banner_sub")}</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">{t("banner_btn_1")}</Link>
            <Link to="/services" className="btn btn-outline">{t("banner_btn_2")}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}