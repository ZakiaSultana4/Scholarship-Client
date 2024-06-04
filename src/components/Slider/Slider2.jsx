import Rating from "react-rating";
import { FaStar } from "react-icons/fa6";
import { MdStarHalf } from "react-icons/md";
import { CiStar } from "react-icons/ci";
const Slider = ({ image, text, p, name,reviewDate,photo,
  reviewerEmail }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[300px] "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-800/70">
        <div className="text-center">
          <img src={photo} alt="" className=" rounded-full w-12 flex justify-center items-center mx-auto mt-8"/>
          <h1 className="text-3xl font-semibold text-white lg:text-2xl">
            Review from {name} <br />
          </h1>
          <p className="text-lg text-white">{reviewerEmail}</p>
          <p className=" text-white">{reviewDate}</p>
          <h1 className="text-3xl font-semibold text-white lg:text-4xl mb-4">
            {text}
          </h1>
          <Rating
            placeholderRating={p}
            initialRating={p}
            emptySymbol={<CiStar size={35} className="text-yellow-400"/>}
            placeholderSymbol={<MdStarHalf size={30} className="text-yellow-400"/>}
            fullSymbol={<FaStar size={30} className="text-yellow-400"/>}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
