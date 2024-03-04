import React from "react";
import { Link } from 'react-router-dom';

import Weather from "../../assets/weather.jpg";
import BlogApp from "../../assets/Blog.jpg";
import PropertyApp from "../../assets/property.jpg";

function Projects() {
  return (
    <div className="projectSection my-1 py-3">
      <div className="container mx-auto  py-4 mt-2 ">
        <h1 className="text-black text-center uppercase text-3xl  pb-2">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-5">

          <div className="shadow-md rounded-md my-3  bg-white h-full w-full">
            <div className="rounded-md">
              <img
                src={Weather}
                className="w-full rounded-md"
                alt="Weather App"
              />
            </div>

            <div className="flex flex-col gap-2 mx-3 mt-2">
              <div className="border-b-2 border-[blue] text-center">
                <h1 className="font-bold">Weather App</h1>
              </div>

              <div>
                <p>
                  This React weather app fetches real-time weather data from
                  OpenWeatherMap API. Users input a city, and the app displays
                  current temperature, location, humidity, and wind speed. It
                  uses functional components, React hooks, and Axios for API
                  requests
                </p>
              </div>

              <div>
                <p> <span className="font-bold">Tech used:</span> React, Axios, Tailwind</p>
              </div>

              <div className="flex flex-col justify-center items-center">
              <a href="https://github.com/Nucmaan/Weather-App" target="_blank" rel="noopener noreferrer">
                <button className="bg-[blue] px-3 py-2 text-white rounded-md">Source Code</button>
                </a>
              </div>
            </div>

          </div>

          <div className="shadow-md rounded-md my-3  bg-white h-full w-full">
          <div className="rounded-md">
            <img
              src={PropertyApp}
              className="w-full rounded-md"
              alt="Weather App"
            />
          </div>

          <div className="flex flex-col gap-2 mx-3 mt-2">
            <div className="border-b-2 border-[blue] text-center">
              <h1 className="font-bold">Property Management</h1>
            </div>

            <div>
              <p>
              Property Management Hub is a comprehensive web platform designed to streamline property management tasks between property owners, tenants, and managers
              </p>
            </div>

            <div>
              <p> <span className="font-bold">Tech used:</span> PHP MYSQL JAVASCRIPT HTML CSS </p>
            </div>

            <div className="flex flex-col justify-center items-center">
            <a href="https://github.com/Nucmaan/property-web" target="_blank" rel="noopener noreferrer">
              <button className="bg-[blue] px-3 py-2 text-white rounded-md">Source Code</button>
              </a>
              
            </div>
          </div>

        </div>

        <div className="shadow-md rounded-md my-3  bg-white h-full w-full">
        <div className="rounded-md">
          <img
            src={BlogApp}
            className="w-full rounded-md"
            alt="Weather App"
          />
        </div>

        <div className="flex flex-col gap-2 mx-3 mt-2">
          <div className="border-b-2 border-[blue] text-center">
            <h1 className="font-bold">Blog Web</h1>
          </div>

          <div>
            <p>
            This project is a simple blog web application built using the MERN stack. The application allows users to Post, It provides a user-friendly interface for both bloggers and readers
            </p>
          </div>

          <div>
            <p> <span className="font-bold">Tech used:</span> React, Node.js, Express.js, MongoDB, Tailwind </p>
          </div>

          <div className="flex  justify-center items-center ">
          <a href="https://github.com/Nucmaan/API_V_02" target="_blank" rel="noopener noreferrer">
          <button className="bg-[blue] px-3 py-2 text-white rounded-md">Source Code</button>
        </a>
            <button className=" px-3 py-2 text-black rounded-md border-2 border-[blue] ml-2">Live Preview</button>
            
          </div>
        </div>

      </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
