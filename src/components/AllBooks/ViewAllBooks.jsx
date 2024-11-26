import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Book1 from "../../assets/View/book1.jpg";
import Book2 from "../../assets/View/book2.jpg";
import Book3 from "../../assets/View/book3.jpg";
import Book4 from "../../assets/View/book4.jpg";
import Book5 from "../../assets/View/book5.jpg";
import Book6 from "../../assets/View/book6.jpg";
import Book7 from "../../assets/View/book7.jpg";
import Book8 from "../../assets/View/book8.jpg";
import Book9 from "../../assets/View/book9.jpg";
import Book10 from "../../assets/View/book10.jpg";
import Book11 from "../../assets/View/book11.jpg";
import Book12 from "../../assets/View/book12.jpg";
import Book13 from "../../assets/View/book13.jpg";
import Book14 from "../../assets/View/book14.jpg";
import Book15 from "../../assets/View/book15.jpg";
import Book16 from "../../assets/View/book16.jpg";
import Book17 from "../../assets/View/book17.jpg";
import Book18 from "../../assets/View/book18.jpg";
import Book19 from "../../assets/View/book19.jpg";
import Book20 from "../../assets/View/book20.jpg";
import { FaStar } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const booksData = [
  { id: 1, title: "NCERT Biology 12", author: "NCERT", price: 250, category: "NCERT", rating: 4.8, img: Book1 },
  { id: 2, title: "Refresher Chemistry 11", author: "Preeti Gupta", price: 495, category: "Refresher", rating: 4.6, img: Book2 },
  { id: 3, title: "NCERT Mathematics 10", author: "NCERT", price: 100, category: "NCERT", rating: 4.9, img: Book3 },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 149, category: "Story", rating: 4.7, img: Book4 },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", price: 423, category: "Story", rating: 4.8, img: Book5 },
  { id: 6, title: "Modern Physics", author: "HC Verma", price: 450, category: "Refresher", rating: 4.5, img: Book6 },
  { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 420, category: "Novel", rating: 4.4, img: Book7 },
  { id: 8, title: "Hamlet", author: "William Shakespeare", price: 300, category: "Drama", rating: 4.6, img: Book8 },
  { id: 9, title: "Exemplar Mathematics 12", author: "NCERT", price: 270, category: "NCERT", rating: 4.8, img: Book9 },
  { id: 10, title: "To Kill a Mockingbird", author: "Harper Lee", price: 350, category: "Novel", rating: 4.9, img: Book10 },
  { id: 11, title: "500 Problems in Physics", author: "D.C. Pandey", price: 550, category: "Refresher", rating: 4.7, img: Book11 },
  { id: 12, title: "1984", author: "George Orwell", price: 480, category: "Story", rating: 4.8, img: Book12 },
  { id: 13, title: "Invisible Man", author: "Ralph Ellison", price: 400, category: "Story", rating: 4.7, img: Book13 },
  { id: 14, title: "History 12", author: "NCERT", price: 230, category: "NCERT", rating: 4.5, img: Book14 },
  { id: 15, title: "Wuthering Heights", author: "Emily Bronte", price: 370, category: "Novel", rating: 4.6, img: Book15 },
  { id: 16, title: "Exemplar Chemistry 12", author: "NCERT", price: 250, category: "NCERT", rating: 4.7, img: Book16 },
  { id: 17, title: "The Alchemist", author: "Paulo Coelho", price: 300, category: "Story", rating: 4.8, img: Book17 },
  { id: 18, title: "Refresher Biology 11", author: "Pradeep", price: 500, category: "Refresher", rating: 4.6, img: Book18 },
  { id: 19, title: "Macbeth", author: "William Shakespeare", price: 320, category: "Drama", rating: 4.5, img: Book19 },
  { id: 20, title: "Exemplar Physics 12", author: "NCERT", price: 270, category: "NCERT", rating: 4.8, img: Book20 },
  
];

const ViewAllBooks = () => {

  const [cart, setCart] = useState([]);
  const [showCartDialog, setShowCartDialog] = useState(false);

  const handlePayNow = () => {
    toast.success("Order placed successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    setShowCartDialog(false); // Close the cart dialog
  };

  const addToCart = (book) => {
    setCart((prevCart) => {
      const isBookInCart = prevCart.find((item) => item.id === book.id);
      if (isBookInCart) return prevCart;
      return [...prevCart, book];
    });
    setShowCartDialog(true);
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, book) => total + book.price, 0);
  };

  return (
    <div className="mt-14">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold dark:text-white text-black">All Books</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:gap-5 place-items-center mb-5">
          {booksData.map(({ id, title, author, price, rating, img }) => (
            <div
              key={id}
              className="space-y-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-md"
            >
              <div className="h-[220px] w-[150px] overflow-hidden rounded-md flex items-center justify-center">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <h3 className="font-semibold dark:text-white text-black">{title}</h3>
              <p className="text-sm dark:text-gray-400 text-gray-700">{author}</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span className="dark:text-gray-300 text-gray-600">{rating.toFixed(1)}</span>
              </div>
              <p className="text-sm dark:text-gray-300 text-gray-600">Price: ₹{price}</p>
              <button
                className="text-sm bg-primary text-white py-1 px-3 rounded-md mt-2"
                onClick={() => addToCart({ id, title, price })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Dialog */}
        {showCartDialog && (
          <div className="fixed bottom-[100px] right-5 bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg w-[300px] z-100">
            <h2 className="text-lg font-semibold dark:text-white text-black mb-4">
              Cart Summary
            </h2>
            <ul className="space-y-2 mb-4">
              {cart.map((book) => (
                <li key={book.id} className="flex justify-between">
                  <span className="dark:text-gray-300 text-gray-700">{book.title}</span>
                  <span className="dark:text-gray-300 text-gray-700">₹{book.price}</span>
                  <button
                    className="text-xs text-red-500"
                    onClick={() => removeFromCart(book.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="font-bold dark:text-white text-black">
              Total Price: ₹{calculateTotal()}
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="py-1 px-4 rounded-md bg-gray-400 text-white"
                onClick={() => setShowCartDialog(false)}
              >
                Close
              </button>
              <button 
              onClick={handlePayNow}
              className="py-1 px-4 rounded-md bg-green-500 text-white">
                Pay Now
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewAllBooks;
