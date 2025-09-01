import React from "react";
import FAQ from "@/features/LandingPage/components/FAQ";

const Testimonial = () => {
    const testimonials = [
        {
            quote: "SendLineSMS revolutionized our customer engagement strategy. We've seen a 40% increase in response rates since switching.",
            author: "Sarah Johnson",
            position: "Marketing Director, TechCorp",
            image: "/api/placeholder/100/100"
        },
        {
            quote: "The OTP authentication system is flawless. Implementation was quick, and it has strengthened our application security immensely.",
            author: "Michael Chen",
            position: "CTO, SecureFinance",
            image: "/api/placeholder/100/100"
        }
    ];

    return (
        <section className="py-20 px-8 bg-gray-50" id="faqs">
            <FAQ />
            <div>
                <h2 className="text-2xl font-bold text-center my-8">What Our Customers Say</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex-1">
                            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.author}
                                     className="h-12 w-12 rounded-full mr-4"/>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial