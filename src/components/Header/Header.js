import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className='title'>
      <h1>
        The Think Tank {""}
        <span>
          <p className='badge bg-secondary badges'>™</p>
        </span>{" "}
      </h1>

      <div>
        <div className='top-banner'>
          <blockquote className='quote'>
            <span className='fs-2'>“</span> If we want to help poor people out,
            one way to do that is to help them explore and use their own
            capability. Human being is full of capacity full of capability, is a
            wonderful creation. But many people never get a chance to explore
            that, never, no that she nor he has that
            <span className='fs-2'>"</span>
            <p className='text-end'>- Muhammad Yunus </p>
          </blockquote>

          <div>
            <img className='banner-image' src='./top.svg' alt='' />
          </div>
        </div>
        <div className='secound-banner'>
          <h1>Committe Total Budget: 500 Core Taka </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
