import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />

      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Next Section</h2>
        <p className="mt-4 text-gray-600">Your content continues here...</p>
      </section>
    </div>
  );
};

export default Home;
