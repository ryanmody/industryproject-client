import React from "react";
import MenubarComponent from "../components/MenubarComponent/MenubarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";

const ReviewPurchasePage = () => {
  return (
    <>
      <header>
        <HeaderComponent />
        <MenubarComponent />
      </header>
      <ReviewComponent />
      <footer>
        <FooterComponent />
      </footer>

    </>
  );
};

export default ReviewPurchasePage;
