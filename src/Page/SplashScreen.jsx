import React from "react";
import {useNavigate} from "react-router-dom"

export default function SplashScreen() {

    const navigate = useNavigate()

    // to login
    const toLogin = ()=>{
        navigate("/login")
    }

    
    
    return(
        <main className="w-screen h-screen p-8 bg-gradient-to-t from-blue-400 to-blue-500 flex flex-col">
            <div className="mt-10">
                <h1 className="text-[60px] bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-800 text-center font-bold leading-[60px] ">
                    NawaChat App
                </h1>
                <p className="text-[16px] text-center text-white font-semibold mt-8">
                    aplikasi khusus Chatingan Ama Doi
                </p>
            </div>

            <button className="w-full h-10 bg-black text-white mt-auto rounded-lg z-[100]"
                onClick={toLogin}
            >
                Login Now
            </button>

            <img src="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""
                className="w-screen h-screen object-cover absolute opacity-50 top-0 left-0"
            />
        </main>
    )
};
