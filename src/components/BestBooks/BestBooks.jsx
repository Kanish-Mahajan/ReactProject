import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../../assets/books/book2.jpg"
import Img2 from "../../assets/books/book1.jpg"
import Img3 from "../../assets/books/book3.jpg"
import { FaStar } from 'react-icons/fa'

const BooksData = [
    {
      id: 1,
      img: Img1, 
      title: "Harry Potter and the Prisoner of Azkaban",
      description: "A young boy, who discovers he is a wizard on his 11th birthday. He embarks on an adventure at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
      id: 2,
      img: Img2,
      title: "Who's there",
      description: "A gripping mystery where the protagonist uncovers dark secrets tied to a series of strange events. The story delves into hidden truths and unexpected revelations.",
    },
    {
      id: 3,
      img: Img3,
      title: "Lost Boy",
      description: "The journey of a young girl searching for her missing brother in a world filled with danger. As she unravels clues, she discovers a deeper mystery that changes everything.",
    },
];

const BestBooks = ({handleOrderPopup}) => {
  return (
    <>
      <div className='py-10'>
        <div className="container">
            {/* Header section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p
                 className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-1'
                >
                    Trending Books
                </p>
                <h1 id='BestBooks' className='text-3xl font-bold mb-2'> Best Books</h1>
                <p className='text-xs text-gray-400'>Handpicked Titles for Every Reader, Curated Just for You! {" "}</p>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>

                {BooksData.map((book) => (
                    <div
                    data-aos="zoom-in"
                    className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        <div className='h-[100px]'>
                            <img src={book.img} alt="" 
                            className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md'
                            />
                        </div>
                        <div className='p-4 text-center'>
                            <div className='w-full flex items-center justify-center'>
                                <FaStar
                                className="text-yellow-500"/>
                                <FaStar
                                className="text-yellow-500"/>
                                <FaStar
                                className="text-yellow-500"/>
                                <FaStar
                                className="text-yellow-500"/>
                                <FaStar
                                className="text-yellow-500"/>
                            </div>
                            <h1 className='text-xl font-bold mt-2 mb-2'>{book.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{book.description}</p>
                            <button
                            onClick={handleOrderPopup}
                            className='bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary '
                            >Order Now</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      </div>
    </>
  )
}

export default BestBooks