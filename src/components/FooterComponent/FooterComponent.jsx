import React from 'react'
import './FooterComponent.scss'
import logo from '../../assets/logo/amazonlogo.png'
import english from '../../assets/icons/english.jpg'

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="footer__navigate">
                <h3> Back to top </h3>
            </div>
            <div className="footer__main">
                <div className="footer__main-know">
                    <p className="footer__main-know-title">Get to Know Us</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className="footer__main-connect">
                    <p className="footer__main-connect-title">Connect with Us</p>
                    <p>Facebook</p>
                    <p>Tweeter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer__main-money">
                    <p className="footer__main-money-title">Make Money with Us</p>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div className="footer__main-help">
                    <p className="footer__main-help-title">Let Us Help You</p>
                    <p>Covid-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>Amazon App Download</p>
                    <p>Amazon Assistant Download</p>
                    <p>Help</p>
                </div>
            </div>
            <div className="footer__logo">
                <img className="footer__logo-image" src={logo} alt="logo" />
                <img className="footer__logo-english" src={english} alt="english" />
            </div>
            <div className="footer__country">
                <div className="footer__country-secondary">
                    <p>Australia</p>
                    <p>Brazil</p>
                    <p>Canada</p>
                    <p>China</p>
                    <p>France</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Japan</p>
                    <p>Mexico</p>
                    <p>Netharlands</p>
                    <p>Poland</p>
                    <p>Singapore</p>
                    <p>Spain</p>
                    <p>Turkey</p>
                    <p>United Arab Emirates</p>
                </div>
                <div className="footer__country-primary">
                    <p>United Kingdom</p>
                    <p>United State</p>
                </div>
                <div className="footer__copyright">
                    <div className="footer__copyright-selection">
                        <p>Conditions of Use & Sale</p>
                        <p>Privacy Notice</p>
                        <p>Interest-Based Ads</p>
                    </div>
                    <div className="footer__copyright-detail">
                        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent