import React from 'react'
import { Bungee_Tint } from 'next/font/google'
import TypedText from '@/components/typedtext'
import WhyChoose from '@/components/WhyChoose'
import Carousel2 from '@/components/Carousel2'

const bungeeTint = Bungee_Tint({subsets:["latin"], weight:"400"})
const page = () => {

    const images= [
        {src:"iso.png",title:"ISO : 9001"},
        {src:"msme.jpg", title:"MSME Bharat"},
        {src:"sikkim.jpg",title:"Sikkim Government"},
        {src:"niti.jpg",title:"Niti Aayog Bharat"},
        {src:"bharat.png",title:"Government Of INDIA"},
        {src:"iso.png",title:"ISO : 9001"},
        {src:"msme.jpg", title:"MSME Bharat"},
        {src:"sikkim.jpg",title:"Sikkim Government"},
        {src:"niti.jpg",title:"Niti Aayog Bharat"},
        {src:"bharat.png",title:"Government Of INDIA"},
  
  
      ]
  return (
    <div>

<div className={`text-5xl  mt-10 border-2 ml-[6%] border-neutral-100 w-fit align-middle py-4 px-10 shadow-2xl inset-1 mr-2 rounded-xl bg-white mb-24 text-red-500 font-extrabold ${bungeeTint.className}`}>
ABOUT Secure Future Skill Academy
</div>
<div className="bg-blue-900 w-full h-fit px-20 py-4 mb-30 mt-10 z-10 border-2 border-blue-950 overflow-hidden text-[whitesmoke] font-bold text-2xl">
<span className="moving-text">Payments are accepted only through the secure link on this website |  No other payment method is valid | Hurry! No-cost EMI options available | Limited Time Offer! </span>  
</div>
<div>
    <TypedText className={"mb-10 text-blue-900 text-3xl font-bold flex justify-center"} firstText={"Shaping Futures Building Careers"} secondText={"Paving the Way for Professional Excellence"} thirdText={"Unlock Your Potential, Transform Your Future"} fourthText={"Innovating Education for Career Success"} fifthText={"Master New Skills, Advance Your Career Path"}/>
</div>
<section className='bg-gray-50 flex flex-col gap-20 w-full overflow-hidden h-fit pt-20 pb-30'>


<div className='text-black  px-2 py-4 border-2 border-[whitesmoke] shadow-2xl rounded-xl ml-5 mr-5 text-2xl bg-white'>
At <strong>Secure Future Skill Academy</strong>, we are committed to shaping your future by providing high-quality, industry-relevant education. As an <strong>ISO certified </strong>and <strong>MCA registered </strong> institution, we specialize in offering online short-term courses designed to enhance your skills and prepare you for the demands of the modern workforce. Our diverse course offerings include <strong>Computer Courses, Airport Management, Tally, Digital Marketing, Software Development, and IT Training,</strong> ensuring that you gain the practical knowledge and expertise needed to excel in your chosen career path.
</div>
<div className='text-black  px-2 py-8 border-2 border-[whitesmoke] shadow-2xl rounded-xl ml-5 mr-5 text-2xl bg-white'>
  At <strong>Secure Future Skill Academy</strong>, we believe in hands-on learning and real-world experience. Our courses are curated by <strong>industry professionals </strong>and designed to provide you with the skills necessary to succeed in today’s fast-paced job market. With a focus on <strong>practical knowledge</strong>, each program is crafted to offer you a <strong>competitive edge</strong>, whether you're entering the workforce for the first time or looking to <strong>upskill in your current profession</strong>. Join us and take the first step towards a brighter, more secure future.
</div>
<div  className='text-black  px-2 py-8 border-2 border-[whitesmoke] shadow-2xl rounded-xl ml-5 mr-5 text-2xl bg-white'>
<strong>Secure Future Skill Academy</strong> is dedicated to bridging the gap between education and employment. With a wide range of <strong>online courses </strong>that fit into your busy schedule, we make it easy for you to gain essential skills without compromising your current commitments. Our courses are designed to be <strong>flexible, affordable, and impactful,</strong> giving you the opportunity to <strong>learn at your own pace</strong> while preparing for the future. Get ready to start your journey with us and<strong> become an in-demand professional</strong> in your field.
</div>


</section>

<div>
    <WhyChoose text={" At SEcure Future Skill Academy We Offer :"}/>
</div>
<div>
<div className="h-fit pt-20 w-full ">
      <div className={`text-5xl  align-middle ml-[25%] text-red-500 font-extrabold ${bungeeTint.className}`}> We are certified by :</div>
     <div className="pb-30 pt-30">
      < Carousel2 images={images}/></div>
    </div>
</div>
<div className='text-blue-900 mt-10 font-extrabold text-xl flex justify-center'>
At Secure Future Skill Academy, we don’t just teach – we empower you to build a secure and successful future. 
</div>
<div className='text-blue-900 font-extrabold text-xl flex justify-center mb-5'>
Join us and take the first step toward achieving your career goals!
</div>
    </div>
  )
}

export default page
