import Banner from "../../Components/Banner/Banner.jsx";
import ImmediateAssistance from "../../Components/ImmediateAssistance/ImmediateAssistance.jsx";
import ServiceStats from "../../Components/ServiceStats/ServiceStats.jsx";
import WhyChooseServices from "../../Components/WhyChooseServices/WhyChooseServices.jsx";
const Services = () => {
  return (
    <div>
      <Banner
        mode="gradient"
        title={
          <>
            Our <span className="text-orange-500">Services</span>
          </>
        }
        subtitle={null}
        description="Comprehensive support services to ensure your manufacturing equipment operates at peak performance. From installation to ongoing maintenance, we've got you covered."
        buttons={false}
        size="small"
      />
      <ServiceStats></ServiceStats>
      <WhyChooseServices></WhyChooseServices>
      <ImmediateAssistance></ImmediateAssistance>
    </div>
  );
};

export default Services;