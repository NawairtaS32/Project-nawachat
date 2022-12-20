import React from "react";
import {Routes, Route} from 'react-router-dom'
import Chat from "./Page/Chat";
import Login from "./Page/Login";
import SplashScreen from "./Page/SplashScreen";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="*" element={<h1>halaman belum ada</h1>}/>
        </Routes>
    )
};
