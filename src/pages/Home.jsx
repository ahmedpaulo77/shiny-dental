import { Link } from "react-router-dom";
 import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";
import {
  Trophy, Lightbulb, Heart, Wallet,
  CheckCircle, ArrowLeft, Star, PlayCircle
} from "lucide-react";
import "./Home.css";

const services = [
  { id: "whitening",    icon: "✦", title: "تبييض الأسنان",    desc: "تقنيات حديثة لابتسامة مشرقة تدوم طويلاً" },
  { id: "implants",     icon: "⬡", title: "زراعة الأسنان",    desc: "زراعة دائمة بمواد عالية الجودة وبدون ألم" },
  { id: "orthodontics", icon: "◈", title: "تقويم الأسنان",    desc: "تقويم شفاف وتقليدي لأسنان مستقيمة وجميلة" },
  { id: "veneers",      icon: "◇", title: "قشور البورسلان",   desc: "قشور رفيعة لابتسامة هوليوود لا تُنسى" },
  { id: "rootcanal",    icon: "⬤", title: "علاج العصب",       desc: "إنقاذ الأسنان المتضررة بدقة وراحة تامة" },
  { id: "pediatric",    icon: "◯", title: "أسنان الأطفال",    desc: "بيئة مريحة وآمنة لطفلك منذ أول سنة" },
];

const stats = [
  { value: 3000, suffix: "+", label: "مريض سعيد" },
  { value: 8,    suffix: "+", label: "سنوات خبرة" },
  { value: 15,   suffix: "+", label: "خدمة متخصصة" },
  { value: 98,   suffix: "%", label: "رضا المرضى" },
];

const whyCards = [
  { Icon: Trophy,    title: "خبرة ٨+ سنوات",    desc: "سنوات من الممارسة والتدريب المستمر" },
  { Icon: Lightbulb, title: "تقنيات متطورة",    desc: "أجهزة حديثة لنتائج أدق وأسرع" },
  { Icon: Heart,     title: "رعاية شخصية",      desc: "اهتمام حقيقي بكل مريض بشكل فردي" },
  { Icon: Wallet,    title: "أسعار معقولة",     desc: "جودة عالية بأسعار تناسب الجميع" },
];

// ← غيّر الـ IDs دي بـ IDs الفيديوهات الحقيقية من YouTube
const videos = [
  { id: "YOUTUBE_ID_1", title: "جولة داخل عيادة شايني دنتال" },
  { id: "YOUTUBE_ID_2", title: "قبل وبعد زراعة الأسنان" },
  { id: "YOUTUBE_ID_3", title: "تجربة مريضة — قشور البورسلان" },
];

