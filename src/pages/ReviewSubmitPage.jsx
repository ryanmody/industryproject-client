import React from "react";
import MenubarComponent from "../components/MenubarComponent/MenubarComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import SuccessfulSubmitComponent from "../components/SuccessfulSubmitComponent/SuccessfulSubmitComponent";

const ReviewSubmitPage = () => {
  return (
    <>
      <header>
        <HeaderComponent />
        <MenubarComponent />
      </header>
      <SuccessfulSubmitComponent />
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default ReviewSubmitPage;
