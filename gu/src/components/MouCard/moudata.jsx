import React from "react";
import MouCard from "./MouCard"; // Adjust the import path as needed
import mou1 from "../../assets/images/mou-img-1.jpg";
import mou2 from "../../assets/images/mou-img-2.jpg";
import mou3 from "../../assets/images/mou-img-3.jpg";
import mou4 from "../../assets/images/mou-img-4.jpg";
import mou5 from "../../assets/images/mou-img-5.jpg";

const mouData = [
  { 
    mimg: mou1,
    mtitle: "MOU Sign between Gandhinagar University",
    mname: "& iMAC Design and Engineering Services (iDES) (March 2023- to March- 2026)",
    mdescription: "The MoU is intended to recognize the general basis for a cooperative and a collaborative working relationship between the Gandhinagar University & iMAC Design and Engineering Services (iDES). The purpose of MoU is to have mutual intentions to jointly work on projects required for industries and research needs, with learned faculty of good industrial experience and promising students, jointly agree to exchange their expertise for mutual benefit and growth, in the areas like Below :"
  },
  {
    mimg: mou2,
    mtitle: "MOU Sign between Gandhinagar University",
    mname: "& Myra Academy Pvt. Ltd. (March 2023- to March- 2026)",
    mlistheading: "Scope and Purpose of MoU",
    mlistitem: "Offer Internship program for students of Gandhinagar University\nTo Organize industrial Training Programs like Summer/ Winter/ Weekend/ Project Trainings, Industrial Visit to your Company\nTo provide a skill development program/multi structured program for engineering students across semesters.\nEmployability enhancement training programme for students and per Industry standards\nOrganize joint faculty development programs at MAPL."
  },
  {
    mimg: mou3,
    mtitle: "Mou Sign between Gandhinagar University &",
    mname: "Tatvasoft (Dec-2022 to Dec- 2025)",
    mdescription: "The MoU is intended to recognize the general basis for a cooperative and a collaborative working relationship between the Gandhinagar University & Tatvasoft. The purpose of MoU is to have mutual intentions to jointly work on projects required for industries and research needs, with learned faculty of good industrial experience and promising students, jointly agree to exchange their expertise for mutual benefit and growth, on the areas like Industrial Visits, Guest Lectures, Projects works, Placements and Internship."
  },
  {
    mimg: mou4,
    mtitle: "Mou Sign between Gandhinagar University &",
    mname: "Layka Laser Tech (June-2021 to June- 2023)",
    mdescription: "The MoU is intended to recognize the general basis for a cooperative and a collaborative working relationship between the Gandhinagar University & Tatvasoft. The purpose of MoU is to have mutual intentions to jointly work on projects required for industries and research needs, with learned faculty of good industrial experience and promising students, jointly agree to exchange their expertise for mutual benefit and growth, on the areas like Industrial Visits, Guest Lectures, Projects works, Placements and Internship."
  },
  {
    mimg: mou5,
    mtitle: "Mou Sign between Gandhinagar University &",
    mname: "Devang Electricals (April-2021 to April- 2023)",
    mdescription: "The MoU is intended to recognize the general basis for a cooperative and a collaborative working relationship between the Gandhinagar University & Tatvasoft. The purpose of MoU is to have mutual intentions to jointly work on projects required for industries and research needs, with learned faculty of good industrial experience and promising students, jointly agree to exchange their expertise for mutual benefit and growth, on the areas like Industrial Visits, Guest Lectures, Projects works, Placements and Internship."
  }
];

const ParentComponent = () => {
  return (
    <div>
      {mouData.map((mou, index) => (
        <MouCard key={index} {...mou} />
      ))}
    </div>
  );
};

export default ParentComponent;
