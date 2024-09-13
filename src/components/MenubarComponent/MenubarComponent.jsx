import React from "react";
import "./MenubarComponent.scss";

const MenubarComponent = () => {
  return (
      <div className="menu-bar__box">
        <div className="menu-bar">
          <div className="menu-bar__container">
            <div className="menu-bar__item menu-bar__stack"></div>
            <div className="menu-bar__item--bold">All</div>
          </div>
          <div className="menu-bar__item">Fashion</div>
          <div className="menu-bar__item">Mobiles</div>
          <div className="menu-bar__item">Gift Ideas</div>
          <div className="menu-bar__item">Prime</div>
          <div className="menu-bar__item">Amazon Pay</div>
          <div className="menu-bar__item">Gift Cards</div>
          <div className="menu-bar__item">Sports, Fitness & Outdoors</div>
          <div className="menu-bar__item">Computers</div>
          <div className="menu-bar__item">Customer Service</div>
        </div>
        <div className="menu-bar__image"></div>
      </div>
  );
};

export default MenubarComponent;
