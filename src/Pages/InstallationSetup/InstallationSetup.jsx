import { Wrench } from "lucide-react";
import InstallationProcess from "../../Components/InstallationProcess/InstallationProcess";
import EquipmentInstall from "../../Components/EquipmentInstall/EquipmentInstall";
import PlanningNewInstall from "../../Components/PlanningNewInstall/PlanningNewInstall";
import InstallationValuesCards from "../../Components/InstallationValuesCards/InstallationValuesCards";
import Banner from "../../Components/Banner/Banner";
const InstallationSetup = () => {
    return (
        <div>
            <Banner
                mode="gradient"
                size="medium"
                subtitle="Services / Installation & Setup"
                subtitleStyle="service"
                icon={Wrench}
                title={
                    <>
                        Installation & <span className="text-orange-500">Setup</span>
                    </>
                }
                description="Professional installation services by factory-trained technicians. We ensure your equipment is properly installed, calibrated, and ready for optimal performance from day one."
                buttons={false}
            />
            <InstallationValuesCards></InstallationValuesCards>
            <InstallationProcess></InstallationProcess>
            <EquipmentInstall></EquipmentInstall>
            <PlanningNewInstall></PlanningNewInstall>
        </div>
    );
};

export default InstallationSetup;