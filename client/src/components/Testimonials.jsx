import React from "react";
import Client1 from "../assets/client-1.png";
import Client2 from "../assets/client-2.png";
import Client3 from "../assets/client-3.png";
import { IoStarSharp } from "react-icons/io5";

const Testimonials = () => {
  const testimonials = [
    {
      stars: ["*", "*", "*", "*"],
      reviewText:
        "Love my electric scooter! It's eco-friendly, portable, and zips through city streets effortlessly. Highly recommended for anyone seeking convenience and fun.",
      image: Client1,
      clientName: "Serhiy Hipskyy",
      role: "Urban Commuter",
    },
    {
      stars: ["*", "*", "*", "*", "*"],
      reviewText:
        "Electric scooter = game-changer! Beats traffic, easy to park, and sturdy on different terrains. Saved on gas, reduced carbon footprint. Get one!",
      image: Client2,
      clientName: "Justus Menke",
      role: "Urban Dweller",
    },
    {
      stars: ["*", "*", "*", "*", "*"],
      reviewText:
        "Disappointed with my electric scooter. Battery life is short, struggles on inclines, and brakes feel unreliable. Research thoroughly before buying.",
      image: Client3,
      clientName: "Britain Eriksen",
      role: "Daily Commuter",
    },
  ];
  return (
    <div className="w-full my-24">
      <div>
        <h1 className="w-full text-center text-primary font-extrabold pt-16 text-3xl md:text-4xl">
          Testimonials
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-3 items-center justify-center my-24">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex h-full flex-col  rounded-xl items-center border-2 shadow-xl px-10 gap-2 py-8"
          >
            <div className="flex gap-1 text-xl text-[#FE8B75] pt-6   ">
              {item.stars.map((index) => (
                <IoStarSharp key={index} />
              ))}
            </div>
            <div className="text-md text-primary text-center font-medium pt-2 w-4/5 mb-8">
              {item.reviewText}
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img src={item.image} alt="client image" />
              </div>
              <div>
                <div className="text-primary font-bold">{item.clientName}</div>
                <div className="text-primary font-medium">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
