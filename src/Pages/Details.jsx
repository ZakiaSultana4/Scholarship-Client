import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider2 from "../components/Slider/Slider2";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scholar, setScholar] = useState([]);
  const [scholarship, setScholarship] = useState([]);
  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_API_URL}/scholar/${id}`)
    .then((res) => {
      setScholar(res.data)
    })
    .catch((err) => console.log(err.message));
  }, [id]);


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/reviews?id=${id}`)
      .then((res) => {
        setScholarship(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className=" mt-5  max-w-7xl mx-auto lg:px-0 md:px-5 px-3  flex flex-col gap-5">
      <div className=" flex gap-10">
        <img src={scholar.bannerUrl} alt="" className="w-[500px]" />
        <div className="">
          <div className="">
            <p className="font-bold text-2xl">{scholar.unName}</p>
            <p className="font-bold text-2xl">
              World Rank University {scholar.unWorldRank}
            </p>
            <h2 className="mt-1 font-semibold">
              {scholar.uncity},{scholar.unCountry}
            </h2>
            <h2 className=" text-gray-600 font-semibold">
              {scholar.subjectCategory} Scholarship in {scholar.degree} at the
              field of
              {scholar.scholarCategory}
            </h2>

            <p className=" font-medium"> Application Fee {scholar.fee} </p>
            <p className=" font-medium">
              Service Charge {scholar.serviceCharge}{" "}
            </p>
            <p>deadline : {scholar.deadline}</p>
          </div>
          <button
            onClick={() => navigate(`/apply/${scholar._id}`)}
            className="bg-[#004C3F] mt-1 md:px-5 px-3 md:py-3 py-2 rounded-lg 
          shadow-md font-bold md:text-sm text-xs text-white"
          >
            Apply Scholarship
          </button>
        </div>
      </div>
      {scholarship.length > 0 ? (
        <div className=" mx-auto rounded-xl  w-[600px]  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {scholarship?.map((r) => (
              <div className="bg-white rounded-xl shadow-2xl pt-10" key={r._id}>
                <SwiperSlide>
                  <Slider2
                    image="https://images.pexels.com/photos/4065400/pexels-photo-4065400.jpeg?auto=compress&cs=tinysrgb&w=600"
                    name={r.reviewerName}
                    photo={r.reviewerPhoto}
                    text={r.reviewComment}
                    p={r.ratingPoint}
                    unName={r.unName}
                    reviewerEmail={r.reviewerEmail}
                    reviewDate={r.reviewDate}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="md:col-span-2">
          <h2 className="md:text-4xl text-2xl font-bold text-center text-green-900">
            There is no Review Comment for this particular scholarship!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Details;
