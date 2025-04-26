"use client"
import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index  ? null : index);
  };

  const faqs = [
    {
      question: "What is Secure Future Skill Academy ?",
      answer: "Secure Future Skill Academy is an MCA-registered and ISO-certified institute dedicated to providing high-quality online courses focused on skill development and vocational training. Our short-term courses are designed to enhance your skills and help secure a brighter future in today's competitive world.",
    },
    {
      question: "What does it mean to be MCA-registered and ISO-certified ?",
      answer: "Being MCA-registered means that Secure Future Skill Academy is officially recognized by the Ministry of Corporate Affairs, ensuring our legitimacy and adherence to corporate regulations. Our ISO certification signifies that we meet international standards for quality management systems, reflecting our commitment to delivering high-quality education.",
    },
    {
      question: "What types of courses does Secure Future Skill Academy offer ?",
      answer: "We offer a variety of short-term online courses aimed at skill development and vocational training. These programs are designed to equip you with practical skills relevant to various industries, enhancing your employability and career prospects.",
    },
    {
      question: "How can I enroll in a course at Secure Future Skill Academy ?",
      answer: "Enrolling in our courses is simple. Visit our website, browse the available programs, and follow the enrollment instructions provided. If you need assistance, our support team is available to guide you through the process.",
    },
    {
      question: "Are the courses at Secure Future Skill Academy self-paced or scheduled ?",
      answer: "Our courses are designed to offer flexibility to accommodate different learning preferences. Some programs are self-paced, allowing you to learn at your convenience, while others may have scheduled sessions. Detailed information about the format of each course is available on our website.",
    },
    {
      question: "Will I receive a certificate upon completing a course ?",
      answer: "Yes, upon successfully completing a course, you will receive a certificate from Secure Future Skill Academy, recognizing your achievement and the skills you've acquired.",
    },
    {
      question: "How do Secure Future Skill Academy's courses benefit my career ?",
      answer: "Our courses are tailored to provide practical skills and knowledge that are directly applicable in various industries. By completing our programs, you enhance your competencies, making you more competitive in the job market and better prepared for career advancement.",
    },
    {
      question: "Is there support available during the course ?",
      answer: "Absolutely. We offer continuous support throughout your learning journey. Our instructors and support team are available to assist with any questions or challenges you may encounter during the course.",
    },
    {
      question: "Have further questions ?",
      answer: "If you have any further questions or require additional information, please feel free to contact us . We're here to help you take the first step toward a successful career with our expert-led programs and comprehensive training.",
    }
  ];
  
  return (
    <div className="flex flex-col items-center gap-4">
      {faqs.map((faq, index) => (
        <div key={index} className="md:w-[80vw] w-[90vw]">
          <div
            className="bg-white cursor-pointer text-2xl font-bold text-neutral-600 flex justify-between items-center rounded-xl border-2 border-[whitesmoke] shadow-2xl md:px-16 px-10 py-6"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center  ">
            <div className="md:w-[70vw] w-[69vw]">{faq.question}</div>
            <div className="text-3xl ">{openIndex === index  ? "−" : "+"}</div>
            </div>
          </div>
          {openIndex === index && (
            <div className="bg-gray-100 text-lg text-neutral-700 px-16 py-4 mt-2 rounded-xl  border-2 border-[black]">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
