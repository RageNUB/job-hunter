import React from "react";
import { Link } from "react-router-dom";

const JobOverView = ({ data }) => {
  const {
    id,
    image,
    company_name,
    job_title,
    remote,
    full_time,
    salary_range,
    location,
  } = data;
  return (
    <div className="border p-5 mt-5 rounded-lg flex items-center">
      <div className="bg-accent w-48 h-48 flex items-center justify-center rounded-lg">
        <img className="p-5" src={image} alt="" />
      </div>
      <div className="flex justify-between items-center w-full pl-6">
        <div>
          <h2 className="text-2xl font-bold">{job_title}</h2>
          <h4 className="text-lg font-semibold text-secondary mt-3 mb-3">{company_name}</h4>
          <div className="mb-4">
            <button className="btn btn-outline btn-primary mr-5">
              {remote ? "Remote" : "Onsite"}
            </button>
            <button className="btn btn-outline btn-primary">
              {full_time ? "Full Time" : "Part Time"}
            </button>
          </div>
          <div className="flex gap-4 mb-5">
            <div className="flex gap-2">
              <img src="/assets/Icons/Frame-4.png" alt="" />
              <p className="text-secondary">{location}</p>
            </div>
            <div className="flex gap-2">
              <img src="/assets/Icons/Frame.png" alt="" />
              <p className="text-secondary">{salary_range}</p>
            </div>
          </div>
        </div>
        <div>
            <button className="btn btn-primary text-white"><Link to={`/jobDetails/${id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default JobOverView;
