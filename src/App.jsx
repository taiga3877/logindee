import React, { useEffect } from 'react'
import LoginForm from './Element/Login/Login';
import Home from './Element/Home/Home'
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
        const token = localStorage.getItem('accessToken');
        const navigate = useNavigate()
    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    },[token])
    return token ? <Home> <Outlet/> </Home> : <LoginForm/>
}

export default App
