import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

export const DataContext = createContext([]);

const Main = () => {
  const loaderData = useLoaderData();

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
