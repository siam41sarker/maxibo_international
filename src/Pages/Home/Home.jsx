import Banner from "../../Components/Banner/Banner";
import GlobalPartners from "../../Components/GlobalPartners/GlobalPartners";
import MissionSection from "../../Components/MissionSection/MissionSection";
import OurProducts from "../../Components/OurProducts/OurProducts";

import Stats from "../../Components/Stats/Stats";
import UpgradeCTA from "../../Components/UpgradeCTA/UpgradeCTA";
const Home = () => {
  return (
    <div>
      <Banner />
      <Stats></Stats>
      <OurProducts></OurProducts>
      <GlobalPartners></GlobalPartners>
      <MissionSection></MissionSection>
      <UpgradeCTA></UpgradeCTA>
    </div>
  );
};

export default Home;
