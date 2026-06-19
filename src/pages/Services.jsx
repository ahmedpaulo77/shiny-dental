import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Services.css";

const services = [
  {
    id: "whitening",
    icon: "✦",
    emoji: "🦷",
    title: "تبييض الأسنان",
    tagline: "ابتسامة مشرقة في جلسة واحدة",
    desc: "نستخدم أحدث تقنيات تبييض الأسنان الآمنة والفعّالة التي تمنحك أسناناً أكثر بياضاً وبريقاً دون التأثير على مينا أسنانك.",
    features: ["تبييض ليزر متقدم", "تبييض منزلي تحت الإشراف", "نتائج تدوم ٢-٣ سنوات", "آمن تماماً على المينا"],
    duration: "٦٠-٩٠ دقيقة",
    sessions: "جلسة واحدة",
    color: "#2fae6b",
  },
  {
    id: "implants",
    icon: "⬡",
    emoji: "🔩",
    title: "زراعة الأسنان",
    tagline: "بديل دائم يشبه أسنانك الطبيعية",
    desc: "زراعة الأسنان هي الحل الأمثل للأسنان المفقودة. نستخدم غرسات تيتانيوم عالية الجودة تندمج مع عظم الفك لتعطيك أسنان دائمة وطبيعية المظهر.",
    features: ["غرسات تيتانيوم معتمدة", "نسبة نجاح ٩٨٪", "تخدير موضعي كامل", "ضمان لمدة ٥ سنوات"],
    duration: "٩٠-١٢٠ دقيقة",
    sessions: "٢-٣ جلسات",
    color: "#4a9eff",
  },
  {
    id: "orthodontics",
    icon: "◈",
    emoji: "😁",
    title: "تقويم الأسنان",
    tagline: "أسنان مستقيمة وابتسامة مثالية",
    desc: "نقدم خيارات متعددة للتقويم تشمل التقويم المعدني التقليدي والتقويم الشفاف الحديث، مع خطة علاجية مخصصة لكل حالة.",
    features: ["تقويم شفاف Invisalign", "تقويم معدني متطور", "تقويم خلفي غير مرئي", "متابعة شهرية دقيقة"],
    duration: "٤٥-٦٠ دقيقة",
    sessions: "١٢-٢٤ شهر",
    color: "#9b59b6",
  },
  {
    id: "veneers",
    icon: "◇",
    emoji: "💎",
    title: "قشور البورسلان",
    tagline: "ابتسامة هوليوود في أيام",
    desc: "قشور البورسلان الرفيعة هي الطريقة الأسرع والأجمل لتحويل ابتسامتك. نصمم القشور لتتناسب مع ملامح وجهك بشكل طبيعي تماماً.",
    features: ["تصميم رقمي للابتسامة", "قشور رفيعة فائقة", "ألوان طبيعية تماماً", "تدوم ١٠-١٥ سنة"],
    duration: "٩٠-١٢٠ دقيقة",
    sessions: "٢-٣ جلسات",
    color: "#e67e22",
  },
  {
    id: "rootcanal",
    icon: "⬤",
    emoji: "🛡️",
    title: "علاج قناة العصب",
    tagline: "إنقاذ أسنانك من الألم والفقدان",
    desc: "علاج العصب الحديث أصبح غير مؤلم تقريباً. نستخدم تقنيات الروتاري والميكروسكوب لضمان نظافة شاملة وتجنب تكرار العدوى.",
    features: ["تخدير فعّال تماماً", "أجهزة روتاري حديثة", "إشعاع رقمي دقيق", "تاج تغطية بعد العلاج"],
    duration: "٦٠-٩٠ دقيقة",
    sessions: "١-٣ جلسات",
    color: "#e74c3c",
  },
  {
    id: "pediatric",
    icon: "◯",
    emoji: "🌟",
    title: "أسنان الأطفال",
    tagline: "بيئة آمنة ومحببة لطفلك",
    desc: "نخصص بيئة ودية وآمنة للأطفال مع فريق مدرب على التعامل مع صغار السن. نركز على الوقاية ومنع تسوس الأطفال منذ الصغر.",
    features: ["بيئة ودية للأطفال", "تخدير آمن للصغار", "علاج التسوس المبكر", "توعية الأهل بالنظافة"],
    duration: "٣٠-٦٠ دقيقة",
    sessions: "حسب الحالة",
    color: "#f39c12",
  },
  {
    id: "cleaning",
    icon: "✿",
    emoji: "✨",
    title: "تنظيف الأسنان",
    tagline: "أسنان نظيفة وصحة لثة مثالية",
    desc: "التنظيف الدوري ضروري للحفاظ على صحة أسنانك ولثتك. نزيل الجير والبكتيريا بأدوات متطورة مع تلميع كامل للأسنان.",
    features: ["إزالة الجير بالموجات الصوتية", "تلميع الأسنان", "فحص اللثة", "نصائح عناية منزلية"],
    duration: "٤٥-٦٠ دقيقة",
    sessions: "كل ٦ أشهر",
    color: "#1abc9c",
  },
  {
    id: "crowns",
    icon: "♛",
    emoji: "👑",
    title: "التيجان والجسور",
    tagline: "ترميم وجمال في آنٍ واحد",
    desc: "التيجان والجسور تُعيد للأسنان التالفة شكلها ووظيفتها الكاملة. نستخدم خامات بورسلان عالية الجودة للحصول على مظهر طبيعي جميل.",
    features: ["تيجان زركون عالية الجودة", "جسور ثابتة ومتحركة", "تطابق تام مع لون أسنانك", "نسب جودة عالية"],
    duration: "٦٠-٩٠ دقيقة",
    sessions: "٢-٣ جلسات",
    color: "#8e44ad",
  },
];

