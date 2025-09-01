"use client"
import React, {useState} from "react";
import {FaEnvelope, FaPhone} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import {Button, Form, Input} from "antd";
import axios from "axios";
import {toast} from "react-toastify";
const url = "https://hooks.slack.com/services/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";

type FormDataType = {
    name:string,
    email:string;
    message:string
}
const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onSubmit = async (values: FormDataType) => {
        try {
            setLoading(true)
            await axios.post(url, values);
        } finally {
            setLoading(false);
            toast.success("Thank you! Your message has been submitted successfully. We'll get back to you shortly.")
            form.resetFields()
        }


    }
    return (
        <section className="py-20 px-8" id="contact">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <Form layout="vertical" form={form} onFinish={onSubmit}>
                            <Form.Item label="Name" name="name">
                                <Input size="large"/>
                            </Form.Item>
                            <Form.Item label="Email" name="email">
                                <Input size="large"/>
                            </Form.Item>
                            <Form.Item label="Message" name="message">
                                <Input.TextArea size="large" rows={8}/>
                            </Form.Item>
                            <Button
                                loading={loading}
                                size="large"
                                className="w-full  bg-primary text-white px-4 py-2 rounded-lg  transition-colors"
                                htmlType={"submit"}
                            >
                                Send Message
                            </Button>
                        </Form>
                    </div>
                    <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <FaPhone/>
                                <div>
                                    <p>Phone</p>
                                    <p>(+233) 24 169 9096</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope/>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-gray-600">info@sendlinesms.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationDot/>
                                <div>
                                    <p className="font-medium text-gray-900">Office</p>
                                    <p className="text-gray-600">No. 4 Blewusi Rd</p>
                                    <p className="text-gray-600">Airport Residential, Accra Ghana.</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="mt-8">*/}
                        {/*    <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>*/}
                        {/*    <div className="flex space-x-4">*/}
                        {/*        {['twitter', 'facebook', 'linkedin', 'instagram'].map((social, i) => (*/}
                        {/*            <a*/}
                        {/*                key={i}*/}
                        {/*                href={`#${social}`}*/}
                        {/*                className="bg-gray-200 hover:bg-blue-100 text-gray-600 hover:text-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"*/}
                        {/*            >*/}
                        {/*                <span className="sr-only">{social}</span>*/}
                        {/*                <div className="h-5 w-5"></div>*/}
                        {/*            </a>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs