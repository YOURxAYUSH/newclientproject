import React from "react"
import TypedText from "@/components/typedtext"
import Framer from "@/components/FramerImg"
import { Bungee_Tint } from "next/font/google"
import Carousel from "@/components/Carousel"
import Carousel2 from "@/components/Carousel2"
import FAQs from "@/components/Faq"
import WhyChoose from "@/components/WhyChoose"




const bungeeTint = Bungee_Tint({ subsets: ["latin"], weight: "400" });
function Homepage() {
  const images = ["/WhatsApp Image 2025-03-26 at 23.37.19.jpeg" ,
    "/WhatsApp Image 2025-03-26 at 23.40.08.jpeg" ,
    "/WhatsApp Image 2025-03-26 at 23.40.09 (1).jpeg"  ,
    "/WhatsApp Image 2025-03-26 at 23.40.09 (2).jpeg" ,
    "/WhatsApp Image 2025-03-26 at 23.40.09.jpeg"]

    const images2=["/a6.jpg","/a7.jpg","/a4.jpg"]

    const images3=[  
      { 
        courseId: "CCE/Q1011",
        src: "/certificationHVAC.jpg", 
        title: "Certificate in HVAC Technician", 
        description: "Learn the fundamentals of Heating, Ventilation, and Air Conditioning (HVAC) systems with hands-on training.",
        eligibility: "10th Pass or Equivalent",
        duration: "6 Months"
      },
      { 
        courseId: "CCE/Q1012",
        src: "/CertificationInHR.jpg", 
        title: "Certificate in Human Resource Management", 
        description: "Develop essential HR skills, including recruitment, employee relations, and workplace policies.",
        eligibility: "12th Pass or Graduate",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1013",
        src: "/homescience.jpg", 
        title: "Advanced Diploma in Home Science", 
        description: "Explore nutrition, family resource management, textiles, and home management techniques.",
        eligibility: "12th Pass",
        duration: "1 Year"
      },
      { 
        courseId: "CCE/Q1014",
        src: "/makeup.jpg", 
        title: "Basic 3-Month Online Makeup & Beauty Course", 
        description: "Master makeup artistry techniques, skincare basics, and beauty industry trends in this short-term course.",
        eligibility: "No Formal Education Required",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1015",
        src: "/certificationInIndustrialSafety.jpg", 
        title: "Certificate in Industrial Safety", 
        description: "Learn workplace safety regulations, risk assessment, and emergency response procedures.",
        eligibility: "12th Pass or Diploma Holders",
        duration: "6 Months"
      },
      { 
        courseId: "CCE/Q1016",
        src: "/diplomaInOfficeAssistant.jpg", 
        title: "Diploma in Office Assistanship", 
        description: "Gain practical knowledge in office administration, communication, and organizational skills.",
        eligibility: "10th Pass",
        duration: "6 Months"
      },
      { 
        courseId: "CCE/Q1017",
        src: "/certificationIntellint.jpg", 
        title: "Certificate in Developing Intelligent Chatbots with Python", 
        description: "Build AI-powered chatbots using Python and natural language processing techniques.",
        eligibility: "Basic Programming Knowledge",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1018",
        src: "/certificationInHospitalFront.jpg", 
        title: "Certificate in Hospital Front Desk Coordinator", 
        description: "Prepare for a front desk role in hospitals by learning patient coordination and administrative tasks.",
        eligibility: "12th Pass",
        duration: "6 Months"
      },
      { 
        courseId: "CCE/Q1019",
        src: "/airPortManagement.jpg", 
        title: "Diploma in Airport Management", 
        description: "Understand airport operations, customer service, and aviation management principles.",
        eligibility: "12th Pass",
        duration: "1 Year"
      },
      { 
        courseId: "CCE/Q1020",
        src: "/customerService.jpg", 
        title: "Customer Care Executive Course", 
        description: "Enhance your communication and problem-solving skills for a successful career in customer service.",
        eligibility: "10th Pass",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1021",
        src: "/GroomingAndPersonality.jpg", 
        title: "Grooming & Personality Development Course", 
        description: "Improve confidence, communication, and etiquette with this personality enhancement course.",
        eligibility: "No Formal Education Required",
        duration: "2 Months"
      },
      { 
        courseId: "CCE/Q1022",
        src: "/travel.jpg", 
        title: "Diploma in Travel & Tourism", 
        description: "Learn travel management, ticketing, and tourism operations to build a career in the travel industry.",
        eligibility: "12th Pass",
        duration: "1 Year"
      },
      { 
        courseId: "CCE/Q1023",
        src: "/DiplomaInTally.jpg", 
        title: "Diploma in Tally ERP 9.0", 
        description: "Master Tally ERP software for accounting, GST, and financial management.",
        eligibility: "12th Pass or Commerce Background Preferred",
        duration: "6 Months"
      },
      { 
        courseId: "CCE/Q1024",
        src: "/certificateHospitalHouse.jpg", 
        title: "Certification in Hospital Housekeeping", 
        description: "Understand hospital hygiene, sanitation, and infection control best practices.",
        eligibility: "10th Pass",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1025",
        src: "/CertificationInReciepsnist.jpg", 
        title: "Certification in Receptionist", 
        description: "Develop professional receptionist skills, including communication and office management.",
        eligibility: "12th Pass",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1026",
        src: "/ccc.jpg", 
        title: "Certification in Computer Concepts (CCC)", 
        description: "Learn basic computer applications, internet usage, and digital literacy skills.",
        eligibility: "10th Pass",
        duration: "3 Months"
      },
      { 
        courseId: "CCE/Q1027",
        src: "/nursing.jpg", 
        title: "Certification in Nursery Teacher Training (NTT)", 
        description: "Train in early childhood education, classroom management, and child development.",
        eligibility: "12th Pass",
        duration: "1 Year"
      },
      { 
        courseId: "CCE/Q1028",
        src: "/artcrart.jpg", 
        title: "Certification in Art & Craft Trainer", 
        description: "Learn various art techniques and creative skills to become an art & craft instructor.",
        eligibility: "No Formal Education Required",
        duration: "6 Months"
      }
    ]

    const images4=[
      {
        src:"/formsfill.avif",title:"Register Yourself"
      },
      {
        src:"/arrow.jpg",title:"Next Step"
      },
      {
        src:"/myupload.avif",title:"Upload Documents"
      },
      {
        src:"/arrow.jpg",title:"Next Step"
      },
      {
        src:"/payfeees.jpg",title:"Pay Fees"
      },
      {
        src:"/arrow.jpg",title:"Next Step"
      },
      {
        src:"/onlineed.avif",title:"Access LMS"
      },
      {
        src:"/arrow.jpg",title:"Next Step"
      }
    ]

    const answers=[
       "Secure Future Skill Academy is an MCA-registered and ISO-certified institute dedicated to providing high-quality online courses focused on skill development and vocational training. Our short-term courses are designed to enhance your skills and help secure a brighter future in today's competitive world.",
       "Being MCA-registered means that Secure Future Skill Academy is officially recognized by the Ministry of Corporate Affairs, ensuring our legitimacy and adherence to corporate regulations. Our ISO certification signifies that we meet international standards for quality management systems, reflecting our commitment to delivering high-quality education.",
       "We offer a variety of short-term online courses aimed at skill development and vocational training. These programs are designed to equip you with practical skills relevant to various industries, enhancing your employability and career prospects."
    ]

    const images5= [
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
    <>
      
      <div>
      <div className="bg-blue-900 w-full h-fit px-20 py-4  z-10 border-2 border-blue-950 overflow-hidden text-[whitesmoke] font-bold text-2xl">
<span className="moving-text">Payments are accepted only through the secure link on this website |  No other payment method is valid | Hurry! No-cost EMI options available | Limited Time Offer!  Payments are accepted only through the secure link on this website | No other payment method is valid | Hurry! No-cost EMI options available | Limited Time Offer!  </span>  
</div>
        <Framer images={ images } transition={{duration:10}} className="md:h-[100vh] h-[50vh] w-full" />
      </div>
      <div className="  md:h-[90vh] h-[100vh] w-full flex flex-col gap-10 pt-20 pb-20 justify-center items-center text-neutral-200 bg-gradient-to-r from-[#667eea] to-[#764ba2] ">
       <div className="font-bold md:text-2xl text-4xl md:ml-0 md:mr-0 ml-3 mr-3 md:mt-0 mt-8  text-blue-900 ">
       It is an ISO certified, government registered autonomous organization that provides vocational education .
       </div>
       <div className=" flex md:flex-row flex-col p-3 max-w-full md:gap-16 gap-8">
        <div className="flex flex-col md:ml-1 md:mr-0  ml-5 mr-5 gap-5 md:w-[60vw]">
        <div className={` md:text-3xl  text-4xl font-bold  ${bungeeTint.className}`}>
        Welcome to Secure Future Skill Academy!
        </div>
        <div className="text-[whitesmoke] md:block hidden font-semibold">
      
        We are an ISO certified and MCA registered institute dedicated to providing high-quality online courses for skill development and vocational training. Our short-term courses are designed to help you enhance your skills and secure a brighter future in today’s competitive world. Join us today and take the first step towards a successful career with our expert-led programs and comprehensive training!
        </div>
        </div>
        <div className="overflow-hidden">
       <Framer valueAnim={{x:"0%"}} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} valueExit={{x:"-100%"}} valueInit={{x:"100%"}} className={" md:w-[30vw] md:h-[30vh] w-[80vw] h-[30vh] border-2 md:ml-0 ml-8 border-black rounded-lg"} images={images2}/>
        </div>
        <div className="text-[whitesmoke] md:hidden block font-semibold">
      
        We are an ISO certified and MCA registered institute dedicated to providing high-quality online courses for skill development and vocational training. Our short-term courses are designed to help you enhance your skills and secure a brighter future in today’s competitive world. Join us today and take the first step towards a successful career with our expert-led programs and comprehensive training!
        </div>
       </div>
    </div>
    <div className="md:h-[40vh] h-[25vh] w-full flex items-center  justify-between">
     <div>
      <img src="/gggg.jpg" alt="course" className={"w-[33vw] md:h-[40vh] h-[25vh]"}/>
      
     </div>
     <div>
     <img src="/img.jpg" alt="course" className={"w-[34vw] md:h-[40vh] h-[25vh]"}/>
     </div>
     <div>
     <img src="cdrdrd.jpg" alt="course" className={"w-[33vw] md:h-[40vh] h-[25vh]"}/>
     </div>
    </div>
    <div className="h-fit w-full pt-10 overflow-hidden ">
      <div className={`md:text-5xl text-4xl align-middle md:ml-[33%] ml-[20%] text-red-500 font-extrabold ${bungeeTint.className}`}>Our Courses :</div>
     <div className= " overflow-hidden pb-20 pt-20">
      < Carousel images={images3}/></div>
    </div>
    <div className=" h-fit pt-10 pb-10 text-[whitesmoke] w-full flex flex-col items-center gap-10  bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] ">
      <div>
        <div className="text-2xl md:ml-0 md:mr-0 ml-6 mr-2 font-bold  ">
        Learn with Our Most Affordable Courses and Budget-Friendly Fees
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 items-center ml-1 mr-1">
    <div >
     <img src="/certificationHVAC.jpg" alt="course" className={"md:w-[24vw] w-[80vw] h-[40vh] rounded-md border-2 border-black"}/>
     <div className="md:text-sm text-2xl mt-2 md:mt-0 font-bold  ">
     Certificate in HVAC Technician
        </div>
     </div>
     <div>
     <img src="/CertificationInHR.jpg" alt="course" className={"md:w-[24vw] md:ml-0 ml-5 w-[80vw] h-[40vh] rounded-md border-2 border-black"}/>
     <div className="md:text-sm text-xl mt-2 md:mt-0 font-bold   ">
     Certificate in Human Resource Management
        </div>
     </div>
     <div>
     <img src="/homescience.jpg" alt="course" className={"md:w-[24vw] w-[80vw] md:ml-0 ml-5 h-[40vh] rounded-md border-2 border-black"}/>
     <div className="md:text-sm text-2xl mt-2 md:mt-0 font-bold   ">
     Advanced Diploma in Home Science
        </div>
     </div>
     <div>
     <img src="/makeup.jpg" alt="course" className={"md:w-[24vw] w-[80vw] md:ml-0 ml-5 h-[40vh] rounded-md border-2 border-black"}/>
     <div className="md:text-sm text-2xl mt-2 md:mt-0 font-bold   ">
     Basic 3-Month Online Makeup  Course
        </div>
     </div>
     </div>
    </div>
    <div className=" flex md:flex-row flex-col items-center gap-12 h-fit md:p-20 pt-10 pb-10 pl-2 pr-2 w-full  bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)]">
     <div className="flex flex-col gap-3 w-[90vw]">
     <div className={`text-3xl font-extrabold md:mb-0 mb-5 text-[whitesmoke]`}>Secure Future Skill Academy</div>
     <div className="md:h-fit h-[7vh] mb-2 md:mb-0"><TypedText className={"text-2xl font-bold text-[whitesmoke]"} firstText={"Unlock Your Potential with Expert-Led Online Courses"} secondText={"Learn Anytime, Anywhere – Boost Your Career Today!"} thirdText={"Join Thousands of Students in Our Interactive Learning Hub"} fourthText={"Upgrade Your Skills with Industry-Recognized Certifications"} fifthText={"Your Future Starts Here – Explore Our Courses Now!"}/></div>
     <div className="text-neutral-200 text-lg md:block hidden">Secure Future Skill Academy offers highly valuable online skill courses in India, making learning accessible, affordable, and flexible. These courses are designed to help individuals gain industry-relevant skills, enhance job opportunities, and stay competitive in today’s rapidly evolving job market.</div>
     </div>
     <div>
      <img className="md:w-[50vw] w-[90vw] h-fit rounded-lg border-2 border-black" alt="securefuture" src="/fffyf.jpg"></img>
     </div>
     <div className="text-neutral-200  text-lg block md:hidden">Secure Future Skill Academy offers highly valuable online skill courses in India, making learning accessible, affordable, and flexible. These courses are designed to help individuals gain industry-relevant skills, enhance job opportunities, and stay competitive in today’s rapidly evolving job market.</div>
    </div>
    <div className="h-fit w-full pt-10 overflow-hidden ">
      <div className={`md:text-5xl text-3xl align-middle md:ml-[25%] ml-[6%] text-red-500 font-extrabold ${bungeeTint.className}`}>Admission Process :</div>
     <div className="pb-20 pt-20 overflow-hidden">
      < Carousel2 images={images4} className="overflow-hidden"/></div>
    </div>
    <div className="w-full h-fit p-10 mb-1 md:text-xl text-sm text-black border-2 border-dotted border-black">
    Provide your educational and professional details and pay the registration fee. --&gt; Submit your required documents through the admission portal. --&gt; Once verified, pay your admission fee or choose no-cost EMI options.
    </div>
<div className=" text-[whitesmoke] w-full  md:h-[150vh] h-fit bg-[radial-gradient(circle,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)]">
<div>
  <img src="/explore.jpg" alt="securefuture" className="w-full h-[40vh] md:block hidden md:h-[60vh]"></img>
</div>
<div className="md:text-3xl text-2xl font-extrabold md:ml-40 md:mr-0 ml-7 mr-5 mt-16 md:pt-0 pt-10">
Unlock Global Opportunities with University - Approved Course
</div>
<div className="flex md:flex-row flex-col gap-10 mt-20">
<div className="flex flex-col items-center gap-2 ">
  <img src="/barts.jpg" alt="securefuture" className="md:w-[30vw] w-[80vw] h-[30vh] border-2 border-black rounded-xl ml-1 mr-1"></img>
  <div className="text-xl font-bold"> Bachelor Of Art ( BA ) </div>
  <div className="text-lg  font-bold">Duration : 03 Years</div>
</div>
<div className="flex flex-col items-center gap-2 ">
  <img alt="securefuture" src="/bbaa.png" className="md:w-[30vw] w-[80vw] h-[30vh] border-2 border-black rounded-xl ml-1 mr-1"></img>
  <div className="text-xl font-bold"> Bachelor Of Science ( BSC )  </div>
  <div className="text-xl font-bold">Duration : 03 Years</div>
</div>
<div className="flex flex-col  mb-10 md:mb-0 items-center gap-2 ">
  <img alt="securefuture" src="/bscs.jpg" className="md:w-[30vw] w-[80vw]  h-[30vh] border-2 border-black rounded-xl ml-1 mr-1"></img>
  <div className="text-xl font-bold">  Business Administration ( BBA ) </div>
  <div className="text-xl font-bold">Duration : 03 Years</div>
</div>
</div>
</div>
<div>
  <WhyChoose />
</div>
<div className="h-fit pt-20 w-full ">
      <div className={`md:text-5xl text-3xl  align-middle md:ml-[25%] ml-[4%] text-red-500 font-extrabold ${bungeeTint.className}`}> We are certified by :</div>
     <div className="pb-30 pt-30">
      < Carousel2 images={images5}/></div>
    </div>
<section className="mb-20 bg-[#fcfcfc] h-fit w-full gap-4 pb-30 flex flex-col justify-center items-center " >
  <div className={`md:text-5xl text-2xl  mt-10 align-middle mb-10 text-red-500 font-extrabold ${bungeeTint.className}`}>FREQUENTLY ASKED QUESTIONS :</div>
<FAQs/>
</section>


    </>
  )
}

export default Homepage;