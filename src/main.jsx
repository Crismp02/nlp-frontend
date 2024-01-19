import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from './cores/landingPage/LandingPage'
import Summary from './cores/summary/Summary';
import SimpleSearch from './cores/simpleSearch/SimpleSearch';
import UploadPDF from './cores/uploadPDF/UploadPDF';
import WorkSummary from './cores/summary/WorkSummary';
import WorkSummary2 from './cores/summary/WorkSummary2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/summary",
    element: <Summary/>,
  },
  {
    path: "/summary/:id",
    element: <WorkSummary/>,
  },
  {
    path: "/simpleSearch",
    element: <SimpleSearch/>
  },
  {
    path: "/uploadPDF",
    element: <UploadPDF/>
  },
  {
    path: "/summaryNew",
    element: <WorkSummary2/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     <RouterProvider router={router} />
  </ChakraProvider>
)
