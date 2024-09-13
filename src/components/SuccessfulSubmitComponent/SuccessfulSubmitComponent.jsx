import React from 'react';
import './SuccessfulSubmitComponent.scss';
import { useNavigate } from 'react-router-dom';

const SuccessfulSubmitComponent = () => {
    const navigate = useNavigate();

    const handleBackToAccount = () => {
        navigate('/'); 
    };
    return (
        <div className="submit">
            <div className="submit-word">
                <h1>Review Submitted - Thank you!</h1>
                <p>We're processing your review. This might take several days, so we appreciate your patience. We will email you when this is complete.</p>
            </div>
            <button onClick={handleBackToAccount}>Back to Account</button>
        </div>
    );
}

export default SuccessfulSubmitComponent