import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./FAQ.css";

const categories = [
  {
    label: "عام",
    icon: "💬",
    faqs: [
      { q: "هل العيادة تقبل حجوزات جديدة؟", a: "نعم، نقبل مرضى جدد دائماً. يمكنك حجز موعدك اون لاين أو بالتليفون وسنتواصل معك في أقرب وقت." },
      { q: "ما هي ساعات عمل العيادة؟", a: "نعمل من السبت إلى الخميس من الساعة ١١ صباحاً حتى ١١ مساءً. الجمعة إجازة أسبوعية." },
      { q: "هل يمكن حجز استشارة مجانية؟", a: "نعم! نقدم استشارة تشخيصية مجانية للمرضى الجدد. الاستشارة تشمل فحص الأسنان ومناقشة خيارات العلاج." },
      { q: "أين تقع العيادة بالضبط؟", a: "العيادة في بنها، القليوبية، مصر. يمكنك التواصل معنا للحصول على العنوان التفصيلي والتوجيهات." },
    ],
  },
  {
    label: "الأسعار",
    icon: "💰",
    faqs: [
      { q: "هل الأسعار معقولة؟", a: "نحرص على تقديم أعلى مستوى من الجودة بأسعار تنافسية تناسب مختلف الميزانيات. نوفر أيضاً خطط دفع مرنة لبعض الخدمات." },
      { q: "هل يوجد أقساط أو تقسيط؟", a: "نعم، نوفر خيارات دفع مرنة لبعض الخدمات الكبيرة كالزراعة والتقويم. تحدث مع فريقنا لمعرفة التفاصيل." },
      { q: "هل التقييم الأولي مجاني؟", a: "الكشف الأولي والاستشارة التشخيصية مجانية للمرضى الجدد. ستحصل على خطة علاج واضحة بالتكاليف قبل البدء." },
    ],
  },
  {
    label: "الإجراءات",
    icon: "🦷",
    faqs: [
      { q: "هل علاج الأسنان مؤلم؟", a: "مع التقنيات الحديثة وأنواع التخدير المتطورة، معظم إجراءات الأسنان غير مؤلمة الآن. راحة المريض أولويتنا القصوى." },
      { q: "كم تستغرق جلسة التبييض؟", a: "جلسة تبييض الليزر عادةً تستغرق ٦٠-٩٠ دقيقة وتعطي نتائج فورية. التبييض المنزلي يحتاج ١-٢ أسبوع." },
      { q: "كم تستغرق زراعة الأسنان؟", a: "الزراعة الفعلية تستغرق ٩٠-١٢٠ دقيقة، لكن فترة اندماج الغرسة مع العظم تستغرق ٣-٦ أشهر قبل تركيب التاج النهائي." },
      { q: "كم تستغرق قشور البورسلان؟", a: "عملية القشور تتم في جلستين: جلسة التحضير والقياس، ثم جلسة التركيب بعد أسبوع تقريباً." },
      { q: "هل التقويم الشفاف فعّال مثل المعدني؟", a: "نعم، التقويم الشفاف فعّال تماماً لمعظم الحالات. ميزته الأساسية أنه غير مرئي ومريح. سيحدد الدكتور الخيار المناسب لحالتك." },
    ],
  },
  {
    label: "ما بعد العلاج",
    icon: "✅",
    faqs: [
      { q: "هل هناك متابعة بعد العلاج؟", a: "نعم، نوفر متابعة مجانية بعد معظم الإجراءات. صحتك ورضاك عن النتائج أهم شيء بالنسبة لنا." },
      { q: "كيف أعتني بأسناني بعد التبييض؟", a: "بعد التبييض تجنب الأطعمة والمشروبات الملونة لـ٤٨ ساعة، وحافظ على التنظيف المنتظم بالفرشاة والخيط. النتائج تدوم ٢-٣ سنوات مع العناية الجيدة." },
      { q: "متى أرجع للعيادة بعد الزراعة؟", a: "بعد الزراعة، نحدد لك مواعيد متابعة دورية للتأكد من صحة الغرسة. الزيارة الأولى بعد أسبوع والتقييم الكامل بعد ٣-٦ أشهر." },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [ref, visible] = useScrollReveal();
  return (
    <main className="faq-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">الأسئلة الشائعة</span>
          <h1>كل إجاباتك هنا</h1>
          <p>أكثر الأسئلة شيوعاً من مرضانا — إجابات واضحة وصريحة</p>
        </div>
      </div>

      <section className="faq-section">
        <div className="container faq-layout">
          {/* Categories */}
          <div className="faq-content">
            {categories.map((cat, ci) => (
              <div key={ci} className="faq-category reveal fade-up" style={{ transitionDelay: `${ci * 80}ms` }}>
                <div className="faq-cat-head">
                  <span className="faq-cat-icon">{cat.icon}</span>
                  <h3>{cat.label}</h3>
                </div>
                <div className="faq-list">
                  {cat.faqs.map((item, fi) => (
                    <FAQItem key={fi} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="faq-sidebar">
            <div className="faq-cta-box reveal fade-up">
              <div className="fcb-icon">💬</div>
              <h4>مش لاقي إجابة؟</h4>
              <p>تواصل معنا مباشرة وسيجيب فريقنا على كل أسئلتك</p>
              <Link to="/contact" className="btn btn-primary">تواصل معنا</Link>
              <a href="tel:01100690997" className="btn btn-outline ltr" style={{ marginTop: "10px" }}>01100690997</a>
            </div>
            <div className="faq-booking-box reveal fade-up">
              <div className="fbb-icon">📅</div>
              <h4>احجز استشارة مجانية</h4>
              <p>الاستشارة أفضل طريقة للإجابة عن أسئلتك بشكل شخصي</p>
              <Link to="/booking" className="btn btn-primary">احجز الآن</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default FAQ;
