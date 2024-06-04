import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegImage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../hooks/Cloudinary";

const AddScholarship = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const companyLogoRef = useRef(null);
  const [bannerUrl, setbannerUrl] = useState();
  const [postdate, setPostdate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const scholarAdderName = user?.displayName;
    const scholarAdderemail = user?.email;
    const postdate2 = postdate;
    const deadline = startDate;
    const form = e.target;
    const name = form.Name.value;
    const unName = form.unName.value;
    const unCountry = form.unCountry.value;
    const uncity = form.uncity.value;
    const degree = form.degree.value;
    const scholarCategory = form.scholarCategory.value;
    const subjectCategory = form.subjectCategory.value;
    const serviceCharge = parseFloat(form.serviceCharge.value);
    const unWorldRank = parseFloat(form.unWorldRank.value);
    const fee = parseFloat(form.fee.value);
    const timestamp= Date.now()
    // const timestamp= `${t}`
    const scholarData = {
      scholarAdderName,
      scholarAdderemail,
      name,
      unName,
      unCountry,
      degree,
      uncity,
      scholarCategory,
      subjectCategory,
      serviceCharge,
      unWorldRank,
      fee,
      deadline,
      postdate2,
      bannerUrl,
      timestamp
    };
    console.log(scholarData);
    
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/moderator-add-scholarship`,
        scholarData
      );
      console.log(data);
      toast.success("Scholarship Updated Successfully!");
      // navigate("/my-posted-jobs");
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
    <div className="max-w-7xl  lg:px-0 md:mx-12 px-3 py-10">
      <form onSubmit={handleFormSubmit} action="">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="Name"
            >
              Scholarship Name :
            </label>
            <input
              id="Name"
              type="Name"
              name="Name"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 
              rounded-md  focus:border-[#85d7c8]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              className="text-gray-700 text-lg font-semibold"
              htmlFor="subjectCategory"
            >
              Subject Category
            </label>
            <select
              name="subjectCategory"
              id="subjectCategory"
              className="block w-full px-4 py-4 mt-4 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            >
              <option value="Full-fund">Full-fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              className="text-gray-700 text-lg font-semibold"
              htmlFor="scholarCategory"
            >
              Scholarship category
            </label>
            <select
              name="scholarCategory"
              id="scholarCategory"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            >
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              className="text-gray-700 text-lg font-semibold"
              htmlFor="degree"
            >
              Degree
            </label>
            <select
              name="degree"
              id="degree"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            >
              <option value="masters">Masters</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="unName"
            >
              University Name :
            </label>
            <input
              id="unName"
              type="text"
              name="unName"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="unCountry"
            >
              University Country :
            </label>
            <input
              id="unCountry"
              type="text"
              name="unCountry"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="uncity"
            >
              University city :
            </label>
            <input
              type="text"
              id="uncity"
              name="uncity"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="unWorldRank"
              className="text-gray-700  text-lg font-semibold"
            >
              University World Rank
            </label>
            <input
              id="unWorldRank"
              name="unWorldRank"
              type="number"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="fee"
            >
              Application fees
            </label>
            <input
              id="fee"
              name="fee"
              type="number"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700  text-lg font-semibold"
              htmlFor="serviceCharge"
            >
              Service charge
            </label>
            <input
              id="serviceCharge"
              name="serviceCharge"
              type="number"
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700  text-lg font-semibold">
                Posting Date
              </label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md read-only"
                selected={postdate}
                onChange={(date) => setPostdate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700  text-lg font-semibold">
                Deadline
              </label>

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
            className=" relative cursor-pointer  w-full border-divider bg-transparent border-dashed flex-1"
          >
            <span className="text-gray-700  text-lg font-semibold">
              Add Job Banner :
            </span>
            {bannerUrl ? (
              <img
                src={bannerUrl}
                alt="a"
                className="overflow-hidden  mr-5  w-full h-[100px] pr-10 "
              />
            ) : (
              <div
                className="flex justify-center items-center    gap-4  md:py-10
                  py-2 md:text-base  text-sm mt-3 px-5 relative border-4  border-gray-300 rounded-lg mr-5 "
              >
                <FaRegImage size={50} />
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
    </div>
  );
};

export default AddScholarship;
