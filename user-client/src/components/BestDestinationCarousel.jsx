import "../index.css"
import { useKeenSlider } from "keen-slider/react"
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css"
import { Loader2, MapPin, Star } from "lucide-react"

export default function BestDestinationSlider(props) {
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
          <Link to="/open-trips" className="text-blue-500 font-semibold">View all</Link>
      </div>

      {/* card */}
      {props.data.loading ? (
        <div className="flex justify-center items-center p-6">
          <Loader2 className="animate-spin w-12 h-12 text-blue-500" />
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider relative z-0 px-6">
          {props.data.openTrips.data.map((el) => (
           <div className="keen-slider__slide space-y-2 bg-white drop-shadow-sm pb-6 rounded-xl mb-6" key={el.id}>
                  <img className="w-60 rounded-xl" src={el.image_url} alt="" />
                  <div className="flex justify-between px-2 text-md font-bold">
                    <p>{el.title}</p>
                    <div className="flex items-center space-x-1">
                      <Star strokeWidth={3} className="size-5 text-yellow-500" />
                      <p>{el.rating}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm px-1 text-gray-500 font-semibold">
                    <MapPin size={20}/>
                    <p>{el.location}</p>
                  </div>
              </div> 
          ))}
        </div>
      )}

    </div>
  )
}