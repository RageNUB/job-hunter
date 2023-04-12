import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ data }) => {
  const {
    id, image, company_name, job_title, remote, full_time, salary_range, location} = data;
  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <img src={image} alt="" />
      <h2 className="text-2xl font-bold mt-5 mb-3">{job_title}</h2>
      <p className="text-secondary mb-3 font-semibold">{company_name}</p>
      <div className="mb-4">
        <button className="btn btn-outline btn-primary mr-5">
          {remote ? "Remote" : "Onsite"}
        </button>
        <button className="btn btn-outline btn-primary">
          {full_time ? "Full Time" : "Part Time"}
        </button>
      </div>
      <div className="lg:flex gap-4 mb-5">
        <div className="flex gap-2 mb-3">
          <img src="/assets/Icons/Frame-4.png" alt="" />
          <p className="text-secondary">{location}</p>
        </div>
        <div className="flex gap-2">
          <img src="/assets/Icons/Frame.png" alt="" />
          <p className="text-secondary">{salary_range}</p>
        </div>
      </div>
      <button className="btn btn-primary text-white"><Link to={`/jobDetails/${id}`}>View Details</Link></button>
    </div>
  );
};

export default Jobs;
