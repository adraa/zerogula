import React, { useState } from 'react';
import { Send } from 'lucide-react';

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
                                {/* Official WhatsApp Logo SVG */}
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.915 12.541 9.318 11.568 9.145 11.27C8.972 10.973 9.127 10.812 9.275 10.664C9.409 10.531 9.573 10.317 9.721 10.144C9.87 9.97 9.919 9.846 10.019 9.647C10.118 9.449 10.069 9.276 9.994 9.127C9.919 8.978 9.325 7.515 9.078 6.92C8.836 6.341 8.591 6.42 8.409 6.41C8.236 6.402 8.038 6.4 7.839 6.4C7.641 6.4 7.319 6.474 7.047 6.772C6.775 7.069 6.007 7.788 6.007 9.251C6.007 10.713 7.072 12.126 7.22 12.325C7.369 12.523 9.316 15.525 12.297 16.812C13.006 17.118 13.559 17.301 13.991 17.437C14.703 17.664 15.351 17.632 15.862 17.555C16.433 17.47 17.62 16.836 17.868 16.142C18.116 15.448 18.116 14.853 18.041 14.729C17.967 14.605 17.769 14.531 17.472 14.382ZM12.051 21.785C10.224 21.785 8.535 21.297 7.075 20.449L6.714 20.235L2.973 21.217L3.971 17.569L3.736 17.195C2.81 15.706 2.321 13.987 2.321 12.196C2.321 6.828 6.691 2.458 12.057 2.458C14.659 2.458 17.104 3.472 18.943 5.312C20.783 7.152 21.795 9.598 21.795 12.201C21.795 17.569 17.425 21.785 12.051 21.785ZM12.057 0C5.322 0 0 5.322 0 12.057C0 14.183 0.548 16.166 1.493 17.886L0 23.344L5.597 21.876C7.234 22.768 9.102 23.239 12.051 23.239H12.057C18.792 23.239 24.271 17.751 24.271 11.016C24.271 4.281 18.792 0 12.057 0Z"/>
                                </svg>
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