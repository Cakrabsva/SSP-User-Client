import { useEffect, useRef, useState} from "react"
import "../index.css"
import { Sling as Hamburger } from "hamburger-react";
import { Link } from 'react-router-dom';

export default function DropdownMenu () {

    const isLogin = localStorage.getItem('token')

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [dropdownRef])

    return (
        <div ref={dropdownRef}  className="relative">
            <div className="justify-self-center">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <Hamburger toggled={isDropdownOpen} toggle={setIsDropdownOpen} size={24} />
                </button>
            </div>
            <div>
                {isDropdownOpen && (
                    <div className="mr-6 border border-gray-200 shadow-sm absolute right-0 w-38 bg-gray-100 rounded-xl overflow-hidden font-semibold">
                        <Link to='/settings' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200 cursor-pointer h-10">Settings</Link>
                        {isLogin ? (
                            <Link
                                to='/login-register'
                                className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200 duration-200 cursor-pointer h-10'
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    setIsDropdownOpen(false);
                                }}
                            >
                                Logout
                            </Link>
                        ) : (
                            <Link
                                to='/login-register'
                                className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200 duration-200 cursor-pointer h-10'
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Login/Register
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}