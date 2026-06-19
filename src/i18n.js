import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      // ── القائمة (Navbar) ──
      "nav_home": "الرئيسية",
      "nav_about": "من نحن",
      "nav_services": "الخدمات",
      "nav_gallery": "معرض الأعمال",
      "nav_testimonials": "آراء المرضى",
      "nav_faq": "الأسئلة الشائعة",
      "nav_contact": "تواصل معنا",
      "doctor_name": "د. أحمد إسلام",
      
      // ── صفحة من نحن (About) ──
      "about_title": "د. أحمد إسلام",
      "about_sub": "متخصص في تجميل وزراعة الأسنان • بنها، القليوبية",
      "about_word": "كلمة الدكتور",
      "about_heading": "رعاية أسنانك — رسالتي",
      "about_p1": "منذ أكثر من ٨ سنوات وأنا أؤمن بأن الابتسامة الجميلة ليست رفاهية، بل حق لكل إنسان. لذلك التزمت بتقديم رعاية طب أسنان بمعايير دولية لأهلنا في بنها والقليوبية.",
      "about_p2": "في شايني دنتال، نُعامل كل مريض كأنه من عائلتنا. نشرح كل خطوة، نسمع كل مخاوفك، ونضع خطة علاجية مخصصة لك أنت — لأن لكل ابتسامة قصتها.",
      "about_btn": "احجز موعدك مع الدكتور",
      "badge_experience": "٨+ سنوات خبرة",
      "badge_patients": "٣٠٠٠+ مريض",
      
      // نقاط كلمة الدكتور
      "doc_point_1": "متخصص في جراحة الزراعة والتجميل",
      "doc_point_2": "مستمر في التدريب والتطوير المهني",
      "doc_point_3": "متاح للتواصل الشخصي مع كل مريض",
      "doc_point_4": "ملتزم بأعلى معايير النظافة والتعقيم",

      // قسم المؤهلات والشهادات
      "cred_eyebrow": "المؤهلات",
      "cred_heading": "الكفاءة والتدريب المستمر",
      "cred_title_1": "بكالوريوس طب وجراحة الفم والأسنان", "cred_sub_1": "جامعة القاهرة",
      "cred_title_2": "دبلومة تجميل الأسنان والزراعة",     "cred_sub_2": "معهد متخصص معتمد",
      "cred_title_3": "عضو الجمعية المصرية لطب الأسنان", "cred_sub_3": "نقابة أطباء الأسنان",
      "cred_title_4": "حضور مؤتمرات دولية سنوية",        "cred_sub_4": "أوروبا وأمريكا والشرق الأوسط",

      // قسم تجهيزات العيادة والخريطة
      "clinic_eyebrow": "العيادة",
      "clinic_heading": "بيئة علاجية على أعلى مستوى",
      "clinic_desc": "صمّمنا العيادة لتكون مريحة، نظيفة، ومجهة بأحدث التقنيات — لأن تجربتك تهمنا بقدر ما يهمنا علاجك.",
      "feat_1": "أجهزة تصوير رقمية ثلاثية الأبعاد (CBCT)",
      "feat_2": "وحدة معالجة مركزية متكاملة",
      "feat_3": "أجهزة ليزر متطورة للعلاج والتبييض",
      "feat_4": "نظام إدارة العيادة الرقمي",
      "feat_5": "معايير تعقيم دولية (WHO)",
      "feat_6": "غرفة انتظار مريحة ومكيّفة",
      "feat_7": "موقف سيارات خاص",
      "feat_8": "وصول ذوي الهمم",
      "map_title": "موقعنا تفصيلياً",
      "map_sub": "بنها — القليوبية",
      "map_btn": "افتـح الخريطة",
      "contact_call_label": "اتصل بنا مباشر",
      "contact_whatsapp_label": "راسلنا على واتساب",

      // بنر الحجز السفلي
      "banner_heading": "جاهز لبداية جديدة لابتسامتك؟",
      "banner_sub": "احجز استشارتك الآن مع د. أحمد إسلام في العيادة",
      "banner_btn_1": "احجز موعد الآن",
      "banner_btn_2": "استكشف الخدمات",

      // ── صفحة الخدمات (Services) ──
      "services_title": "خدماتنا الطبيـة",
      "services_sub": "نقدم أحدث حلول طب وتجميل الأسنان بأعلى معايير الجودة",
      "treatment_includes": "ما يشمله العلاج:"
    }
  },
  en: {
    translation: {
      // ── القائمة (Navbar) ──
      "nav_home": "Home",
      "nav_about": "About Us",
      "nav_services": "Services",
      "nav_gallery": "Gallery",
      "nav_testimonials": "Testimonials",
      "nav_faq": "FAQ",
      "nav_contact": "Contact Us",
      "doctor_name": "Dr. Ahmed Islam",

      // ── صفحة من نحن (About) ──
      "about_title": "Dr. Ahmed Islam",
      "about_sub": "Cosmetic Dentistry & Implant Specialist • Banha",
      "about_word": "Doctor's Word",
      "about_heading": "Your Dental Care — My Mission",
      "about_p1": "For over 8 years, I have believed that a beautiful smile is not a luxury, but a right for everyone. Therefore, I committed to providing international standard dental care for our family in Banha and Qalyubia.",
      "about_p2": "At Shiny Dental, we treat every patient like family. We explain every step, listen to your concerns, and create a personalized treatment plan — because every smile has a story.",
      "about_btn": "Book Your Appointment",
      "badge_experience": "8+ Years Experience",
      "badge_patients": "3000+ Patients",
      
      // نقاط كلمة الدكتور
      "doc_point_1": "Specialist in Implant Surgery & Aesthetics",
      "doc_point_2": "Continuous training and professional development",
      "doc_point_3": "Available for personal communication with each patient",
      "doc_point_4": "Committed to the highest hygiene standards",

      // قسم المؤهلات والشهادات
      "cred_eyebrow": "Credentials",
      "cred_heading": "Competence & Continuous Training",
      "cred_title_1": "Bachelor of Oral and Dental Medicine",    "cred_sub_1": "Cairo University",
      "cred_title_2": "Diploma in Cosmetic Dentistry & Implants", "cred_sub_2": "Certified Specialized Institute",
      "cred_title_3": "Member of the Egyptian Dental Association", "cred_sub_3": "Dental Syndicate",
      "cred_title_4": "Annual International Conferences",         "cred_sub_4": "Europe, USA & Middle East",

      // قسم تجهيزات العيادة والخريطة
      "clinic_eyebrow": "Clinic",
      "clinic_heading": "Top-Level Therapeutic Environment",
      "clinic_desc": "We designed the clinic to be comfortable, clean, and equipped with the latest technology — because your experience matters as much as your treatment.",
      "feat_1": "3D Digital Imaging (CBCT)",
      "feat_2": "Integrated Central Processing Unit",
      "feat_3": "Advanced Laser for Treatment & Whitening",
      "feat_4": "Digital Clinic Management System",
      "feat_5": "International Sterilization Standards (WHO)",
      "feat_6": "Comfortable & Air-conditioned Waiting Room",
      "feat_7": "Private Parking",
      "feat_8": "Accessible for People of Determination",
      "map_title": "Our Detailed Location",
      "map_sub": "Banha — Qalyubia",
      "map_btn": "Open Map",
      "contact_call_label": "Call Us Directly",
      "contact_whatsapp_label": "Message on WhatsApp",

      // بنر الحجز السفلي
      "banner_heading": "Ready for a Fresh Start for Your Smile?",
      "banner_sub": "Book your appointment now with Dr. Ahmed Islam at the clinic",
      "banner_btn_1": "Book Now",
      "banner_btn_2": "Explore Services",

      // ── صفحة الخدمات (Services) ──
      "services_title": "Our Medical Services",
      "services_sub": "Providing the latest dental & cosmetic solutions with top quality standards",
      "treatment_includes": "Treatment Includes:"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: { escapeValue: false }
  });

// قلب اتجاه الموقع كله (شمال/يمين) تلقائياً عند تغيير اللغة
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;