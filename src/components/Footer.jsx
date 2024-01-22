import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone'; 
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div
      name="Contact Me"
      className="bg-gradient-to-b from-black via-black to-gray-800 text-[#E2DCC8] mx-auto p-8 w-full text-center"
    >
      <h2 className="text-3xl font-bold border-b-4 border-gray-500 py-2 mb-10 inline-block">
        Love my work!
      </h2>
      <h1 className="text-6xl mb-10">Contact Me</h1>
      <p className="mt-10">I would love to hear from you! You can reach out to me here:</p>
      <div className="flex justify-center items-center mt-10 space-x-5">
        <PhoneIcon />
        <p><a href="tel:+19512138774" className="hover:text-gray-300">+1 (951) 213-8774</a></p>
        <span>|</span>
        <EmailIcon />
        <p><a href="mailto:ankoladhrumil@gmail.com" className="hover:text-gray-300">ankoladhrumil@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Footer;
