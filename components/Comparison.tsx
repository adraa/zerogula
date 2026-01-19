import React from 'react';
import { X, Check, Star } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-10 text-white uppercase">
          Kenapa <span className="text-yellow-400">Ellojoy</span> Menang Besar?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="text-sm md:text-xl uppercase tracking-wider">
                <th className="p-4 w-1/4"></th>
                <th className="p-4 w-1/4 text-gray-400 opacity-60">Gula Pasir</th>
                <th className="p-4 w-1/4 text-gray-400 opacity-60">Stevia Murah</th>
                <th className="p-4 w-1/4 bg-brand-red text-white rounded-t-xl border-b-0 relative">
                    Ellojoy
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-[10px] md:text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Pilihan Bijak
                    </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-lg font-bold">
              {/* Row 1: Rasa */}
              <tr className="border-b border-gray-700">
                <td className="p-4 text-left md:text-right uppercase text-yellow-500">Rasa</td>
                <td className="p-4 text-gray-400">
                    <div>Manis Sedap</div>
                    <div className="text-[10px] text-red-500">(Tapi Racun)</div>
                </td>
                <td className="p-4 text-gray-400">
                    <div>Payau / Pahit</div>
                    <div className="text-[10px] text-gray-500">(Macam Ubat)</div>
                </td>
                <td className="p-4 bg-brand-red/10 border-x-2 border-brand-red">
                    <div className="text-green-400 flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Manis Tebu Asli
                    </div>
                </td>
              </tr>
              
              {/* Row 2: Kalori */}
              <tr className="border-b border-gray-700">
                <td className="p-4 text-left md:text-right uppercase text-yellow-500">Kalori</td>
                <td className="p-4">
                    <span className="text-red-500 flex items-center justify-center gap-1">
                        <X className="w-5 h-5" /> Tinggi
                    </span>
                </td>
                <td className="p-4">
                     <span className="text-green-500 flex items-center justify-center gap-1">
                        <Check className="w-5 h-5" /> 0 Kalori
                    </span>
                </td>
                <td className="p-4 bg-brand-red/10 border-x-2 border-brand-red">
                    <span className="text-yellow-300 flex items-center justify-center gap-1 text-xl">
                        <Check className="w-6 h-6" /> 0 KALORI
                    </span>
                </td>
              </tr>

              {/* Row 3: Kesan Gula Darah */}
              <tr className="border-b border-gray-700">
                <td className="p-4 text-left md:text-right uppercase text-yellow-500">Effect Gula Darah</td>
                <td className="p-4 text-red-500 font-black">NAIK MENDADAK! ⚠️</td>
                <td className="p-4 text-green-500">Stabil</td>
                <td className="p-4 bg-brand-red/10 border-x-2 border-brand-red rounded-b-xl text-green-400 font-black text-xl">
                   STABIL & SELAMAT
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;