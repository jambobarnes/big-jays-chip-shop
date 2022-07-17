import { checkExpired } from "../../lib/helpers/checkExpiry";
import { formatter } from "../../lib/helpers/formatter";
import { ProductGridProps } from "../../lib/types/ProductProps";
import AddToBasket from "./AddToBasket";
import CategoryHeader from "./CategoryHeader";

export default function ProductGrid({ products, categories }: ProductGridProps) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 pt-8 px-4 sm:pb-24 sm:pt-12 sm:px-6 lg:max-w-7xl lg:px-8">
        {categories.map((category) => (
          <>
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
                      <AddToBasket expired={checkExpired(product.expiryDate)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
