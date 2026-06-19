import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    cat: "عامة",
    items: [
      {
        q: "كام يوم في الأسبوع العيادة شغالة؟",
        a: "العيادة مفتوحة ٦ أيام في الأسبوع من السبت للخميس. ساعات العمل من ١٠ صباحاً حتى ١٠ مساءً. يمكنك الحجز مسبقاً عبر النموذج أو الاتصال المباشر.",
      },
      {
        q: "هل الاستشارة الأولى مجانية؟",
        a: "نعم! الكشف والاستشارة الأولى مجانية تماماً. يشمل ذلك الفحص الشامل وخطة العلاج المقترحة بدون أي التزام منك.",
      },
      {
        q: "كيف أحجز موعداً؟",
        a: "يمكنك الحجز بثلاث طرق: ١) نموذج الحجز على الموقع ٢) الاتصال على 01100690997 ٣) واتساب على نفس الرقم. سنرد عليك خلال ٢٤ ساعة لتأكيد الموعد.",
      },
      {
        q: "هل يوجد موقف سيارات؟",
        a: "نعم، يوجد موقف سيارات خاص للعيادة متاح مجاناً لجميع المرضى.",
      },
    ],
  },
  {
    cat: "علاجية",
    items: [
      {
        q: "هل علاج العصب مؤلم؟",
        a: "بفضل التخدير الحديث الذي نستخدمه، علاج العصب لا يسبب أي ألم أثناء الجلسة. قد تشعر بعدم ارتياح بسيط بعد انتهاء التخدير، وهو أمر طبيعي يزول خلال يوم أو يومين.",
      },
      {
        q: "كم تستغرق جلسة تبييض الأسنان؟",
        a: "جلسة التبييض بالليزر تستغرق من ٦٠ إلى ٩٠ دقيقة. ستلاحظ فرقاً واضحاً في نفس الجلسة، وتستمر النتيجة من سنة إلى ٣ سنوات حسب العناية.",
      },
      {
        q: "هل زراعة الأسنان مؤلمة؟",
        a: "إجراء الزراعة يتم تحت تخدير كامل، لذا لا تشعر بأي ألم. بعد الجلسة قد يكون هناك بعض التورم والانزعاج لمدة يومين، يتحكم فيهما المسكنات العادية.",
      },
      {
        q: "كم تستغرق قشور البورسلان؟",
        a: "عادةً تحتاج لزيارتين: الأولى للتحضير وأخذ القياسات (٩٠ دقيقة)، والثانية بعد أسبوع لتركيب القشور النهائية (٩٠ دقيقة). ستخرج بابتسامة هوليوود في أسبوع واحد فقط.",
      },
    ],
  },
  {
    cat: "الأسعار والضمان",
    items: [
      {
        q: "هل هناك ضمان على العلاجات؟",
        a: "نعم، جميع علاجاتنا مضمونة. علاج العصب مضمون سنتين، الزراعة مضمونة حسب المواد المستخدمة، وجميع الترميمات مضمونة ضد العيوب الصناعية.",
      },
      {
        q: "هل تقبلون التأمين الصحي؟",
        a: "حالياً نعمل بالسداد النقدي أو الفيزا. نعمل على إضافة تغطيات تأمينية قريباً. تواصل معنا للاستفسار عن خطط الدفع المتاحة.",
      },
      {
        q: "هل يمكن تقسيط تكلفة العلاج؟",
        a: "نعم! نوفر خطط تقسيط مريحة لكثير من العلاجات الكبرى مثل الزراعة والتقويم. تواصل مع فريقنا لمعرفة الخيارات المتاحة لحالتك.",
      },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <main className="faq-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">الأسئلة الشائعة</span>
          <h1>كل أسئلتك — إجاباتها هنا</h1>
          <p>لو مش لاقي إجابتك، اتصل بنا مباشرة وسنرد عليك فوراً</p>
        </div>
      </div>

      <section className="faq-main">
        <div className="container faq-inner">

          {/* Questions */}
          <div className="faq-list">
            {faqs.map((cat, ci) => (
              <div key={ci} className="faq-cat">
                <div className="faq-cat-head">
                  <HelpCircle size={18} color="#c9a96e" />
                  <h3>{cat.cat}</h3>
                </div>
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  return (
                    <div key={key} className={`faq-item${open === key ? " open" : ""}`}>
                      <button
                        className="faq-q"
                        onClick={() => setOpen(open === key ? null : key)}
                      >
                        <span>{item.q}</span>
                        <ChevronDown size={18} className="faq-chev" />
                      </button>
                      {open === key && (
                        <div className="faq-a">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="faq-sidebar">
            <div className="faq-contact-card">
              <HelpCircle size={32} color="#c9a96e" strokeWidth={1.5} />
              <h4>لم تجد إجابتك؟</h4>
              <p>فريقنا متاح ٦ أيام في الأسبوع للإجابة على جميع استفساراتك</p>
              <a
                href="tel:01100690997"
                className="btn btn-primary"
                style={{ width:"100%", justifyContent:"center" }}
              >
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/201100690997"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ width:"100%", justifyContent:"center", marginTop:"10px" }}
              >
                واتساب
              </a>
            </div>

            <div className="faq-hours-card">
              <h4>مواعيد العيادة</h4>
              <div className="hours-row">
                <span>السبت — الخميس</span>
                <span className="gold">١٠ ص – ١٠ م</span>
              </div>
              <div className="hours-row">
                <span>الجمعة</span>
                <span className="red">مغلق</span>
              </div>
            </div>

            <Link to="/booking" className="btn btn-primary" style={{ width:"100%", justifyContent:"center" }}>
              احجز موعد الآن
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}