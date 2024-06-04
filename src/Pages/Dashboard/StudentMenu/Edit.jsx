import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Edit = () => {
  const data = useLoaderData();

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    degree,
    appPhoneNumber,
    appGender,
    gap,
    SSC,
    HSC,
    status,
    ApplicantName,
    Applicantemail,
  } = data;
console.log(data);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const ApplicantName = user?.displayName;
    const Applicantemail = user?.email;
    const appPhoneNumber = form.appPhoneNumber.value;
    const appGender = form.appGender.value;
    const gap = parseFloat(form.gap.value);
    const SSC = parseFloat(form.SSC.value);
    const HSC = parseFloat(form.HSC.value);
    const status = "Pending";

    const sData = {
      appPhoneNumber,
      appGender,
      gap,
      SSC,
      HSC,
      status,
      ApplicantName,
      Applicantemail,
    };
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/Edit/${id}`,
        sData
      );

      toast.success("Applicant Data Updated Successfully!");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="Name">
                Applicant Name
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
                Applicant Email
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
              <label className="text-gray-700 " htmlFor="appPhoneNumber">
                Applicant phone number
              </label>
              <input
                id="appPhoneNumber"
                name="appPhoneNumber"
                defaultValue={data?.appPhoneNumber}
                type="Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="gap">
                Study gap
              </label>
              <input
                id="gap"
                name="gap"
                type="Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="SSC">
                SSC Result
              </label>
              <input
                id="SSC"
                name="SSC"
                type="Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="HSC">
                HSC Result
              </label>
              <input
                id="HSC"
                name="HSC"
      
                type="Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="appGender">
                Applicant gender
              </label>
              <select
                name="appGender"
                id="appGender"
                className="border p-2 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="FeMale">Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="appDegree">
                Applicant Applying Degree
              </label>
              <input defaultValue={degree} className="border p-2 rounded-md" />
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
      </section>
    </div>
  );
};

export default Edit;
