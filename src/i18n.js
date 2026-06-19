import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      "nav_home": "الرئيسية",
      "nav_about": "من نحن",
      "nav_services": "الخدمات",
      "doctor_name": "د. أحمد إسلام",
      "specialty": "متخصص في تجميل وزراعة الأسنان",
    }
  },
  en: {
    translation: {
      "nav_home": "Home",
      "nav_about": "About Us",
      "nav_services": "Services",
      "doctor_name": "Dr. Ahmed Islam",
      "specialty": "Specialize in Cosmetic Dentistry & Implants",
    }
  }
};

i18n
  .use(LanguageDetector) // بيعرف لغة جهاز المستخدم تلقائياً
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar', // اللغة الافتراضية لو معرفش يلقط لغة الجهاز
    interpolation: {
      escapeValue: false
    }
  });

// تغيير اتجاه الموقع تلقائياً حسب اللغة (RTL للعربي و LTR للإنجليزي)
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;