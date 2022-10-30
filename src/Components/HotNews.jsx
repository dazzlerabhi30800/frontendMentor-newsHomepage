import React from "react";

function HotNews() {
  return (
    <div className="hot--news--wrapper flex flex-col gap-2 p-4 justify-center items-center">
      <div className="hot--news--card flex items-start py-2 gap-4">
        <div className="news--img flex w-2/5 bg-red-300">
          <img
            src="./images/image-retro-pcs.jpg"
            className="w-full h-32 object-fill"
            alt="retro-pc"
          />
        </div>
        <div className="info--wrapper flex flex-col gap-2">
          <span className="serial text-gray-400 text-2xl font-extrabold">
            01
          </span>
          <h4 className="text-black text-xl font-bold">Reviving Retro Pc</h4>
          <p className="text-gray-500 font-regular">
            What happens when old pc given modern upgrades?
          </p>
        </div>
      </div>
      <div className="hot--news--card flex items-start py-2 gap-4">
        <div className="news--img flex w-2/5 bg-red-300">
          <img
            src="./images/image-top-laptops.jpg"
            className="w-full h-32 object-fill"
            alt="retro-pc"
          />
        </div>
        <div className="info--wrapper flex flex-col gap-2">
          <span className="serial text-gray-400 text-2xl font-extrabold">
            02
          </span>
          <h4 className="text-black text-xl font-bold">
            Top ten laptops of 2022
          </h4>
          <p className="text-gray-500 font-regular">
            Our best picks for various needs and budgets
          </p>
        </div>
      </div>
      <div className="hot--news--card flex items-start py-2 gap-4">
        <div className="news--img flex w-2/5 bg-red-300">
          <img
            src="./images/image-gaming-growth.jpg"
            className="w-full h-32 object-fill"
            alt="retro-pc"
          />
        </div>
        <div className="info--wrapper flex flex-col gap-2">
          <span className="serial text-gray-400 text-2xl font-extrabold">
            03
          </span>
          <h4 className="text-black text-xl font-bold">The Growth of gaming</h4>
          <p className="text-gray-500 font-regular">
            How the pandemic has sparked fresh oppurtunities
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotNews;
