import React from "react";

const SignUpBanner = () => {
    return <div className="hidden md:block relative bg-slate-800 text-white">
        <div className="absolute inset-0">
            <img
                src={"/signUpImage.jpeg"}
                alt="Person smiling at phone"
                className="w-full h-full object-cover opacity-80"
            />
        </div>
        <div className="relative h-full flex flex-col justify-end p-12 z-10">
            <h2 className="text-3xl font-bold mb-4">Experience the power of positivity</h2>
            <p className="text-lg opacity-90">
                Experience the elegance of simplicity. Every detail is designed with you in mind.
            </p>
        </div>
    </div>
}

export default  SignUpBanner