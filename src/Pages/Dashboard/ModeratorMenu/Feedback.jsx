import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Feedback = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Feedback = form.Feedback.value;
    const FeedbackId = id;
    const FeedbackData = {
      Feedback,
      FeedbackId,
    };

    try {
      const { data } = await axios.put(
        `https://scholary.vercel.app/Feedback/${id}`,
        FeedbackData
      );
      console.log(data);

      toast.success("Feedback Added Successfully!");
      navigate("/dashboard/all-applied-Scholarship");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
    >
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-gray-700 font-semibold " htmlFor="Feedback">
          Add Your Feedback
        </label>
        <textarea
          className="block w-full px-4 py-2 mt-2 text-gray-700
         bg-white border border-gray-200 rounded-md 
          focus:border-[#004C3F] focus:ring-[#004C3F]
           focus:ring-opacity-40  focus:outline-none focus:ring"
          name="Feedback"
          id="Feedback"
          cols="30"
        ></textarea>
      </div>
      <button
        type="submit"
        className="relative py-2.5 px-5 rounded-lg mt-6 bg-[#004C3F] 
      drop-shadow-lg  text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Feedback;
