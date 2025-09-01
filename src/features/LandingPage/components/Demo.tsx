import React from "react";
import {Button} from "antd";
import Link from "next/link";

const Demo = () => {
    return (
        <section className="py-16 px-8 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your messaging strategy?</h2>
                <p className="text-xl mb-8 text-blue-100">
                    Join thousands of businesses that trust SendLineSMS for their critical communication needs.
                </p>
                <a href={"#contact"} className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        size="large"
                        className="bg-transparent border border-white text-white px-6 py-3 rounded-lg  transition-colors font-medium">
                        Schedule a Demo
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Demo