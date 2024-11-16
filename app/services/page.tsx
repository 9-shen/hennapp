import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import FooterMaster from "@/components/Home/FooterMaster";

import ServiceSlider from "@/components/Services/ServiceSlider";
import ServiceData from "@/components/Services/ServiceData";

export default function services(){

    return (
        <>
        <TopBar />
        <Navigation />
        <ServiceSlider />
        <ServiceData />
        <FooterMaster />
        </>
    );

}