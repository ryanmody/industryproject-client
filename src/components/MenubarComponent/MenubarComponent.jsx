import React from "react";
import "./MenubarComponent.scss";

const MenubarComponent = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar__container">
        <div className="menu-bar__item menu-bar__stack"></div>
        <div className="menu-bar__item--bold">All</div>
      </div>
      <div className="menu-bar__item">Deals Store</div>
      <div className="menu-bar__item">Prime</div>
      <div className="menu-bar__item">Buy Again</div>
      <div className="menu-bar__item">Registry</div>
      <div className="menu-bar__item">Browsing History</div>
      <div className="menu-bar__item">Ryan's Store</div>
      <div className="menu-bar__item">Best Sellers</div>
      <div className="menu-bar__item">Home</div>
    </div>
  );
};

export default MenubarComponent;
