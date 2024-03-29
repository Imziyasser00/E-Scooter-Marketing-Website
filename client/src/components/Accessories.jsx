import React from "react";
import AccessoriesIcon from "../assets/info-icon.png";
import GolfBag from '../assets/golf-bag.png';
import GolfScooter from '../assets/golf-scooter.png';
import CartScooter from '../assets/cart-scooter.png';


const Accessories = () => {
  const Accs_info = [
    "Material : Aluminium alloy",
    "Color : Black",
    "Capacity : 45lbs",
    "Ease : Steady & adjustable",
  ];

  const Shopping_info = [
    "Material : Aluminium alloy",
    "Color : Black",
    "Capacity : 45lbs",
    "Ease : Steady & adjustable",
  ];

  return (
    <div className="w-full mt-24">
      <div>
        <h1 className="w-full text-center text-primary font-extrabold text-3xl md:text-4xl">
          Multiple Accessories
        </h1>
        <p className="w-4/5 text-center mx-auto mt-5 text-primary text-lg font-medium">
          There are multiple modes for the scooter for your multiple needs.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
         <div className="flex w-full lg:w-2/3 mt-16">
          <img src={GolfBag} alt="golf bag" className="w-1/2"/>
          <img src={GolfScooter} alt="golf scooter" className="w-1/2"/>
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="w-full text-center py-12 text-primary font-extrabold text-3xl md:text-4xl">
            Golf Bag Rock
          </h1>
          <div className="flex justify-center items-center">
            <div claççssName="w-4/5 flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-1 w-full">
                {Accs_info.map((item, index) => (
                    <div className="flex w-full gap-2 px-4 items-center" key={index}>
                    <img src={AccessoriesIcon} alt="info icon" />
                    <p className="w-full">{item}</p>
                    </div>
                ))}
                </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
      <div className=" w-full flex justify-center lg:w-1/2 mt-32">
              <img src={CartScooter} alt="golf bag" className="w-3/5 lg:w-4/5"/>
            </div>
        <div className="w-full lg:w-1/2 mt-16">
          <h1 className="w-full text-center py-12 text-primary font-extrabold text-3xl md:text-4xl">
            Shopping Rack
          </h1>
          <div className="flex justify-center items-center">
            <div claççssName="w-4/5 flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-1 w-full">
                {Shopping_info.map((item, index) => (
                    <div className="flex w-full gap-2 px-4 items-center" key={index}>
                    <img src={AccessoriesIcon} alt="info icon" />
                    <p className="w-full">{item}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
            </div>
            
        
      </div>
      <div className="w-3/4 lg:w-full mx-auto flex justify-center items-center my-12">
          <div className="text-center text-primary px-8 py-4 text-xl lg:text-3xl font-bold border border-4 rounded-lg hover:bg-primary hover:text-white transition-all even border-primary">
            More Accessories Coming Soon
          </div>
      </div>
     
      </div>
  );
};

export default Accessories;
