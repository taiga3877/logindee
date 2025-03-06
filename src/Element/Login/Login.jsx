import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const Logine = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'https://api.fruteacorp.uz/auth/signin',
            data: {
                'phone': phone,
                'password': password
            } 
        }).then(res => {
            localStorage.setItem('accessToken', res.data.data.accessToken.toke)
            toast.success("Misson complete")
            navigate('/')

        }).catch(err => {
            console.log(err)
        }
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white font-mono">
            <form className="w-80 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-6 text-center">Sign In</h1>
                <div className="mb-4 relative">
                    <input 
                        type="text"
                        name="username"
                        placeholder="Phone"
                        className="w-full p-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-400"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-6 relative">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-blue-400"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded"
                    onClick={Logine}
                >
                    Log In
                </button>
            </form>
            <div className="absolute bottom-4 left-0 w-full text-center">
                <a
                    href="https://codepen.io/marko-zub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-white"
                >
                    My other codepens
                </a>
            </div>
        </div>
    );
};

export default LoginForm;