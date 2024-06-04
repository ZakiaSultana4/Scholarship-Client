import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdOutlineNetworkCell } from "react-icons/md";
import { MdMessage } from "react-icons/md";
const Top = () => {
  return (
    <div className=" container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
        Top-Rated AI Expert
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
        Unleash the Power of the Best
      </p>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-4">
        <div className=" border border-blue-200 px-2 py-5 shadow-md rounded-md">
          <div className=" my-3 flex justify-between px-10">
            <div className=" flex items-center justify-center gap-2">
              <FaStar color="orange" size={20} />
              <p className="">5.0(20)</p>
            </div>

            <p className=" text-[#2196F3] font-semibold">Level-1</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff1.png&w=256&q=75" />
            <p className=" text-4xl font-semibold my-3">Bessie Cooper</p>
          </div>
          <div className="flex justify-between px-8 ">
            <div className=" flex items-center justify-center gap-2">
              <FaClock />
              <p> Full-Time</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdOutlineNetworkCell />
              <p>1-2 Years</p>
            </div>
          </div>
          <p className=" border border-dashed my-3"></p>
          <div className="flex justify-between px-8 ">
            <p className="text-[#2196F3]"> 30$/hr</p>

            <MdMessage size={20} />
          </div>
        </div>
     
        <div className=" border border-blue-200 px-2 py-5 shadow-md rounded-md">
          <div className=" my-3 flex justify-between px-10">
            <div className=" flex items-center justify-center gap-2">
              <FaStar color="orange" size={20} />
              <p className="">3.0(50)</p>
            </div>

            <p className=" text-[#2196F3] font-semibold">Level-1</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff3.png&w=256&q=75" />
            <p className=" text-4xl font-semibold my-3">Courtney Henry</p>
          </div>
          <div className="flex justify-between px-8 ">
            <div className=" flex items-center justify-center gap-2">
              <FaClock />
              <p> Part-Time</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdOutlineNetworkCell />
              <p>1-5 Years</p>
            </div>
          </div>
          <p className=" border border-dashed my-3"></p>
          <div className="flex justify-between px-8 ">
            <p className="text-[#2196F3]"> 30$/hr</p>

            <MdMessage size={20} />
          </div>
        </div>
        <div className=" border border-blue-200 px-2 py-5 shadow-md rounded-md">
          <div className=" my-3 flex justify-between px-10">
            <div className=" flex items-center justify-center gap-2">
              <FaStar color="orange" size={20} />
              <p className="">4.0(30)</p>
            </div>

            <p className=" text-[#2196F3] font-semibold">Level-1</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff6.png&w=256&q=75" />
            <p className=" text-4xl font-semibold my-3">Arlene McCoy</p>
          </div>
          <div className="flex justify-between px-8 ">
            <div className=" flex items-center justify-center gap-2">
              <FaClock />
              <p> Full-Time</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdOutlineNetworkCell />
              <p>5-6 Years</p>
            </div>
          </div>
          <p className=" border border-dashed my-3"></p>
          <div className="flex justify-between px-8 ">
            <p className="text-[#2196F3]"> 40$/hr</p>

            <MdMessage size={20} />
          </div>
        </div>
        <div className=" border border-blue-200 px-2 py-5 shadow-md rounded-md">
          <div className=" my-3 flex justify-between px-10">
            <div className=" flex items-center justify-center gap-2">
              <FaStar color="orange" size={20} />
              <p className="">4.0(60)</p>
            </div>

            <p className=" text-[#2196F3] font-semibold">Level-1</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img src="https://aihire-orpin.vercel.app/_next/image?url=%2Fimg%2Ffrelancer%2Ff2.png&w=256&q=75" />
            <p className=" text-4xl font-semibold my-3">Darlene Robertson</p>
          </div>
          <div className="flex justify-between px-8 ">
            <div className=" flex items-center justify-center gap-2">
              <FaClock />
              <p> Part-Time</p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdOutlineNetworkCell />
              <p>3-4 Years</p>
            </div>
          </div>
          <p className=" border border-dashed my-3"></p>
          <div className="flex justify-between px-8 ">
            <p className="text-[#2196F3]"> 35$/hr</p>

            <MdMessage size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
