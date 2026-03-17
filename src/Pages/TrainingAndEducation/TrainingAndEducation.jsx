import Banner from "../../Components/Banner/Banner"
import { GraduationCap } from "lucide-react";
import TrainingCard from "../../Components/TrainingCard/TrainingCard";
import TrainingPrograms from "../../Components/TrainingPrograms/TrainingPrograms";
import TrainingOptions from "../../Components/TrainingOptions/TrainingOptions";
import InvestSkills from "../../Components/InvestSkills/InvestSkills";
const TrainingAndEducation = () => {
    return (
        <div>
            <Banner
                mode="gradient"
                size="medium"
                subtitle="Services / Training & Education"
                subtitleStyle="service"
                icon={GraduationCap}
                title={
                    <>
                        Training & <span className="text-orange-500">Education</span>
                    </>
                }
                description="Empower your team with comprehensive training programs designed to maximize equipment efficiency and operational excellence."
                buttons={false}
            />
            <TrainingCard></TrainingCard>
            <TrainingPrograms></TrainingPrograms>
            <TrainingOptions></TrainingOptions>
            <InvestSkills></InvestSkills>
        </div>
    )
}

export default TrainingAndEducation