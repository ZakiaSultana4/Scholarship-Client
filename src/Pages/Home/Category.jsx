const Category = () => {
  return (
    <div className=" container px-6 py-10 mx-auto">
      {" "}
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
        Trending Top Categories Uncovered
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        Our AI freelancer marketplace is more than just a platform. Its a
        community of professionals who are passionate about AI
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-4">
      
        <div className=" border border-blue-200 px-5 py-5 shadow-md flex flex-col items-center justify-center rounded-md">
          <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Fcategories%2Fdata-scient.png&w=64&q=75" />
          <p className=" text-4xl font-semibold my-3">Data Scientists</p>
          <p className=" text-gray-500">
            Find the Data Scientists for you from AIHire
          </p>
        </div>
        <div className=" border border-blue-200 px-5 py-5 shadow-md flex flex-col items-center justify-center rounded-md">
          <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Fcategories%2Faibraind.png&w=64&q=75" />
          <p className=" text-4xl font-semibold my-3">Machine Learning</p>
          <p className=" text-gray-500">
            Find the Machine Learning for you from AIHire
          </p>
        </div>
        <div className=" border border-blue-200 px-5 py-5 shadow-md flex flex-col items-center justify-center rounded-md">
          <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Fcategories%2Fchatbot.png&w=64&q=75" />
          <p className=" text-4xl font-semibold my-3">Chatbot Developers</p>
          <p className=" text-gray-500">
            Find the Chatbot Developers for you from AIHire
          </p>
        </div>
        <div className=" border border-blue-200 px-5 py-5 shadow-md flex flex-col items-center justify-center rounded-md">
          <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Fcategories%2Fainlp.png&w=64&q=75" />
          <p className=" text-4xl font-semibold my-3">NLP Specialists</p>
          <p className=" text-gray-500">
            Find the NLP experties for you from AIHire
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
