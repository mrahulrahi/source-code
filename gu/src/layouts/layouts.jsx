import React from 'react';
import './layouts.css'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


const layouts = () => {
  return (
    <React.Fragment>

      <Header />
         <Outlet />
      <Footer /> 

    </React.Fragment>
  )
}

export default layouts;
