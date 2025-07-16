import "../index.css"
import logo from "../assets/sunowlnew.png"

export default function LoginRegister () {
    return (

        <div className="
            max-w-[411px] min-w-[375px] h-screen py-8
            border border-gray-200 rounded-4xl shadow-lg
            mx-auto 
            bg-white
            relative">
            <div className="flex justify-center mt-8">
                <img src={logo} alt="Sunowl logo" width="350" height="auto" />
            </div>
            <div className="bg-yellow-500 py-16 px-6 rounded-t-[48px] absolute bottom-0 inset-x-0">
                <div className="space-y-3 font-sans text-justify">
                    <h1 className="text-3xl font-extrabold flex items-center">Welcome</h1>
                    <p className="font-semibold">Selamat datang di Sunowl Stories, untuk menikmati semua fitur di website ini silahkan Login dulu ya, kalau kamu belum punya akun yuk silahkan Register dulu.</p>
                </div>
                <div className="flex justify-center space-x-8 mt-12">
                    <a 
                    href=""
                    className="w-50 text-center bg-black text-white font-bold px-12 py-4 rounded-full  hover:scale-105 transition-all duration-200"
                    >Login</a>
                    <a 
                    href=""
                    className="w-50 text-center bg-white text-black font-bold px-12 py-4 rounded-full  hover:scale-105 transition-all duration-300"
                    >Register</a>
                </div>
            </div>
        </div>
  
    )
}