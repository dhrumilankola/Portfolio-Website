import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './NavBar.css'; // Your CSS file
 

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link: 'home'
    },
   
    {
      id:2,
      link: 'experience'
    },
    {
      id:3,
      link: 'projects'
    },
    {
      id:4,
      link: 'Contact Me'
    },
  ];

  return (
    <>
      <div className="navbar">
        <div><h1>Dhrumil Ankola</h1></div>
        <ul className="hidden md:flex">

      {links.map(({id, link}) => (
        <li key={id} style={{color:"#f6f4ed",opacity:"0.5"}} className="px-4 cursor-pointer capitalize text-lg text-gray-500 hover:scale-105 duration-200">
          <Link to={link} smooth duration={500}> {link} </Link>
        </li>
      ))}
     
         
    </ul>

  
    <div className="nav-toggle" onClick={() => setNav(!nav)}>
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>
    </div>

    {nav && (
       <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-green-500">
       {links.map(({id, link}) => (
       <li key={id} className="px-4 py-6 text-4xl font-orbi cursor-pointer capitalize ">
         {link}
       </li>
       ))}
     </ul> 
    )}

  </>

  );
};

export default NavBar;