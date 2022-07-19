import { BasketProduct } from "../types/Basket.d";

export const sumQtys = (arr: BasketProduct[]) => {
  let quantities: number[] = []

  for (let i = 0; i < arr.length; i++) {
    quantities.push(arr[i].quantity)
  }

  const total = quantities.reduce((prev: number, curr: number) => prev + curr, 0);

  return total

}