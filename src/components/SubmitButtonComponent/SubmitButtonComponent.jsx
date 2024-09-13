import React from 'react'
import './SubmitButtonComponent.scss'
import { useNavigate } from 'react-router-dom'

const SubmitButtonComponent = () => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/testpage`)
    }

  return (
    <button className='submitbutton__submit' onClick={() => clickHandler()}>Submit</button>
  )
}

export default SubmitButtonComponent