function ServiceCard({ s, index }) {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      id={s.id}
      ref={ref}
      className={`service-detail-card reveal fade-up${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="sdc-header">
        <div className="sdc-icon" style={{ background: `${s.color}18`, borderColor: `${s.color}40` }}>
          <span style={{ color: s.color }}>{s.icon}</span>
        </div>
        <div className="sdc-title-wrap">
          <span className="sdc-emoji">{s.emoji}</span>
          <div>
            <h2>{s.title}</h2>
            <p className="sdc-tagline">{s.tagline}</p>
          </div>
        </div>
      </div>

      <div className="sdc-body">
        <div className="sdc-desc">
          <p>{s.desc}</p>
          <div className="sdc-meta">
            <div className="sdc-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>المدة: {s.duration}</span>
            </div>
            <div className="sdc-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
              <span>الجلسات: {s.sessions}</span>
            </div>
          </div>
        </div>
        <ul className="sdc-features">
          {s.features.map((f, i) => (
            <li key={i}>
              <span className="sdc-check" style={{ background: `${s.color}20`, color: s.color }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="sdc-footer">
        <Link to="/booking" className="btn btn-primary">احجز هذه الخدمة</Link>
      </div>
    </section>
  );
}

function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <main className="services-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">خدماتنا</span>
          <h1>كل ما تحتاجه لأسنان مثالية</h1>
          <p>طيف واسع من خدمات طب الأسنان الحديثة بأيدي متخصصة وبأعلى معايير الجودة</p>
        </div>
      </div>

      {/* Quick nav */}
      <div className="services-quick-nav">
        <div className="container">
          <div className="sqn-scroll">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="sqn-btn">
                {s.emoji} {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="services-list">
        <div className="container services-col">
          {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>مش عارف إيه الخدمة المناسبة؟</h2>
          <p>تعال استشارة مجانية ونحدد معاك أفضل خطة علاجية</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز استشارة مجانية</Link>
            <Link to="/contact" className="btn btn-outline">تحدث معنا أولاً</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
