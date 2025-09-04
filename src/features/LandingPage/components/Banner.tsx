'use client'
import React from "react";
import {Button} from "antd";
import {IoMdCheckmarkCircleOutline} from "react-icons/io";


const Banner = () => {
    const features = ["Doctor-scheduled reminders", "Personalized voice calls", "Real-time compliance tracking"];
    const conversation = ["Hello Sarah, this is your medication reminder. It's time to take your morning blood pressure medication", "Agoo Sarah, ɛyɛ wo aduro kae. Bere a ɛsɛ sɛ wotumi gye wo anɔpa mogya mframa so aduro no abɛdu.", "Sarah, wòame kpɔkpɔe na wòamefe amedihe. Ɛgbɔna ƒe ɣeyiɣi kple nu ka ɖo wò ƒe dzidzɔ le dzidzedzekpɔkpɔ dzi."]
    return (
        <section className="grid grid-col-1 md:grid-cols-12 items-center justify-between w-[90%] md:w-[80%] mx-auto py-12">
            <div className="col-span-7">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Never Miss a Dose <br/>Again</h1>
                    <p className="text-sm text-gray-600">Automated voice reminders scheduled by your healthcare provider
                        ensure perfect medication adherence
                    </p>
                    <div className="space-y-2">
                        {features.map(feature => <div className="flex items-center gap-2" key={feature}><IoMdCheckmarkCircleOutline
                            className="text-green-600"/><p className="text-sm text-gray-600">{feature}</p></div>)}
                    </div>
                    <div className="flex gap-4">
                        <Button className="bg-blue-700 text-white">Join the waitlist</Button>
                        <Button className="bg-blue-700 text-white">Request Demo</Button>
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                <div className="flex flex-col sm:flex-row items-center w-full">
                    <div>
                        <img src="/svgs/phoneCall.svg" className="w-full" alt="phone"/>
                    </div>
                    <div className="space-y-2">
                        {conversation.map((call,index) => <p className={`border border-borders text-[11px] p-2 rounded-md font-semibold ${index% 2 === 0 ?  'text-red-500' : ' text-green-600' } `} key={call}>{call}</p>)}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;