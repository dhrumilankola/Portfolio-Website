import React from 'react';
import heroImage from '../assets/heroImage.png';
import { TypeAnimation } from 'react-type-animation';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Hi, I'm {"Dhrumil Ankola"}
            </span>
            <br />
            <div style={{ height: '120px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Data Science Enthusiast',
                  2000,
                  'Visionary Project Leader',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={40}
              />
            </div>
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            Pursuing a Master's in Computer Science at University of California, Riverside. From machine learning to full-stack creations, each project reflects my commitment to shaping the digital landscape.
          </p>
          <div>
            <Link
              to="projects" // Ensure this ID matches the ID in your Projects component
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaAngleDoubleRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:flex md:justify-end w-full md:w-1/2">
          <img
            src={heroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
