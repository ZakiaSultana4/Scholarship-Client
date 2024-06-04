
import UserDataRow from "../../../components/Dashboard/Sidebar/TableRows/UserDataRow";
import { useEffect, useState } from "react";
import axiosSecure from "../../../api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('')


  useEffect(() => {
    const getUser = async () => {
      const { data } = await axiosSecure(`/users?filter=${filter}`);
      setUsers(data);
    };
    getUser();
  }, [filter]);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 my-5 ">
        <div className=" flex justify-end ">
          <form className="flex flex-col gap-1  ">
            <label
              className="text-gray-700 text-lg font-semibold"
              htmlFor="category"
            >
              Sort User By Role
            </label>
            <select
              onChange={e => {
                setFilter(e.target.value)
              }}
              value={filter}
              name='category'
              id='category'
              className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-[#a7d8cf]  focus:ring-[#a7d8cf]  focus:ring-opacity-40  focus:outline-none focus:ring"
            >
              <option value="admin">admin</option>
              <option value="moderator">moderator</option>
              <option value="user">user</option>
            </select>
          </form>
        </div>
        <div className="pb-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                    Update User Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                    Delete User
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => (
                      <UserDataRow
                        key={user._id}
                        user={user}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
