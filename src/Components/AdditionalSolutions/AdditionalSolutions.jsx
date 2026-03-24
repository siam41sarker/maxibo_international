import { useEffect, useState } from "react";

const AdditionalSolutions = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.additionalProducts);
      });
  }, []);

  return (
    <section className="relative bg-[#F1F4F5] py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* heading - vertically centered with cards */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit">
            Our <span className="text-orange-500">Additional Solutions</span>
          </h2>

          <p className="mt-4 text-gray-500 font-inter max-w-2xl mx-auto">
            Explore the advanced equipment and systems we provide for garment manufacturing.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500"
            >
              {/* title */}
              <h3 className="text-lg font-semibold font-outfit mb-3 transition-colors duration-300 group-hover:text-orange-500">
                {product.category}
              </h3>

              {/* description */}
              <p className="text-gray-500 font-inter text-sm leading-relaxed mb-2">
                {product.description}
              </p>

              {/* partners */}
              {product.partners && (
                <p className="font-medium font-inter text-orange-500 text-sm">
                  Partners: {product.partners.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdditionalSolutions;