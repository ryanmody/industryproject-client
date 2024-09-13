import React from "react";
import "./CreateReviewComponent.scss";

const CreateReviewComponent = () => {
  return (
    <div className="create-review">
      <div className="create-review__title">Create Review</div>
      <div className="create-review__product">
        <div className="create-review__product--image"></div>
        <div>
          Optimum Nutrition Gold Standard 100% Whey Protein pwder, Banana Cream,
          5 Pound...
        </div>
      </div>
      <hr className="create-review__divider"></hr>

      <h3 className="overall-rating">Overall rating</h3>
      <hr className="create-review__divider"></hr>

      <h3 className="overall-rating">Add a headline</h3>
      <hr className="create-review__divider"></hr>

      <h3 className="overall-rating">Add a photo or video</h3>
      <h4 className="overall-rating">Shoppers find images and videos more helpful than text alone</h4>
      <hr className="create-review__divider"></hr>

      <h3 className="overall-rating">Add a written review</h3>
      <hr className="create-review__divider"></hr>
    </div>
  );
};

export default CreateReviewComponent;
