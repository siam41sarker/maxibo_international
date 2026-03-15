import { useEffect, useState } from "react";

const OurJourney = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("/about.json")
      .then((res) => res.json())
      .then((data) => setTimeline(data.timeline));
  }, []);

  return (
    <section className="bg-[#F9FAFB] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Our <span className="text-orange-500">Journey</span>
          </h2>

          <p className="mt-4 text-gray-500 font-inter max-w-xl mx-auto">
            From humble beginnings to industry leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-gray-300"></div>

          <div className="space-y-12">

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full z-10"></div>

                  {/* Card */}
                  <div
                    className={`
                      ml-12 md:ml-0
                      w-[85%] md:w-[36%]
                      bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-xl hover:border-orange-400
                      ${
                        isLeft
                          ? "md:ml-[calc(50%-2rem)] md:-translate-x-full"
                          : "md:ml-[calc(50%+2rem)]"
                      }
                    `}
                  >

                    <span className="text-orange-500 text-sm font-semibold">
                      {item.year}
                    </span>

                    <h3 className="text-lg font-semibold font-outfit mt-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm font-inter mt-2 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurJourney;