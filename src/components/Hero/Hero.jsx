import React, { useState } from 'react'
import Book1 from "../../assets/books/book2.jpg"
import Book2 from "../../assets/books/book1.jpg"
import Book3 from "../../assets/books/book3.jpg"
import Vector from "../../assets/website/blue-pattern.png"

const ImageList = [
  {
    id: 1,
    img: Book1, 
    title: "Harry Potter and the Philospher's Stone",
    description: "Harry Potter and the Philosopher's Stone follows a young boy, Harry Potter, who discovers he is a wizard on his 11th birthday. He embarks on an adventure at Hogwarts School of Witchcraft and Wizardry, where he uncovers secrets about his parents' mysterious deaths and faces the dark wizard, Voldemort.",
    Author: "J.K. Rowling",
  },
  {
    id: 2,
    img: Book2,
    title: "Who's there",
    description: "Who's There is a gripping mystery where the protagonist uncovers dark secrets tied to a series of strange events. The story delves into hidden truths and unexpected revelations.",
    Author: "R.L. Stine",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description: "Lost Boy follows the journey of a young girl searching for her missing brother in a world filled with danger. As she unravels clues, she discovers a deeper mystery that changes everything.",
    Author: "Christina Henry",
  },
];

const Hero = ({handleOrderPopup}) => {

const [imageId, setImageId] = useState(Book1);
const [Author, setAuthor] = useState("J.K. Rowling");
const [title, setTitle] = useState("Harry Potter and the Philosopher’s Stone");
const [description, setDescription] = useState("Harry Potter and the Philosopher's Stone follows a young boy, Harry Potter, who discovers he is a wizard on his 11th birthday. He embarks on an adventure at Hogwarts School of Witchcraft and Wizardry, where he uncovers secrets about his parents' mysterious deaths and faces the dark wizard, Voldemort..");

const bgImage = {
  backgroundImage: `url(${Vector})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
}

  return (
    <>
        <div className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200' style={bgImage}>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text-content-section */}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                      <h1 
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                        {title}
                        <p
                        className='bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary mt-4'>
                          {Author}
                        </p>
                      </h1>
                       <p 
                       data-aos="slide-up"
                       data-aos-duration="500"
                       data-aos-delay="100"
                       className='text-sm'>
                         {description}
                       </p>
                      <div>
                        <button
                        onClick={handleOrderPopup} 
                        data-aos="zoom-in"
                        className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200'> 
                          Order Now
                        </button>
                      </div>
                    </div>
                    {/* Image-section */}
                    <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                      {/* main-image */}
                      <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                        <img 
                        data-aos="zoom-in"
                        data-aos-once="true"
                        src={imageId} alt="" 
                        className='w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto '
                        />
                      </div>
                      {/* other image list */}
                      <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full'>
                        {ImageList.map((data) => (
                          <img 
                          data-aos="zoom-in"
                          data-aos-once="true"
                          src = {data.img}
                          className='max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200'
                          onClick={() => {
                              setImageId(data.img);
                              setTitle(data.title);
                              setDescription(data.description);
                              setAuthor(data.Author);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
