import React from 'react';
import { Check } from 'lucide-react';
import { PricingPackage } from '../types';

const PACKAGES: PricingPackage[] = [
    {
        id: '1',
        name: 'PAKEJ CUBA',
        price: 35,
        originalPrice: 49,
        features: ['1 Botol Ellojoy (10ml)', 'Tahan 150-200 cawan', 'Postage RM10 (SM)'],
        isBestSeller: false
    },
    {
        id: '2',
        name: 'PAKEJ PUAS',
        price: 65,
        originalPrice: 98,
        savings: 35,
        features: ['2 Botol Ellojoy', 'Jimat RM35', 'Postage RM5 (Subsidized)'],
        isBestSeller: false
    },
    {
        id: '3',
        name: 'PAKEJ PADU',
        price: 90,
        originalPrice: 147,
        savings: 57,
        features: ['3 Botol Ellojoy', 'FREE POSTAGE', 'FREE Group Coaching', 'Priority Delivery'],
        isBestSeller: true
    }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white" id="offer">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-brand-red uppercase font-impact">
          Harga Promosi Gila!
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 font-bold uppercase tracking-widest">
            Harga Asal Kembali Esok. Grab Sekarang.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-end">
            {PACKAGES.map((pkg) => (
                <div 
                    key={pkg.id} 
                    className={`relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${pkg.isBestSeller ? 'bg-white border-4 border-yellow-400 shadow-2xl z-10 scale-105 md:scale-110' : 'bg-gray-50 border border-gray-200 shadow-lg'}`}
                >
                    {pkg.isBestSeller && (
                        <div className="bg-red-600 text-white text-center py-2 font-black uppercase tracking-widest text-sm animate-pulse">
                            🔥 Best Seller - Limited Stock
                        </div>
                    )}
                    
                    <div className="p-6 text-center">
                        <h3 className="text-2xl font-black uppercase text-gray-800 mb-2">{pkg.name}</h3>
                        <div className="flex justify-center items-center gap-2 mb-4">
                            <span className="text-gray-400 line-through text-lg">RM{pkg.originalPrice}</span>
                            <span className="text-5xl font-black text-brand-red tracking-tighter">RM{pkg.price}</span>
                        </div>
                        
                        {pkg.savings && (
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm inline-block mb-6">
                                JIMAT RM{pkg.savings}
                            </div>
                        )}

                        <ul className="space-y-3 text-left mb-8">
                            {pkg.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-gray-700">
                                    <Check className={`w-5 h-5 flex-shrink-0 ${pkg.isBestSeller ? 'text-green-600' : 'text-gray-400'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <a 
                            href="#order"
                            className={`block w-full py-4 rounded-xl font-black uppercase tracking-wider text-xl shadow-lg transform transition active:scale-95 ${pkg.isBestSeller ? 'bg-brand-yellow text-black hover:bg-yellow-300' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                        >
                            Pilih {pkg.name}
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;