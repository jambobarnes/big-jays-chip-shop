export default function Footer() {
  return (
    <div className="bg-white" data-testid="footer">
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="md:mt-0 md:order-1">
            <p className="text-center text-lg text-chip-grey">Call us to order:</p>
            <p className="text-center text-lg text-gray-500 font-bold" data-testid="phone-number-main">0330 123 456</p>
            <p className="text-center text-lg text-gray-500 font-bold" data-testid="phone-number-secondary">or 0330 123 457</p>
          </div>
          <div className="mt-8 md:mt-0 md:order-2">
            <p className="text-center text-lg text-chip-grey">Pop in to collect:</p>
            <p className="text-center text-lg text-gray-500 font-bold" data-testid="business-name">The Big Chipper</p>
            <p className="text-center text-lg text-gray-500 font-bold" data-testid="address">123 Any Street, Anywhere, AB12 3CD</p>
          </div>
        </div>
      </div>
    </div>
  )
}
