import React from 'react';
import { Coffee, Droplets, Activity } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-brand-yellow px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-black drop-shadow-sm">
          Macam Mana Dia Berfungsi?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-black transform md:rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black absolute -top-6 -left-4 shadow-lg border-2 border-white">
              1
            </div>
            <div className="flex justify-center mb-6 text-brand-red">
                <Coffee size={64} />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Order Air Kosong</h3>
            <p className="text-gray-700 font-medium">
              Pergi mamak atau buat air kat rumah, order Teh O Kosong atau Kopi O Kosong. <span className="italic text-red-600">Jangan letak gula pasir langsung!</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-black transform md:-rotate-2 hover:rotate-0 transition-transform md:mt-12 z-10">
            <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black absolute -top-6 -left-4 shadow-lg border-2 border-white">
              2
            </div>
            <div className="flex justify-center mb-6 text-brand-red">
                <Droplets size={64} />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Titis 1-2 Titik</h3>
            <p className="text-gray-700 font-medium">
              Keluarkan botol Ellojoy dari poket. Titiskan 1 atau 2 titik je. <span className="font-bold">1 titik = 1 sudu gula.</span> Jimat gila!
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-black transform md:rotate-2 hover:rotate-0 transition-transform">
            <div className="bg-brand-red text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black absolute -top-6 -left-4 shadow-lg border-2 border-white">
              3
            </div>
            <div className="flex justify-center mb-6 text-green-600">
                <Activity size={64} />
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">Rasa Manis & Selamat</h3>
            <p className="text-gray-700 font-medium">
              Kacau dan minum. Rasa sebiji macam gula tebu, tapi <span className="highlight-yellow font-bold">Bacaan Gula Darah TAK NAIK!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;