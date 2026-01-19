import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-red-700 border-t-4 border-yellow-400 shadow-2xl p-3 animate-slide-up md:hidden">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-yellow-300 font-bold text-xs uppercase tracking-widest animate-pulse">
          🔥 Promo Tamat Malam Ni!
        </p>
        <a 
          href="#order"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-lg py-3 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 uppercase tracking-tighter transform active:scale-95 transition-all"
        >
          <ShoppingCart className="w-6 h-6" />
          Order Sekarang (COD)
        </a>
      </div>
    </div>
  );
};

export default StickyBar;