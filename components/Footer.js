import React from 'react'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <div>
      <section className=" bg-neutral-200 h-[fit] w-full gap-4 pt-20 pb-28 flex justify-around items-center " >
<div className="md:flex flex-col gap-4 w-28vw  hidden">
<div className="text-black mb-6 font-bold text-2xl">
Top Courses
</div>
<div className="text-md text-black ">
ADCA (Advanced Diploma in Computer Applications)
</div>
<div className="text-md text-black ">
PGDCA (Post Graduate Diploma in Computer Applications)
</div>
<div className="text-md text-black ">
Diploma in Financial Accounting and Networking
</div>
<div className="text-md text-black ">
Diploma in Computer Hardware
</div>
<div className="text-md text-black ">
Diploma in Industrial Safety
</div>
<div className="text-md text-black ">
Advance Diploma in Event Management
</div>
<div className="text-md text-black ">
Diploma in Import and Export Management
</div>
</div>
<div className="md:flex hidden flex-col gap-4 w-28vw">
<div className="text-black mb-6 font-bold text-2xl">
Course Categories
</div>
<div className="text-md text-black ">
Diploma in Business Management
</div>
<div className="text-md text-black ">
Advanced Diploma in GST
</div>
<div className="text-md text-black ">
Diploma in Advertising & AR
</div>
<div className="text-md text-black ">
Diploma in Sales & Marketing
</div>
<div className="text-md text-black ">
Diploma in Vastu Shastra
</div>
<div className="text-md text-black ">
Diploma in Secretarial Practice
</div>
<div className="text-md text-black ">
Diploma in Advance Farming Methods
</div>
</div>
<div className="flex flex-col gap-3  w-28vw">
<div className="text-black  text-3xl md:ml-6  mb-4 mt-0 md:mt-5 font-bold md:text-2xl">
Contact Us
</div>
<div className="text-md gap-6 items-center text-black  flex ">
<img className="md:w-24 w-35 md:mb-0 mb-10 h-35 md:h-24" src="/second logo.png" alt="logo" ></img>
<div className="md:w-[25vw] w-[70vw] md:mb-0 mb-5">Secure Future Skill Academy which is powered by <strong>SFSA Secure Future Skill Academy </strong>LLP is the name that is recognized for its commitment to providing high-quality training, skill development programs and a strong focus on student success </div>
</div>
<div className="text-md  text-black md:ml-0 ml-10">
Head Office: 120/1, Highway NH-30, Near Faridpur<br/>
Bareilly, Uttar Pradesh, INDIA-245003
</div>
<div className="text-md  text-black md:ml-0 ml-10 ">
Contact No: <strong> +91-9599619457 </strong>(For Admission)<br/>
Email id: <strong>Securefutureacademy0@gmail.com</strong>
</div>
<div className="text-md  text-black md:ml-0 ml-10 ">
Office Hours: 10 AM to 6 PM
</div>



</div>
</section>
<div className=' mt-1 md:ml-[7%] ml-3 md:mr-0 mr-2 text-xs  md:text-sm'>
  
  &copy; 2023 - {year} All Rights reserved by Secure Future Skill Private Limited.  Secure Future Skill Academy is a soft-skills training institute and does not provide any job guarantee.
</div>
    </div>
  )
}

export default Footer
