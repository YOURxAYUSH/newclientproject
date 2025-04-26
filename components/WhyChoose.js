import React from 'react'
import { Bungee_Tint } from 'next/font/google'


const bungeeTint = Bungee_Tint({subsets:["latin"], weight:"400"})
const WhyChoose = ({text}) => {
  return (
    <div>
      <div className={`text-5xl mt-10 border-2 border-neutral-100  align-middle py-2 px-5 ml-2 shadow inset-1 mr-2 rounded-xl bg-white mb-24 text-red-500 font-extrabold ${bungeeTint.className}`}>
{ text ? `${text}`: "Why Choose Secure Future Skill Academy?" }
</div>
<section className="bg-[#fcfcfc] pt-10 pb-10 flex  justify-around">
  <div>
<div className="flex gap-5 items-center justify-center mb-2  border-2 border-[whitesmoke] shadow  w-fit px-20 py-4 bg-red-600 rounded-4xl ml-6">
<div>
  <img alt="securefuture" src="/industry.jpg" className=" border-2 border-[whitesmoke] rounded-full w-20 h-20 object-center"></img>
</div>
<div>
<div className="text-2xl font-bold text-[whitesmoke] ">
Industry-Ready Skills
</div>
<div className="text-[whitesmoke] text-sm w-[40vw]">
Our courses offer practical knowledge through hands-on training, projects, and case studies, preparing you to apply your skills in real-world jobs or ventures.
</div>
</div>
</div>
<div className="flex gap-5 items-center justify-center mb-2 w-fit px-20 py-4 bg-blue-600 border-2 border-[whitesmoke] shadow rounded-4xl ml-6">
<div>
  <img alt="securefuture" src="/story.jpg"  className=" border-2 border-[whitesmoke] rounded-full w-20 h-20 object-center"></img>
</div>
<div>
<div className="text-2xl font-bold text-[whitesmoke] ">
Government Authorized Certificate
</div>
<div className="text-[whitesmoke] text-sm w-[40vw]">
Our courses provide you with a government-recognized certificate, validating your education and skills.
</div>
</div>
</div>
<div className="flex gap-5 items-center justify-center mb-2 w-fit px-20 py-4 bg-red-600 border-2 border-[whitesmoke] shadow rounded-4xl ml-6">
<div>
  <img src="/globee.jpg" alt="bharat" className=" border-2 border-[whitesmoke] rounded-full w-20 h-20 object-center"></img>
</div>
<div>
<div className="text-2xl font-bold text-[whitesmoke] ">
Learn Anytime, Anywhere
</div>
<div className="text-[whitesmoke] text-sm w-[40vw]">
Access our courses at your convenience, from anywhere, at anytime and learn at your own pace. 
</div>
</div>
</div>
<div className="flex gap-5  items-center justify-center  w-fit px-20 py-4 bg-blue-600 border-2 border-[whitesmoke] shadow rounded-4xl ml-6">
<div>
  <img src="/isooo.avif" alt="bharat" className=" border-2 border-[whitesmoke] rounded-full w-20 h-20 object-center"></img>
</div>
<div>
<div className="text-2xl font-bold text-[whitesmoke] ">
ISO Certified
</div>
<div className="text-[whitesmoke] text-sm w-[40vw] ">
We are ISO certified, ensuring the highest standards of quality and excellence in education.</div>
</div>
</div>
</div>
<div>
<img alt="securefuture" src="/femalest.avif" className="h-[80vh] rounded-lg mt-3"></img>
</div>
</section>
    </div>
  )
}

export default WhyChoose
