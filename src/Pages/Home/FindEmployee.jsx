import { MdOutlineArrowForwardIos } from "react-icons/md";
import find from "../../assets/find.svg";
import { Link } from "react-router-dom";

const FindEmployee = () => {
  return (
    <div className="container mx-auto px-6 pt-16 pb-20 ">
      <div className="grid xl:grid-cols-5 lg:grid-cols-2 justify-between items-center">
        <div className="xl:space-y-10 xl:col-span-2 lg:space-y-6 space-y-4 lg:order-1 order-2">
          <h3 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">
            Find an AI Expert you need right now
          </h3>
          <p className=" ">
            Are you an enthusiastic and customer-focused individual looking for
            an exciting opportunity to join a dynamic team? We are currently
            seeking a Customer Service Representative to fill a crucial role in
            our organization.
    
          </p>

          <Link
            to={"/add-job"}
            className="capitalize border-2 border-primaryColor bg-[#2196F3] rounded-full text-white py-3 md:px-8 px-4 inline-block md:gap-5 gap-2 md:text-base text-sm"
          >
            Add Job Post <MdOutlineArrowForwardIos className="inline pb-0.5" />
          </Link>
        </div>

        <div className="xl:col-span-3 text-left ms-auto lg:order-2 order-1">
          <img src={find} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FindEmployee;
