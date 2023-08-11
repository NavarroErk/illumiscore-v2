import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Dashboard from './Pages/Dashboard/Dashboard';

import EditTeams from './Pages/Edit Pages/Edit Sports and Teams/EditTeams';
import About from "./Pages/About/About.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Terms from './Pages/Terms/Terms';
import SignedOut from './Pages/SignedOut/SignedOut';

import * as functionList from "./mongoDBClient";
import EditLights from './Pages/Edit Pages/Edit Lights/EditLights';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';





export const GlobalContext = React.createContext();  


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
  }, 
  {
    path: "/about", 
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/dashboard", 
    element: <Dashboard/>
  }, 
  {
    path: "/dashboard/editTeams",
    element: <EditTeams/>
  }, 
  {
    path: "/dashboard/editLights", 
    element: <EditLights/>
  }, 
  {
    path: "/privacyPolicy", 
    element: <PrivacyPolicy/>
  }, 
  {
    path: "/terms", 
    element: <Terms/>
  },
  {
    path: "/signedOut", 
    element: <SignedOut/>
  }
])




const RootComponent = () => {

  const [globalState, setGlobalState] = useState({ 
    functionList
  })
  return(
    <GlobalContext.Provider value={{globalState, setGlobalState}}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RootComponent/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
