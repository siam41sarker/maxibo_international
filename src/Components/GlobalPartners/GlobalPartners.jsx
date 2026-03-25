import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
const GlobalPartners = () => {
    const [partners, setPartners] = useState({});
    useEffect(() => {
        fetch("/partners.json")
            .then(res => res.json())
            .then(dat => setPartners(dat))
    }, []);
    const { partners: globalPartners = [] } = partners;
    console.log(globalPartners)
    return (
        <div className="bg-[#F9FAFB] py-20">
            <div className="lg:w-11/12 mx-auto flex flex-col items-center gap-8">
                <h2 className="text-3xl md:text-5xl text-center font-bold font-outfit">
                    Our Global <span className="text-orange-500">Partners</span>
                </h2>
                <p className="text-gray-500 text-center font-inter">
                    We represent the world's leading manufacturers of industrial equipment.
                </p>
                <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-8">
                    {
                        globalPartners.map(eachPartner => <div key={eachPartner.id} className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500 flex justify-center items-center">
                            <img className="max-h-24" src={eachPartner.logo} alt={eachPartner.name} />
                        </div>)
                    }
                </div>
                <NavLink to="/partners" className="flex w-[300px] mt-4 justify-center items-center gap-2 px-4 py-4 border-2 border-[#103870] text-[#103870] font-inter font-bold text-xl text-center  transition-colors duration-300 ease-in-out hover:bg-[#103870] hover:text-white rounded lg:mr-6">
                    View Our Pertners
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </NavLink>
            </div>
        </div>
    )
}

export default GlobalPartners