import React from 'react';
import demon from "../assests/demon.jpg";
import naruto from '../assests/naruto.jpg';
import onepiece from '../assests/onepiece.jpg';

const Cart = () => {
  const books = [
    { id: 1, title: 'Demon Slayer', image: demon, price: 20.0, details: ['Author: XI Young', 'Genre: Anime', 'Year: 2020'] },
    { id: 2, title: 'Naruto', image: naruto, price: 15.0, details: ['Author: Sasuke Uchicha', 'Genre: Anime', 'Year: 2003'] },
    { id: 3, title: 'One Piece', image: onepiece, price: 25.0, details: ['Author: Luffy Chan', 'Genre: Anime', 'Year: 2005'] },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 container mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Shopping Cart</h2>

      <div className="flex h-full w-full flex-col ">
        {books.map((book) => (
          <div key={book.id} className="bg-black p-4 rounded-md shadow-md flex items-center justify-between">
            <img src={book.image} alt={book.title} className="w-44 h-52 ml-20" />
            <div className="ml-8">
              <h3 className="text-lg text-white font-semibold mb-2">{book.title}</h3>
              <ul className="text-white">
                {book.details.map((detail) => (
                  <li>{detail}</li>
                ))}
              </ul>
              <p>${book.price}</p>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 mr-20 "
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
