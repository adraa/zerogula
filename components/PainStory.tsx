import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PainStory: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-6 bg-red-100 p-4 rounded-lg border-l-8 border-red-600">
            <AlertTriangle className="text-red-600 w-8 h-8 flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-red-800 uppercase">
                "Dulu abang ni pun degil..."
            </h2>
        </div>

        <div className="prose prose-lg md:prose-xl text-gray-800 space-y-6 leading-relaxed">
            <p>
                Assalamualaikum Tuan/Puan. Jujur saya cakap, ramai orang kita ni <span className="highlight-yellow font-bold">ambil mudah pasal gula.</span>
            </p>
            <p>
                Pagi pekena Teh Tarik, tengahari Sirap Ais, petang Cendol. Sedap memang sedap, Tuan. Tapi bila doktor dah sahkan bacaan gula 15, 20... masa tu baru <span className="font-bold text-red-600">menggelabah cari ubat.</span>
            </p>
            <p>
                Ingat kencing manis ni main-main? Bila luka kecil kat jari kaki tak sembuh-sembuh, merebak sampai nampak tulang, masa tu duit berjuta pun tak guna. <strong>Kena potong juga.</strong>
            </p>
            
            <div className="my-8 p-6 bg-gray-100 rounded-xl border-2 border-dashed border-gray-400 text-center">
                <h3 className="text-2xl font-black uppercase text-gray-700 mb-2">Realiti Pahit</h3>
                <p className="italic text-gray-600">"Nak minum manis boleh, tapi sanggup ke tanggung akibat dia nanti?"</p>
            </div>

            <p>
                Tuan/Puan, <span className="text-purple-700 font-bold text-2xl">Ellojoy</span> ni bukan ubat ajaib. Dia tak boleh sembuhkan kencing manis kalau Tuan terus melantak nasi 3 pinggan.
            </p>
            <p>
                TAPI... ini adalah <strong>'Penyelamat Nyawa'</strong> untuk yang tak boleh tinggal manis. Kita ganti gula pasir tu. Rasa sama, tapi takde racun.
            </p>
        </div>
      </div>
    </section>
  );
};

export default PainStory;