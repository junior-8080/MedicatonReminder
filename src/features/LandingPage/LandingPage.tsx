import {Footer} from "@/features/LandingPage/components/Footer";
import ContactUs from "@/features/LandingPage/components/ContacUs";
import Solutions from "@/features/LandingPage/components/Solutions";
import Banner from "@/features/LandingPage/components/Banner";
import Features from "@/features/LandingPage/components/Features";
import HowItWorks from "@/features/LandingPage/components/HowItWorks";
import LandingPageNavs from "@/features/LandingPage/components/LandingPageNavs";
import Join from "@/features/LandingPage/components/Join";


export const LandingPage = () => {
    return (
        <div className="bg-white">
            <LandingPageNavs/>
            <Banner/>
            <Solutions/>
            <HowItWorks/>
            <Features/>
            <Join />
            <Footer/>
        </div>

    )
}
