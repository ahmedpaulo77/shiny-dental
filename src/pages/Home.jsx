 import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp }     from "../hooks/useCountUp";
import {
  ArrowLeft, CheckCircle, Star,
  Trophy, Cpu, Heart, BadgeDollarSign,
  Phone, PlayCircle, ImageIcon, CalendarDays
} from "lucide-react";
import "./Home.css";

const services = [
  { id:"whitening",    icon:"✦", title:"تبييض الأسنان",   desc:"تقنيات حديثة لابتسامة مشرقة في جلسة واحدة فقط" },
  { id:"implants",     icon:"⬡", title:"زراعة الأسنان",   desc:"زراعة دائمة بمواد تيتانيوم عالية الجودة، بدون ألم" },
  { id:"orthodontics", icon:"◈", title:"تقويم الأسنان",   desc:"تقويم شفاف وتقليدي لنتائج دقيقة ومثالية" },
  { id:"veneers",      icon:"◇", title:"قشور البورسلان",  desc:"قشور فاخرة للحصول على ابتسامة هوليوود في أسبوع" },
  { id:"rootcanal",    icon:"⬤", title:"علاج العصب",      desc:"إنقاذ أسنانك المتضررة بدقة عالية وراحة تامة" },
  { id:"pediatric",    icon:"◯", title:"أسنان الأطفال",   desc:"بيئة آمنة ومريحة تجعل طفلك يحب طبيب الأسنان" },
];

const stats = [
  { value:3000, suffix:"+", label:"مريض سعيد" },
  { value:8,    suffix:"+", label:"سنوات خبرة" },
  { value:15,   suffix:"+", label:"خدمة متخصصة" },
  { value:98,   suffix:"%", label:"رضا المرضى" },
];

const whyCards = [
  { Icon:Trophy,          title:"خبرة ٨+ سنوات",  desc:"تدريب متواصل وشهادات دولية معتمدة" },
  { Icon:Cpu,             title:"تقنيات متطورة",  desc:"أجهزة رقمية حديثة لنتائج أدق وأسرع" },
  { Icon:Heart,           title:"رعاية شخصية",    desc:"كل مريض يحظى باهتمام فردي حقيقي" },
  { Icon:BadgeDollarSign, title:"أسعار منافسة",   desc:"جودة عالمية بأسعار تناسب جميع الفئات" },
];

