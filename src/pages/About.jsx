import { Link } from "react-router-dom";
import {
  GraduationCap, Award, Users, Clock,
  CheckCircle, CalendarDays, MapPin, Phone
} from "lucide-react";
import "./About.css";

const credentials = [
  { Icon: GraduationCap, title:"بكالوريوس طب وجراحة الفم والأسنان", sub:"جامعة القاهرة" },
  { Icon: Award,         title:"دبلومة تجميل الأسنان والزراعة",       sub:"معهد متخصص معتمد" },
  { Icon: Award,         title:"عضو الجمعية المصرية لطب الأسنان",      sub:"نقابة أطباء الأسنان" },
  { Icon: Users,         title:"حضور مؤتمرات دولية سنوية",             sub:"أوروبا وأمريكا والشرق الأوسط" },
];

const clinicFeatures = [
  "أجهزة تصوير رقمية ثلاثية الأبعاد (CBCT)",
  "وحدة معالجة مركزية متكاملة",
  "أجهزة ليزر متطورة للعلاج والتبييض",
  "نظام إدارة العيادة الرقمي",
  "معايير تعقيم دولية (WHO)",
  "غرفة انتظار مريحة ومكيّفة",
  "موقف سيارات خاص",
  "وصول ذوي الهمم",
];

export default function About() {
  return (
    <main className="about-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">من نحن</span>
          <h1>د. أحمد إسلام</h1>
          <p>متخصص في تجميل وزراعة الأسنان • بنها، القليوبية</p>
        </div>
      </div>

      {/* ── Doctor Profile ── */}
      <section className="doctor-section">
        <div className="container doctor-inner">

          <div className="doctor-photo-wrap reveal slide-right">
            <div className="doctor-photo">
              <div className="photo-placeholder">
                <Users size={60} color="#c9a96e" strokeWidth={1.2} />
                <span>صورة د. أحمد إسلام</span>
              </div>
            </div>
            <div className="doctor-badge-row">
              <div className="doc-badge">
                <Clock size={15} color="#c9a96e" />
                <span>٨+ سنوات خبرة</span>
              </div>
              <div className="doc-badge">
                <Users size={15} color="#c9a96e" />
                <span>٣٠٠٠+ مريض</span>
              </div>
            </div>
          </div>

          <div className="doctor-text reveal slide-left">
            <span className="eyebrow">كلمة الدكتور</span>
            <h2>رعاية أسنانك — رسالتي</h2>
            <p>
              منذ أكثر من ٨ سنوات وأنا أؤمن بأن الابتسامة الجميلة ليست رفاهية، بل حق لكل إنسان.
              لذلك التزمت بتقديم رعاية طب أسنان بمعايير دولية لأهلنا في بنها والقليوبية.
            </p>
            <p>
              في شايني دنتال، نُعامل كل مريض كأنه من عائلتنا. نشرح كل خطوة، نسمع كل مخاوفك،
              ونضع خطة علاجية مخصصة لك أنت — لأن لكل ابتسامة قصتها.
            </p>
            <ul className="doctor-points">
              {[
                "متخصص في جراحة الزراعة والتجميل",
                "مستمر في التدريب والتطوير المهني",
                "متاح للتواصل الشخصي مع كل مريض",
                "ملتزم بأعلى معايير النظافة والتعقيم",
              ].map((p, i) => (
                <li key={i}>
                  <CheckCircle size={16} color="#c9a96e" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking" className="btn btn-primary" style={{ marginTop:"24px" }}>
              <CalendarDays size={17} />
              احجز موعدك مع الدكتور
            </Link>
          </div>

        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="credentials-section">
        <div className="container">
          <div className="section-head reveal fade-up">
            <span className="eyebrow">المؤهلات</span>
            <h2>الكفاءة والتدريب المستمر</h2>
          </div>
          <div className="cred-grid">
            {credentials.map(({ Icon, title, sub }, i) => (
              <div key={i} className="cred-card reveal fade-up" style={{ transitionDelay:`${i*80}ms` }}>
                <div className="cred-icon">
                  <Icon size={24} color="#c9a96e" strokeWidth={1.8} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clinic Features ── */}
      <section className="clinic-section">
        <div className="container clinic-inner">
          <div className="clinic-text reveal slide-right">
            <span className="eyebrow">العيادة</span>
            <h2>بيئة علاجية على أعلى مستوى</h2>
            <p>صمّمنا العيادة لتكون مريحة، نظيفة، ومجهزة بأحدث التقنيات — لأن تجربتك تهمنا بقدر ما يهمنا علاجك.</p>
            <ul className="clinic-list">
              {clinicFeatures.map((f, i) => (
                <li key={i}>
                  <CheckCircle size={16} color="#c9a96e" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="clinic-map reveal slide-left">
            <div className="map-placeholder">
              <MapPin size={40} color="#c9a96e" strokeWidth={1.5} />
              <h4>موقعنا</h4>
              <p>بنها — القليوبية</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop:"16px" }}>
                افتح الخريطة
              </a>
            </div>
            <div className="contact-quick">
              <a href="tel:01100690997" className="cq-item">
                <Phone size={18} color="#c9a96e" />
                <div>
                  <span className="cq-label">اتصل بنا</span>
                  <span className="cq-val ltr">01100690997</span>
                </div>
              </a>
              <a href="https://wa.me/201100690997" target="_blank" rel="noreferrer" className="cq-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a96e"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.549 4.098 1.508 5.822L.057 23.578a.5.5 0 0 0 .608.607l5.913-1.547A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.595-.5-5.09-1.374l-.362-.214-3.758.984.999-3.656-.234-.38A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                <div>
                  <span className="cq-label">واتساب</span>
                  <span className="cq-val ltr">+20 110 069 0997</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>جاهز لبداية جديدة؟</h2>
          <p>احجز استشارتك المجانية مع د. أحمد إسلام اليوم</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز الآن</Link>
            <Link to="/services" className="btn btn-outline">استكشف خدماتنا</Link>
          </div>
        </div>
      </section>
    </main>
  );
}