import "../index.css"
import bestDestination1 from "../assets/best_destination_1.jpg"
import bestDestination2 from "../assets/best_destination_2.jpg"
import bestDestination3 from "../assets/best_destination_3.jpg"
import { useKeenSlider } from "keen-slider/react"
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css"
import { MapPin, Star } from "lucide-react"

export default function BestDestinationSlider() {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  })

return (
    <div className="space-y-3">
      <div className="px-6 text-4xl space-y-2 py-8">
        <p>Explore The</p> <span className="font-bold">Beautifull</span> <span className="font-semibold text-yellow-500">World!</span>
      </div>
      <div className="flex justify-between items-center px-6">
          <p className="text-xl font-semibold">Best Destination</p>
          <Link className="text-blue-500 font-semibold">View all</Link>
      </div>
      <div ref={sliderRef} className="keen-slider relative z-0">
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-6 rounded-xl mb-6">
              <img className="w-60 rounded-xl" src={bestDestination1} alt="" />
              <div className="flex justify-between px-2 text-md font-bold">
                <p>Tokyo</p>
                <div className="flex items-center space-x-1">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
                <div className="flex items-center space-x-1 text-sm px-1 text-gray-500 font-semibold">
                  <MapPin size={20}/>
                  <p>Tokyo, Japan</p>
                </div>
          </div>
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-6 rounded-xl mb-6">
              <img className="w-60 rounded-xl" src={bestDestination3} alt="" />
              <div className="flex justify-between px-2 text-md font-bold">
                <p>Palm Beach</p>
                <div className="flex items-center space-x-1">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
                <div className="flex items-center space-x-1 text-sm px-1 text-gray-500 font-semibold">
                  <MapPin size={20}/>
                  <p>Miami, USA</p>
                </div>
          </div>
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-6 rounded-xl mb-6">
              <img className="w-60 rounded-xl" src={bestDestination2} alt="" />
              <div className="flex justify-between px-2 text-md font-bold">
                <p>Mountain Rinjani</p>
                <div className="flex items-center space-x-1">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
                <div className="flex items-center space-x-1 text-sm px-1 text-gray-500 font-semibold">
                  <MapPin size={20}/>
                  <p>Nusa Tenggara, Indonesia</p>
                </div>
          </div>
          
      </div>
    </div>
  )
}