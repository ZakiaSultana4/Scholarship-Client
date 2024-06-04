// import bannerImage from "../../assets/images/banner.png";
// import { MdOutlineArrowForwardIos } from "react-icons/md";

const Banner = () => {
  return (
    <div className="mx-6 flex flex-col md:flex-row  items-center justify-between min-h-[80vh] bg-[#0C1A35] text-white">
      <div className="xl:w-11/12 py-6 mt-5  md:w-[60vw] w-[90vw]  max-w-7xl mx-auto lg:p-0 md:px-5  md:ml-20">
        <h2 className="xl:text-7xl lg:text-5xl md:text-7xl text-2xl font-bold">
        Find The Right AI <span>Experts</span>
        </h2>
        <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text-base text-sm">
        Join our community of businesses, entrepreneurs, and Experts who are passionate about AI and its potential
        </p>
        <div className="flex pt-6">
          <button className="capitalize border-2 border-primaryColor bg-primaryColor   rounded-none py-3 md:px-8 px-4 flex items-center md:gap-5 gap-2 md:text-base text-sm">
            Get Start 
          </button>
          <button className="capitalize border-2 border-primaryColor rounded-none py-3 md:px-8 px-4 flex items-center gap-5 md:text-base text-sm">
            Contact
          </button>
        </div>
      </div>
      <div className=" md:h-[100vh] md:w-[60vw] w-[90vw]">
        <img src="https://pixner.net/aihire/aihire/assets/img/bn/banner-thumb2.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Banner;
