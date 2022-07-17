import { SingleCategory } from "./CategoryProps";

// Single product
export interface SingleProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  mealDeal: boolean;
  image: string;
  expiryDate: string | null;
}

// Products props
export interface ProductProps {
  products: SingleProduct[]
}

export interface ProductGridProps {
  products: SingleProduct[];
  categories: SingleCategory[];
}