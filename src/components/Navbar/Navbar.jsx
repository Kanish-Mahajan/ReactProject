import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode.jsx";
import Login from "../Login/Login.jsx";
import { toast } from "react-toastify";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#BestBooks",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#BestBooks",
  },
  {
    name: "Best Selling",
    link: "/#AllBooks",
  },
  {
    name: "Authors",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(false);
    toast.success("Logged out successfully!", { // Toast notification for logout
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Tara General Book Store
              </a>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="items-center gap-4 hidden sm:flex">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#"
                    className="flex h-[72px] items-center gap[2px]"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md">
                    <ul>
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300"
              >
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* Login/Logout Button */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 duration-300"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginToggle}
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && !isLoggedIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white dark:bg-gray-900 rounded-lg p-6 w-11/12 max-w-lg">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-2xl font-bold"
            >
              &times;
            </button>
            <Login
              isOpen={showLogin}
              onClose={() => setShowLogin(false)}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
