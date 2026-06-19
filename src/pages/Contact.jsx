import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const initialForm = { name: "", phone: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">تواصل معنا</span>
          <h1>نحن هنا لمساعدتك</h1>
          <p>تواصل معنا بأي طريقة تناسبك وسيرد فريقنا في أقرب وقت</p>
        </div>
      </div>

      {/* Info Cards */}
      <section className="contact-info-section">
        <div className="container contact-info-grid">
          {[
            {
              icon: "📞",
              title: "اتصل بنا",
              lines: ["01100690997"],
              action: { label: "اتصل الآن", href: "tel:01100690997", ltr: true },
            },
            {
              icon: "💬",
              title: "واتساب",
              lines: ["دردشة مباشرة مع فريقنا", "ردود سريعة خلال دقائق"],
              action: { label: "ابدأ المحادثة", href: "https://wa.me/201100690997?text=أهلاً، عايز أستفسر", ext: true },
            },
            {
              icon: "📍",
              title: "العنوان",
              lines: ["بنها، القليوبية، مصر"],
              action: { label: "افتح الخريطة", href: "https://maps.google.com/?q=بنها+القليوبية", ext: true },
            },
            {
              icon: "🕐",
              title: "ساعات العمل",
              lines: ["السبت – الخميس", "١١ صباحاً – ١١ مساءً", "الجمعة: إجازة"],
            },
          ].map((card, i) => (
            <div key={i} className="contact-card">
              <div className="cc-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              {card.lines.map((l, li) => <p key={li}>{l}</p>)}
              {card.action && (
                <a
                  href={card.action.href}
                  target={card.action.ext ? "_blank" : undefined}
                  rel={card.action.ext ? "noreferrer" : undefined}
                  className={`cc-link${card.action.ltr ? " ltr" : ""}`}
                >
                  {card.action.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Map + Form */}
      <section className="contact-main-section">
        <div className="container contact-main-grid">
          {/* Map placeholder */}
          <div className="map-wrap reveal slide-right">
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <div className="map-label">
                <strong>Shiny Dental Clinic</strong>
                <span>بنها، القليوبية، مصر</span>
              </div>
              <a
                href="https://maps.google.com/?q=بنها+القليوبية"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary map-btn"
              >
                فتح في خرائط جوجل
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal slide-left">
            <h3>أرسل رسالة</h3>
            <p>اترك رسالتك وسنرد عليك في أقرب وقت ممكن</p>

            {sent ? (
              <div className="contact-success">
                <div className="cs-icon">✓</div>
                <h4>تم إرسال رسالتك!</h4>
                <p>سنتواصل معك في أقرب وقت. شكراً لتواصلك معنا.</p>
                <button className="btn btn-outline" onClick={() => { setSent(false); setForm(initialForm); }}>
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>الاسم *</label>
                    <input type="text" placeholder="اسمك" value={form.name} onChange={(e) => set("name", e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>التليفون *</label>
                    <input type="tel" placeholder="01XXXXXXXXX" className="ltr" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>البريد الإلكتروني (اختياري)</label>
                  <input type="email" placeholder="email@example.com" className="ltr" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </div>
                <div className="form-group">
                  <label>الموضوع *</label>
                  <input type="text" placeholder="موضوع رسالتك" value={form.subject} onChange={(e) => set("subject", e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>الرسالة *</label>
                  <textarea placeholder="اكتب رسالتك هنا..." rows={4} value={form.message} onChange={(e) => set("message", e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  إرسال الرسالة
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-banner">
        <div className="container cta-inner reveal scale-in">
          <h2>جاهز تحجز موعدك؟</h2>
          <p>الاستشارة الأولى مجانية — لا عذر للتأخير</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز موعد الآن</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
