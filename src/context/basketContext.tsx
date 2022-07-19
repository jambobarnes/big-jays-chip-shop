import { createContext, useState } from "react";
import { basketTotals } from "../lib/helpers/basketTotals";
import { BasketProduct, BasketProductContextType, BasketTotals } from "../lib/types/Basket.d";

export const BasketContext = createContext<BasketProductContextType | null>(null);

const BasketProvider: any = ({ children }:any) => {
  const [basketContents, setBasketContents] = useState<BasketProduct[]>([]);
  const [basketCosts, setBasketCosts] = useState<BasketTotals>({
    discountsTotal: 0,
    discounts: [],
    subtotal: 0
  })

  const addProductToBasket = (product: BasketProduct) => {

    // copy state
    const basket = basketContents

    // find index of product to be removed in basket array
    const addProduct = (item: BasketProduct) => item.id === product.id 
    const idx = basket.findIndex(addProduct)

    if (idx < 0) {

      const productToAdd: BasketProduct = {
        basketId: basketContents.length + 1,
        id: product.id,
        name: product.name,
        price: product.price,
        mealDeal: product.mealDeal,
        quantity: 1,
        image: product.image,
        description: product.description
      }

      const totals = basketTotals([...basket, productToAdd])

      console.log(totals);

      setBasketCosts({
        discountsTotal: totals.totalMealDealDiscount,
        discounts: [{
          discountName: 'Pie & Chips £4.00 Meal Deal',
          discountAmount: 1,
          discountQty: totals.mealDealQty
        }],
        subtotal: totals.subtotal
      })

      setBasketContents([...basket, productToAdd])

    } else {

      // get existing product basketId
      const existingProduct = basket[idx]  
      const newBasket = basket.filter((x) => x.basketId !== existingProduct.basketId)

      // set new values for qty and price - use pre-update values
      const newQty = basket[idx].quantity + 1
      const newPrice = (basket[idx].price / basket[idx].quantity) * newQty
      
      const productToAdd: BasketProduct = {
        basketId: basket[idx].basketId,
        id: product.id,
        name: product.name,
        price: newPrice,
        mealDeal: product.mealDeal,
        quantity: newQty,
        image: product.image,
        description: product.description
      }

      const totals = basketTotals([...newBasket, productToAdd])

      setBasketCosts({
        discountsTotal: totals.totalMealDealDiscount,
        discounts: [{
          discountName: 'Pie & Chips £5 Meal Deal',
          discountAmount: 1,
          discountQty: totals.mealDealQty
        }],
        subtotal: totals.subtotal
      })

      setBasketContents([...newBasket, productToAdd])

    }

  }

  const removeProductFromBasket = (product: BasketProduct) => {

    const basket = basketContents;

    const newBasket = basket.filter((x) => x.basketId !== product.basketId)
    console.log('NEW BASKET', newBasket)

    const totals = basketTotals(newBasket)

    setBasketCosts({
      discountsTotal: totals.totalMealDealDiscount,
      discounts: [{
        discountName: 'Pie & Chips £5 Meal Deal',
        discountAmount: 1,
        discountQty: totals.mealDealQty
      }],
      subtotal: totals.subtotal
    })

    setBasketContents(newBasket);

  }

  return (
    <BasketContext.Provider value={{ basketCosts, basketContents, addProductToBasket, removeProductFromBasket}}>
      {children}
    </BasketContext.Provider>
  )

}

export default BasketProvider;