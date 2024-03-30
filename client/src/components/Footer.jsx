import React from "react";
import FooterScooter from "../assets/footer-scooter.png";
const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="w-full mt-32 flex justify-center items-center bg-primary">
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/5 -mt-24 mr-24">
            <img alt="scooter footer" src={FooterScooter} />
          </div>
          <div className="flex w-full mx-auto md:w-3/5 justify-center items-center">
            <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 w-4/5 my-8">
              <div>
                <div className="text-white font-bold text-2xl">About</div>
                <div className="flex flex-col gap-5 mt-8">
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Company
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Teams
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Profile
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Careers
                  </a>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-2xl">Resources</div>
                <div className="flex flex-col gap-5 mt-8">
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Contact
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Application
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    FQA Features
                  </a>
                </div>
              </div>
              <div className="">
                <div className="text-white font-bold text-2xl">Legals</div>
                <div className="flex flex-col gap-5 mt-8">
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Copyright Privacy{" "}
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Policy Disclaimer
                  </a>
                  <a
                    href="https://www.yassirimzi.com"
                    target="_blank"
                    className="text-white font-normal text-lg"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white font-normal py-4">
       &copy; Copyright 2021. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
