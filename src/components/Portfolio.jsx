import React from "react";
import "./Portfolio.css"
import photodo1 from "../assets/project/photodo-1.png";
import photodo2 from "../assets/project/photodo-2.png";

import ecom1 from "../assets/project/ecom-1.png";

import stories1 from "../assets/project/stories-1.png";
import stockbot1 from "../assets/project/stockbot-1.png";
import data1 from "../assets/project/data-1.png";

import { motion } from 'framer-motion'
import PhotoSlider from './PhotoSlider';



const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1
    }
  })
};

const Portfolio = () => {
  const data = [
    {
      id: "1",
      title: "PhotoDo",
      slogan: "Your Gateway to High-Resolution, Royalty-Free Imagery!",
      domains: ["React JS", "SCSS"],
      desc: ["A web app that fetches photos from various API’s and enables the user to download high-resolution free images."],
      assets: [photodo1, photodo2],
      url: "",
      git: "https://github.com/dhrumilankola/PhotoDo"
    },
    {
      id: "2",
      title: "Stories",
      slogan: "Where Every Image Tells a Million Stories",
      domains: ["React JS", "Node JS", "Mongo DB", "Express JS", "SCSS"],
      desc: ["A full stack web app that allows users to post story and can also see the stories post by other users."],
      assets: [stories1],
      url: "",
      git: "https://github.com/dhrumilankola/Stories"
    },
    {
      id: "3",
      title: "Stockbot",
      slogan: "Your Stock Market Companion | Real-Time Prices, In-Depth Analysis, and Charts at Your Fingertips!",
      domains: ["React Js", "SCSS", "JavaScript", "AOS"],
      desc: ["Elevate your stock market experience with Stockbot | A Telegram bot delivering real-time prices, insightful charts, and comprehensive fundamental analysis for informed decisions in an instant!"],
      assets: [stockbot1],
      url: "",
      git: "https://github.com/dhrumilankola/StockBot"
    },
    {
      id: "4",
      title: " E-Commerce GeoInsights",
      slogan: "Navigating Success in E-Commerce: Where Smart Insights Drive Strategic Growth.",
      domains: ["Big Data Management", "Hadoop", "Apache Spark", "Databricks", "Spatial Analysis", "QGIS", "Geopandas"],
      desc: ["Unleash the potential of location-based analytics in e-commerce. Empower ECOM companies to strategically boost sales by promoting specific categories in underserved areas and provide users with valuable insights into top-selling products, categories, and sellers for a more informed and satisfying shopping experience."],
      assets: [ecom1],
      url: "",
      git: ""
    },
    {
      id: "5",
      title: "DataForge - POC - Data Engineering",
      slogan: "Forging Data Paths, Unleashing Engineering Prowess.",
      domains: ["API & Web Scrapping", "Snowflake - AWS", "Apache Airflow", "PowerBI"],
      desc: ["DataForge exemplifies my data engineering finesse—a personal project sculpted to perfection. Scraping stock data from https://www.screener.in/, orchestrating with Apache Airflow, and sculpting insights with Snowflake Data Lake and Power BI."],
      assets: [data1],
      url: "",
      git: ""
    },
  ];


  return (
    <div name="portfolio" className="projects w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="projectContainer mt-20">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-[#E2DCC8]">
          My Projects
        </h2>
        {data.map((d, i) => (
          <motion.div
            key={d.id}
            className={`container ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={i} // Custom prop used for staggering the animation
          >
            <div className="leftContainer">
              <h2>{d.title}</h2>
              <p className="slogan">{d.slogan}</p>
              <div className="domains">
                {d.domains.map((domain, ind) => (
                  <p key={ind} className="domain">
                    {domain}
                  </p>
                ))}
              </div>
              <h4>Description:-</h4>
              <ul>
                {d.desc.map((descItem, ind) => (
                  <li key={ind}>
                    - {descItem}
                  </li>
                ))}
              </ul>
              <div className="urls">
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="url">
                  Live Site
                </a> |
                <a href={d.git} target="_blank" rel="noopener noreferrer" className="url">
                  Github
                </a>
              </div>
            </div>
            {d.assets && d.assets.length > 0 && (
              <div className={`slider ${i % 2 === 0 ? 'right-0' : 'left-0'}`}>
                <PhotoSlider assets={d.assets} />
              </div>
            )}
          </motion.div>
        ))}

        <button className="mt-8 mb-20 px-6 py-3 bg-[#E2DCC8] text-black font-bold text-lg rounded hover:bg-[#cba] transition-colors">
          <a href="https://github.com/dhrumilankola" target="_blank" rel="noopener noreferrer">
            View More on GitHub
          </a>
        </button>
      </div>
    </div>
  );

};

export default Portfolio;