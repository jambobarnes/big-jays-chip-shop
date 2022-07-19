import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { OpenState } from '../../lib/types/Transitions.d'
import { BasketContext } from '../../context/basketContext'
import { BasketDiscounts, BasketProductContextType } from '../../lib/types/Basket.d'
import BasketProducts from './BasketProducts'
import { formatter } from '../../lib/helpers/formatter'

export default function Basket({ open, setOpen }: OpenState) {

  const { basketCosts, basketContents, removeProductFromBasket } = useContext(BasketContext) as BasketProductContextType

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-medium text-gray-900">Your Order</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <BasketProducts basketContents={basketContents} removeProductFromBasket={removeProductFromBasket} />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      {basketCosts.discountsTotal > 0 &&
                      <div>
                        <p></p>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Discounts Total</p>
                          <p>- {formatter.format(basketCosts.discountsTotal)}</p>
                        </div>
                        {basketCosts?.discounts && basketCosts.discounts.map((discount: BasketDiscounts) => (
                          <div key={discount.discountName} className="flex justify-between mt-0.5 text-sm text-gray-500">
                            <p>{discount.discountName}</p>
                            <p>({discount.discountQty} x - {formatter.format(discount.discountAmount)})</p>
                            <p>- {formatter.format(discount.discountQty * discount.discountAmount)}</p>
                          </div>
                        ))}
                      </div>
                      }
                      <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                        <p>Order Total</p>
                        <p>{formatter.format(basketCosts.subtotal)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Delivery and service charges are added at checkout.</p>
                      <div className="mt-6">
                        <div

                          className="flex items-center justify-center rounded-md border border-transparent bg-chip-red px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-chip-darkred cursor-not-allowed"
                        >
                          Checkout
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-chip-red hover:text-chip-darkred"
                            onClick={() => setOpen(false)}
                          >
                            add more to your order<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
