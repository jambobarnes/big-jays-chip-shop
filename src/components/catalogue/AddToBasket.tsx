import { AddToBasketProps } from "../../lib/types/AddToBasketProps";

export default function AddToBasket({ expired }: AddToBasketProps) {

  return (
    <>
      {expired ?
        <button
          type="button"
          className="disabled inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-gray-600 bg-gray-200"
        >
          Back Soon!
        </button>
        :
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-chip-red hover:bg-chip-darkred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add to Basket
        </button>
      }
    </>
  )
}
