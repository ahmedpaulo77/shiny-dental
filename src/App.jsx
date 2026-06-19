import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // شيلنا الـ HashRouter من هنا
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import "./App.css";

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <> {/* استخدمنا الـ Fragment الفاضي ده بدل الـ HashRouter الزيادة */}
      <ScrollReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;