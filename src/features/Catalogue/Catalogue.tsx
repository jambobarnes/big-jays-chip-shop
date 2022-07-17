import ProductGrid from '../../components/catalogue/ProductGrid'
import { categoryData } from '../../data/categories'
import { productData } from '../../data/products'

const Catalogue = () => {

  return (
    <>
      <ProductGrid products={productData} categories={categoryData} />
    </>
  )
}

export default Catalogue