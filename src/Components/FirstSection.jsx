import React from "react";

function FirstSection() {
  return (
    <div className="first--section--wrapper p-4 flex flex-col gap-6 items-center justify-center">
      <div className="img--wrapper h-2/5 p-1 py-2 w-full flex justify-center">
        <img
          src="./images/image-web-3-mobile.jpg"
          alt="web-3"
          aria-hidden="true"
          className="w-full h-80 rounded-sm object-cover"
        />
      </div>
      <div className="text--wrapper flex flex-col gap-2 p-1">
        <h1 className="heading font-extrabold text-3xl w-3/4">
          The Bright Future of Web 3.0?
        </h1>
        <div className="info--container flex flex-col gap-6 pr-8">
          <p className="text-gray-500 font-regular text-sm">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of people. But is it
            really fulfilling its promise?
          </p>
          <button className="btn bg-red-400 w-fit p-2 px-6 text-white font-regular uppercase rounded-sm ease-in duration-300 hover:bg-slate-900">
            read more
          </button>
        </div>
      </div>
      <div className="news--wrapper flex flex-col gap-4 p-4 bg-slate-900 text-white">
        <h2 className="new text-3xl font-bold text-yellow-500">New</h2>
        <div className="news--container flex flex-col gap-3">
          <h3 className="headline font-bold text-white text-xl">
            Hydrogen vs Electric Cars
          </h3>
          <p className="text-gray-300">
            Will hydrogen fueled cars will ever catch up to EVs?
          </p>
        </div>
        <div className="news--container flex flex-col gap-3">
          <h3 className="headline font-bold text-white text-xl">
            The Downside of AI Artistery
          </h3>
          <p className="text-gray-300">
            What are the adverse effects of on-demand AI image generation?
          </p>
        </div>
        <div className="news--container flex flex-col gap-3">
          <h3 className="headline font-bold text-white text-xl">
            Is VS funding drying up?
          </h3>
          <p className="text-gray-300">
            Private funding by VS firms is down by 50% YOY. We take a look at
            what that means.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
