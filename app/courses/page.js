import React from "react"
import { Bungee_Tint } from "next/font/google";
import Link from 'next/link'
import FAQ2s from "@/components/Faq2";

const bungeeTint = Bungee_Tint({subsets: ["latin"], weight: "400"})
const page=()=>{
   
    const images = [
        { 
            courseId: "CCE/Q1011",
            src: "/certificationHVAC.jpg", 
            title: "Certificate in HVAC Technician", 
            description: "Learn the fundamentals of Heating, Ventilation, and Air Conditioning (HVAC) systems with hands-on training.",
            eligibility: "10th Pass or Equivalent",
            duration: "6 Months",
            original: "₹15,000",
            discount: "₹10,000"
        },
        { 
            courseId: "CCE/Q1012",
            src: "/CertificationInHR.jpg", 
            title: "Certificate in HR Management", 
            description: "Develop essential HR skills, including recruitment, employee relations, and workplace policies.",
            eligibility: "12th Pass or Graduate",
            duration: "3 Months",
            original: "₹19,000",
            discount: "₹13,000"
        },
        { 
            courseId: "CCE/Q1013",
            src: "/homescience.jpg", 
            title: "Advanced Diploma in Home Science", 
            description: "Explore nutrition, family resource management, textiles, and home management techniques.",
            eligibility: "12th Pass",
            duration: "1 Year",
            original: "₹18,000",
            discount: "₹9,000"
        },
        { 
            courseId: "CCE/Q1014",
            src: "/makeup.jpg", 
            title: "Makeup & Beauty Course", 
            description: "Master makeup artistry techniques, skincare basics, and beauty industry trends in this short-term course.",
            eligibility: "No Formal Education Required",
            duration: "3 Months",
            original: "₹10,000",
            discount: "₹5,000"
        },
        { 
            courseId: "CCE/Q1015",
            src: "/certificationInIndustrialSafety.jpg", 
            title: "Certificate in Industrial Safety", 
            description: "Learn workplace safety regulations, risk assessment, and emergency response procedures.",
            eligibility: "12th Pass or Diploma Holders",
            duration: "6 Months",
            original: "₹20,000",
            discount: "₹15,000"
        },
        { 
            courseId: "CCE/Q1016",
            src: "/diplomaInOfficeAssistant.jpg", 
            title: "Diploma in Office Assistanship", 
            description: "Gain practical knowledge in office administration, communication, and organizational skills.",
            eligibility: "10th Pass",
            duration: "6 Months",
            original: "₹20,000",
            discount: "₹15,000"
        },
        { 
            courseId: "CCE/Q1017",
            src: "/certificationIntellint.jpg", 
            title: "AI Chatbots with Python", 
            description: "Build AI-powered chatbots using Python and natural language processing techniques.",
            eligibility: "Basic Programming Knowledge",
            duration: "3 Months",
            original: "₹40,000",
            discount: "₹30,000"
        },
        { 
            courseId: "CCE/Q1018",
            src: "/certificationInHospitalFront.jpg", 
            title: "Certificate in Hospital Coordinator", 
            description: "Prepare for a front desk role in hospitals by learning patient coordination and administrative tasks.",
            eligibility: "12th Pass",
            duration: "6 Months",
            original: "₹15,000", 
            discount: "₹10,000" 
        },
        { 
            courseId: "CCE/Q1019",
            src: "/airPortManagement.jpg", 
            title: "Diploma in Airport Management", 
            description: "Understand airport operations, customer service, and aviation management principles.",
            eligibility: "12th Pass",
            duration: "1 Year",
            original: "₹40,000",
            discount: "₹33,000"
        },
        { 
            courseId: "CCE/Q1020",
            src: "/customerService.jpg", 
            title: "Customer Care Executive Course", 
            description: "Enhance your communication and problem-solving skills for a successful career in customer service.",
            eligibility: "10th Pass",
            duration: "3 Months",
            original: "₹40,000",
            discount: "₹30,000"
        },
        { 
            courseId: "CPD/Q1021",
            src: "/GroomingAndPersonality.jpg", 
            title: "Personality Development Course", 
            description: "Improve confidence, communication, and etiquette with this personality enhancement course.",
            eligibility: "No Formal Education Required",
            duration: "2 Months",
            original: "₹15,000", 
            discount: "₹10,000" 
        },
        { 
            courseId: "CCE/Q1022",
            src: "/travel.jpg", 
            title: "Diploma in Travel & Tourism", 
            description: "Learn travel management, ticketing, and tourism operations to build a career in the travel industry.",
            eligibility: "12th Pass",
            duration: "1 Year",
            original: "₹40,000",
            discount: "₹33,000"
        },
        { 
            courseId: "CCE/Q1023",
            src: "/DiplomaInTally.jpg", 
            title: "Diploma in Tally ERP 9.0", 
            description: "Master Tally ERP software for accounting, GST, and financial management.",
            eligibility: "12th Pass or Commerce Background Preferred",
            duration: "6 Months",
            original: "₹9,000",
            discount: "₹4,500"
        },
        { 
            courseId: "CCE/Q1024",
            src: "/certificateHospitalHouse.jpg", 
            title: "Certification in Hospital Housekeeping", 
            description: "Understand hospital hygiene, sanitation, and infection control best practices.",
            eligibility: "10th Pass",
            duration: "3 Months",
            original: "₹9,000",
            discount: "₹4,000"
        },
        { 
            courseId: "CCE/Q1025",
            src: "/CertificationInReciepsnist.jpg", 
            title: "Certification in Receptionist", 
            description: "Develop professional receptionist skills, including communication and office management.",
            eligibility: "12th Pass",
            duration: "3 Months",
            original: "₹15,000",
            discount: "₹8,000"
        },
        { 
            courseId: "CCE/Q1026",
            src: "/ccc.jpg", 
            title: "Certificate in Computer Concepts (CCC)", 
            description: "Learn basic computer applications, internet usage, and digital literacy skills.",
            eligibility: "10th Pass",
            duration: "3 Months",
            original: "₹12,000",
            discount: "₹5,000"
        },
        { 
            courseId: "CCE/Q1027",
            src: "/nursing.jpg", 
            title: "Certificate in Nursery Teacher (NTT)", 
            description: "Train in early childhood education, classroom management, and child development.",
            eligibility: "12th Pass",
            duration: "1 Year",
            original: "₹18,000",
            discount: "₹10,000"
        },
        { 
            courseId: "CCE/Q1028",
            src: "/artcrart.jpg", 
            title: "Certification in Art & Craft Trainer", 
            description: "Learn various art techniques and creative skills to become an art & craft instructor.",
            eligibility: "No Formal Education Required",
            duration: "6 Months",
            original: "₹10,000",
            discount: "₹5,000"
        }
    ];
    
  



return(
    <>
   <div>
   <div className={`text-5xl  mt-10 border-2 ml-[25%] border-neutral-100 w-fit align-middle py-4 px-10 shadow-2xl inset-1 mr-2 rounded-xl bg-white mb-24 text-red-500 font-extrabold ${bungeeTint.className}`}>
Explore Our Courses
</div>
<div className="bg-blue-900 w-full h-fit px-20 py-4 mb-30 mt-10 z-10 border-2 border-blue-950 overflow-hidden text-[whitesmoke] font-bold text-2xl">
<span className="moving-text">Payments are accepted only through the secure link on this website |  No other payment method is valid | Hurry! No-cost EMI options available | Limited Time Offer! </span>  
</div>
<div className="flex flex-wrap  justify-around items-center ">
{images.map((img , index)=>(
    <div key={index} className="mb-10">
    <div className=" cursor-pointer h-fit text-[whitesmoke] w-[30vw] rounded-xl shadow-2xl border-2 border-[black]  bg-gradient-to-r from-[#4e63df] to-[#1c7ed6]">
      <div>
        <img className="object-cover mb-2 w-[30vw] h-[40vh] rounded-t-xl " alt="courses-img" src={`${img.src}`}></img>
      </div>
      <div className="text-xl flex items-center justify-center font-bold">
        {img.title}
      </div>
      <div className="flex flex-col text-lg ml-2 mt-2 font-semibold  overflow-hidden ">
        <div className="mb-2">
           <span className="text-2xl underline underline-offset-4">Details</span>  :-
        </div>
        <div>
        Course ID : {img.courseId}
        </div>
        <div>
            Eligibility : {img.eligibility}
        </div>
        <div>Duration: {img.duration}</div>
        <div>
         Course Fee : <span className="line-through mr-2 decoration-white">{img.original} </span>   {img.discount}  (Limited-Time)
        </div>
        
      </div>
      <div className="text-sm m-3 mb-4 ">
      {img.description}
      </div>
      <div className="bg-blue-500 ml-3 relative z-10 hover:px-10 hover:py-4 hover:bg-blue-800  w-fit mb-2 h-fit px-4 py-2 rounded-xl border-2 border-blue-900 shadow-2xl  ">
        <Link href='/register-yourself'>
    Enroll Now
        </Link>
      </div>
    </div>
    </div>

))}
</div>
<div className={`text-5xl  text-red-500 flex justify-center mt-20  mb-20 font-extrabold ${bungeeTint.className}`}>WHY CHOOSE US ? </div>
<div className="mb-30">
    <FAQ2s />
</div>
</div>
    </>
)


}

export default page;