import "../index.css"
import { Calendar, MapPin, Star } from "lucide-react"

export default function TripCard (props) {

    return (
        <div className="flex items-center cursor-pointer rounded-xl bg-white" key={props.data.id}>
            <img className="rounded-xl size-33" src={props.data.image_url} alt="" />
            <div className="p-3">
                <p className="text-lg font-bold">{props.data.title}</p>
                <p>{props.data.description}</p>
                <div className="flex justify-between items-center text-sm mt-3">
                    <div className="flex items-center space-x-1 font-semibold">
                        <MapPin className="text-yellow-500" size={20}/>
                        <p>{props.data.location}</p>
                    </div>
                    <div className="">
                        <div className="flex items-center space-x-1 font-semibold">
                            <Calendar className="text-yellow-500" size={20}/>
                            <p>{`${props.data.duration_days}D${props.data.duration_nights}N`}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-1">
                        <Star strokeWidth={3} className="size-5 text-yellow-500" />
                        <p>{props.data.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}