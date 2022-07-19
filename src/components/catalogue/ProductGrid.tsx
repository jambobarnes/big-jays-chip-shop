import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BasketContext } from "../../context/basketContext";
import { checkExpired, checkExpiryToday } from "../../lib/helpers/checkExpiry";
import { formatter } from "../../lib/helpers/formatter";
import { BasketProduct, BasketProductContextType } from "../../lib/types/Basket.d";
import { ProductGridProps } from "../../lib/types/Products.d";
import CategoryHeader from "./CategoryHeader";

export default function ProductGrid({ products, categories }: ProductGridProps) {

  const { addProductToBasket } = useContext(BasketContext) as BasketProductContextType

  const handleAddToBasket = (e: React.MouseEvent<HTMLElement>, product: BasketProduct | any) => {
    addProductToBasket(product)
    toast.success(`1 x ${product.name} added to basket`)
  }

  // override product price if any item's expiry date is today
  products = checkExpiryToday(products);

  return (
    <div>
      {categories.map((category) => (
        <>
          <div key={category.id} className="max-w-2xl mx-auto pb-16 pt-8 px-4 sm:pb-24 sm:pt-12 sm:px-6 lg:max-w-7xl lg:px-8"></div>
          <CategoryHeader name={category.name} description={category.description} id={category.id} />
          <div className="mb-20 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.filter((x) => x.category === category.id).map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-xl text-gray-700">
                      {product.name}
                    </h3>
                    {product.mealDeal &&
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-chip-yellow text-gray-800 my-2">
                        Meal Deal
                      </span>
                    }
                    <p className="my-2 text-lg font-bold text-gray-900">{formatter.format(product.price)}</p>
                    <p className="mb-4 text-md text-gray-500">{product.description}</p>
                    <div>
                      {checkExpired(product.expiryDate) ?
                        <button
                          type="button"
                          className="disabled cursor-not-allowed inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-gray-600 bg-gray-200"
                        >
                          Back Soon!
                        </button>
                        :
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-chip-red hover:bg-chip-darkred focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chip-red"
                          onClick={(e) => handleAddToBasket(e, product)}
                        >
                          Add to Basket
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
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
    </div>
  )
}
