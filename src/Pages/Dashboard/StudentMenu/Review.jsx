
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import axiosSecure from "../../../api";

const Review = () => {
  const { id } = useParams();
  const scholar = useLoaderData();
  const { name, unName ,scholarAdderemail} = scholar;
  const navigate = useNavigate();
  const [postdate, setPostdate] = useState(new Date());

  const { user } = useAuth();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewComment = form.review.value;
    const ratingPoint = form.ratingPoint.value;
    const reviewDate = postdate;
    const reviewId = id;
    const reviewerName = user.displayName;
    const reviewerEmail = user.email;
    const reviewerPhoto = user.photoURL;

    const reviewData = {
      reviewComment,
      ratingPoint,
      reviewDate,
      reviewId,
      reviewerName,
      scholarAdderemail,
      reviewerEmail,
      reviewerPhoto,
      unName,
      name,
    };

    try {
     await axiosSecure.post(
        `/review`,
        reviewData
      );
     
      toast.success("review Added Successfully!");
        navigate("/dashboard/my-reviews");
    } catch (err) {
      console.log(err);
    }
   
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10  my-24 mx-24"
    >
      <div className="">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700   font-semibold" htmlFor="review">
              Please add a Review:
            </label>
            <input
              id="review"
              type="review"
              name="review"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 
              rounded-md  focus:border-[#85d7c8]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="ratingPoint"
              className="text-gray-700 font-semibold"
            >
              Rating point
            </label>
            <input
              id="ratingPoint"
              name="ratingPoint"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>

        <button
          type="submit"
          className="relative py-2.5 px-5 rounded-lg mt-6 bg-[#004C3F] 
      drop-shadow-lg  text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Review;
