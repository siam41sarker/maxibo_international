import { Shield } from "lucide-react";
import Banner from "../../Components/Banner/Banner";
import PrivacyContent from "../../Components/privacySections/privacySections";

const PrivacyPolicy = () => {
  return (
    <div>
      <Banner
        mode="gradient"
        size="medium"
        align="left" // ✅ Left-aligned now
        subtitle="Your Privacy Matters"
        subtitleStyle="pill"
        icon={Shield}
        title={
          <>
            Privacy <span className="text-orange-500">Policy</span>
          </>
        } // ✅ Highlight "Policy"
        description="Maxibo International is committed to protecting your privacy and handling your data with transparency and care."
        lastUpdated="March 25, 2026"
        buttons={false} // No buttons
      />
     <PrivacyContent></PrivacyContent>
    </div>
  );
};

export default PrivacyPolicy;