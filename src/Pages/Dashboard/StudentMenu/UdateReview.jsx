import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { axiosSecure } from "../../../hooks/useAxiosSecure";


const UdateReview = () => {
    const { id } = useParams();
   
    // const [scholarship, setScholarship] = useState([]);

    // console.log(scholarship);
    // useEffect(() => {
    //   axios
    //     .get(`https://scholarship-two.vercel.app/reviews?id=${id}`)
    //     .then((res) => {
    //       console.log(res);
    //       setScholarship(res.data);
    //     })
    //     .catch((err) => console.log(err.message));
    // }, []);


    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const reviewComment = form.review.value;
      const ratingPoint = form.ratingPoint.value;
   
  
      const reviewData = {
        reviewComment,
        ratingPoint,
      };
  
      try {
        const { data } = await axiosSecure.put(
          `/review/${id}`,
         reviewData
        )
        console.log(data)
        toast.success('Data Updated Successfully!')
        // navigate('/my-posted-jobs')
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    };
  return (
    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:py-32 py-24 ">  
    <p className=" text-4xl ml-24">Update your review</p>
     <form
    onSubmit={handleFormSubmit}
    className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10   mx-24"
  >
  <div className="">
  <div className="grid grid-cols-1 gap-6 mt-4 ">
      <div>
        <label className="text-gray-700   font-semibold" htmlFor="review">
        Please add a Review:
        </label>
        <input
          id="review"
          type="review"
          name="review"
          className="block w-full px-4 py-5 mt-2 text-gray-700 bg-white border border-gray-200 
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
  </form></div>
  
  )
}

export default UdateReview