import "../index.css"
import bestSellingProduct1 from "../assets/product1.jpg"
import bestSellingProduct2 from "../assets/product2.jpg"
import bestSellingProduct3 from "../assets/product3.jpg"
import bestSellingProduct4 from "../assets/product4.jpg"
import bestSellingProduct5 from "../assets/product5.jpg"
import bestSellingProduct6 from "../assets/product6.jpg"
import bestSellingProduct7 from "../assets/product7.jpg"
import bestSellingProduct8 from "../assets/product8.jpg"
import { useKeenSlider } from "keen-slider/react"
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css"
import { MapPin, ShoppingCart, Star } from "lucide-react"

export default function BestProductSlider() {
  const [sliderRef] = useKeenSlider({
      loop: true,
      mode: "free",
      slides: { origin: "center", perView: 2.5, spacing: 10 },
      range: {
        min: -5,
        max: 5,
      },
    })

return (
    <div className="space-y-3">
      <div className="flex justify-between items-center px-6">
          <p className="text-xl font-semibold">New Arrival</p>
          <Link className="text-blue-500 font-semibold">View all</Link>
      </div>
      <div ref={sliderRef} className="keen-slider relative z-0">        
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct1} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct2} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct3} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct4} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct5} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct6} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct7} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
          <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-3 rounded-xl mb-6">
              <img className="rounded-xl" src={bestSellingProduct8} alt="" />
              <div className="px-2 text-sm">
                <p>Headlamp full LED</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-1 px-2">
                  <p className="text-xs">Rp</p><p className="text-lg font-bold">450</p><p className="text-xs">.000</p>
                </div>
                <div className="flex items-center space-x-1 px-2 text-xs">
                  <Star strokeWidth={3} className="size-5 text-yellow-500" />
                  <p>4.7</p>
                </div>
              </div>
              <div className="px-2 mt-8">
                <div className="flex justify-center items-center text-sm py-2 bg-yellow-500 rounded-lg space-x-1">
                  <ShoppingCart size={15}/>
                  <Link className="">Add to Cart</Link>
                </div>
              </div>
          </div>          
      </div>
    </div>
  )
}