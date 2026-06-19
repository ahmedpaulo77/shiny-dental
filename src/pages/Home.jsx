import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";
import "./Home.css";

const services = [
  { id: "whitening", icon: "✦", title: "تبييض الأسنان", desc: "تقنيات حديثة لابتسامة مشرقة تدوم طويلاً" },
  { id: "implants", icon: "⬡", title: "زراعة الأسنان", desc: "زراعة دائمة بمواد عالية الجودة وبدون ألم" },
  { id: "orthodontics", icon: "◈", title: "تقويم الأسنان", desc: "تقويم شفاف وتقليدي لأسنان مستقيمة وجميلة" },
  { id: "veneers", icon: "◇", title: "قشور البورسلان", desc: "قشور رفيعة لابتسامة هوليوود لا تُنسى" },
  { id: "rootcanal", icon: "⬤", title: "علاج العصب", desc: "إنقاذ الأسنان المتضررة بدقة وراحة تامة" },
  { id: "pediatric", icon: "◯", title: "أسنان الأطفال", desc: "بيئة مريحة وآمنة لطفلك منذ أول سنة" },
];

const stats = [
  { value: 3000, suffix: "+", label: "مريض سعيد" },
  { value: 8, suffix: "+", label: "سنوات خبرة" },
  { value: 15, suffix: "+", label: "خدمة متخصصة" },
  { value: 98, suffix: "%", label: "رضا المرضى" },
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn btn-outline">تعرف على خدماتنا</Link>
            </div>
            <div className="hero-trust">
              <span className="trust-stars">★★★★★</span>
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
              <span>✓</span> أسنان صحية ١٠٠٪
            </div>
            <div className="hero-card-float bottom">
              <span>★</span> ٣٠٠٠+ مريض سعيد
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
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
                <span className="sc-arrow">اعرف أكثر ←</span>
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
              <li><span>✓</span> تقنيات ألم منخفض في جميع الإجراءات</li>
              <li><span>✓</span> أجهزة تشخيص رقمية حديثة</li>
              <li><span>✓</span> خطط علاج مخصصة لكل مريض</li>
              <li><span>✓</span> متابعة ما بعد العلاج مجانية</li>
              <li><span>✓</span> بيئة نظيفة ومعقمة بالكامل</li>
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: "24px" }}>
              تعرف على د. أحمد إسلام
            </Link>
          </div>
          <div className="why-cards reveal slide-left">
            <div className="why-card">
              <div className="wc-icon">🏆</div>
              <h4>خبرة ٨+ سنوات</h4>
              <p>سنوات من الممارسة والتدريب المستمر</p>
            </div>
            <div className="why-card">
              <div className="wc-icon">💡</div>
              <h4>تقنيات متطورة</h4>
              <p>أجهزة حديثة لنتائج أدق وأسرع</p>
            </div>
            <div className="why-card">
              <div className="wc-icon">❤️</div>
              <h4>رعاية شخصية</h4>
              <p>اهتمام حقيقي بكل مريض بشكل فردي</p>
            </div>
            <div className="why-card">
              <div className="wc-icon">💰</div>
              <h4>أسعار معقولة</h4>
              <p>جودة عالية بأسعار تناسب الجميع</p>
            </div>
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
              { name: "محمد السيد", text: "تجربة ممتازة من البداية للنهاية. الدكتور أحمد محترف جداً وشرح لي كل خطوة بالتفصيل.", stars: 5 },
              { name: "نورا إبراهيم", text: "عملت قشور بورسلان والنتيجة خيالية. أصدقائي مش مصدقين إنها أسناني!", stars: 5 },
              { name: "كريم عبدالله", text: "أفضل عيادة في بنها. نظيفة ومرتبة والفريق محترم. بنصح كل حد يجي هنا.", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="testi-card reveal fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="testi-stars">{"★".repeat(t.stars)}</div>
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
