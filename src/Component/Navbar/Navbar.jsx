import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate()
  const LogOut = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }
  return (
    <div className='bg-[#24252A]'>
      <div className='w-[1400px] h-[75px] m-auto flex items-center justify-between'>
        <h1 className='text-white text-2xl font-bold'>LOGOBAKERY</h1>
        <ul className='flex gap-[30px] text-gray-400'>
          <NavLink className='font-bold ' to="/">Home</NavLink>
          <NavLink className='font-bold ' to=" /baner">Banner</NavLink>
        </ul>
        <motion.button
          className="w-[130px] h-[35px] bg-[#3266CC] rounded-[20px] text-white text-center font-bold"
          whileHover={{ scale: 1.1, backgroundColor: "#3266CC" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={LogOut}
        >
          Log Out
        </motion.button>
      </div>
    </div>
  )
}

export default Navbar