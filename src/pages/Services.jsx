import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown, CheckCircle, CalendarDays,
  Sparkles, Zap, Star, Shield, Smile, HeartPulse
} from "lucide-react";
import "./Services.css";

const services = [
  {
    id: "whitening",
    Icon: Sparkles,
    title: "تبييض الأسنان",
    subtitle: "ابتسامة مشرقة في جلسة واحدة",
    desc: "نستخدم أحدث تقنيات التبييض بالليزر والجل المتطور لإزالة التصبغات والاصفرار، والحصول على أسنان أكثر بياضاً بشكل ملحوظ دون ألم أو حساسية.",
    features: [
      "تبييض بالليزر في جلسة واحدة",
      "تبييض بالجل المنزلي مع صواني مخصصة",
      "آمن تماماً على مينا الأسنان",
      "نتائج تدوم من ١ إلى ٣ سنوات",
      "مناسب لجميع أنواع الأسنان",
    ],
  },
  {
    id: "implants",
    Icon: Shield,
    title: "زراعة الأسنان",
    subtitle: "الحل الدائم لفقدان الأسنان",
    desc: "زراعة أسنان تيتانيوم عالية الجودة تندمج مع عظام الفك لتوفير دعامة قوية ودائمة تُحاكي الأسنان الطبيعية في الوظيفة والمظهر.",
    features: [
      "زراعة فورية أو تقليدية حسب الحالة",
      "مواد تيتانيوم معتمدة دولياً",
      "ضمان على الزراعة",
      "متابعة ما بعد الزراعة مجاناً",
      "إمكانية زراعة أسنان متعددة في نفس الجلسة",
    ],
  },
  {
    id: "orthodontics",
    Icon: Smile,
    title: "تقويم الأسنان",
    subtitle: "أسنان مستقيمة وابتسامة جميلة",
    desc: "نقدم خيارات متعددة للتقويم تناسب كل عمر وكل حالة، سواء كنت تفضل التقويم التقليدي أو الشفاف الحديث.",
    features: [
      "تقويم شفاف (Invisalign) غير مرئي",
      "تقويم معدني وسيراميك تقليدي",
      "تقويم لساني خلف الأسنان",
      "خطة علاجية رقمية قبل البدء",
      "مرونة في مواعيد المتابعة",
    ],
  },
  {
    id: "veneers",
    Icon: Star,
    title: "قشور البورسلان",
    subtitle: "ابتسامة هوليوود في أسبوع واحد",
    desc: "قشور بورسلان رفيعة للغاية تُلصق على سطح الأسنان لتغيير لونها وشكلها وحجمها في زيارتين فقط، مع نتائج طبيعية وجمالية استثنائية.",
    features: [
      "قشور فاخرة بسُمك 0.3 ملم فقط",
      "مقاومة للتصبغ والتغير اللوني",
      "تدوم من ١٠ إلى ١٥ عاماً",
      "تصميم رقمي للابتسامة قبل التنفيذ",
      "حالات الطوارئ مغطاة بالضمان",
    ],
  },
  {
    id: "rootcanal",
    Icon: HeartPulse,
    title: "علاج العصب",
    subtitle: "إنقاذ أسنانك بدون ألم",
    desc: "بفضل التخدير الحديث والتقنيات الدقيقة، أصبح علاج العصب إجراءً مريحاً تماماً يُنقذ أسنانك من الفقدان ويُريحك من الألم الشديد.",
    features: [
      "تخدير كامل بدون أي ألم",
      "ميكروسكوب دقيق للرؤية الكاملة",
      "علاج في جلسة أو جلستين",
      "تاج بورسلان بعد العلاج مجاناً",
      "ضمان ٢ سنة على العلاج",
    ],
  },
  {
    id: "pediatric",
    Icon: Zap,
    title: "أسنان الأطفال",
    subtitle: "بداية صحية لابتسامة طفلك",
    desc: "بيئة ودية ومريحة مصممة خصيصاً للأطفال، حيث نُحوّل زيارة طبيب الأسنان إلى تجربة ممتعة تُرسّخ عادات صحية لمدى الحياة.",
    features: [
      "فحص أسنان الأطفال منذ السنة الأولى",
      "تلوين وحشوات مُلوّنة للأطفال",
      "طواقم متدربة على التعامل مع الأطفال",
      "أجهزة صغيرة الحجم مخصصة للأطفال",
      "برامج تثقيفية لنظافة الفم",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  return (
    <main className="services-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">خدماتنا</span>
          <h1>خدمات طب الأسنان المتكاملة</h1>
          <p>كل ما تحتاجه لأسنان صحية وابتسامة جميلة تحت سقف واحد</p>
        </div>
      </div>

      <section className="srv-list">
        <div className="container">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`srv-item${open === s.id ? " open" : ""}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <button className="srv-header" onClick={() => setOpen(open === s.id ? null : s.id)}>
                <div className="srv-header-left">
                  <div className="srv-icon-wrap">
                    <s.Icon size={22} color="#c9a96e" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p className="srv-subtitle">{s.subtitle}</p>
                  </div>
                </div>
                <ChevronDown size={20} className="srv-chevron" />
              </button>

              {open === s.id && (
                <div className="srv-body">
                  <p className="srv-desc">{s.desc}</p>
                  <div className="srv-features">
                    <h4>ما يشمله العلاج:</h4>
                    <ul>
                      {s.features.map((f, fi) => (
                        <li key={fi}>
                          <CheckCircle size={16} color="#c9a96e" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/booking" className="btn btn-primary srv-cta">
                    <CalendarDays size={16} />
                    احجز موعد لهذه الخدمة
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>مش عارف تختار؟ استشارة مجانية</h2>
          <p>د. أحمد إسلام هيساعدك تحدد الخطة المثالية لأسنانك بدون أي التزام</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز الآن</Link>
            <a href="tel:01100690997" className="btn btn-outline ltr">01100690997</a>
          </div>
        </div>
      </section>
    </main>
  );
}