import React from "react";
import { IoBookOutline } from "react-icons/io5";

function Education() {
  return (
    <div className="educationSection mt-[170px] mb-10 text-black">
      <div className="container mx-auto px-2 bg-white py-2 rounded-md ">
        <h1 className="text-center text-3xl font-bold w-full border-b-2 uppercase border-[blue]">
          EDUCATION
        </h1>
        
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 ">
          <div className="flex justify-center items-center mt-2 ml-2 pl-2">
            <IoBookOutline size={20} color="blue" />
            <h1 className="font-bold ml-2">
              Infrastructure University Kuala Lumpur
            </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Master of Information Technology </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Kuala Lumpur| March 2023 - 2024</h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>CGPA 4.00/3.80 </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center pl-10 my-2 ">
          <h1 className="text-2xl font-bold ">Additional Courses </h1>
          <p> &#x2022; Human-Computer Interaction</p>
          <p> &#x2022; Software Quality & Measurements</p>
          <p> &#x2022; Software Evolution & Maintenance</p>
        </div>

        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 ">
          <div className="flex justify-center items-center mt-2">
            <IoBookOutline size={20} color="blue" />
            <h1 className="font-bold ml-3">
              Daffodil International University
            </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Batchelor of Software Engineering </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Dhaka | Summer 2018 - Summer 2022 </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>CGPA 4.00/3.36 </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center pl-10 my-2">
          <h1 className="text-2xl font-bold">Additional Courses </h1>
          <p> &#x2022; Cryptography and Network Security</p>
          <p> &#x2022; Ethical Hacking &Penetration Testing</p>
          <p> &#x2022; Information Systems Audit & Assurance</p>
          <p> &#x2022; Fundamentals for Data Science</p>
          <p> &#x2022; Data Visualization and Communication</p>
          <p> &#x2022; Software Project Management</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