const videos = [
  { id:"YOUTUBE_ID_1", title:"جولة داخل شايني دنتال" },
  { id:"YOUTUBE_ID_2", title:"قبل وبعد — زراعة الأسنان" },
  { id:"YOUTUBE_ID_3", title:"تجربة مريضة — قشور البورسلان" },
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

function VideoCard({ v }) {
  const isPlaceholder = v.id.startsWith("YOUTUBE_ID");
  return (
    <div className="video-card">
      {isPlaceholder ? (
        <div className="video-placeholder">
          <PlayCircle size={52} color="#c9a96e" strokeWidth={1.5} />
          <span>الفيديو قريباً</span>
        </div>
      ) : (
        <iframe
          width="100%"
          height="210"
          src={`https://www.youtube.com/embed/${v.id}`}
          title={v.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display:"block" }}
        />
      )}
      <div className="video-label">
        <PlayCircle size={16} color="#c9a96e" />
        <span>{v.title}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [heroRef, heroVisible] = useScrollReveal();

  return (
    <main className="home-page">

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-glow" />
        <div className="container hero-inner">

          <div ref={heroRef} className={`hero-content reveal fade-up${heroVisible ? " is-visible" : ""}`}>
            <span className="eyebrow">Shiny Dental Clinic — بنها، القليوبية</span>
            <h1>
              فن صنع
              <br />
              <span className="hero-gold">الابتسامة المثالية</span>
            </h1>
            <p className="hero-desc">
              د. أحمد إسلام — متخصص في تجميل وزراعة الأسنان.
              <br />
              نقدم رعاية بمعايير دولية في قلب بنها، القليوبية.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary">
                <CalendarDays size={18} />
                احجز استشارة مجانية
              </Link>
              <Link to="/services" className="btn btn-outline">استكشف خدماتنا</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-stars">
                {[...Array(5)].map((_,i) => <Star key={i} size={15} fill="#c9a96e" color="#c9a96e" />)}
              </div>
              <span>+٢٠٠ تقييم ممتاز • منذ ٢٠١٥</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-badge-wrap">
              <div className="hero-img-frame">
                <div className="hero-img-inner">
                  <ImageIcon size={56} color="#c9a96e" strokeWidth={1.2} />
                  <span>صورة العيادة</span>
                </div>
              </div>
              <div className="hero-badge top">
                <CheckCircle size={16} color="#c9a96e" />
                <span>معتمد ومرخّص</span>
              </div>
              <div className="hero-badge bottom">
                <Star size={15} fill="#c9a96e" color="#c9a96e" />
                <span>٣٠٠٠+ مريض سعيد</span>
              </div>
            </div>
          </div>

        </div>
        <div className="hero-scroll">
          <span className="scroll-dot" />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="services-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">خدماتنا</span>
            <h2>كل ما تحتاجه تحت سقف واحد</h2>
            <p>طيف متكامل من خدمات طب الأسنان الحديثة بأيدي متخصصة</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="service-card reveal fade-up"
                style={{ transitionDelay:`${i * 70}ms` }}
              >
                <div className="sc-icon-wrap">
                  <div className="sc-icon">{s.icon}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sc-more">
                  اعرف أكثر <ArrowLeft size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-outline">عرض جميع الخدمات</Link>
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="why-section">
        <div className="container why-inner">

          <div className="why-text reveal slide-right">
            <span className="eyebrow">لماذا تختارنا؟</span>
            <h2>تجربة علاج لا تُنسى من البداية للنهاية</h2>
            <p>نؤمن أن كل مريض يستحق رعاية شخصية في بيئة مريحة ومعايير طبية لا تُساوم عليها.</p>
            <ul className="why-list">
              {[
                "تقنيات التخدير الحديثة — لا ألم إطلاقاً",
                "أجهزة تصوير رقمية ثلاثية الأبعاد",
                "خطط علاج مخصصة لكل حالة",
                "متابعة مجانية بعد جميع الإجراءات",
                "معايير تعقيم عالمية صارمة",
                "مواعيد مرنة تناسب جدولك",
              ].map((item, i) => (
                <li key={i}>
                  <CheckCircle size={17} color="#c9a96e" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ marginTop:"32px" }}>
              تعرف على د. أحمد إسلام
              <ArrowLeft size={17} />
            </Link>
          </div>

          <div className="why-cards reveal slide-left">
            {whyCards.map(({ Icon, title, desc }, i) => (
              <div key={i} className="why-card">
                <div className="wc-icon">
                  <Icon size={26} color="#c9a96e" strokeWidth={1.8} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="testi-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">آراء مرضانا</span>
            <h2>ماذا يقولون عن تجربتهم؟</h2>
          </div>
          <div className="testi-grid">
            {[
              { name:"محمد السيد",    city:"بنها",       text:"تجربة استثنائية. الدكتور أحمد شرح لي كل تفصيلة بصبر واحترافية عالية. النتيجة فاقت توقعاتي تماماً." },
              { name:"نورا إبراهيم",  city:"القناطر",    text:"عملت قشور بورسلان والنتيجة خيالية. أصدقائي مش مصدقين إنها أسناني الطبيعية. أنصح الجميع!" },
              { name:"كريم عبدالله",  city:"شبين الكوم", text:"أفضل عيادة في المنطقة. نظيفة ومريحة والفريق الطبي محترم جداً. هرجع دايماً وهنصح الكل." },
            ].map((t, i) => (
              <div key={i} className="testi-card reveal fade-up" style={{ transitionDelay:`${i * 100}ms` }}>
                <div className="testi-quote">"</div>
                <p>"{t.text}"</p>
                <div className="testi-stars">
                  {[...Array(5)].map((_,si) => <Star key={si} size={14} fill="#c9a96e" color="#c9a96e" />)}
                </div>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name[0]}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-city">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/testimonials" className="btn btn-outline">قراءة كل التقييمات</Link>
          </div>
        </div>
      </section>

      {/* ══ VIDEOS ══ */}
      <section className="videos-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">فيديوهات العيادة</span>
            <h2>شاهد العيادة بنفسك</h2>
            <p>جولة داخل العيادة وأبرز الحالات الناجحة</p>
          </div>
          <div className="videos-grid">
            {videos.map(v => <VideoCard key={v.id} v={v} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <div className="cta-badge">
            <Star size={14} fill="#c9a96e" color="#c9a96e" />
            <span>استشارة مجانية</span>
          </div>
          <h2>ابدأ رحلة ابتسامتك اليوم</h2>
          <p>احجز استشارتك المجانية مع د. أحمد إسلام ودعنا نصنع لك ابتسامة تستحقها</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">
              <CalendarDays size={18} />
              احجز الآن
            </Link>
            <a href="tel:01100690997" className="btn btn-outline ltr">
              <Phone size={16} />
              01100690997
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}