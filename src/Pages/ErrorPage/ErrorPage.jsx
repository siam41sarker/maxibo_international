const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1c3f73] to-[#2f5b97] px-6">
      
      <div className="text-center text-white max-w-xl">
        
        {/* 404 */}
        <h1 className="font-outfit text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500 mb-6">
          404
        </h1>

        {/* Title */}
        <h2 className="font-outfit text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="font-inter text-gray-200 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
        >
          Back to Home
        </a>

      </div>
    </section>
  );
};

export default ErrorPage;