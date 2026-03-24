import Banner from "../../Components/Banner/Banner"
import ContactSection from "../../Components/ContactSection/ContactSection"
import VisitOffice from "../../Components/VisitOffice/VisitOffice"
const Contact = () => {
  return (
     <div>
            <Banner
            mode="gradient"
            title={
                <>
                    Contact <span className="text-orange-500">Us</span>
                </>
            }
            subtitle={null}
            description="Get in touch with our team to discuss your requirements and discover how we can help optimize your manufacturing processes."
            buttons={false}
            size="small"
        />
        <ContactSection></ContactSection>
        <VisitOffice></VisitOffice>
        </div>
  )
}

export default Contact