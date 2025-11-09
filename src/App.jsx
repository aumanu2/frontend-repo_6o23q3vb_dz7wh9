import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020A14] text-[#E6F1FF] font-inter">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
