// Single category
export interface SingleCategory {
  id: string;
  name: string;
  description: string;
}

// Category props
export interface CategoryProps {
  categories: SingleCategory[]
}