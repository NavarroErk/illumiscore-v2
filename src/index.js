import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Dashboard from './Pages/Dashboard/Dashboard';

import EditTeams from './Pages/Edit Pages/Edit Sports and Teams/EditTeams';
import EditSports from './Pages/Edit Pages/Edit Sports and Teams/EditSports';
import STEditPopup from './Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditPopup';

import * as functionList from "./mongoDBClient";
import EditLights from './Pages/Edit Pages/Edit Lights/EditLights';





export const GlobalContext = React.createContext();  


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
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
])


const RootComponent = () => {
  const [globalState, setGlobalState] = useState({
    userData:{}, 
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
