import React from 'react';
import {Button} from "antd";

const Join = () => {
    return (
        <section className="py-16" id="contact">
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Ready to Improve Patient Outcomes?
                </h2>

                <p className="text-xl  mb-12 max-w-3xl mx-auto leading-relaxed">
                    Join healthcare providers nationwide who trust our medication reminder system.
                </p>
                <div>
                   <p>Contact Us</p>
                    <div className="flex items-center  justify-center gap-3 text-center">
                        <p className="italic text-gray-500">akwasi@gmailo.com</p>
                        <p>|</p>
                        <p className="italic text-gray-500"> +233 24 565 5799 </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;