function StatCard({ value, suffix, label }) {
  const [ref, visible] = useScrollReveal();
  const count = useCountUp(value, visible);
  return (
    <div ref={ref} className="stat-card">
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Home() {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <main className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-glow" />
        <div className="container hero-inner">
          <div ref={heroRef} className={`hero-content reveal fade-up${heroVisible ? " is-visible" : ""}`}>
            <span className="hero-eyebrow">Shiny Dental Clinic</span>
            <h1>
              ابتسامتك
              <span className="hero-accent"> صحتك</span>
              <br />وثقتك بنفسك
            </h1>
            <p>
              د. أحمد إسلام — طبيب أسنان متخصص في بنها، القليوبية.
              رعاية شاملة لأسنانك بأحدث التقنيات وأكثر بيئة مريحة.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary">
                احجز موعدك الآن
                <ArrowLeft size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline">تعرف على خدماتنا</Link>
            </div>
            <div className="hero-trust">
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <Star size={16} fill="#f59e0b" color="#f59e0b" />
              <span>+٢٠٠ تقييم ممتاز على جوجل</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hc-icon">🦷</div>
              <div>
                <div className="hc-title">عيادة شايني دنتال</div>
                <div className="hc-sub">بنها — القليوبية</div>
              </div>
            </div>
            <div className="hero-card-float top">
              <CheckCircle size={16} color="#0284c7" /> أسنان صحية ١٠٠٪
            </div>
            <div className="hero-card-float bottom">
              <Star size={16} fill="#f59e0b" color="#f59e0b" /> ٣٠٠٠+ مريض سعيد
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint"><span /></div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="services-preview">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">خدماتنا</span>
            <h2>كل ما تحتاجه لأسنان مثالية</h2>
            <p>نقدم طيفاً واسعاً من خدمات طب الأسنان الحديثة تحت سقف واحد</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="service-card reveal fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="sc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="sc-arrow">اعرف أكثر <ArrowLeft size={14} /></span>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">عرض كل الخدمات</Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="why-us">
        <div className="container why-inner">
          <div className="why-text reveal slide-right">
            <span className="eyebrow">لماذا شايني دنتال؟</span>
            <h2>تجربة علاج مختلفة من البداية للنهاية</h2>
            <p>نؤمن أن كل مريض يستحق رعاية شخصية وبيئة مريحة. لذلك بنينا عيادة تجمع بين الكفاءة الطبية والإنسانية.</p>
            <ul className="why-list">
              {[
                "تقنيات ألم منخفض في جميع الإجراءات",
                "أجهزة تشخيص رقمية حديثة",
                "خطط علاج مخصصة لكل مريض",
                "متابعة ما بعد العلاج مجانية",
                "بيئة نظيفة ومعقمة بالكامل",
              ].map((item, i) => (
                <li key={i}>
                  <CheckCircle size={18} color="#0284c7" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: "24px" }}>
              تعرف على د. أحمد إسلام
            </Link>
          </div>
          <div className="why-cards reveal slide-left">
            {whyCards.map(({ Icon, title, desc }, i) => (
              <div key={i} className="why-card">
                <div className="wc-icon"><Icon size={28} color="#0284c7" strokeWidth={1.8} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ── */}
      <section className="testimonials-preview">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">آراء مرضانا</span>
            <h2>ماذا يقول عنا مرضانا؟</h2>
          </div>
          <div className="testi-grid">
            {[
              { name: "محمد السيد",   text: "تجربة ممتازة من البداية للنهاية. الدكتور أحمد محترف جداً وشرح لي كل خطوة بالتفصيل." },
              { name: "نورا إبراهيم", text: "عملت قشور بورسلان والنتيجة خيالية. أصدقائي مش مصدقين إنها أسناني!" },
              { name: "كريم عبدالله", text: "أفضل عيادة في بنها. نظيفة ومرتبة والفريق محترم. بنصح كل حد يجي هنا." },
            ].map((t, i) => (
              <div key={i} className="testi-card reveal fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="testi-stars" style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
                  {[...Array(5)].map((_, si) => <Star key={si} size={15} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p>"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <span>{t.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/testimonials" className="btn btn-outline">كل التقييمات</Link>
          </div>
        </div>
      </section>

      {/* ── Videos ── */}
      <section style={{ padding: "80px 0", background: "#f0f9ff" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">فيديوهات العيادة</span>
            <h2>شوف العيادة بنفسك</h2>
            <p>جولة داخل العيادة وبعض حالاتنا الناجحة</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {videos.map(v => (
              <div key={v.id} style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 2px 16px rgba(2,132,199,0.1)",
                border: "1px solid #e0f2fe",
              }}>
                {v.id === "YOUTUBE_ID_1" || v.id === "YOUTUBE_ID_2" || v.id === "YOUTUBE_ID_3" ? (
                  // Placeholder لو لسه محطتش ID حقيقي
                  <div style={{
                    height: "200px",
                    background: "#e0f2fe",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}>
                    <PlayCircle size={52} color="#0284c7" strokeWidth={1.5} />
                    <span style={{ color: "#64748b", fontSize: "13px" }}>الفيديو قريباً</span>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: "block" }}
                  />
                )}
                <div style={{ padding: "14px 18px", borderTop: "1px solid #e0f2fe" }}>
                  <p style={{ fontWeight: 700, margin: 0, color: "#0c1a2e" }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>جاهز لابتسامة أجمل؟</h2>
          <p>احجز استشارتك المجانية اليوم وابدأ رحلتك نحو أسنان مثالية</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعد مجاني</Link>
            <a href="tel:01100690997" className="btn btn-outline ltr">01100690997</a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;