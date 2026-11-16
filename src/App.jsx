import AgeGate from './components/AgeGate';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductRequest from './components/ProductRequest';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <AgeGate />
      <Hero />
      <Catalog />
      <ProductRequest />
      <Footer />
    </div>
  );
}