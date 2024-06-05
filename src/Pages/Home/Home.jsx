import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosSecure from "../../api";
import Carusel2 from "../../components/Slider/Carusel2";
import { GiBookAura } from "react-icons/gi";
import Article from "../Home/Article";
import AppSection from "../Home/AppSection";
const Home = () => {
  const [scholarship, setScholarship] = useState([]);
  const [seeMoreScholarship, setSeeMoreScholarship] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure
      .get("/allScholarship")
      .then((res) => {
        if (res.data.length > 6) {
          const ScholarshipArr = res.data.slice(0, 6);
          setScholarship(ScholarshipArr);
          setSeeMoreScholarship(true);
          return;
        }
        setScholarship(res.data);
        setSeeMoreScholarship(false);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Carusel2 />
      <div className="bg-[#fafafa]">
        <div className="">
          <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3 md:py-32 py-24">
            <h1 className="md:text-7xl text-4xl font-extrabold title-text text-center">
              Top Scholarships
            </h1>
            <p className="text-center lg:w-[70%] md:w-[80%] w-full mx-auto my-4 md:text-base text-sm md:leading-7 leading-relaxed">
              Top and low fees scholarship are here
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-10">
              {scholarship?.map((scholar) => (
                <>
                  <div className="py-4  px-4 shadow-md ">
                    <div className=" flex gap-5 flex-col md:flex-row">
                      <img
                        src={scholar.bannerUrl}
                        alt=""
                        className="w-[300px] h-[200px]"
                      />
                      <div className="">
                        <p className="font-bold text-xl">
                          <GiBookAura />
                          {scholar.unName}
                        </p>
                        <h2 className="mt-1 font-semibold">
                          {scholar.uncity},{scholar.unCountry}
                        </h2>
                        <h2 className=" text-gray-600 font-semibold">
                          {scholar.subjectCategory} Scholarship in{" "}
                          {scholar.degree} at the field of{" "}
                          {scholar.scholarCategory}
                        </h2>

                        <p className=" font-medium">
                          {" "}
                          Application Fee {scholar.fee}{" "}
                        </p>

                        <button
                          onClick={() => navigate(`/scholar/${scholar._id}`)}
                          className="bg-[#004C3F] mt-4 text-white px-4 py-1"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="text-center mt-16">
              {seeMoreScholarship ? (
                <Link
                  to="/All-Scholarship"
                  className="mx-auto btn bg-white drop-shadow-xl"
                >
                  Show All
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <AppSection/>
      <Article />
    </div>
  );
};

export default Home;
