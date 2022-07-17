import Catalogue from "../../features/Catalogue/Catalogue";
import MealDealBanner from "../catalogue/MealDealBanner";

export default function MainContent() {

  return (
    <div className="bg-white" data-testid="main-content">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4 sm:pt-12">
        <MealDealBanner />
        <Catalogue />
      </div>
    </div>
  )
}
