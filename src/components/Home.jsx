import React from 'react';
import animationdata from '../Lottie/lottie1.json';
import { useLottie } from 'lottie-react';

const Home = () => {
  const options = {
    animationData: animationdata,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 gap-2 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Welcome to the BookCraze!!!
          </h2>
          <p className="text-gray-500 py-2 text-2xl  max-w-md">
            One-stop shop for every book you need!!!!
          </p>
        </div>
        <div className="w-80 ml-2">{View}</div>
        </div>
    </div>
  );
};

export default Home;
