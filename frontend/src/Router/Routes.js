import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "../Pages/Home/Home"; 
import Login from "../Pages/Login/Login"; 
import SignUp from "../Pages/SignUp/SignUp"; 
import ErrorPage from "../Pages/ErrorPage/ErrorPage"; 
import LeaguerProfile from "../Pages/LeaguerProfile/LeaguerProfile"; 
 
export default function Router() { 
  return ( 
    <div> 
      <BrowserRouter> 
        <Routes> 
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/signup" element={<SignUp />} /> 
          <Route exact path="/leaguerProfile" element={<LeaguerProfile/>} /> 
          <Route exact path="*" element={<ErrorPage />} /> 
        </Routes> 
      </BrowserRouter> 
    </div> 
  ); 
}
