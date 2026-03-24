import Banner from "../../Components/Banner/Banner"
import InterestedInProducts from "../../Components/InterestedInProducts/InterestedInProducts"
import PartnerShowcaseCard from "../../Components/PartnerShowcaseCard/PartnerShowcaseCard"
const Partners = () => {
    return (
        <div>
            <Banner
                mode="gradient"
                title={
                    <>
                        Our Global<span className="text-orange-500">Partners</span>
                    </>
                }
                subtitle={null}
                description="We represent the world's leading manufacturers of industrial equipment for the apparel and textile industry, bringing cutting-edge technology to Bangladesh."
                buttons={false}
                size="small"
            />
            <PartnerShowcaseCard></PartnerShowcaseCard>
            <InterestedInProducts></InterestedInProducts>
        </div>
    )
}

export default Partners