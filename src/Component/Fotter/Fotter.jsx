import React from 'react';
import { motion } from "framer-motion";


function Fotter() {
    return (
        <div className="bg-[#24252A] fixed bottom-0 left-0 w-full py-6">
            <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-between mx-auto px-4">
                {/* Левая часть */}
                <div className="max-w-[500px] text-center md:text-left">
                    <h1 className="font-bold text-5xl text-white">Let's Talk</h1>
                    <p className="text-white text-xl mt-4">
                        Every project starts with a chat. Joven leads our client conversations and will
                        be happy to discuss your project. He will also pull in
                        the right people from the team when needed.
                    </p>
                    <motion.button
                        className="w-[300px] h-[50px] bg-gray-500 rounded-[20px] text-white font-bold mt-6"
                        whileHover={{ scale: 1.1, backgroundColor: "#3266CC" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Tell us about your project
                    </motion.button>
                </div>

                {/* Правая часть */}
                <div className="max-w-[500px] text-white mt-8 md:mt-0">
                    <h2 className="flex gap-4 font-bold text-[20px]">
                        Email:
                        <a href="mailto:taiga3877@gmail.com" className="text-[#3266CC]">taiga3877@gmail.com</a>
                    </h2>
                    <br />
                    <h2 className="flex gap-4 font-bold text-[20px]">
                        Phone:
                        <a href="tel:+998947722032" className="text-[#3266CC]">+998 (94) 772 20 32</a>
                    </h2>
                    <br />
                    <h2 className="flex gap-4 font-bold text-[20px]">
                        Address:
                        <a href="https://www.google.com/search?q=it+time+academy+address"
                            className="text-[#3266CC]">
                            IT Time Academy, Tashkent
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Fotter;
