import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-10 px-4 text-center text-sm">
        <p className="mb-4 font-bold text-gray-300 uppercase tracking-widest">Ellojoy HQ Malaysia</p>
        <p className="mb-8 max-w-lg mx-auto leading-relaxed">
            Penafian: Keputusan mungkin berbeza mengikut individu. Ellojoy adalah pemanis gantian untuk gaya hidup sihat, bukan ubat untuk merawat penyakit kronik. Sila rujuk doktor jika ragu.
        </p>
        <p>&copy; {new Date().getFullYear()} Ellojoy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;