import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegImage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { imageUpload } from "../hooks/Cloudinary";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const companyLogoRef = useRef(null);
  const [bannerUrl, setbannerUrl] = useState();
  const [postdate, setPostdate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const email = form.email.value;
    const postdate2 = postdate;
    const deadline = startDate;
    const category = form.category.value;
    const min_price = parseFloat(form.min_price.value);
    const max_price = parseFloat(form.max_price.value);
    const description = form.description.value;
    const jobData = {
      job_title,
      deadline,
      postdate2,
      category,
      min_price,
      max_price,
      description,
      bannerUrl,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      bid_count: 0,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        jobData
      );
      console.log(data);
      toast.success("Job Data Updated Successfully!");
      navigate("/my-posted-jobs");
    } catch (err) {
      console.log(err);
    }
  };
  const handleCompanyFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        const imageUrl = await imageUpload(selectedFile);

        const { secure_url } = imageUrl;

        setbannerUrl(secure_url);
        console.log(secure_url);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleCompanyButtonClick = () => {
    if (companyLogoRef.current) {
      companyLogoRef.current.click();
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Post a Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="Name">
                Job Adder Name
              </label>
              <input
                id="Name"
                type="Name"
                name="Name"
                disabled
                defaultValue={user?.displayName}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Machine Learning">Machine Learning</option>
                <option value="Data Analysts">Data Analysts</option>
                <option value="Chatbot Developers">Chatbot Developers</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Maximum Price
              </label>
              <input
                id="max_price"
                name="max_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Posting Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md read-only"
                selected={postdate}
                onChange={(date) => setPostdate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
         
          </div>
          <div
              onClick={handleCompanyButtonClick}
              className=" relative cursor-pointer  mt-5  w-full border-divider bg-transparent border-dashed flex-1"
            >
              <span className="">Add Job Banner :</span>
              {bannerUrl ? (
                <img
                  src={bannerUrl}
                  alt="a"
                  className="overflow-hidden  mr-5  w-full h-[150px] pr-10 "
                />
              ) : (
                <div
                  className="flex justify-center items-center    gap-4  md:py-10
                  py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg mr-5 "
                >
                  <FaRegImage size={50}/>
                </div>
              )}
              {!bannerUrl && (
                <div className=" top-16 left-10 absolute w-full">
                  <input
                    type="file"
                    ref={companyLogoRef}
                    className="hidden"
                    onChange={handleCompanyFileChange}
                  />
                </div>
              )}
            </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-10 mt-2 text-gray-700 bg-white border border-gray-200 
              rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="px-8 py-2.5 leading-5 w-full bg-[rgb(15,29,56)] 
             text-white transition-colors duration-300 transhtmlForm 
             rounded-md hover:bg-[rgb(26,38,62)] focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
