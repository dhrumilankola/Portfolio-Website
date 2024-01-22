import React from 'react';
import { FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import './SocialLinks.css'; // Your CSS file

export const SocialLinks = () => {
  const links = [
      {
          id: 1,
          icon: <FaLinkedinIn size={30} />,
          href: "https://www.linkedin.com/in/dhrumil-ankola/",
          label: 'LinkedIn',
      },
      {
          id: 2,
          icon: <FaGithub size={30} />,
          href: "https://github.com/dhrumilankola",
          label: 'GitHub',
      },
      {
          id: 3,
          icon: <HiOutlineMail size={30} />,
          href: "mailto:ankoladhrumil@gmail.com",
          label: 'Email',
      },
      {
          id: 4,
          icon: <FaFilePdf size={30} />,
          href: "/resume.pdf",
          label: 'Resume',
          download: true,
      },
  ];

  return (
      <div className="social-links-container">
          <ul>
              {links.map(({ id, icon, href, download, label }) => (
                  <li key={id} className="social-link">
                      <a
                          href={href}
                          download={download}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                      >
                          {icon}
                          <span className="social-text">{label}</span>
                      </a>
                  </li>
              ))}
          </ul>
      </div>
  );
}