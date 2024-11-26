import React from "react";
import { useNavigate } from "react-router-dom";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book7.jpg";
import Book3 from "../../assets/books/book10.jpg";
import Book4 from "../../assets/books/book5.jpg";
import Book5 from "../../assets/books/book8.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 4.2,
    author: "Kerena Swan",
  },
  {
    id: 2,
    img: Book2,
    title: "Harry Potter and the Prisoner of Azkaban",
    rating: 5.0,
    author: "J.K. Rowling",
  },
  {
    id: 3,
    img: Book3,
    title: "Biology",
    rating: 4.7,
    author: "Dr. Ajay Kumar Singh",
  },
  {
    id: 4,
    img: Book4,
    title: "The Art of Letting Go",
    rating: 4.4,
    author: "Nick Trenton",
  },
  {
    id: 5,
    img: Book5,
    title: "The Art of War",
    rating: 4.0,
    author: "Sun Tzu",
  },
];

const AllBooks = () => {
  const navigate = useNavigate();

  const handleViewAllBooks = () => {
    navigate("/ViewAllBooks"); // Ensure the route matches your defined path
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            id="AllBooks"
            className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2"
          >
            Top Books for you
          </p>
          <h1 className="text-3xl font-bold mb-3">Top Books</h1>
          <p className="text-xs text-gray-400 ml-4">
            Explore our handpicked collection of books, perfect for every reader
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {booksData.map(({ id, img, title, rating, author}) => (
            <div key={id} className="space-y-3">
              <img
                src={img}
                alt={title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-700">{author}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
            onClick={handleViewAllBooks}
          >
            View All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
