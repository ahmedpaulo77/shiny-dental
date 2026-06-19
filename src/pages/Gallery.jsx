import { useState } from "react";
import { Filter, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const cats = ["الكل", "تبييض", "قشور", "زراعة", "تقويم", "علاج العصب"];

// ← ضع مسارات صورك الحقيقية في public/photos/
const photos = [
  { id:1,  src:"/photos/whitening-before.jpg", label:"قبل التبييض",  cat:"تبييض" },
  { id:2,  src:"/photos/whitening-after.jpg",  label:"بعد التبييض",  cat:"تبييض" },
  { id:3,  src:"/photos/veneers-before.jpg",   label:"قبل القشور",   cat:"قشور"  },
  { id:4,  src:"/photos/veneers-after.jpg",    label:"بعد القشور",   cat:"قشور"  },
  { id:5,  src:"/photos/implant-before.jpg",   label:"قبل الزراعة",  cat:"زراعة" },
  { id:6,  src:"/photos/implant-after.jpg",    label:"بعد الزراعة",  cat:"زراعة" },
  { id:7,  src:"/photos/ortho-before.jpg",     label:"قبل التقويم",  cat:"تقويم" },
  { id:8,  src:"/photos/ortho-after.jpg",      label:"بعد التقويم",  cat:"تقويم" },
];

function PhotoCard({ p }) {
  return (
    <div className="photo-card">
      <div className="photo-frame">
        <img
          src={p.src}
          alt={p.label}
          className="photo-img"
          onError={e => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="photo-placeholder" style={{ display:"none" }}>
          <ImageIcon size={40} color="#c9a96e" strokeWidth={1.3} />
          <span>الصورة قريباً</span>
        </div>
      </div>
      <div className="photo-info">
        <span className="photo-cat">{p.cat}</span>
        <span className="photo-label">{p.label}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? photos : photos.filter(p => p.cat === active);

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
      <div className="gallery-filter-bar">
        <div className="container">
          <div className="filter-row">
            <Filter size={16} color="#c9a96e" />
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`filter-btn${active === c ? " active" : ""}`}
              >{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="gallery-empty">
              <ImageIcon size={48} color="#1c2540" />
              <p>لا توجد صور في هذا التصنيف حالياً</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filtered.map(p => <PhotoCard key={p.id} p={p} />)}
            </div>
          )}
          <p className="gallery-note">
            جميع الصور لمرضى حقيقيين تم نشرها بموافقتهم الكاملة. النتائج تختلف من حالة لأخرى.
          </p>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>أنت الحالة القادمة</h2>
          <p>احجز موعدك اليوم وابدأ رحلة تحول ابتسامتك</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعدك الآن</Link>
            <Link to="/services" className="btn btn-outline">استكشف خدماتنا</Link>
          </div>
        </div>
      </section>
    </main>
  );
}