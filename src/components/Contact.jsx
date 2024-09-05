import React from "react";
import backgroundImage from "../assets/contact-img.png";

const Contact = () => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-[500px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-white p-8">
        <div className="text-center flex justify-center flex-col mt-auto ml-32 my-8 max-w-[600px]">
          <div className="text-3xl font-bold mb-4">
            SIGN UP SPECIAL PROMOTIONS
          </div>
          <div className="h-2 bg-white mb-8"></div>
          <p className="text-lg">
            Get exclusive deals you won’t find anywhere else straight to your
            inbox!
          </p>
        </div>

        <div className="w-full mb-12">
          <form className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="border border-white bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 max-w-[300px] ml-40 w-full opacity-50"
            />

            <button
              type="submit"
              className="uppercase bg-yellow-600 text-white py-2 px-6 hover:bg-yellow-500 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
