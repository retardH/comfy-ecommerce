import Hero from '../components/hero';
import FeaturedProducts from '../components/featured-products';
import Services from '../components/services';
import Contact from '../components/contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;
