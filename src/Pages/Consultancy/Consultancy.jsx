import { MessageSquare } from "lucide-react";
import Banner from "../../Components/Banner/Banner";
import ConcultancyIndex from "../../Components/ConcultancyIndex/ConcultancyIndex";
import OurApproach from "../../Components/OurApproach/OurApproach";
import IndustriesServe from "../../Components/IndustriesServe/IndustriesServe";
import TransformOperation from "../../Components/TransformOperation/TransformOperation";
import ConsultancyOffering from "../../Components/ConsultancyOffering/ConsultancyOffering";
const Consultancy = () => {
    return (
        <div>
            <Banner
                mode="gradient"
                size="medium"
                subtitle="Services / Consultancy Services"
                subtitleStyle="service"
                icon={MessageSquare}
                title={
                    <>
                        Consultancy <span className="text-orange-500">Services</span>
                    </>
                }
                description="Expert guidance to optimize your manufacturing processes, make informed technology investments, and drive operational excellence."
                buttons={false}
            />
            <ConcultancyIndex></ConcultancyIndex>
            <ConsultancyOffering></ConsultancyOffering>
            <OurApproach></OurApproach>
            <IndustriesServe></IndustriesServe>
            <TransformOperation></TransformOperation>
        </div>
    );
};

export default Consultancy;