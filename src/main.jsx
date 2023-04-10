import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import JobDetails from './component/JobDetails/JobDetails';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Statistics from './component/statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch("./fakedata.json")
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`/fakedata/fakedata-${params.jobId}.json`)
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/fakedata.json")
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
