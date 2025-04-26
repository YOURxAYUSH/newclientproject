"use client"
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";


const Carousel2=({images})=>{
    const[isPaused, setIsPaused] = useState(false)
    

    return(
        <div className="relative w-full overflow-hidden">
       
        <motion.div
          className="flex gap-10 "
          animate={{ x: [0, "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ display: "flex", width: "200%" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          whileHover={{ x: isPaused ? "0%" : "100%" }}
        >  
          {[...images, ...images].map((img, index) => (
            <div key={index} className="flex flex-col">
            <motion.img
              src={img.src}
              alt={img.title}
              className="w-64 h-64 border-2 border-[whitesmoke] shadow object-cover cursor-pointer rounded-xl"
              whileTap={{ scale: 0.9 }}
            
              
            /> 
             <p className="mt-2 w-64 overflow-hidden text-center font-semibold text-xl">{img.title}</p>
            </div>
          ))}
         
        </motion.div>
  
       
      </div>
    )
}

export default Carousel2;