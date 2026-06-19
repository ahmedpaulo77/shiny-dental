import { useState } from "react";
import { CalendarDays, Clock, User, Phone, MessageCircle, CheckCircle } from "lucide-react";
import "./Booking.css";

const services = [
  "تبييض الأسنان",
  "زراعة الأسنان",
  "تقويم الأسنان",
  "قشور البورسلان",
  "علاج العصب",
  "أسنان الأطفال",
  "كشف وفحص عام",
  "أخرى",
];

const times = [
  "١٠:٠٠ ص", "١١:٠٠ ص", "١٢:٠٠ م",
  "٠١:٠٠ م", "٠٢:٠٠ م", "٠٣:٠٠ م",
  "٠٤:٠٠ م", "٠٥:٠٠ م", "٠٦:٠٠ م",
  "٠٧:٠٠ م", "٠٨:٠٠ م", "٠٩:٠٠ م",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "", phone: "", service: "", date: "", time: "", notes: "",
  });
  const [sent, setSent]     = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function selectTime(t) {
    setForm(f => ({ ...f, time: t }));
  }

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    setLoading(true);

    const msg = [
      `مرحباً دكتور أحمد 👋`,
      `أريد حجز موعد:`,
      `الاسم: ${form.name}`,
      `التليفون: ${form.phone}`,
      `الخدمة: ${form.service}`,
      form.date ? `التاريخ المفضل: ${form.date}` : "",
      form.time ? `الوقت المفضل: ${form.time}` : "",
      form.notes ? `ملاحظات: ${form.notes}` : "",
    ].filter(Boolean).join("%0a");

    setTimeout(() => {
      window.open(`https://wa.me/201100690997?text=${msg}`, "_blank");
      setSent(true);
      setLoading(false);
    }, 700);
  }

  if (sent) {
    return (
      <main className="booking-page">
        <div className="page-header">
          <div className="container">
            <span className="eyebrow">تأكيد الحجز</span>
            <h1>تم إرسال طلبك!</h1>
          </div>
        </div>
        <section className="booking-success">
          <div className="container">
            <div className="success-card">
              <div className="success-icon"><CheckCircle size={56} color="#c9a96e" strokeWidth={1.5} /></div>
              <h2>شكراً، {form.name}!</h2>
              <p>تم فتح واتساب بطلب الحجز. سيتواصل معك الدكتور أحمد لتأكيد الموعد خلال ساعات.</p>
              <div className="success-details">
                {form.service && <div className="sd-row"><span>الخدمة</span><strong>{form.service}</strong></div>}
                {form.date    && <div className="sd-row"><span>التاريخ المفضل</span><strong>{form.date}</strong></div>}
                {form.time    && <div className="sd-row"><span>الوقت المفضل</span><strong>{form.time}</strong></div>}
              </div>
              <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name:"", phone:"", service:"", date:"", time:"", notes:"" }); }}>
                حجز موعد آخر
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">الحجز</span>
          <h1>احجز موعدك المجاني</h1>
          <p>اختار الخدمة والوقت المناسب وسنؤكد حجزك عبر واتساب</p>
        </div>
      </div>

      <section className="booking-main">
        <div className="container booking-inner">

          {/* Form */}
          <form onSubmit={submit} className="booking-form">

            <div className="bf-section">
              <h3><User size={18} color="#c9a96e" /> معلوماتك الشخصية</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>الاسم الكريم *</label>
                  <input type="text" name="name" value={form.name} onChange={handle} placeholder="اسمك بالكامل" required />
                </div>
                <div className="form-group">
                  <label>رقم التليفون *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="01XXXXXXXXX" required className="ltr" />
                </div>
              </div>
            </div>

            <div className="bf-section">
              <h3><CalendarDays size={18} color="#c9a96e" /> الخدمة المطلوبة *</h3>
              <div className="service-pills">
                {services.map(s => (
                  <button key={s} type="button"
                    className={`service-pill${form.service === s ? " active" : ""}`}
                    onClick={() => setForm(f => ({ ...f, service: s }))}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bf-section">
              <h3><CalendarDays size={18} color="#c9a96e" /> التاريخ المفضل</h3>
              <div className="form-group">
                <input type="date" name="date" value={form.date} onChange={handle}
                  min={new Date().toISOString().split("T")[0]} className="ltr" />
              </div>
            </div>

            <div className="bf-section">
              <h3><Clock size={18} color="#c9a96e" /> الوقت المفضل</h3>
              <div className="time-grid">
                {times.map(t => (
                  <button key={t} type="button"
                    className={`time-btn${form.time === t ? " active" : ""}`}
                    onClick={() => selectTime(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="bf-section">
              <h3><MessageCircle size={18} color="#c9a96e" /> ملاحظات إضافية</h3>
              <div className="form-group">
                <textarea name="notes" value={form.notes} onChange={handle}
                  placeholder="أي معلومات إضافية تريد إخبار الدكتور بها..." rows={4} />
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? "جاري الإرسال..." : (
                <><MessageCircle size={18} /> تأكيد الحجز عبر واتساب</>
              )}
            </button>
          </form>

          {/* Sidebar */}
          <div className="booking-sidebar">
            <div className="bsb-card">
              <h4>معلومات مهمة</h4>
              <ul>
                {[
                  "الكشف الأول مجاني تماماً",
                  "يرجى الحضور قبل الموعد بـ ١٠ دقائق",
                  "في حالة التأجيل، أخبرنا قبل ٢٤ ساعة",
                  "أحضر أي أشعات أو تقارير سابقة",
                  "مواعيد الأطفال متاحة صباحاً",
                ].map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={14} color="#c9a96e" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bsb-card bsb-contact">
              <h4>تفضل الاتصال المباشر؟</h4>
              <p>فريقنا جاهز للإجابة على أسئلتك</p>
              <a href="tel:01100690997" className="btn btn-primary" style={{ width:"100%", justifyContent:"center" }}>
                <Phone size={16} /> 01100690997
              </a>
              <a href="https://wa.me/201100690997" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width:"100%", justifyContent:"center", marginTop:"10px" }}>
                <MessageCircle size={16} /> واتساب
              </a>
            </div>

            <div className="bsb-hours">
              <h4>مواعيد العمل</h4>
              <div className="bh-row"><span>السبت – الخميس</span><span className="gold">١٠ص – ١٠م</span></div>
              <div className="bh-row"><span>الجمعة</span><span style={{ color:"#ef4444" }}>مغلق</span></div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}