import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        package: 'PAKEJ PADU (RM90)',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Terima kasih ${formData.name}! Order anda untuk ${formData.package} telah diterima. Team kami akan WhatsApp anda untuk confirmkan alamat COD.`);
        setFormData({ name: '', phone: '', package: 'PAKEJ PADU (RM90)', address: '' });
    };

    return (
        <section id="order" className="py-20 px-4 bg-brand-red text-white relative">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-yellow-400 p-8 text-center border-b-4 border-black">
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-black mb-2 leading-none">
                            Tak Pandai Transfer Online?
                        </h2>
                        <p className="text-xl font-bold text-red-700">
                            KAMI HANTAR BARU BAYAR (COD)!
                        </p>
                    </div>

                    <div className="p-6 md:p-12">
                        {/* Option 1: WhatsApp */}
                        <div className="text-center mb-10 pb-10 border-b-2 border-dashed border-gray-300">
                            <p className="text-gray-600 font-bold uppercase mb-4 text-sm tracking-widest">Cara Paling Senang (Recommended)</p>
                            <a 
                                href="https://wa.me/60123456789?text=Salam%20Saya%20Nak%20Ellojoy%20Promo"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-black text-2xl py-4 px-8 rounded-full shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[6px] transition-all uppercase"
                            >
                                <MessageCircle size={32} />
                                WhatsApp Team Kami
                            </a>
                            <p className="mt-3 text-xs text-gray-500">Tekan button hijau ni, terus masuk WhatsApp.</p>
                        </div>

                        {/* Option 2: Form */}
                        <div className="max-w-xl mx-auto">
                             <p className="text-center text-gray-600 font-bold uppercase mb-6 text-sm tracking-widest">Atau Isi Borang Di Bawah</p>
                             <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block font-bold text-gray-700 mb-1 uppercase text-sm">Pilih Pakej</label>
                                    <select 
                                        name="package" 
                                        value={formData.package}
                                        onChange={handleChange}
                                        className="w-full p-4 border-2 border-gray-300 rounded-xl font-bold text-lg focus:border-brand-red focus:ring-0"
                                    >
                                        <option value="PAKEJ CUBA (RM35)">PAKEJ CUBA (RM35)</option>
                                        <option value="PAKEJ PUAS (RM65)">PAKEJ PUAS (RM65)</option>
                                        <option value="PAKEJ PADU (RM90)">🔥 PAKEJ PADU (RM90) - FREE POSTAGE</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block font-bold text-gray-700 mb-1 uppercase text-sm">Nama Penuh</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required
                                        placeholder="Cth: Ali bin Abu"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-brand-red focus:ring-0"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold text-gray-700 mb-1 uppercase text-sm">No Telefon (WhatsApp)</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        required
                                        placeholder="Cth: 012 345 6789"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-brand-red focus:ring-0"
                                    />
                                </div>

                                <div>
                                    <label className="block font-bold text-gray-700 mb-1 uppercase text-sm">Alamat Penghantaran</label>
                                    <textarea 
                                        name="address" 
                                        required
                                        placeholder="Alamat penuh untuk abang posmen hantar..."
                                        rows={3}
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full p-4 border-2 border-gray-300 rounded-xl focus:border-brand-red focus:ring-0"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-brand-red hover:bg-red-700 text-white font-black text-2xl py-5 rounded-xl shadow-lg uppercase tracking-wider flex items-center justify-center gap-2 mt-6"
                                >
                                    <Send size={24} />
                                    Hantar Order Sekarang
                                </button>
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;