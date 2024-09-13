import React from "react";
import MenubarComponent from "../components/MenubarComponent/MenubarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import AddReviewAIComponent from "../components/AddReviewAIComponent/AddReviewAIComponent";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";
import SubmitButtonComponent from "../components/SubmitButtonComponent/SubmitButtonComponent";

const ReviewPurchasePage = () => {
  return (
    <>
      <header>
        <HeaderComponent />
        <MenubarComponent />
      </header>
      <ReviewComponent />
      <AddReviewAIComponent />
      <SubmitButtonComponent />
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default ReviewPurchasePage;
