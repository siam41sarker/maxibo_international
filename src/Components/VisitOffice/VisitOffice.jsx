const VisitOffice = () => {
  const mapLink = "https://maps.app.goo.gl/TmDiEHWRQQJd1x3d9";

  return (
    <section className="bg-[#f5f6f7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
          Visit Our <span className="text-orange-500">Office</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 font-inter mb-12 max-w-2xl mx-auto">
          We welcome you to visit us and discuss your requirements in person.
        </p>

        {/* Map */}
        <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md">

          {/* ⚠️ NOTE: iframe can't use short link directly */}
          <iframe
            src="https://www.google.com/maps?q=Maxibo+International+Uttara+Dhaka&output=embed"
            className="w-full h-[450px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title="Google Map"
          ></iframe>

          {/* Click overlay → opens your exact link */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          ></a>
        </div>

        {/* Address */}
        <div className="mt-6">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-gray-600 hover:text-orange-500 transition"
          >
            📍 House # 17 (5th Floor), Road # 05, Sector # 12, Uttara, Dhaka 1230
          </a>
        </div>

      </div>
    </section>
  );
};

export default VisitOffice;