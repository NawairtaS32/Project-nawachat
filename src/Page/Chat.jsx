import React, { useState, useEffect } from "react";
import { AiOutlineLogout, AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import {useNavigate} from "react-router-dom"
import moment from "moment";

function ChatMenu(){

    const navigate = useNavigate()

    // logout
    const handleLogout = ()=>{
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className="w-[30%] flex flex-col fixed top-[70px] right-2 bg-white shadow-lg">
            <div className="flex h-10 w-full justify-between px-3 items-center">
                <AiOutlineSetting /> Setting
            </div>
            <div className="flex h-10 w-full justify-between px-3 items-center" onClick={handleLogout}>
                <AiOutlineLogout /> Logout
            </div>
        </div>
    )
}


export default function Chat() {
    const [showMenu,setShowMenu] = useState(false)
    const [message, setMessage] = useState([
        {
            id : 123123,
            message : "Hallo Sayang",
            createdAt : Date.now(),
                user : {
                    username : "Maria",
                    avatar : "https://api.multiavatar.com/evalia.svg"
                }
        }
    ])
    const [signedUser,setSignedUser] = useState(JSON.parse(localStorage.getItem("nawa_chat_user")))
    const [loading,setLoading] = useState(true)

    // toggle menu
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    // conponent did mount
    useEffect(() => {
        let user = localStorage.getItem("nawa_chat_user")
        if(!user){
            return window.location.href = "/"
        }
        setLoading(false)
    }, []);

    // scroll to bottom
    const scrollToBottomMsg = ()=>{
        let docH = document.body.scrollHeight
        window.scrollTo(0, docH )
    }

    // Handle message
    const handleMessage = (e)=>{
        e.preventDefault()
        let msg = e.target.message.value
        if (!msg) {
            return
        }
        let user = JSON.parse(localStorage.getItem("nawa_chat_user")) 
        e.target.message.value=""
        setMessage ([...message, {
                id : Date.now(),
                message : msg,
                createdAt : Date.now(),
                user : user
        }])

        scrollToBottomMsg()
    }   

    if(loading){
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                loading..
            </div>
        )
    }
    
    return(
        <main className="w-screen h-screen flex flex-col">
            <header className="w-full h-16 px-6 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-700 fixed top-0 left-0">
                <div className="flex gap-2 text-white items-center">
                    <img src={signedUser?.avatar} alt="avatar"
                        className="w-10 h-10"
                    />
                    <h1>@{signedUser?.username}</h1>
                </div>
                <AiOutlineMenu className="text-2xl text-white" onClick={toggleMenu}/>

            </header>

            {showMenu && <ChatMenu />}

            <div className="w-full mt-auto flex flex-col py-[80px] px-3 gap-2">
                {message.map((e) => {
                    return (
                        <div className={`w-auto p-4 bg-white flex flex-col rounded-lg shadow-md max-w-[40%] 
                            ${e.user.username !== signedUser.username ? "mr-auto" : "ml-auto"} last:mb-20`} key={e.id}>
                            <p className={`${e.user.username !== signedUser.username ? "text-left" : "text-right" }`}>
                                {e.message}
                            </p>
                            <div className="mt-4 flex gap-2 items-center">
                                    <img src={e.user.avatar} alt="" className="w-5 h-5" />
                                    <div className="flex flex-col text-gray-400">
                                        <small className="text-[14px]">{e.user.username}</small>
                                        <small className="text-[8px]">{moment(e.createdAt).format("dddd DD/MM/YYYY hh:mm")}</small>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <form className="w-full h-16 flex px-6 items-center bg-gradient-to-r from-orange-500 to-orange-700 fixed bottom-0 left-0 gap-1" onSubmit={handleMessage}>
                <input type="text" className="rounded-full px-4 bg-white h-10 flex-1" id="message" />
                <button className="h-10 w-10 bg-blue-500 text-white rounded-full">
                    {">"}
                </button>
            </form>

        </main>
    )
};
