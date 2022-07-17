import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import logoSmall from "../../assets/big-chipper-sq.svg"
import logoLarge from "../../assets/big-chipper-wide.svg"
import Basket from '../../features/Basket/Basket'

export default function NavBar() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow" data-testid="nav">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-28 md:h-36">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-24 w-auto"
                src={logoSmall}
                alt="Big Jay's Chip Shop"
                data-testid="logo-small"
              />
              <img
                className="hidden lg:block h-28 w-auto"
                src={logoLarge}
                alt="Big Jay's Chip Shop"
                data-testid="logo-large"
              />
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">View Basket</span>
              <ShoppingCartIcon className="h-6 w-6 text-chip-grey" aria-hidden="true" data-testid="basket-icon" />
            </button>
          </div>
        </div>
      </div>
      <Basket open={open} setOpen={setOpen} />
    </nav >
  )
}