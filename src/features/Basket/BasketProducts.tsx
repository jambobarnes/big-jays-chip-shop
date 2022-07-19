import React from 'react'
import { formatter } from '../../lib/helpers/formatter'
import { BasketProduct } from '../../lib/types/Basket.d'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  basketContents: BasketProduct[];
  removeProductFromBasket: (product: BasketProduct) => void;
}

const BasketProducts: React.FC<Props> = ({ basketContents, removeProductFromBasket }) => {

  const handleRemoveFromBasket = (e: React.MouseEvent<HTMLElement>, product: BasketProduct | any) => {
    removeProductFromBasket(product)
    toast.info(`${product.name} removed from basket`)
  }

  return (
    <>
      <ul className="-my-6 divide-y divide-gray-200">
        {basketContents.map((product: BasketProduct) => (
          <li key={product.basketId} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.image}
                alt={product.description}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    {product.name}
                  </h3>
                  <p className="ml-4">{formatter.format(product.price)}</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{product.quantity} x {formatter.format((product.price / product.quantity))} each</p>
              <div className="flex flex-1 items-end justify-between text-sm">
                {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-chip-red hover:text-chip-darkred"
                    onClick={(e) => handleRemoveFromBasket(e, product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  )
}

export default BasketProducts