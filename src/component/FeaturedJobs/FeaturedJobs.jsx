import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Main/Main";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
    const contextData = useContext(DataContext);
    const [data, setData] = useState([])

    useEffect( () => {
      const slicedData = contextData.slice(0, 4);
      setData(slicedData)
    },[])

    const handleSeeAll = () => {
      setData(contextData)
    }
    

  return (
    <div className="px-5 lg:px-20 mt-16">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-5">Featured Jobs</h1>
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
             handleSeeAll={handleSeeAll}
            ></Jobs>)
        }
      </div>
      <div className="flex justify-center mt-5 mb-5">
        {
          data.length <= 4 && <button onClick={handleSeeAll} className="btn btn-primary text-white">See All Jobs</button>
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
