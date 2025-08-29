import MyDate from "../helpers/MyFunction";
import "../index.css"
import { Calendar, MapPin, Star } from "lucide-react"

export default function TripCard (props) {

    return (
        <div className="flex items-center cursor-pointer rounded-xl bg-white" key={props.data.id}>
            <img className="rounded-xl size-33" src={props.data.image_url} alt="" />
            <div className="p-3">
                <p className="text-lg font-bold">{props.data.title}</p>
                <p className="text-sm">{props.data.description}</p>
                <div className="py-3 space-x-3 font-semibold">
                    <span>{`${MyDate.formatRupiah(props.data.price)}/pax`}</span>
                    <span className="bg-blue-300 py-1 px-2 rounded-md">Book now</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-1">
                        <MapPin className="text-yellow-500 fill-yellow-300" size={15}/>
                        <p>{props.data.location}</p>
                    </div>
                    <div className="">
                        <div className="flex items-center space-x-1">
                            <Calendar className="text-yellow-500 fill-yellow-300" size={15}/>
                            <p>{`${props.data.duration_days}D${props.data.duration_nights}N`}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-1">
                            <Star className="text-yellow-500 fill-yellow-300" size={17} />
                            <p>{props.data.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}