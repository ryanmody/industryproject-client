import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddReviewAIComponent.scss';

const AddReviewAIComponent = () => {
  const [loading, setLoading] = useState(false);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // State to handle fade-out animation
  const textareaRef = useRef(null); // Reference to the textarea content
  const navigate = useNavigate(); 

  const handleEnhanceClick = () => {
    setLoading(true); 
    setShowSuggestionBox(false); // Hide suggestion box before the spinner

    setTimeout(() => {
      setLoading(false); 
      setShowSuggestionBox(true); // Show suggestion box after loading
    }, 2000);
  };

  const handleSuggestionClick = () => {
    const suggestionContent = document.querySelector('.suggestion-box__content').textContent;
    textareaRef.current.value = suggestionContent;

    // Trigger the fade-out animation
    setIsFadingOut(true);

    // Delay removal of the suggestion box to allow fade-out animation to complete
    setTimeout(() => {
      setShowSuggestionBox(false); 
      setIsFadingOut(false); // Resets fade-out state for next time
    }, 400); // Duration needs to match the transition time in SCSS
  };
  const handleSubmitClick = () => {
    navigate('/review-submitted'); 
  };

  return (
    <div className="write-review">
      <h3 className="write-review__title">Add a written review</h3>

      <form className="write-review__form">
        <textarea
          className="write-review__textarea"
          placeholder="What did you like or dislike? What did you use this product for?"
          ref={textareaRef} // Attach the ref to the textarea content so that it can update dynamically
        />
      </form>

      {/* <div className="write-review__tags">
        <div className="write-review__tag">Good product</div>
        <div className="write-review__tag">Looks exactly like the pictures</div>
        <div className="write-review__tag">Works great</div>
      </div> */}
      <div className="write-review__button">
        <button
          className="write-review__enhance"
          type="button"
          onClick={handleEnhanceClick}
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            'Enhance'
          )}
        </button>

        <button
          className="write-review__submit"
          type="button"
          onClick={handleSubmitClick} 
        >
          Submit
        </button>
      </div>

      {/* Suggestion box always rendered bc apparently it affects fading animations */}
      <div
        className={`suggestion-box ${showSuggestionBox ? (isFadingOut ? 'suggestion-box--hidden' : 'suggestion-box--visible') : 'suggestion-box--hidden'}`}
        onClick={handleSuggestionClick} // Click handler that'll act as the trigger for "enhancing"
      >
        <div className="suggestion-box__headline">
          <div className="suggestion-box__suggestion-text">Suggestion</div>
          <div className="suggestion-box__aiimage"></div>
        </div>
        <div className="suggestion-box__content">
          It has been a game-changer for keeping my devices powered up throughout the day.
        </div>
        <div className="suggestion-box__footline">
          <div className="suggestion-box__dismiss">
            <div className="suggestion-box__trash"></div>
            <div className="suggestion-box__delete">Dismiss</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviewAIComponent;
