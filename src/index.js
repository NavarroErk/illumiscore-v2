import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import EditTeams from './Pages/Edit Pages/Edit Sports and Teams/EditTeams';
import EditSports from './Pages/Edit Pages/Edit Sports and Teams/EditSports';
import STEditPopup from './Components/Edit Components/Edit Sports and Teams Components/STEditColumn/STEditPopup';


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
    path: "/dashboard/editSports", 
    element: <EditSports/>
  }, 
  {
    path: "", 
    element: <STEditPopup />
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext.Provider value={{GlobalContext}}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
