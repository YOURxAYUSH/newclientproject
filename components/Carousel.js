"use client"
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Carousel=({images})=>{
    const[isPaused, setIsPaused] = useState(false)
    const[selectedImage, setSelectedImage]= useState(null)

    return(
        <div className="relative w-full overflow-hidden">
       
        <motion.div
          className="flex gap-10"
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
              className="w-64 h-64 object-cover cursor-pointer rounded-xl"
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(img)}
              
            /> 
             <p className="mt-2 w-64 overflow-hidden text-center font-semibold text-sm">{img.title}</p>
            </div>
          ))}
         
        </motion.div>
  
       
        {selectedImage && (
          <div className="absolute inset-0 flex items-center justify-center  bg-white bg-opacity-50">
            <div className="bg-white p-4 rounded-lg border-2 border-black shadow-lg">
              <h2 className="text-2xl font-bold mb-3"> {selectedImage.title}</h2>
              <div className="flex items-center gap-4"><h2 className="text-xl text-blue-900 font-bold ">Course ID :</h2><p>{selectedImage.courseId}</p></div>
              <div className="flex items-center gap-4"><h2 className="text-xl text-blue-900 font-bold ">Eligibility :</h2><p>{selectedImage.eligibility}</p></div>
              <div className="flex items-center gap-4"><h2 className="text-xl  text-blue-900 font-bold ">Duration   :</h2><p>{selectedImage.duration}</p></div>
              <div className="flex items-center gap-4"><h2 className="text-xl text-blue-900 font-bold ">Overview :</h2><p>{selectedImage.description}</p></div>
              <div className="flex gap-10">
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => setSelectedImage(null)}>
                Close
              </button>
              <div className="mt-4 w-19 px-3 py-2 bg-blue-500 text-white rounded">
                <Link href={"/register"}>
                Register
                </Link>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </div>
    )
}

export default Carousel;