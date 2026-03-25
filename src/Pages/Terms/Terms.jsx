import { FileText  } from "lucide-react";
import Banner from "../../Components/Banner/Banner";
import TermsSections from "../../Components/TermsSections/TermsSections";
const Terms = () => {
  return (
    <div>
        <Banner
        mode="gradient"
        size="medium"
        align="left" // ✅ Left-aligned now
        subtitle="Legal Information"
        subtitleStyle="pill"
        icon={FileText}
        title={
          <>
            Terms of <span className="text-orange-500">Service</span>
          </>
        } // ✅ Highlight "Policy"
        description="Please review these terms carefully before engaging our products and services."
        lastUpdated="March 25, 2026"
        buttons={false} // No buttons
      />
      <TermsSections></TermsSections>
    </div>
  )
}
export default Terms