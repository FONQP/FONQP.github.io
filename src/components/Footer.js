import React from 'react';

const Footer = () => {
  return (
    <footer className="text-sky-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-l">Fiber Optics, Nano & Quantum Photonics Group, IIT Kharagpur &copy; {new Date().getFullYear()} </p>
        {/* <p className="text-sm mt-2">Last updated: 27-09-2024</p> */}
      </div>
    </footer>
  );
};

export default Footer;
