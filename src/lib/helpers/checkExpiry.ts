// Check provided date (expiry date) is after today (i.e. the product has expired)

import { ProductProps, SingleProduct } from "../types/Products.d";

// Returns false is the product is NOT EXPIRED - true if the product IS EXPIRED
export const checkExpired = (date: string | null): boolean => {

  // some values will be provided as null from the data as expiry date not required
  if (date === null) {
    return false
  }

  const today = new Date().toISOString().split('T')[0];
  const expiryDate = new Date(date).toISOString().split('T')[0];

  if (today <= expiryDate) {
    return false
  } else {
    return true
  }

}

export const checkExpiryToday = (productData: SingleProduct[]): SingleProduct[] => {
  
  const amendedProducts: SingleProduct[] = []
  const today = new Date().toISOString().split('T')[0];

  for (let i = 0; i < productData.length; i++) {

    if (productData[i].expiryDate) {

      if (productData[i].expiryDate === today) {

        productData[i].price = productData[i].salePrice

      }

      amendedProducts.push(productData[i]);

    } else {

      amendedProducts.push(productData[i])

    }

  }

  console.log('AMENDED PRODS', amendedProducts);
  return amendedProducts

}