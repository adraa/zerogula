import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
    {
        question: "Ini kimia ke? Rosak buah pinggang tak?",
        answer: "Ini Sucralose yang diperbuat dari Tebu. Bahan ni dah Lulus KKM (No: K635452) & FDA (US). Kalau bahaya, lama dah KKM rampas bang. Kami jual benda sah je. Jangan risau, dia takkan bebankan buah pinggang sebab dia 0 kalori."
    },
    {
        question: "Rasa dia payau tak macam Stevia?",
        answer: "Tak! Stevia rasa aftertaste pahit/payau macam ubat batuk. Ellojoy ni Sucralose, rasa dia memang sebiji macam gula tebu biasa. Sedap gila. Kalau rasa macam racun, kami tak berani jual."
    },
    {
        question: "Sehari boleh ambil berapa titik?",
        answer: "Ikut selera. Tapi biasanya 1 cawan = 1-2 titik dah cukup manis. Satu botol ni ada 200-250 titis. Kalau sehari minum 3 cawan, sebulan pun tak habis lagi botol tu."
    },
    {
        question: "Budak-budak boleh minum?",
        answer: "Boleh sangat! Elok ajar anak kurangkan gula pasir dari kecil. Elak gigi rosak dan obesiti awal."
    }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
            <HelpCircle className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">Soalan Lazim (The Brutal Truth)</h2>
        </div>

        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <button 
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-bold text-lg text-gray-800 pr-8">{faq.question}</span>
                        {openIndex === index ? <ChevronUp className="text-red-600" /> : <ChevronDown className="text-gray-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="p-5 pt-0 bg-white border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed mt-4 bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                                {faq.answer}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;