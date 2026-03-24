import AdditionalSolutions from "../../Components/AdditionalSolutions/AdditionalSolutions"
import Banner from "../../Components/Banner/Banner"
import ProductShowcase from "../../Components/ProductShowcase/ProductShowcase"
import WhyChooseProducts from "../../Components/WhyChooseProducts/WhyChooseProducts"
const Products = () => {
    return (
        <div>
            <Banner
            mode="gradient"
            title={
                <>
                    Our <span className="text-orange-500">Products</span>
                </>
            }
            subtitle={null}
            description="We represent the world's leading manufacturers of industrial equipment for the apparel and textile industry, bringing cutting-edge technology to Bangladesh."
            buttons={false}
            size="small"
        />
        <ProductShowcase></ProductShowcase>
        <AdditionalSolutions></AdditionalSolutions>
        <WhyChooseProducts></WhyChooseProducts>
        </div>
    )
}

export default Products