import React from "react";
import footerContent from "../footerContent.json"; 
import Logo from '../assets/logo.png'; 

// Import images directly
import Vector from '../assets/Vector.png';
import Vector1 from '../assets/Vector-1.png';
import Vector2 from '../assets/Vector-2.png';

const images = [Vector, Vector1, Vector2];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ml-20">
      <div className="container mx-auto flex justify-between border-b-12 border-yellow-400 pb-8">
        {footerContent.columns.map((column, index) => (
          <div
            key={index}
            className="w-1/3 p-4 flex"
            style={{
              backgroundColor: column.backgroundColor,
            }}
          >
            <div className="w-auto">
              <img src={images[index]} alt={column.alt} className="w-8 mr-4" />
            </div>
            <div className="flex flex-col">
              <h2
                className="text-2xl"
                style={{ color: column.titleColor }}
              >
                {column.title}
              </h2>
              <p
                className="mt-2"
                style={{ color: column.descriptionColor }}
              >
                {column.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-2 bg-yellow-400 mt-8"></div>

      <div className="flex justify-center mt-4">
        <img src={Logo} alt="Logo" className="w-80 h-40 mb-4" />
      </div>
    </footer>
  );
};

export default Footer;
