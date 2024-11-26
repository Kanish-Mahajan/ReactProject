import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import Banner from "./components/Banner/Banner";
import AllBooks from "./components/AllBooks/AllBooks";
import ViewAllBooks from "./components/AllBooks/ViewAllBooks";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <BestBooks handleOrderPopup={handleOrderPopup} />
                <Banner />
                <AllBooks />
                <Testimonial />
                <Footer />
              </>
            }
          />
          <Route path="/BestBooks" element={<BestBooks />} />
          <Route path="/AllBooks" element={<AllBooks />} />
          <Route path="/ViewAllBooks" element={<ViewAllBooks />} />
        </Routes>
        <OrderPopup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
      </BrowserRouter>
    </div>
  );
};

export default App;
