import { useEffect, useState } from "react";

import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";
import { MdDelete } from "react-icons/md";

import toast from "react-hot-toast";

const Allreviewsad = () => {
    const [scholarship, setScholarship] = useState([]);
    const { user } = useAuth();

  
    useEffect(() => {
      getData();
    }, [user]);
    const getData = async () => {
      const { data } = await axiosSecure.get(`/review`);
      setScholarship(data);
    };
  
    const handleDelete = async (id) => {
      try {
        const { data } = await axiosSecure.delete(`/review/${id}`);
        console.log(data);
        toast.success("Delete Successful");
  
        //refresh ui
        getData();
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };
  return (
    <section className="container px-4 mx-auto pt-12">
    <div className="flex items-center gap-x-3">
      <h2 className="text-lg font-medium text-gray-800 ">
        My Posted reviews in perticular Scholarship
      </h2>

      <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
      {scholarship.length}
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
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <div className="flex items-center gap-x-3">
                      <span>university name</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <span>Review date</span>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <button className="flex items-center gap-x-2">
                      <span>Review comments</span>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <button className="flex items-center gap-x-2">
                      <span>Rating Point</span>
                    </button>
                  </th>

                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {scholarship?.map((scholar) => (
                  <>
                    <tr key={scholar._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.unName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.reviewDate}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.reviewComment}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {scholar.ratingPoint}
                      </td>
                      <td className=" flex px-4 py-4 text-sm gap-4  whitespace-nowrap">
                        <div
                          onClick={() => handleDelete(scholar._id)}
                          className=" cursor-pointer"
                        >
                          <MdDelete size={20} />
                        </div>
                       
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Allreviewsad