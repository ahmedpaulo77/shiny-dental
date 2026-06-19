import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const reviews = [
  { name:"محمد السيد",      city:"بنها",          rating:5, text:"تجربة استثنائية من البداية للنهاية. الدكتور أحمد شرح لي كل خطوة بصبر واحترافية عالية. النتيجة فاقت توقعاتي تماماً ومش ندمت لحظة." },
  { name:"نورا إبراهيم",    city:"القناطر الخيرية", rating:5, text:"عملت قشور بورسلان والنتيجة خيالية. أصدقائي وعيلتي مش مصدقين إنها أسناني الطبيعية. أنصح كل حد يجي هنا بلا تفكير." },
  { name:"كريم عبدالله",    city:"شبين الكوم",     rating:5, text:"أفضل عيادة في المنطقة بامتياز. نظيفة ومرتبة والفريق الطبي محترم ومتفهم. هرجع دايماً وهنصح الكل من حواليا." },
  { name:"سمر الشريف",      city:"بنها",           rating:5, text:"كنت خايفة جداً من علاج العصب بسبب الألم، بس مع الدكتور أحمد ما حسيت بأي حاجة خالص. الجو هادي وريلاكسينج جداً." },
  { name:"أحمد رمضان",      city:"طوخ",            rating:5, text:"عملت زراعة أسنان كاملة وكانت تجربة رائعة. الدكتور متخصص ومتمكن وشرح لي كل تفاصيل العملية. النتيجة طبيعية جداً." },
  { name:"ياسمين مصطفى",   city:"بنها",           rating:5, text:"أخيراً لقيت عيادة أسنان أثق فيها! الدكتور أمين ومش بيحاول يضغط عليك. بيشرح إيه اللي محتاجه بالظبط وبيحترم ميزانيتك." },
  { name:"عمر حلمي",        city:"القليوبية",      rating:5, text:"جبت عيالي الاتنين وعملوا تقويم. الدكتور تعامل معاهم بصبر وبدأوا يحبوا يجوا العيادة. ده إنجاز كبير لأب عنده أطفال خايفين." },
  { name:"دينا فاروق",      city:"بنها",           rating:5, text:"تبييض الأسنان كان أحسن قرار اتخذته. في جلسة واحدة الفرق واضح جداً. الدكتور بيهتم بالتفاصيل ومش عايز أي حاجة إلا راحة المريض." },
  { name:"تامر عيسى",       city:"شبرا الخيمة",   rating:5, text:"جيت من شبرا الخيمة بالظبط عشان الدكتور أحمد. سمعته كويسة جداً وبصراحة استاهل الرحلة كلها. احترافية عالية ونتيجة ممتازة." },
];

function Stars({ count }) {
  return (
    <div style={{ display:"flex", gap:"3px" }}>
      {[...Array(count)].map((_,i) => <Star key={i} size={14} fill="#c9a96e" color="#c9a96e" />)}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="testi-page">
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">آراء المرضى</span>
          <h1>ماذا يقول مرضانا؟</h1>
          <p>قصص حقيقية من مرضى حقيقيين — نفخر بثقتهم</p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="testi-stats">
        <div className="container testi-stats-inner">
          <div className="ts-item">
            <div className="ts-stars"><Stars count={5} /></div>
            <span className="ts-num">٤.٩</span>
            <span className="ts-label">متوسط التقييم</span>
          </div>
          <div className="ts-divider" />
          <div className="ts-item">
            <span className="ts-num">+٢٠٠</span>
            <span className="ts-label">تقييم على Google</span>
          </div>
          <div className="ts-divider" />
          <div className="ts-item">
            <span className="ts-num">٩٨٪</span>
            <span className="ts-label">نسبة الرضا</span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="testi-main">
        <div className="container">
          <div className="testi-masonry">
            {reviews.map((r, i) => (
              <div key={i} className="testi-card-full reveal fade-up" style={{ transitionDelay:`${i * 60}ms` }}>
                <Quote size={28} className="quote-icon" />
                <p>"{r.text}"</p>
                <Stars count={r.rating} />
                <div className="testi-footer">
                  <div className="testi-av">{r.name[0]}</div>
                  <div>
                    <div className="testi-nm">{r.name}</div>
                    <div className="testi-ct">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>انضم لآلاف مرضانا السعداء</h2>
          <p>احجز استشارتك المجانية اليوم وكن أنت القصة القادمة</p>
          <div className="cta-actions">
            <Link to="/booking" className="btn btn-primary">احجز الآن</Link>
            <a href="tel:01100690997" className="btn btn-outline ltr">01100690997</a>
          </div>
        </div>
      </section>
    </main>
  );
}