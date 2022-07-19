// Add to Basket
export type AddToBasketProps = {
  expired: Boolean;
}

// CONTEXT
export interface BasketProduct {
  basketId: number;
  id: string;
  name: string;
  price: number;
  mealDeal: boolean;
  quantity: number;
  image: string;
  description: string;
  sellPrice?: number;
}

export type BasketProductContextType = {
  basketCosts: BasketTotals
  basketContents: BasketProduct[];
  addProductToBasket: (product: BasketProduct) => void;
  removeProductFromBasket: (product: BasketProduct) => void;
}

export interface BasketDiscounts {
  discountName: string;
  discountQty: number;
  discountAmount: number;
}

export interface BasketTotals {
  discountsTotal: number;
  discounts?: BasketDiscounts[];
  subtotal: number;
}