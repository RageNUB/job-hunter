import React, { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

export const DataContext = createContext([]);

const Main = () => {
//   const [data, setData] = useState([]);
  const loaderData = useLoaderData();

//   useEffect(() => {
//     setData(loaderData);
//   }, [loaderData]);

  return (
    <div>
      <DataContext.Provider value={loaderData}>
        <Banner></Banner>
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </DataContext.Provider>
    </div>
  );
};

export default Main;
