import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Testimonials.css";

const reviews = [
  { name: "محمد السيد", service: "زراعة الأسنان", stars: 5, date: "مارس ٢٠٢٦", text: "تجربة ممتازة من البداية للنهاية. الدكتور أحمد شرح لي كل خطوة بالتفصيل وحسستني مرتاح جداً. النتيجة طبيعية تماماً وأنا سعيد جداً بالقرار." },
  { name: "نورا إبراهيم", service: "قشور البورسلان", stars: 5, date: "فبراير ٢٠٢٦", text: "عملت قشور بورسلان والنتيجة خيالية! أصدقائي مش مصدقين إنها أسناني. الدكتور أحمد فنان حقيقي في عمله والعيادة نظيفة ومرتبة جداً." },
  { name: "كريم عبدالله", service: "تقويم شفاف", stars: 5, date: "يناير ٢٠٢٦", text: "بعد سنة ونص من التقويم الشفاف، النتيجة أحسن من توقعاتي. الدكتور متابع ومهتم في كل زيارة والسعر معقول جداً مقارنة بمكان تاني." },
  { name: "سارة محمود", service: "تبييض الأسنان", stars: 5, date: "ديسمبر ٢٠٢٥", text: "جربت تبييض الليزر وكانت النتيجة مذهلة في جلسة واحدة. الإجراء مريح ومعندوش ألم. بنصح بشدة بالعيادة دي لكل حد." },
  { name: "أحمد حسين", service: "علاج العصب", stars: 5, date: "نوفمبر ٢٠٢٥", text: "كنت خايف جداً من علاج العصب بسبب تجارب سابقة مؤلمة. بس مع الدكتور أحمد، ما حسستش بأي ألم. إجراء سلس ومريح جداً." },
  { name: "منى خالد", service: "تنظيف الأسنان", stars: 5, date: "أكتوبر ٢٠٢٥", text: "عملت تنظيف وفحص روتيني وكانت التجربة ممتازة. الدكتور شرح لي حالة أسناني بالتفصيل وأعطاني نصايح مفيدة جداً للعناية المنزلية." },
  { name: "عمر عبدالرحمن", service: "قشور البورسلان", stars: 5, date: "سبتمبر ٢٠٢٥", text: "عملت ١٠ قشور بورسلان وحياتي اتغيرت! ثقتي بنفسي بقت أحسن بكتير وكل الناس بتتكلم عن ابتسامتي. شكراً د. أحمد على الفن ده." },
  { name: "ريم صالح", service: "تيجان وجسور", stars: 5, date: "أغسطس ٢٠٢٥", text: "عملت تاجين وجسر والشغل دقيق جداً. ما حسستش فرق بين الأسنان الطبيعية والتيجان. العيادة محترمة وفريق العمل ودود ومتعاون." },
  { name: "ياسمين حمدي", service: "أسنان الأطفال", stars: 5, date: "يوليو ٢٠٢٥", text: "ابني كان خايف من دكتور الأسنان بس بعد أول زيارة لشايني دنتال بقى يطلب يرجع! الدكتور بيتعامل مع الأطفال بشكل رائع ومريح." },
];

const stats = [
  { num: "٩٨٪", label: "رضا المرضى" },
  { num: "٤.٩", label: "تقييم جوجل" },
  { num: "+٢٠٠", label: "تقييم حقيقي" },
  { num: "+٣٠٠٠", label: "مريض سعيد" },
];

function ReviewCard({ r, i }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`review-card reveal fade-up${visible ? " is-visible" : ""}`} style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
      <div className="rc-top">
        <div className="rc-stars">{"★".repeat(r.stars)}</div>
        <span className="rc-service">{r.service}</span>
      </div>
      <p className="rc-text">"{r.text}"</p>
      <div className="rc-author">
        <div className="rc-avatar">{r.name[0]}</div>
        <div>
          <span className="rc-name">{r.name}</span>
          <span className="rc-date">{r.date}</span>
        </div>
        <div className="rc-google">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <main className="testimonials-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">آراء المرضى</span>
          <h1>ماذا يقول مرضانا؟</h1>
          <p>تقييمات حقيقية من مرضى حقيقيين — نفتخر بثقتهم فينا</p>
        </div>
      </div>

      {/* Stats */}
      <div className="testi-stats">
        <div className="container testi-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="ts-item">
              <span className="ts-num">{s.num}</span>
              <span className="ts-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((r, i) => <ReviewCard key={i} r={r} i={i} />)}
          </div>
        </div>
      </section>

      {/* Leave review CTA */}
      <section className="leave-review">
        <div className="container leave-review-inner reveal fade-up">
          <div className="lr-icon">⭐</div>
          <h3>شاركنا رأيك</h3>
          <p>تجربتك تساعدنا على التحسين وتساعد المرضى الجدد على اتخاذ قرار</p>
          <a
            href="https://g.page/r/shiny-dental/review"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            اكتب تقييمك على جوجل
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>انضم لعائلة شايني دنتال</h2>
          <p>آلاف المرضى وثقوا بنا — أنت التالي</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعدك</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
