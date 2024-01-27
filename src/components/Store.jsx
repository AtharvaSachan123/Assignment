import React from 'react';
import first from "../assests/deathnote.jpg"
import second from '../assests/demon.jpg'
import third from '../assests/hykuo.jpg'
import fourth from '../assests/th (1).jpg'
import fifth from '../assests/th (2).jpg'
import six from '../assests/th (3).jpg'
import seven from '../assests/th.jpg'
const books = [
  { id: 1, title: 'Book 1', price: 19.99, image: second,  },
  { id: 2, title: 'Book 2', price: 29.99, image: second,  },
  { id: 3, title: 'Book 3', price: 14.99, image: second,  },
  { id: 4, title: 'Book 4', price: 24.99, image: second,  },
  { id: 5, title: 'Book 5', price: 21.99, image: second,  },
  { id: 6, title: 'Book 6', price: 32.99, image: second,  },
  { id: 7, title: 'Book 7', price: 17.99, image: second,  },
  { id: 8, title: 'Book 8', price: 27.99, image: second,  },
  { id: 9, title: 'Book 9', price: 22.99, image: second,  },
  { id: 10, title: 'Book 10', price: 19.99, image: second,  },
  { id: 11, title: 'Book 11', price: 28.99, image: second,  },
  { id: 12, title: 'Book 12', price: 16.99, image: second,  },
];

const Store = () => {
  const Book = ({ title, price, image,  }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4  bg-black">
        <div className="max-w-sm rounded overflow-hidden ">
          <img className="w-full" src={image}  />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">{title}</div>
            <p className="text-white text-base mb-2">${price}</p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Store;
