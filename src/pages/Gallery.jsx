import { useState } from "react";
import { ImageIcon, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const cats = ["الكل", "تبييض", "قشور", "زراعة", "تقويم", "علاج العصب"];

// ← ضع مسارات صورك هنا (public/photos/اسم-الصورة.jpg)
const photos = [
  { id: 1, src: "/photos/whitening-before.jpg", label: "قبل التبييض", cat: "تبييض" },
  { id: 2, src: "/photos/whitening-after.jpg",  label: "بعد التبييض",  cat: "تبييض" },
  { id: 3, src: "/photos/veneers-before.jpg",   label: "قبل القشور",   cat: "قشور"  },
  { id: 4, src: "/photos/veneers-after.jpg",    label: "بعد القشور",   cat: "قشور"  },
  { id: 5, src: "/photos/implant-before.jpg",   label: "قبل الزراعة",  cat: "زراعة" },
  { id: 6, src: "/photos/implant-after.jpg",    label: "بعد الزراعة",  cat: "زراعة" },
  { id: 7, src: "/photos/ortho-before.jpg",     label: "قبل التقويم",  cat: "تقويم" },
  { id: 8, src: "/photos/ortho-after.jpg",      label: "بعد التقويم",  cat: "تقويم" },
];

function PhotoCard({ p }) {
  return (
    <div style={{
      borderRadius: "14px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 2px 16px rgba(2,132,199,0.08)",
      border: "1px solid #e0f2fe",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(2,132,199,0.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";   e.currentTarget.style.boxShadow = "0 2px 16px rgba(2,132,199,0.08)"; }}
    >
      <div style={{ position: "relative", height: "230px", background: "#f0f9ff" }}>
        <img
          src={p.src}
          alt={p.label}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={e => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div style={{
          display: "none",
          height: "230px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
          background: "#f0f9ff",
        }}>
          <ImageIcon size={44} color="#0284c7" strokeWidth={1.5} />
          <span style={{ color: "#64748b", fontSize: "13px" }}>الصورة قريباً</span>
        </div>
      </div>
      <div style={{ padding: "14px 18px" }}>
        <span style={{
          fontSize: "12px",
          color: "#0284c7",
          fontWeight: 700,
          background: "#e0f2fe",
          padding: "3px 10px",
          borderRadius: "50px",
        }}>{p.cat}</span>
        <p style={{ margin: "8px 0 0", fontWeight: 700, fontSize: "15px", color: "#0c1a2e" }}>{p.label}</p>
      </div>
    </div>
  );
}

function Gallery() {
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
      <div style={{ padding: "32px 0 0", borderBottom: "1px solid #e0f2fe" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", paddingBottom: "20px" }}>
            <Filter size={18} color="#64748b" />
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "50px",
                  border: active === c ? "none" : "1.5px solid #e0f2fe",
                  background: active === c ? "#0284c7" : "#fff",
                  color: active === c ? "#fff" : "#64748b",
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >{c}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px", color: "#64748b" }}>
              <ImageIcon size={48} color="#cbd5e1" style={{ margin: "0 auto 16px" }} />
              <p>مفيش صور في هذا التصنيف حالياً</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "22px",
            }}>
              {filtered.map(p => <PhotoCard key={p.id} p={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <div style={{ background: "#f0f9ff", padding: "18px 0", borderTop: "1px solid #e0f2fe" }}>
        <div className="container">
          <p style={{ color: "#64748b", fontSize: "14px", textAlign: "center" }}>
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