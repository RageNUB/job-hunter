import { useLoaderData } from "react-router-dom";
import TitleText from "../TitleText/TitleText";
import JobDetail from "../JobDetail/JobDetail";

const JobDetails = () => {
  const loaderData = useLoaderData();
//   console.log(loaderData);

  const {
    job_description,
    job_responsibilities,
    educational_requirements,
    experience_required,
  } = loaderData[0];

  return (
    <div>
      <TitleText>Job Details</TitleText>
      <div className="grid grid-cols-3">
        <div className="px-20 pt-16 col-span-2">
          <h1 className="text-secondary">
            <span className="text-lg font-bold text-neutral">
              Job Description:{" "}
            </span>
            {job_description}
          </h1>
          <p className="text-lg font-bold text-neutral mt-8">
            Job Responsibilities:{" "}
          </p>
          {job_responsibilities.map((res,index) => (
            <li className="text-secondary pl-5" key={index}>{res}</li>
          ))}
          <p className="text-secondary mt-8">
            <span className="text-lg font-bold text-neutral">
              Educational Requirements:{" "}
            </span>
            {educational_requirements}
          </p>
          <p className="text-secondary mt-8">
            <span className="text-lg font-bold text-neutral">Experience: </span>
            {experience_required}
          </p>
        </div>
        <div>
          <JobDetail 
           loaderData={loaderData}
          ></JobDetail>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
