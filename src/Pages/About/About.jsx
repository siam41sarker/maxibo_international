import AboutCTA from "../../Components/AboutCTA/AboutCTA";
import Banner from "../../Components/Banner/Banner";
import CompanyOverview from "../../Components/CompanyOverview/CompanyOverview";
import Leadership from "../../Components/Leadership/Leadership";
import OurJourney from "../../Components/OurJourney/OurJourney";
import OurCoreValues from "../../Components/WhyChoose/OurCoreValues";
const About = () => {
  return (
    <div>
      <Banner
        mode="image"
        size="small"
        image="https://i.ibb.co.com/S79tmVVQ/banner2.jpg"
        subtitle={null}
        buttons={false}
        title={
          <>
            About{" "}
            <span className="text-orange-500">
              Maxibo International
            </span>
          </>
        }
        description="A growing company in Bangladesh, dedicated to delivering optimal solutions for the apparel industry with globally renowned products and expert consultancy."
      />
    <CompanyOverview></CompanyOverview>
    <OurCoreValues></OurCoreValues>
    <OurJourney></OurJourney>
    <Leadership></Leadership>
    <AboutCTA></AboutCTA>
    
    </div>
  );
};

export default About;