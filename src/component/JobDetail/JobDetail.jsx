import React from "react";
import Button from "../Button/Button";
import { addToDb } from "../../utilities/fakeDB";

const JobDetail = ({loaderData}) => {
    const {contact_info,
        location,
        salary_range,
        job_title,
    id} = loaderData[0];

  return (
    <div className="mt-16 mr-20">
      <div className="bg-accent rounded-lg p-5">
        <h1 className="text-xl font-bold pb-4">Job Detail</h1>
        <hr />

        <div className="flex items-center gap-2 justify-start pt-3">
          <img
            className="h-5 w-5"
            src="../../../public/assets/Icons/Frame.png"
            alt=""
          />
          <p className="text-lg font-semibold">Salary Range: <span className="text-gray-500 font-normal">{salary_range}</span></p>
        </div>
        <div className="flex items-center gap-2 justify-start pt-2">
          <img
            className="h-5 w-5"
            src="../../../public/assets/Icons/Frame-1.png"
            alt=""
          />
          <p className="text-lg font-semibold">Job Title: <span className="text-gray-500 font-normal">{job_title}</span></p>
        </div>

        <h1 className="text-xl font-bold pb-4 pt-3">Contact Information</h1>
        <hr />

        <div className="flex items-center gap-2 justify-start pt-3">
          <img
            className="h-5 w-5"
            src="../../../public/assets/Icons/Frame-2.png"
            alt=""
          />
          <p className="text-lg font-semibold">Phone: <span className="text-gray-500 font-normal">{contact_info.phone}</span> </p>
        </div>
        <div className="flex items-center gap-2 justify-start pt-2">
          <img
            className="h-5 w-5"
            src="../../../public/assets/Icons/Frame-3.png"
            alt=""
          />
          <p className="text-lg font-semibold">Email: <span className="text-gray-500 font-normal">{contact_info.email}</span></p>
        </div>
        <div className="flex items-center gap-2 justify-start pt-2">
          <img
            className="h-5 w-5"
            src="../../../public/assets/Icons/Frame-4.png"
            alt=""
          />
          <p className="text-lg font-semibold">Address: <span className="text-gray-500 font-normal">{location}</span> </p>
        </div>
      </div>
      <button onClick={() => addToDb(id)} className="btn btn-primary text-white w-full mt-6">Apply Now</button>
    </div>
  );
};

export default JobDetail;
