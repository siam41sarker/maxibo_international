import Banner from "../Banner/Banner";
import ServiceStats from "../ServiceStats/ServiceStats.jsx";
import WhyChooseServices from "../WhyChooseServices/WhyChooseServices.jsx";
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
    </div>
  );
};

export default Services;