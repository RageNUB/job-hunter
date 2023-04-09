import React, { useContext } from "react";
import { DataContext } from "../Main/Main";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
    const data = useContext(DataContext);
    // console.log(data)
  return (
    <div className="px-20 mt-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-10">
        {
            data.map(data => <Jobs
             key={data.id}
             data={data}
            ></Jobs>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
