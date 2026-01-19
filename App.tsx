import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainStory from './components/PainStory';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Hero />
      <TrustBar />
      <PainStory />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <FAQ />
      <OrderForm />
      <Footer />
      <StickyBar />
    </div>
  );
};

export default App;