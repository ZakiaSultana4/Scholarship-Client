import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import axiosSecure from "../../../api";
import toast from "react-hot-toast";

const MyApplication = () => {
  const [scholar, setscholar] = useState([]);

  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await axiosSecure.get(
      `/applicant-find-scholarship/${user?.email}`
    );
    setscholar(data);
  };
  function handleNextClick(s,sid) {
    if (s === "Processing") {
      return toast.error("Your Application is on processing.");
    }
    if (s === "Pending") {
      navigate(`/dashboard/Edit/${sid}`)
    }
  }
  return (
    <section className="container px-4 mx-auto pt-10">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Applied Scholarship
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {scholar.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Scholarship name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>University Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>scholar Category</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Subject Category</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Applied Degree
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Service Charge
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Application Fees
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Application Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Feedback from Moderator
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {scholar.map((s) => (
                    <tr key={s._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {s.unName}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {s.unName}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {s.subjectCategory}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {s.scholarCategory}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {s.degree}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${s.serviceCharge}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${s.fee}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap ">
                        <div className="flex">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              s.status === "Pending" &&
                              "bg-yellow-100/60 text-yellow-500"
                            } ${
                              s.status === "Processing" &&
                              "bg-blue-100/60 text-blue-500"
                            } ${
                              s.status === "Completed" &&
                              "bg-emerald-100/60 text-emerald-500"
                            } ${
                              s.status === "Rejected" &&
                              "bg-red-100/60 text-red-500"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                s.status === "Pending" && "bg-yellow-500"
                              } ${
                                s.status === "Processing" && "bg-blue-500"
                              } ${
                                s.status === "Complete" && "bg-green-500"
                              } ${
                                s.status === "Completed" && "bg-green-500"
                              } ${
                                s.status === "Rejected" && "bg-red-500"
                              } `}
                            ></span>
                            <h2 className="text-sm font-normal ">
                              {s.status}
                            </h2>
                          </div>
                          <button
                            onClick={() => handleNextClick(s.status,s._id)}
                            className=" bg-sky-600 text-white 
                         inline-flex items-center px-3 py-1 rounded-full gap-x-2"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                      <td>
                        {s.Feedback}
                        {/* {
                         ( scholar.Feedback ) ? {scholar.Feedback} :""
                        } */}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap flex gap-1 flex-col">
                        <button
                          onClick={() =>
                            navigate(`/dashboard/review/${s._id}`)
                          }
                          className=" bg-[#004C3F] px-1 rounded-md text-white"
                        >
                          Add review
                        </button>
                        <button
                          onClick={() => navigate(`/scholar/${scholar._id}`)}
                          className=" bg-[#e14141] px-1 rounded-md text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => navigate(`/scholar/${s._id}`)}
                          className=" bg-[#9aad2f] px-1 rounded-md text-white"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApplication;
