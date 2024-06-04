import { useEffect, useState } from "react";

import useAuth from "../../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LuClipboardEdit } from "react-icons/lu";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosSecure from "../../../api";
import axios from "axios";

const AllappliedScholarAd = () => {
  const [scholar, setscholar] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const [sort, setSort] = useState("");
  const [sort2, setSort2] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const { user, setLoading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [openModa, setOpenModa] = useState(false);
 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/ad-ap-scholar?page=${currentPage}&size=${itemsPerPage}&sort=${sort}&sort2=${sort2}&search=${search}`
      );
      setscholar(data);
    };
    getData();
  }, [currentPage, itemsPerPage, search, sort,sort2]);
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/jobs-count?&search=${search}`
      );

      setCount(data.count);
    };
    getCount();
  }, [search]);

  const { mutateAsync } = useMutation({
    mutationFn: async ({ id, status }) => {
      setLoading(true);
      const { data } = await axiosSecure.patch(`/scholar/${id}`, {
        status,
      });
      console.log(data);
      return data;
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Status Updated");
      // refresh ui for latest data

      // Kothin
      queryClient.invalidateQueries({ queryKey: ["scholars"] });
    },
  });
  const handleStatus = async (id, prevStatus, status) => {
    console.log(id, prevStatus, status);
    if (prevStatus === status) return console.log("Sry vai.. hobena");
    await mutateAsync({ id, status });
  };
  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/scholar/${id}`);
      console.log(data);
      toast.success("Delete Successful");

      //refresh ui
      // getData();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <section className="container px-4 mx-auto pt-5">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          Applied Scholarships
        </h2>
      </div>

      <div>
        <select
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
          }}
          value={sort}
          name="sort"
          id="sort"
          className="border p-4 rounded-md"
        >
          <option value="">Sort By Deadline</option>
          <option value="dsc">Descending Order</option>
          <option value="asc">Ascending Order</option>
        </select>
      </div>

      <div className=" flex gap-10 items-center justify-center"></div>
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
                        <span>scholar name</span>
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
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                     Applied Date
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

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {scholar.map((scholar) => (
                    <tr key={scholar._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-wrap">
                        {scholar.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-wrap">
                        {scholar.unName}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.subjectCategory}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.scholarCategory}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.degree}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.deadline.slice(0, 10)}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar?.appliedData.slice(0, 10)}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${scholar.serviceCharge}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${scholar.fee}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap ">
                        <div className="flex gap-4">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              scholar.status === "Pending" &&
                              "bg-yellow-100/60 text-yellow-500"
                            } ${
                              scholar.status === "Processing" &&
                              "bg-blue-100/60 text-blue-500"
                            } ${
                              scholar.status === "Completed" &&
                              "bg-emerald-100/60 text-emerald-500"
                            } ${
                              scholar.status === "Rejected" &&
                              "bg-red-100/60 text-red-500"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                scholar.status === "Pending" && "bg-yellow-500"
                              } ${
                                scholar.status === "Processing" && "bg-blue-500"
                              } ${
                                scholar.status === "Complete" && "bg-green-500"
                              } ${
                                scholar.status === "Completed" && "bg-green-500"
                              } ${
                                scholar.status === "Rejected" && "bg-red-500"
                              } `}
                            ></span>
                            <h2 className="text-sm font-normal ">
                              {scholar.status}
                            </h2>
                          </div>
                          <div>
                            <button
                              onClick={() => setOpenModa(true)}
                              className="rounded-md bg-[#004C3F] px-1 py-1 text-white"
                            >
                              <LuClipboardEdit size={20} />
                            </button>
                            <div
                              className={`fixed z-[100] flex items-center justify-center ${
                                openModa
                                  ? "opacity-1 visible"
                                  : "invisible opacity-0"
                              } inset-0  backdrop-blur-sm duration-100 `}
                            >
                              <div
                                className={`absolute max-w-md rounded-lg  p-3 pb-5 text-center
                               drop-shadow-2xl  border border-[#61a59a] ${
                                 openModa
                                   ? "scale-1 opacity-1 duration-300"
                                   : "scale-0 opacity-0 duration-150"
                               } `}
                              >
                                <div className="flex items-center gap-x-6 py-5">
                                  <button
                                    onClick={() =>
                                      handleStatus(
                                        scholar._id,
                                        scholar.status,
                                        "Processing"
                                      )
                                    }
                                    className=" text-white px-3 py-1 bg-[#004C3F] disabled:cursor-not-allowed
                                  transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                                  >
                                    Processing
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleStatus(
                                        scholar._id,
                                        scholar.status,
                                        "Completed"
                                      )
                                    }
                                    className=" text-white px-3 py-1 bg-[#004C3F] disabled:cursor-not-allowed
                                  transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                                  >
                                    Completed
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleStatus(
                                        scholar._id,
                                        scholar.status,
                                        "Rejected"
                                      )
                                    }
                                    className=" text-white px-3 py-1 bg-[#004C3F] disabled:cursor-not-allowed
                                    transition-colors duration-200   hover:text-red-500 focus:outline-none"
                                  >
                                    Rejected
                                  </button>
                                </div>
                                <button
                                  onClick={() => setOpenModa(false)}
                                  className="rounded-md bg-[#004C3F] px-4 py-1 text-white"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap flex gap-1 flex-col">
                        <div className="mx-auto flex  items-center justify-center">
                          <button
                            onClick={() =>
                              navigate(`/dashboard/Feedback/${scholar._id}`)
                            }
                            className=" bg-[#004C3F] px-1 rounded-md text-white"
                          >
                            Feedback
                          </button>
                        </div>

                        <button
                          onClick={() => handleDelete(scholar._id)}
                          className=" bg-[#004C3F] px-1 rounded-md text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => navigate(`/scholar/${scholar._id}`)}
                          className=" bg-[#004C3F] px-1 rounded-md text-white"
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

export default AllappliedScholarAd;
