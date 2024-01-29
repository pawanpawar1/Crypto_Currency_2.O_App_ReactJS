import React from "react";
import founder from '../assets/founder.jpeg'

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 text-white opacity-70 min-h-48 px-16 py-16 md:py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="font-bold mb-2">About Us</h2>
          <p className="text-sm tracking-widest text-center md:text-left">
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <img
            src={founder}
            className="w-28 h-28 mb-4 md:mb-0 md:mr-4 rounded-full"
            alt="Founder Avatar"
          />
          <p>Our Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
