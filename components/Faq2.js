"use client"
import React, { useState } from "react";

const FAQ2s = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index  ? null : index);
  };

  const faqs = [
    {
      question: "How will our courses help advance your career?",
      answer: "Our courses are specifically designed to provide you with the skills and knowledge that are highly valued by employers. Whether you're aiming for a promotion, switching careers, or starting fresh, the expertise you'll gain will make you more competitive and qualified in your field."
    },
    {
      question: "How will our courses contribute to your professional growth?",
      answer: "By completing our courses, you’ll gain essential skills that will help you grow in your career. Whether it's improving your technical skills, boosting your leadership abilities, or enhancing your problem-solving skills, you'll be ready to take on new challenges and climb up the career ladder."
    },
    {
      question: "What specific career goals do you hope our courses will help you achieve?",
      answer: "Our courses are designed to meet your unique career goals. Whether you want to gain expertise in a specific field, receive certifications that increase your job market value, or position yourself for leadership roles, our programs can help you make those goals a reality."
    },
    {
      question: "How do you believe completing our courses will impact your future career opportunities?",
      answer: "Completing our courses will make you more marketable and increase your opportunities. You’ll learn practical skills and gain certifications that show employers you have the competence to perform at a high level, helping you stand out and qualify for better job offers or promotions."
    },
    {
      question: "How do you think our courses can help you overcome career challenges?",
      answer: "Our courses are tailored to address common career obstacles, whether you're looking to transition into a new industry, advance within your current role, or acquire skills that will help you manage more complex projects. You’ll be better equipped to handle these challenges with confidence and knowledge."
    },
    {
      question: "Why should you choose our courses over others for your career advancement?",
      answer: "Our courses offer industry-relevant content, expert instructors, and flexible learning paths that allow you to balance your education with your career. We provide hands-on learning experiences and certifications that are recognized by employers, making our courses a valuable asset in your professional journey."
    },
    {
      question: "How can our courses help you remain competitive in the job market?",
      answer: "In today's rapidly changing job market, staying up-to-date with the latest skills is crucial. Our courses are constantly updated to ensure you're learning the most current industry practices. By gaining new skills, certifications, and hands-on experience, you’ll maintain a competitive edge in your career."
    },
    {
      question: "What long-term career benefits do you expect from our courses?",
      answer: "In the long term, completing our courses can open doors to more advanced positions, higher salaries, and greater job satisfaction. The skills and credentials you gain will allow you to take on leadership roles, stay ahead in your field, and enjoy greater career stability."
    },
    {
      question: "How do you plan to apply the knowledge gained from our courses in your career?",
      answer: "The knowledge gained from our courses can be directly applied in your job to improve your performance. Whether you’re managing teams, working on advanced technical projects, or handling strategic decision-making, you’ll have the tools to improve your work efficiency and drive better results."
    },
    {
      question: "What makes our courses the right choice for your career goals?",
      answer: "Our courses are designed with practical, real-world applications in mind. You’ll learn the latest techniques and strategies used by top professionals in your field. With personalized support and flexible learning options, we’re dedicated to helping you achieve your career goals efficiently and effectively."
    }
  ];
  
  
  return (
    <div className="flex flex-col items-center gap-4">
      {faqs.map((faq, index) => (
        <div key={index} className="w-[80vw]">
          <div
            className="bg-white cursor-pointer text-2xl font-bold text-neutral-600 flex justify-between items-center rounded-xl border-2 border-[whitesmoke] shadow-2xl px-16 py-6"
            onClick={() => toggleFAQ(index)}
          >
            <div>{faq.question}</div>
            <div className="text-3xl">{openIndex === index  ? "−" : "+"}</div>
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

export default FAQ2s;
