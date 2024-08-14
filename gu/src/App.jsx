import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Layouts from './layouts/layouts';
import Home from './pages/home/home';
import About from './pages/about/about';
import CampusFacility from './pages/campusfacility/campusfacility';
import Admissions from './pages/admissions/admissions';
import International from './pages/international/international';
import Exam from './pages/exam/exam';
import Placements from './pages/placenments/placenments';
import Activities from './pages/activities/activities';
import Announcements from './pages/announcements/announcements';
import Contact from './pages/contact/contact';
import Gallery from './pages/gallery/gallery';
import Alumni from './pages/alumni/alumni';
import Publications from './pages/publications/publications';
import Mou from './pages/mou/mou';
import Achievements from './pages/achievements/achievements';
import Iic from './pages/iic/iic';
import Uic from './pages/uic/uic';
import Nisp from './pages/nisp/nisp';
import Iqac from './pages/iqac/iqac';
import Approvals from './pages/approvals/approvals';
import Career from './pages/career/career';
import Git from './pages/institutions/git';
import Gim from './pages/institutions/gim';
import Gis from './pages/institutions/gis';
import Gia from './pages/institutions/gia';
import Gic from './pages/institutions/gic';
import Pages from './pages/institutions/pages';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="campusfacility" element={<CampusFacility />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="international" element={<International />} />
            <Route path="exam" element={<Exam />} />
            <Route path="placements" element={<Placements />} />
            <Route path="activities" element={<Activities />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="publications" element={<Publications />} />
            <Route path="mou" element={<Mou />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="iic" element={<Iic />} />
            <Route path="nisp" element={<Nisp />} />
            <Route path="iqac" element={<Iqac />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="uic" element={<Uic />} />
            <Route path="career" element={<Career />} />
            <Route path="git" element={<Git />} />
            <Route path="gim" element={<Gim />} />
            <Route path="gia" element={<Gia />} />
            <Route path="gis" element={<Gis />} />
            <Route path="gic" element={<Gic />} />
            <Route path="institute/:slug" element={<Pages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
