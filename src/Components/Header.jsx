import React, { useState, useEffect } from "react";
import "./Style.css";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (click) {
      setClick(false);
      document.body.classList.remove("fade");
    } else {
      setClick(true);
      document.body.classList.add("fade");
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setClick(false);
    }
  }, [click]);
  return (
    <header className="flex justify-between items-center p-4">
      <img
        src="./images/logo.svg"
        className="w-10 h-7"
        alt="logo"
        aria-hidden="true"
      />
      <ul
        className={`nav--list flex flex-col px-10 py-20 gap-6 absolute top-0 w-3/5 h-full bg-white right-0 ${
          click ? "translate-x-0 z-50" : "translate-x-[30rem]"
        } ease-in duration-300 md:static md:w-auto md:h-auto md:bg-transparent md:top-auto md:translate-x-0 md:px-0 md:py-1 md:flex-row md:items-center`}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      {click ? (
        <img
          src="./images/icon-menu-close.svg"
          className="z-50 w-5"
          alt="close-button"
          aria-hidden="true"
          id="close--btn"
          onClick={handleClick}
        />
      ) : (
        <img
          src="./images/icon-menu.svg"
          className="z-50 w-5"
          id="open--btn"
          alt="open-button"
          aria-hidden="true"
          onClick={handleClick}
        />
      )}
    </header>
  );
}

export default Header;
