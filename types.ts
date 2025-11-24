export interface NavItem {
  label: string;
  path: string;
}

export interface ExclusiveArt {
  id: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  placement: string;
  size: string;
  image: string;
  onBodyImage: string;
  available: boolean;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}