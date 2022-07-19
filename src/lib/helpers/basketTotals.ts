import { BasketProduct } from "../types/Basket.d"
import { sumQtys } from "./quantities"

// Calculate totals for basket
export const basketTotals = (basket: BasketProduct[]) => {

  // SUBTOTAL BEFORE DISCOUNTS
  let lineTotals = []

  for (let i = 0; i < basket.length; i++) {
    lineTotals.push(basket[i].price)
  }

  const orderTotal = lineTotals.reduce((prev, curr) => prev + curr, 0)

  // CALCULATE MEAL DEALS
  // calculate meal deal discounts (qty, total value, individual value)

  // count instances of chips in basket
  const chips = basket.filter((x) => x.id === "prod1");
  const totalChips = sumQtys(chips);

  // count instances of pies in basket
  const pies = basket.filter((x) => x.name.endsWith("Pie"));

  for (let i = 0; i < pies.length; i++) {
    // todo: check against price in data to compare normal vs sale price (rough and dirty for now)
    if (pies[i].price < 3.2) {
      pies.splice(i, 1);
    }
  }

  const totalPies = sumQtys(pies);

  // determine quantity of meal deals
  const mealDealQty = totalPies > totalChips ? totalChips : totalPies

  // specify the discount amount in £ for the meal deal - i.e. 20% of
  // the total value of pie + chips = 5.00 x 0.2 = 1.00
  // todo: calculate this to account for individual product price changes - don't hardcode it
  const mealDealDiscount = 1

  // multiply discount amount by the number of meal deals available
  const totalMealDealDiscount = mealDealQty * mealDealDiscount

  // order total when discounts applied
  const subtotal = orderTotal - totalMealDealDiscount

  return {
    subtotal,
    mealDealDiscount,
    mealDealQty,
    totalMealDealDiscount
  }

}