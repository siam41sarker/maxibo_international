import { NavLink } from "react-router-dom"

const PlanningNewInstall = () => {
    return (
        <section className="w-full bg-[#F9FAFB] py-24 px-6">

            {/* Card */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-200 p-10 md:p-14 text-center">

                {/* Title */}
                <h2 className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-5">
                    Planning a New{" "}
                    <span className="text-orange-500">Installation?</span>
                </h2>

                {/* Description */}
                <p className="font-inter text-gray-500 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                    Contact us for a site assessment and installation quote. Our team will ensure a smooth and efficient installation process.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    {/* Primary Button */}
                    <NavLink to="/contact">
                        <button className="bg-orange-500 border-2 border-orange-500 hover:bg-orange-600 text-white font-inter font-semibold px-8 py-3 rounded-xl transition">
                            Request Installation →
                        </button>
                    </NavLink>

                    {/* Secondary Button */}
                    <NavLink to="/services">
                        <button className="border-2 border-gray-400 text-gray-700 hover:bg-[#0E2A50] hover:text-white hover:border-[#0E2A50] font-inter font-semibold px-8 py-3 rounded-xl transition">
                            View All Services
                        </button>
                    </NavLink>

                </div>

            </div>

        </section>
    )
}

export default PlanningNewInstall