import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProductShowcase = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return null;

  const { productCategories, heroProducts } = data;

  const getHeroImage = (id) => {
    const idMap = {
      cad: "plotter",
    };

    const finalId = idMap[id] || id;
    const found = heroProducts.find((item) => item.id === finalId);

    return found?.image;
  };

  return (
    <div className="bg-[#f9fafb] py-12 md:py-16 font-inter">
      <div className="max-w-7xl mx-auto px-4 space-y-16 md:space-y-20">

        {productCategories.map((product, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* IMAGE */}
              <div className={`${isReverse ? "md:order-2" : "md:order-1"}`}>
                <img
                  src={getHeroImage(product.id)}
                  alt={product.name}
                  className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* CONTENT */}
              <div className={`${isReverse ? "md:order-1" : "md:order-2"}`}>

                {/* Title */}
                <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 md:mb-4">
                  {product.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base mb-5 md:mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 mb-5 md:mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[#1D2530] text-xs sm:text-sm"
                    >
                      <CheckCircle
                        size={16}
                        className="text-orange-500 mt-[2px] shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Partners */}
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  Partners:{" "}
                  <span className="text-orange-500">
                    {product.partners.join(", ")}
                  </span>
                </p>

                {/* Button */}
                <NavLink to="/contact">
                  <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs sm:text-sm hover:opacity-90 transition">
                    Request a Quote →
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductShowcase;