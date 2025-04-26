import React from 'react'
import Image from 'next/image'
import { Bungee_Tint } from "next/font/google"
import TypedText from './typedtext';


const bungeeTint = Bungee_Tint({ subsets: ["latin"], weight: "400" });
const Header = () => {
  return (
    <div>
      <div className="h-[35vh] w-full bg-gradient-to-r  from-[#00d4ff] via-[#4A69BD] to-[#090979]  text-neutral-200 flex md:flex-row flex-col items-center justify-center  md:justify-normal md:gap-4  gap-0">
        <div className="md:ml-20 flex items-center justify-center">
          <Image width={230} height={340} src={"/second logo.png"} className="md:mb-8 mb-1 md:w-50 md:h-50 w-40 h-40" alt="secureacademylogo" />
        </div>
        <div className="flex flex-col items-center md:gap-4 gap-2 ">
          <div className={`md:text-5xl text-2xl text-red-500 font-extrabold ${bungeeTint.className}`}>
            Secure Future Skill Academy
          </div>
          <div className="md:text-5xl text-3xl md:text-blue-400 font-extrabold">
            सुरक्षित भविष्य कौशल संस्थान
          </div>
          <div>
            <TypedText firstText={"सुरक्षित भविष्य की ओर बढ़ें... "} secondText={"अपने करियर को नई ऊंचाइयों पर ले जाएं..."} thirdText={"व्यावसायिक कौशल सीखें, सफलता पाएं..."} fourthText={"आज सीखें, कल संवारें..."} fifthText={"ट्रेनिंग से जॉब तक – आपका सफर यहीं से शुरू होता है..."} className={"text-amber-400 font-bold text-md md:text-xl"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
