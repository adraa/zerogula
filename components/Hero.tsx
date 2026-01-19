import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-red text-white py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-red-900 to-black"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-block bg-yellow-400 text-black font-bold px-4 py-1 mb-6 text-sm md:text-base uppercase tracking-widest transform -rotate-2">
          Amaran: Jangan Baca Kalau Anda Suka Hospital
        </div>
        
        <h1 className="font-impact text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white drop-shadow-xl uppercase">
          Nak Manis Tapi <span className="text-yellow-300 underline decoration-4 underline-offset-4">Takut Mati?</span><br />
          Atau Takut <span className="bg-black px-4 text-white">Potong Kaki?</span>
        </h1>

        <p className="text-xl md:text-3xl font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
          Benda boleh elak, kenapa nak cari penyakit? Tukar <span className="font-bold text-yellow-300">"gula racun"</span> tu kepada <span className="font-bold underline">Ellojoy</span> hari ni.
        </p>

        <div className="mb-10 flex justify-center">
            {/* Visual Placeholder for GIF */}
            <div className="w-full max-w-md aspect-video bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-yellow-400 relative group">
                <img 
                    src="https://picsum.photos/800/450?grayscale" 
                    alt="Hand dripping Ellojoy into Iced Tea" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 p-4 rounded-xl backdrop-blur-sm">
                        <span className="text-white font-bold text-lg uppercase">GIF: Titis Dalam Teh Ais</span>
                    </div>
                </div>
            </div>
        </div>

        <a href="#order" className="inline-flex flex-col items-center group">
            <button className="bg-green-600 hover:bg-green-500 text-white font-black text-2xl md:text-4xl py-4 px-8 md:px-12 rounded-full shadow-[0_10px_0_rgb(20,83,45)] active:shadow-[0_0px_0_rgb(20,83,45)] active:translate-y-[10px] transition-all uppercase tracking-tighter border-4 border-white w-full md:w-auto">
            Saya Nak Elak Potong Kaki!
            </button>
            <div className="mt-4 animate-bounce text-yellow-300">
                <ArrowDown size={40} />
            </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;