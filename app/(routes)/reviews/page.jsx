import { Star } from "lucide-react";
import React from "react";

const Reviews = () => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl my-10">Reviews</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 xl:gap-x-8 ">
        <div className="bg-white w-full px-5 py-3 rounded-lg shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="./logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full bg-gray-300"
            />
            <div>
              <p className="text-black font-bold text-lg">Atul Tingre</p>
              <p className="text-black"><Star color="#ff7605" /></p>
            </div>
          </div>
          <div>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur illo iusto ipsa doloremque distinctio doloribus
              dolore, nemo a nobis quibusdam et porro temporibus quas ex
              expedita fugit sapiente, velit magnam!
            </p>
          </div>
        </div>
        <div className="bg-white w-full px-5 py-3 rounded-lg shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="./logo.png"
              alt="logo"
              className="w-10 h-10 rounded-full bg-gray-300"
            />
            <div>
              <p className="text-black font-bold text-lg">Atul Tingre</p>
              <p className="text-black"><Star color="#ff7605" /></p>
            </div>
          </div>
          <div>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur illo iusto ipsa doloremque distinctio doloribus
              dolore, nemo a nobis quibusdam et porro temporibus quas ex
              expedita fugit sapiente, velit magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
