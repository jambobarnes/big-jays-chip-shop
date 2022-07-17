import { CurrencyPoundIcon } from '@heroicons/react/solid'

export default function MealDealBanner() {
  return (
    <div className="rounded-md bg-chip-yellow p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CurrencyPoundIcon className="h-8 w-8 text-chip-red" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-md sm:text-lg font-bold text-chip-red">Hungry? Check out our meal deal...</p>
          <p className="text-md sm:text-lg text-yellow-800">Order any pie and a portion of chunky chips for just £5.00 - that's 20% off!</p>
        </div>
      </div>
    </div>
  )
}
