import React from 'react';
import { ShieldCheck, Truck, ThumbsUp, CheckCircle } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-4 border-b-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center text-xs md:text-sm font-bold uppercase tracking-wider text-center">
          <div className="flex items-center gap-2 text-yellow-400">
            <ShieldCheck className="w-5 h-5" />
            <span>LULUS KKM (K635452)</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>HALAL JAKIM</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <ThumbsUp className="w-5 h-5" />
            <span>100% BUMIPUTERA</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <Truck className="w-5 h-5" />
            <span>COD AVAILABLE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;