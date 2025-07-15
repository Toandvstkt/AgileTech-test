import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/Feature';
import TestimonialSlider from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <TestimonialSlider />
      </main>
      <Footer />
    </>
  );
};

export default Home;
