import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full">
      <div>
        <h1 className="w-full text-center text-primary font-extrabold text-3xl md:text-4xl">
          Subscribe To Newsletter
        </h1>
        <p className='w-4/5 text-center mx-auto my-5 text-primary text-lg font-medium'>
          Subscribe to our newsletter to get amazing offers in future.
        </p>
        <div className="w-full my-12 flex justify-center items-center gap-2">
          <input type="email" placeholder="Enter your email." className="bg-[#ffffffa0] py-4 px-5 text-lg w-1/3 border border-2 rounded-md border-primary"/>
          <button type="button" className="bg-primary text-white py-5 px-8 rounded-lg">
            Get start
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
