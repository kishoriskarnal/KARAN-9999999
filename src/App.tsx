import Hero from './components/Hero';
import Ethos from './components/Ethos';
import Occasions from './components/Occasions';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingBookButton from './components/FloatingBookButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#ff2a85] selection:text-white">
      <Hero />
      <Ethos />
      <Menu />
      <Occasions />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingBookButton />
    </div>
  );
}
