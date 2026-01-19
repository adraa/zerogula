export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings?: number;
  features: string[];
  isBestSeller?: boolean;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
