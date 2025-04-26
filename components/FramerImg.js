"use client"
import React from "react"
import { motion } from "framer-motion"
import { useState,useEffect } from "react"

const Framer=({className,images,valueInit,valueAnim,valueExit,valueTran})=>{
    
    const [index, setIndex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % images.length)
        }, 3000)
        return ()=> clearInterval(interval)
    },[images.length])

    return(
        <motion.img
        key={index}
        src={images[index]}
        alt={"Transition image"}
        className={className}
        initial={{...valueInit,opacity:0}}
        animate={{...valueAnim,opacity:1}}
        exit={{...valueExit,opacity:0}}
        transition={{...valueTran}}
        />
    
    )
}

export default Framer;