import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import "./Contact.css";

const contactInfo = [
  {
    Icon: Phone,
    title: "تليفون",
    lines: ["01100690997"],
    href: "tel:01100690997",
    linkLabel: "اتصل الآن",
  },
  {
    Icon: MessageCircle,
    title: "واتساب",
    lines: ["+20 110 069 0997"],
    href: "https://wa.me/201100690997",
    linkLabel: "ابدأ محادثة",
  },
  {
    Icon: MapPin,
    title: "العنوان",
    lines: ["بنها — محافظة القليوبية", "مصر"],
    href: "https://maps.google.com",
    linkLabel: "افتح الخريطة",
  },
  {
    Icon: Clock,
    title: "مواعيد العمل",
    lines: ["السبت – الخميس", "١٠ صباحاً – ١٠ مساءً"],
    href: null,
  },
];

export default function Contact() {
  const [form, setForm]   = useState({ name:"", phone:"", message:"" });
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);

    // WhatsApp redirect with pre-filled message
    const msg = `مرحباً د. أحمد، أنا ${form.name}%0aرقم تليفوني: ${form.phone}%0a${form.message ? "رسالتي: " + form.message : ""}`;
    setTimeout(() => {
      window.open(`https://wa.me/201100690997?text=${msg}`, "_blank");
      setSent(true);
      setLoading(false);
    }, 600);
  }

  return (
    <main className="contact-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">تواصل معنا</span>
          <h1>نحن هنا لمساعدتك</h1>
          <p>تواصل معنا بأي طريقة تناسبك وسنرد عليك في أقرب وقت</p>
        </div>
      </div>

      <section className="contact-main">
        <div className="container contact-inner">

          {/* Info cards */}
          <div className="contact-info">
            <h2>معلومات التواصل</h2>
            <div className="info-cards">
              {contactInfo.map(({ Icon, title, lines, href, linkLabel }, i) => (
                <div key={i} className="info-card">
                  <div className="info-icon">
                    <Icon size={22} color="#c9a96e" strokeWidth={1.8} />
                  </div>
                  <div className="info-text">
                    <h4>{title}</h4>
                    {lines.map((l, li) => <p key={li}>{l}</p>)}
                    {href && (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="info-link">
                        {linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="map-box">
              <MapPin size={36} color="#c9a96e" strokeWidth={1.5} />
              <p>بنها — محافظة القليوبية</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop:"14px" }}>
                فتح في Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h2>أرسل لنا رسالة</h2>
            <p className="form-sub">سيتم توجيه رسالتك مباشرةً عبر واتساب</p>

            {sent ? (
              <div className="sent-msg">
                <CheckCircle size={48} color="#c9a96e" strokeWidth={1.5} />
                <h3>تم الإرسال!</h3>
                <p>شكراً {form.name}، تم فتح واتساب برسالتك. سنرد عليك في أقرب وقت.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)} style={{ marginTop:"16px" }}>
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="contact-form">
                <div className="form-group">
                  <label>الاسم الكريم *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="اسمك بالكامل"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>رقم التليفون *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="01XXXXXXXXX"
                    required
                    className="ltr"
                  />
                </div>
                <div className="form-group">
                  <label>رسالتك (اختياري)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="اكتب استفسارك أو ما تريد معرفته..."
                    rows={5}
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                  {loading ? "جاري الإرسال..." : (
                    <>
                      <Send size={17} />
                      إرسال عبر واتساب
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}