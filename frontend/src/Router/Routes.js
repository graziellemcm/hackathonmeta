import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LeaguerProfile from "../Pages/LeaguerProfile/LeaguerProfile";
import SignUpTeam from "../Pages/SignUpTeam/SignUpTeam";
import LeaguerRegistration from "../Pages/LeaguerRegistration/LeaguerRegistration";
import NewEvaluation from "../Pages/NewEvaluation/NewEvaluetion";
import PageCompilation from "../Pages/PageCompilation/PageCompilation";
import EditLeaguer from "../Pages/EditLeaguer/EditLeaguer";


export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signup-team" element={<SignUpTeam />} />
          <Route exact path="/leaguer/get/:id"element={<LeaguerProfile />} />
          <Route exact path="/leaguerRegistration" element={<LeaguerRegistration />} />
          <Route exact path="/new-evaluation" element={<NewEvaluation />} />
          <Route exact path="/compilation/:id" element={<PageCompilation/>} />
          <Route exact path="/editleaguer/:id" element={<EditLeaguer/>}/>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
