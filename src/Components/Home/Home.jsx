import Faq from "./Faq/Faq.jsx";
import Features from "./Features/Features.jsx";
import Hero from "./Hero/Hero.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}

export default Home;
