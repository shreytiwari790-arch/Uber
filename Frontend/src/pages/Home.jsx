import React from 'react';
import newuber from "../assets/newuber.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // We set a background color that matches the image's sky to make it seamless
    <div className="h-screen w-full  flex flex-col">

      <div
        className="relative flex-1 w-full bg-no-repeat bg-contain bg-top"
        style={{
          backgroundImage: `url(${newuber})`,
        }}
      >
        {/* Top Logo - Positioned absolute so it stays on top of the image */}
        <div className="absolute top-8 left-8">
          <img
            className="w-20 object-contain mix-blend-multiply opacity-90"
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
            alt="uber logo"
          />
        </div>
      </div>

      {/* Bottom Card - This stays at the bottom regardless of image size */}
      <div className="bg-white p-8 pb-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <h2 className="text-3xl font-bold text-gray-900">
          Get Started with Uber
        </h2>
        <p className="text-gray-500 mt-1">
          Ready to go? Choose your ride.
        </p>

        <Link
          to="/login"
          className="w-full flex items-center justify-center bg-black text-white py-4 rounded-xl mt-6 text-lg font-semibold active:scale-95 transition-all"
        >
          Continue
        </Link>
      </div>

    </div>
  );
};

export default Home;