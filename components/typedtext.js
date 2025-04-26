"use client"
import React from "react"
import Typed from "typed.js"
import { useEffect, useRef } from "react"

const TypedText=({firstText, secondText, thirdText,fourthText,fifthText,className})=>{
  const typedElement = useRef(null)
  const typedInstance = useRef(null)

  useEffect(()=>{
    typedInstance.current= new Typed(typedElement.current, {
        strings:[
            firstText,
            secondText,
            thirdText,
            fourthText,
            fifthText
        ],
        typedSpeed:50,
        backSpeed:30,
        loop:true,
        backDelay:1500

    });
    return()=>{
        typedInstance.current.destroy()
    }
  },[firstText,secondText,thirdText,fourthText,fifthText])
  
  return(
<>
<span ref={typedElement} className={className}></span>
</>
  )
}

export default TypedText;