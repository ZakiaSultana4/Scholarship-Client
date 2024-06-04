import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AllScholarship = () => {
  const navigate = useNavigate();
  const [scholarship, setScholarship] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  // const [degree, setDegree] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/allScholarships?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      setScholarship(data);
    };
    getData();
  }, [currentPage,itemsPerPage, search]);
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/allScholarships-count?&search=${search}`
      );

      setCount(data.count);
    };
    getCount();
  }, [search]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3  py-10">
      <form onSubmit={handleSearch}>
        <div className=" pb-5 relative flex">
          <input
            className="w-full md:py-5 py-3 md:text-base text-sm md:px-6 px-3 rounded-l-lg shadow-lg"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />

          <button
            type="submit"
            // onClick={() => handleSearch2()}
            className="md:py-5 py-3 md:px-10 px-6 md:text-lg text-base font-semibold rounded-r-lg
             text-white bg-[#004C3F] shadow-md"
          >
            Search
          </button>
        </div>
      </form>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8  mt-5">
        {scholarship?.map((scholar) => (
         <>
         <div className="py-2  px-4 shadow-md ">
           <div className=" flex gap-5">
             <img src={scholar.bannerUrl} alt="" className="w-[300px] h-[220px]"/>
             <div className="">
               <p className="font-bold text-xl">{scholar.unName}</p>
               <p className="font-bold text-md">{scholar.name}</p>
               <h2 className="mt-1 font-semibold">
                 {scholar.uncity},{scholar.unCountry}
               </h2>
               <h2 className=" text-gray-600 font-semibold">
                 {scholar.subjectCategory} Scholarship in{" "}
                 {scholar.degree} at the field of {scholar.scholarCategory}
               </h2>
  
                 <p className=" font-medium"> Application Fee {scholar.fee} </p>
            
               <button
               onClick={() => navigate(`/scholar/${scholar._id}`)}
               className="bg-[#004C3F] mt-4 text-white px-4 py-1"
             >
               View Details
             </button>
             </div>
           
           </div>

           <div>
           
           </div>
         </div>
       </>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#004C3F]   hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#004C3F]  text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#004C3F]   hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#004C3F]  disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllScholarship;
