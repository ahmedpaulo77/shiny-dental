import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";
import "./About.css";

const stats = [
  { value: 3000, suffix: "+", label: "مريض سعيد" },
  { value: 8, suffix: "+", label: "سنوات خبرة" },
  { value: 15, suffix: "+", label: "خدمة متخصصة" },
  { value: 98, suffix: "%", label: "رضا المرضى" },
];

const credentials = [
  { year: "2015", title: "بكالوريوس طب الفم والأسنان", place: "جامعة بنها" },
  { year: "2017", title: "ماجستير في تجميل الأسنان", place: "جامعة القاهرة" },
  { year: "2019", title: "زمالة زراعة الأسنان", place: "المعهد الأوروبي للزراعة" },
  { year: "2021", title: "افتتاح عيادة شايني دنتال", place: "بنها، القليوبية" },
];

const values = [
  { icon: "🎯", title: "الدقة", desc: "نستخدم أحدث الأجهزة لضمان نتائج دقيقة في كل إجراء" },
  { icon: "❤️", title: "الرعاية", desc: "نتعامل مع كل مريض كأفراد عائلتنا باحترام وإنسانية" },
  { icon: "💡", title: "الابتكار", desc: "نواكب أحدث تقنيات طب الأسنان باستمرار" },
  { icon: "🔒", title: "الأمان", desc: "معايير تعقيم صارمة وبروتوكولات أمان على أعلى مستوى" },
];

function StatCard({ value, suffix, label }) {
  const [ref, visible] = useScrollReveal();
  const count = useCountUp(value, visible);
  return (
    <div ref={ref} className="about-stat">
      <span className="as-num">{count}{suffix}</span>
      <span className="as-label">{label}</span>
    </div>
  );
}

function About() {
  return (
    <main className="about-page">
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">عن العيادة</span>
          <h1>د. أحمد إسلام</h1>
          <p>طبيب أسنان متخصص في التجميل والزراعة — بنها، القليوبية</p>
        </div>
      </div>

      {/* Doctor Profile */}
      <section className="doctor-section">
        <div className="container doctor-grid">
          <div className="doctor-photo-wrap reveal slide-right">
            <div className="doctor-photo-placeholder">
              <span>د.</span>
              <p>أحمد إسلام</p>
            </div>
            <div className="doctor-badge">
              <span>✦</span> طبيب أسنان معتمد
            </div>
          </div>

          <div className="doctor-bio reveal slide-left">
            <span className="eyebrow">من نحن</span>
            <h2>قصة العيادة</h2>
            <p>
              د. أحمد إسلام طبيب أسنان متميز بخبرة تجاوزت ٨ سنوات في مجال طب وتجميل الأسنان.
              تخرج من كلية طب الأسنان جامعة بنها وأكمل تدريبه المتخصص في مصر وأوروبا.
            </p>
            <p>
              أسّس عيادة شايني دنتال عام ٢٠٢١ بهدف تقديم رعاية أسنان احترافية لمجتمع بنها والقليوبية،
              مع التركيز على راحة المريض وجودة النتائج على المدى الطويل.
            </p>
            <p>
              يؤمن الدكتور أحمد أن الابتسامة الجميلة هي مفتاح الثقة بالنفس، لذلك يحرص على
              تقديم نتائج طبيعية وجمالية في كل حالة يعالجها.
            </p>

            <div className="doc-tags">
              <span>تجميل الأسنان</span>
              <span>زراعة الأسنان</span>
              <span>التقويم</span>
              <span>علاج الأعصاب</span>
            </div>

            <div className="about-actions">
              <Link to="/booking" className="btn btn-primary">احجز استشارة مجانية</Link>
              <a href="tel:01100690997" className="btn btn-outline ltr">01100690997</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="container about-stats-grid">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">المسيرة المهنية</span>
            <h2>رحلة التميز</h2>
          </div>
          <div className="timeline">
            {credentials.map((c, i) => (
              <div key={i} className="timeline-item reveal fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="tl-year">{c.year}</div>
                <div className="tl-line">
                  <div className="tl-dot" />
                </div>
                <div className="tl-content">
                  <h4>{c.title}</h4>
                  <span>{c.place}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">قيمنا</span>
            <h2>ما الذي يميزنا؟</h2>
            <p>نؤمن أن الرعاية الطبية الحقيقية تبدأ بالقيم الإنسانية قبل الأدوات والتقنيات</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card reveal fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="vc-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>تعرف علينا أكثر</h2>
          <p>زيارة العيادة هي أفضل طريقة للتعرف على فريقنا وأسلوب عملنا</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعدك</Link>
            <Link to="/contact" className="btn btn-outline">تواصل معنا</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
