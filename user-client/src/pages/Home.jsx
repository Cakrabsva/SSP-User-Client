import "../index.css"
import Navbar from "../components/Navbar";

export default function Home () {
    return (
        <div className="
            max-w-[411px] min-w-[375px] h-screen py-8
            border border-gray-200 rounded-4xl shadow-lg
            mx-auto 
            bg-white
            relative">
             
            <div className="px-3 w-full absolute bottom-12">
               <Navbar />
            </div> 
        </div>
    )
}