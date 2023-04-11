import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { getStoredCart } from "../../utilities/fakeDB";
import TitleText from "../TitleText/TitleText";
import JobOverView from "../JobOverView/JobOverView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {
  const loaderData = useLoaderData();
  const storedData = getStoredCart();
  const [remoteJob, setRemoteJob] = useState([])
  const [onsiteJob, setOnsiteJob] = useState([])
  const [remoteStatus, setRemoteStatus] = useState(false)
  const [onsiteStatus, setOnsiteStatus] = useState(false)

  let newData = [];
  for (const id in storedData) {
    const exist = loaderData.filter((data) => data.id == id);
    newData.push(exist[0]);
  }

  const handleRemoteJob = () => {
      const remote = [];
      const checkRemote = newData.filter(data => data.remote)
      for(const jobs of checkRemote){
        remote.push(jobs)
      }
      setRemoteStatus(true)
      setOnsiteStatus(false)
      setRemoteJob(remote)
  }
  console.log(remoteStatus)

  const handleOnsiteJob = () => {
    const onsite =[];
    const checkOnsite = newData.filter(data => !data.remote)
    for(const jobs of checkOnsite) {
        onsite.push(jobs)
    }
    setRemoteStatus(false)
    setOnsiteStatus(true);
    setOnsiteJob(onsite)
  }
  console.log(onsiteStatus)
  


  return (
    <div>
      <TitleText>Applied Jobs</TitleText>
      <div className="mx-20 mt-16">
        <div className="dropdown dropdown-bottom flex justify-end">
          <label tabIndex={0} className="btn btn-accent m-1">
            <span className="pr-2">Filter By</span> <FontAwesomeIcon icon={faAngleDown} />

          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleRemoteJob}>Remote Jobs</a>
            </li>
            <li>
              <a onClick={handleOnsiteJob}>Onsite Jobs</a>
            </li>
          </ul>
        </div>

        {(!remoteStatus && !onsiteStatus) && newData.map((data) => (
          <JobOverView key={data.id} data={data}></JobOverView>
        ))}
         
        {remoteStatus && remoteJob.map((data) => (
          <JobOverView key={data.id} data={data}></JobOverView>
        ))}

        {onsiteStatus && onsiteJob.map((data) => (
          <JobOverView key={data.id} data={data}></JobOverView>
        ))}

      </div>
    </div>
  );
};

export default AppliedJobs;
