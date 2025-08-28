import "../index.css"
import { CalendarDays, ChevronLeft } from "lucide-react";
import { Link } from 'react-router-dom';


export default function PageHeader (props) {
    
    const pageHeader = props.data.header
    const navigateTo = props.data.navigateTo

    return (
        <div className="grid grid-cols-3 bg-white px-6 py-4">
            <Link to={navigateTo}>
                <ChevronLeft/>
            </Link>
            <p className={`font-bold text-lg justify-self-center ${pageHeader === 'Verify Account' ? 'w-32' : ''}`}>
                {pageHeader}
            </p>
            {
                pageHeader === 'Trip' ? <Link to={'/my-booking-trips'}><CalendarDays className="justify-self-end"/></Link> : <></>
            }
        </div>
    )
}