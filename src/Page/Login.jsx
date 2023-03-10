import React, {useContext, useEffect} from "react";
import { AvatarContext } from "../context/AvatarContextProvider";
import {useNavigate} from "react-router-dom"

export default function Login() {

    const {avatar,setAvatar} = useContext(AvatarContext)
    const navigate = useNavigate()

    //clc
    useEffect(()=>{
        let user = localStorage.getItem("nawa_chat_user")
        if(user){
            return navigate("/chat")
        }
    },[])

    // ganti avatar sesuai date
    const handleAvatar = ()=>{
        setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`)
    }

    // handle form
    const handleLogin = (e)=>{
        e.preventDefault()
        let username = e.target.username.value
        localStorage.setItem("nawa_chat_user", JSON.stringify({
            id : Date.now(),
            username : username,
            avatar : avatar
        }))
        window.location.href = "/chat"
    }
    
    return(
        <main className="w-screen h-screen p-8 bg-gradient-to-t from-blue-400 to-blue-500 flex flex-col">
            <form className="w-full flex flex-col bg-slate-900/60 shadow-lg rounded-3xl p-6 z-[100] gap-4 mt-[50%]" onSubmit={handleLogin}>

                <div className="relative w-28 mx-auto">
                    <img src={avatar} alt="avatar" className="w-28 h-28 mx-auto" />
                    <button className="w-8 h-8 bg-orange-600 text-white rounded-full absolute -right-3 top-16" type="button"
                        onClick={handleAvatar}
                    >
                        ?
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-white text-2xl">Username</label>
                    <input type="text" id="username" required  className="w-full h-12 px-3 border-[1px] border-gray-400 rounded-2xl" />
                </div>

                <button className="w-full h-12 bg-black text-white rounded-2xl" type="submit">
                    Login
                </button>
            </form>

            <img src="https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""
                className="w-screen h-screen object-cover absolute opacity-50 top-0 left-0"
            />
        </main>
    )
};
