import "../index.css"
import { ChevronLeft } from "lucide-react";
import { Link } from 'react-router-dom';


export default function PageHeader (props) {
    
    const pageHeader = props.data.header
    const navigateTo = props.data.navigateTo

    return (
        <div className="grid grid-cols-3 mb-6">
            <Link to={navigateTo}>
                <ChevronLeft/>
            </Link>
            <p className={`font-bold text-lg justify-self-center ${pageHeader === 'Verify Account' ? 'w-32' : ''}`}>
                {pageHeader}
            </p>
        </div>
    )
}