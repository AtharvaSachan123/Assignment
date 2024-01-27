import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLottie } from 'lottie-react';
import animation from '../Lottie/lottie.json';

const Navbar = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      path: '/',
    },
    {
      id: 2,
      link: 'cart',
      path: '/cart',
    },
    {
        id: 3,
        link: "store",
        path: "/store"
      },
      {
        id: 4,
        link: "Login",
        path: "/login"
      },
      {
        id: 5,
        link: "signup",
        path:"/signup"
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black ">
      <div className="flex gap-5 ">
        <h1 className="text-5xl font-signature ml-2 mt-4">BookCraze</h1>
        <div className="w-10 ">{View}</div>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-blue-400">
            <Link to={path}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={path}
                smooth
                duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
