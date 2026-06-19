import { useState } from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const services = [
  "استشارة مجانية", "تبييض الأسنان", "زراعة الأسنان", "تقويم الأسنان",
  "قشور البورسلان", "علاج قناة العصب", "تنظيف الأسنان", "تيجان وجسور",
  "أسنان الأطفال", "خدمة أخرى",
];

const times = ["١١:٠٠ ص", "١٢:٠٠ م", "١:٠٠ م", "٢:٠٠ م", "٣:٠٠ م", "٤:٠٠ م", "٥:٠٠ م", "٦:٠٠ م", "٧:٠٠ م", "٨:٠٠ م", "٩:٠٠ م", "١٠:٠٠ م"];

const steps = ["الخدمة", "التاريخ والوقت", "بياناتك", "تأكيد"];

const initialForm = { service: "", date: "", time: "", name: "", phone: "", notes: "", newPatient: "yes" };

function Booking() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.date && !!form.time;
    if (step === 2) return !!form.name && form.phone.length >= 10;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <div className="booking-success">
          <div className="bs-icon">✓</div>
          <h2>تم استلام طلب حجزك!</h2>
          <p>سيتواصل معك فريقنا خلال ساعة لتأكيد الموعد</p>
          <div className="bs-details">
            <div><span>الخدمة:</span> {form.service}</div>
            <div><span>التاريخ:</span> {form.date}</div>
            <div><span>الوقت:</span> {form.time}</div>
            <div><span>الاسم:</span> {form.name}</div>
          </div>
          <div className="bs-actions">
            <Link to="/" className="btn btn-primary">العودة للرئيسية</Link>
            <a href={`https://wa.me/201100690997?text=${encodeURIComponent(`أهلاً، حجزت موعد ليوم ${form.date} الساعة ${form.time} لخدمة: ${form.service}`)}`}
              target="_blank" rel="noreferrer" className="btn btn-outline">
              تأكيد عبر واتساب
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">حجز موعد</span>
          <h1>احجز موعدك</h1>
          <p>استشارة مجانية أو حجز مباشر — سهل وسريع</p>
        </div>
      </div>

      <section className="booking-section">
        <div className="container booking-layout">
          {/* Form */}
          <div className="booking-form-wrap">
            {/* Steps */}
            <div className="booking-steps">
              {steps.map((s, i) => (
                <div key={i} className={`bs-step${i === step ? " active" : ""}${i < step ? " done" : ""}`}>
                  <div className="bs-num">{i < step ? "✓" : i + 1}</div>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              {/* Step 0 — Service */}
              {step === 0 && (
                <div className="form-step">
                  <h3>ما الخدمة التي تحتاجها؟</h3>
                  <div className="service-select-grid">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={`service-select-btn${form.service === s ? " active" : ""}`}
                        onClick={() => set("service", s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1 — Date & Time */}
              {step === 1 && (
                <div className="form-step">
                  <h3>اختار التاريخ والوقت</h3>
                  <div className="form-group">
                    <label>التاريخ</label>
                    <input
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => set("date", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>الوقت المفضل</label>
                    <div className="time-grid">
                      {times.map((t) => (
                        <button
                          type="button"
                          key={t}
                          className={`time-btn${form.time === t ? " active" : ""}`}
                          onClick={() => set("time", t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 — Personal info */}
              {step === 2 && (
                <div className="form-step">
                  <h3>بياناتك الشخصية</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>الاسم بالكامل *</label>
                      <input type="text" placeholder="اسمك هنا" value={form.name} onChange={(e) => set("name", e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label>رقم التليفون *</label>
                      <input type="tel" placeholder="01XXXXXXXXX" className="ltr" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>هل أنت مريض جديد؟</label>
                    <div className="radio-group">
                      {["yes", "no"].map((v) => (
                        <label key={v} className="radio-label">
                          <input type="radio" name="newPatient" value={v} checked={form.newPatient === v} onChange={() => set("newPatient", v)} />
                          {v === "yes" ? "مريض جديد" : "مريض قديم"}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>ملاحظات إضافية (اختياري)</label>
                    <textarea placeholder="أي معلومات إضافية تساعد الدكتور..." rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} />
                  </div>
                </div>
              )}

              {/* Step 3 — Confirm */}
              {step === 3 && (
                <div className="form-step">
                  <h3>مراجعة وتأكيد</h3>
                  <div className="confirm-card">
                    {[
                      ["الخدمة", form.service],
                      ["التاريخ", form.date],
                      ["الوقت", form.time],
                      ["الاسم", form.name],
                      ["التليفون", form.phone],
                      ["مريض جديد", form.newPatient === "yes" ? "نعم" : "لا"],
                      ...(form.notes ? [["ملاحظات", form.notes]] : []),
                    ].map(([k, v]) => (
                      <div key={k} className="confirm-row">
                        <span className="cr-key">{k}</span>
                        <span className="cr-val">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="confirm-note">
                    بالضغط على "تأكيد الحجز" ستصلك رسالة تأكيد وسيتواصل معك الفريق خلال ساعة.
                  </p>
                </div>
              )}

              {/* Nav buttons */}
              <div className="form-nav">
                {step > 0 && (
                  <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>
                    السابق
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" className="btn btn-primary" disabled={!canNext()} onClick={() => setStep(step + 1)}>
                    التالي
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    تأكيد الحجز ✓
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="booking-sidebar">
            <div className="bk-info-card">
              <h4>معلومات العيادة</h4>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  السبت – الخميس: ١١ص – ١١م
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  بنها، القليوبية، مصر
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.63A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="ltr">01100690997</span>
                </li>
              </ul>
            </div>
            <div className="bk-whatsapp-card">
              <div className="bwc-icon">💬</div>
              <h4>حجز فوري عبر واتساب</h4>
              <p>تفضل الحجز المباشر؟ راسلنا على واتساب وسنحجزلك في دقائق</p>
              <a
                href="https://wa.me/201100690997?text=أهلاً، عايز أحجز موعد"
                target="_blank"
                rel="noreferrer"
                className="btn whatsapp-book-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4C7.1 4 3.1 8 3.1 12.95c0 1.6.42 3.15 1.2 4.5L3 21l3.65-1.27a9 9 0 0 0 4.4 1.12h.04c4.95 0 8.95-4 8.95-8.95a8.86 8.86 0 0 0-2.44-5.58z"/></svg>
                احجز عبر واتساب
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Booking;
