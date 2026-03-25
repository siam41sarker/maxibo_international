import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const OurProducts = () => {
  const [heroProducts, setHeroProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setHeroProducts(data.heroProducts))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="bg-[#F1F4F5] py-20">
      <div className="lg:w-11/12 mx-auto flex flex-col gap-5 px-4">

        <h2 className="text-3xl md:text-5xl font-bold font-outfit">
          Our <span className="text-orange-500">Products</span>
        </h2>

        <p className="text-gray-500 font-inter max-w-2xl">
          Complete range of industrial equipment for the apparel and textile industry.
        </p>

        {/* Button aligned to right */}
        <div className="w-full flex justify-end">
          <NavLink to="products" className="group inline-flex items-center gap-2 px-5 py-2 border-2 border-[#103870] text-[#103870] font-inter text-sm font-medium transition-colors duration-300 ease-in-out hover:bg-[#103870] hover:text-white rounded lg:mr-6">
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </NavLink>
        </div>

        {/* Product Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroProducts.length > 0 ? (
            heroProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 ease-in-out 
                  hover:scale-105 hover:shadow-xl flex flex-col"
              >
                <div className="h-3/4 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-bold font-outfit transition-colors duration-300 ease-in-out group-hover:text-orange-600">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 font-inter">{product.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">Loading products...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default OurProducts;