import { NavLink } from "react-router-dom";

const ImmediateAssistance = () => {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-[#1e3f73] to-[#355f9c] border border-[#CED6E0] text-center rounded-2xl shadow-lg px-8 py-16">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-5">
                        Need Immediate{" "}
                        <span className="text-orange-400">Assistance?</span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-blue-100 font-inter max-w-2xl mx-auto mb-10">
                        Our support team is available around the clock to help you with any
                        equipment issues or service inquiries.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* Primary Button */}
                        <NavLink to="/contact">
                            <button className="bg-orange-500 hover:bg-orange-600 font-inter text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow">
                            Contact Support →
                        </button>

                        </NavLink>
                        {/* Secondary Button */}
                        <a
                            href="tel:+8801680329598"
                            className="border border-white/40 text-white font-inter font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition duration-300 inline-block"
                        >
                            Call Now +8801680 329598
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImmediateAssistance;