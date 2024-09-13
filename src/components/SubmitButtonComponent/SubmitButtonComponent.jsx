import React from 'react'
import './SubmitButtonComponent.scss'
import { useNavigate } from 'react-router-dom'

const SubmitButtonComponent = () => {
    const navigate = useNavigate()

    const handleSubmitClick = () => {
        navigate('/review-submitted'); 
      };

    const clickHandler = () => {
        navigate(`/testpage`)
    }

  return (
    <button className='submitbutton__submit' onClick={() => handleSubmitClick()}>Submit</button>
  )
}

export default SubmitButtonComponent