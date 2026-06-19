import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Gallery.css";

const categories = ["الكل", "تبييض", "زراعة", "تقويم", "قشور", "علاج العصب"];

const cases = [
  { id: 1, cat: "تبييض", label: "قبل وبعد التبييض", detail: "تبييض ليزر — نتيجة فورية في ٦٠ دقيقة" },
  { id: 2, cat: "قشور", label: "قشور بورسلان", detail: "٨ قشور بورسلان — ابتسامة هوليوود" },
  { id: 3, cat: "تقويم", label: "تقويم شفاف", detail: "١٨ شهر تقويم شفاف — نتيجة مذهلة" },
  { id: 4, cat: "زراعة", label: "زراعة الأسنان", detail: "٣ غرسات تيتانيوم — طبيعي تماماً" },
  { id: 5, cat: "تبييض", label: "تبييض داخلي", detail: "تبييض سن ميت — إعادة اللون الطبيعي" },
  { id: 6, cat: "قشور", label: "تصميم الابتسامة", detail: "١٢ قشرة + تبييض — تحول كامل" },
  { id: 7, cat: "علاج العصب", label: "علاج + تاج", detail: "علاج عصب + تاج زركون عالي الجودة" },
  { id: 8, cat: "تقويم", label: "تقويم معدني", detail: "٢٤ شهر — إطباق مثالي" },
  { id: 9, cat: "زراعة", label: "جسر زراعي", detail: "غرستان + جسر — إعادة الوظيفة الكاملة" },
];

const colors = {
  "تبييض": "#2fae6b",
  "قشور": "#e67e22",
  "تقويم": "#9b59b6",
  "زراعة": "#4a9eff",
  "علاج العصب": "#e74c3c",
};

function CaseCard({ c }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`gallery-card reveal fade-up${visible ? " is-visible" : ""}`}>
      <div className="gc-visual">
        <div className="gc-before">
          <span className="gc-badge">قبل</span>
          <div className="gc-placeholder" style={{ background: `${colors[c.cat]}15` }}>
            <span>{c.cat[0]}</span>
          </div>
        </div>
        <div className="gc-divider">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div className="gc-after">
          <span className="gc-badge after">بعد</span>
          <div className="gc-placeholder after-ph" style={{ background: `${colors[c.cat]}30`, borderColor: colors[c.cat] }}>
            <span style={{ color: colors[c.cat] }}>✦</span>
          </div>
        </div>
      </div>
      <div className="gc-info">
        <span className="gc-cat" style={{ color: colors[c.cat], borderColor: `${colors[c.cat]}40`, background: `${colors[c.cat]}12` }}>
          {c.cat}
        </span>
        <h3>{c.label}</h3>
        <p>{c.detail}</p>
      </div>
    </div>
  );
}

function Gallery() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? cases : cases.filter((c) => c.cat === active);

  return (
    <main className="gallery-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">معرض الأعمال</span>
          <h1>قبل وبعد</h1>
          <p>نتائج حقيقية لمرضانا — كل صورة قصة نجاح</p>
        </div>
      </div>

      {/* Filter */}
      <div className="gallery-filter">
        <div className="container">
          <div className="gf-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`gf-btn${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filtered.map((c) => <CaseCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>

      {/* Note */}
      <div className="gallery-note">
        <div className="container">
          <p>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            جميع الصور لمرضى حقيقيين تم نشرها بموافقتهم. النتائج تختلف من حالة لأخرى.
          </p>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>أنت الحالة القادمة</h2>
          <p>احجز موعدك اليوم وابدأ رحلة تحول ابتسامتك</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعدك الآن</Link>
            <Link to="/services" className="btn btn-outline">اعرف المزيد عن خدماتنا</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
