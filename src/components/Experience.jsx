import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import hadoop from "../assets/hadoop.png";
import spark from "../assets/spark.png";
import snowflake from "../assets/snowflake.png";
import aws from "../assets/aws.png";
import mysql from "../assets/mysql.png";
import powerbi from "../assets/powerbi.png";
import tableau from "../assets/tableau.png";
import cpp from "../assets/c++.png";
import python from "../assets/python.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: hadoop,
      title: "Hadoop",
      style: "shadow-white",
    },
    {
      id: 9,
      src: spark,
      title: "Apache Spark",
      style: "shadow-pink-400",
    },
    {
      id: 10,
      src: snowflake,
      title: "Snowflake",
      style: "shadow-pink-400",
    },
    {
      id: 11,
      src: aws,
      title: "AWS",
      style: "shadow-pink-400",
    },
    {
      id: 12,
      src: powerbi,
      title: "Power BI",
      style: "shadow-pink-400",
    },
    {
      id: 13,
      src: tableau,
      title: "Tableau",
      style: "shadow-pink-400",
    },
    {
      id: 14,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-pink-400",
    },
    {
      id: 15,
      src: mysql,
      title: "MYSQL",
      style: "shadow-pink-400",
    },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

    return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2DCC8] mb-4">
            Technologies I've Worked With
          </h2>
          <div className="inline-block w-40 h-1 bg-[#E2DCC8] mb-4"></div>
          <p className="text-gray-400 max-w-md mx-auto">
            Here's a snapshot of the technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {techs.map(({ id, src, title }) => (
            <div key={id} className="flex flex-col items-center">
              <div className="rounded-full p-6 ring-4 ring-[#E2DCC8] hover:ring-[#64ffda] transition duration-300">
                <img src={src} alt={title} className="h-16 w-16" />
              </div>
              <h3 className="mt-4 font-medium text-lg text-gray-300">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
