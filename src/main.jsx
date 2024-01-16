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
import Fragment from './cores/fragment/Fragment';
import SimpleSearch from './cores/simpleSearch/SimpleSearch';

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
    path: "/fragmentSearch",
    element: <Fragment/>
  },
  {
    path: "/simpleSearch",
    element: <SimpleSearch/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
     <RouterProvider router={router} />
  </ChakraProvider>
)
