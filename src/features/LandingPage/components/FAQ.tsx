'use client'
import React, { useState } from 'react';
import {BiDownArrow}  from "react-icons/bi"


type FaqItemType = {
    question:string;
    answer:string;
    isOpen:boolean;
    onClick: () => void;
}
const FAQItem = ({ question, answer, isOpen, onClick }:FaqItemType) => {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <div
                className="flex justify-between items-center py-5 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-in-out active:scale-[0.99]"
                onClick={onClick}
            >
                <h3 className="text-lg font-medium text-gray-800">{question}</h3>
                <div
                    className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                    <BiDownArrow
                        className={`text-red-500 transition-colors duration-300 ${isOpen ? 'text-opacity-70' : 'text-opacity-100'}`}
                        size={24}
                    />
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out 
          ${isOpen
                    ? 'max-h-screen opacity-100 visible'
                    : 'max-h-0 opacity-0 invisible'}`}
            >
                <div className="bg-gray-light text-gray-700 px-6 py-5 text-base">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            question: 'How do our services work?',
            answer: 'Our services are designed to provide comprehensive support tailored to your specific needs. We begin by understanding your unique requirements and then develop a customized approach to address your challenges effectively.'
        },
        {
            question: 'What makes us different?',
            answer: 'We pride ourselves on our innovative solutions, personalized customer service, and commitment to continuous improvement. Our team of experts brings years of experience and a fresh perspective to every project.'
        },
        {
            question: 'Can I customize my plan?',
            answer: 'Absolutely! We offer flexible plans that can be tailored to your specific requirements. Our team works closely with you to ensure that the solution meets your exact needs and budget.'
        },
        {
            question: 'What support options are available?',
            answer: 'We provide multiple support channels including email, live chat, phone support, and a comprehensive knowledge base. Our goal is to ensure you have access to help whenever you need it.'
        }
    ];

    const handleToggle = (index:number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto  px-4 transform transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-bold text-center ">
                FAQs
            </h1>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden
        transform transition-all duration-500 ease-in-out">
                {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;