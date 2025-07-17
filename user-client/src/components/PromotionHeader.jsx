import "../index.css"
import { Link } from 'react-router-dom';

export default function PromotionHeader () {
    return (
        <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Promotions</p>
            <Link>View all</Link>
        </div>
    )
}