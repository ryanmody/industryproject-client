import React from "react";
import MenubarComponent from "../components/MenubarComponent/MenubarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import CreateReviewComponent from "../components/CreateReviewComponent/CreateReviewComponent";
import TodaysDealsComponent from "../components/TodaysDealsComponent/TodaysDealsComponent";

const ReviewPurchasePage = () => {
  return (
    <>
      {/* <HeaderComponent />
      <MenubarComponent />
      <CreateReviewComponent /> */}
      <TodaysDealsComponent />
    </>
  );
};

export default ReviewPurchasePage;
