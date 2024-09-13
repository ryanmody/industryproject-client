import React from 'react'
import './HeaderComponent.scss'

const HeaderComponent = () => {
  return (
    <div className='header-bar'>
        <div className='header-bar__logo'>
            <div className='header-bar__image'></div>
        </div>
        <div className='header-bar__address'>
            <div className='header-bar__pin'></div>
            <div className='header-bar__address-info'>
                <div className='header-bar__recipient'>Deliver to John</div>
                <div className='header-bar__postalcode'>Canada T6J 5C8</div>
            </div>
        </div>

        <div className='header-bar__searchbar'>
            <div className='header-bar__filter'>
                <p className='header-bar__filter--text'>All</p>
            </div>
            <div className='header-bar__searchtextbar'></div>
            <div className='header-bar__searchicon'></div>
        </div>
        <div className='header-bar__country'></div>
        <div className='header-bar__signin'></div>
        <div className='header-bar__orders'></div>
        <div className='header-bar__cart'></div>
        


    </div>
  )
}

export default HeaderComponent