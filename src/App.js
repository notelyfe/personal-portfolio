import React, { useContext } from 'react';
import './App.css'
import Nav from "./Components/NavBar/Nav";
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Project from '../src/Components/Project/Project'
import Certificate from '../src/Components/Certificate/Certificate'
import Resume from '../src/Components/Resume/Resume'
import AdminLogin from './Components/Admin/Login/AdminLogin';
import Footer from './Components/Footer/Footer';
import Context from './Context/Context';

// <--Admin Console Routes-->

import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';
import AdminProject from './Components/Admin/ProjectControl/AdminProject';
import AdminCertificate from './Components/Admin/CertificateControl/AdminCertificate';
import AdminResume from './Components/Admin/ResumeControl/AdminResume';
import AdminQuote from './Components/Admin/QuoteControl/AdminQuote';
import Notification from './Components/Admin/Notification/Notification';
import Activity from './Components/Admin/Activity/Activity';
import ManageTheme from './Components/Admin/ManageTheme/ManageTheme';
import Loading from './Components/LoadingSpinner/Loading';

function App() {

  const { userData, loading } = useContext(Context)
  let location = useLocation();

  const Admin_subdomain = () =>
    window.location.host.split(".")[0] === "admin" ? (
      <AdminLogin />
    ) : (
      <Home />
    );


  return (
    <>
      {window.location.host.split(".")[0] === "admin" & (location.pathname === '/' || location.pathname.includes('Admin')) ? '' : <Nav />}
      <Routes>
        <Route path='/' element={<Admin_subdomain />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/certificates' element={<Certificate />}></Route>
        <Route path='/resume' element={<Resume />}></Route>

        {/* <--Admin Routes--> */}

        {userData?.user_type === "Admin" ? (
          <Route path="/Admin" element={<AdminDashboard />} >
            {/* <Route index element={<Navigate to="home" replace />} /> */}
            <Route path="project" element={<AdminProject />} />
            <Route path="certificate" element={<AdminCertificate />} />
            <Route path="resume" element={<AdminResume />} />
            <Route path="quote" element={<AdminQuote />} />
            <Route path="notification" element={<Notification />} />
            <Route path="activity" element={<Activity />} />
            <Route path="manage-theme" element={<ManageTheme />} />
          </Route>
        ) : (
          "404 Page Not Found"
        )}

        {/* <--Admin Routes End--> */}

        <Route
          path="*"
          element={
            <h1>
              404 page not found. <Link to="/">Go to home</Link>
              <br />
              <Link to={-1}>⬅ go back</Link>
            </h1>
          }
        />
      </Routes>
      {window.location.host.split(".")[0] === "admin" & (location.pathname === '/' || location.pathname.includes('Admin')) ? '' : <Footer />}
      {loading && <Loading />}
    </>
  );
}

export default App;
