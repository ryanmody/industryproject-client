import React from 'react'
import './ReviewComponent.scss'
import product from '../../assets/images/sample-product.jpg'
import star from '../../assets/icons/empty-star.jpg'
import add from '../../assets/icons/add.jpg'

const ReviewComponent = () => {
    return (   
        <div className="review">
            <div className="review__product">
                <h1>Create Review</h1>
                <img className="review__product-sample" src={product} alt="product" />
            </div>
            <div className="review__rating">
                <h2>Overall rating</h2>
                <div className="review__rating-star">
                    <img className="review__rating-star-1" src={star} alt="star" />
                    <img className="review__rating-star-2" src={star} alt="star" />
                    <img className="review__rating-star-3" src={star} alt="star" />
                    <img className="review__rating-star-4" src={star} alt="star" />
                    <img className="review__rating-star-5" src={star} alt="star" />
                </div>
            </div>
            <div className="review__headline">
                <h2>Add a headline</h2>
                <textarea 
                    className ="review__headline-textarea"
                    placeholder="  What's most important to know?"
                />
            </div>
            <div className="review__photo">
                <h2>Add a photo or video</h2>
                <h4 className="review__photo-paragragh">Shoppers find images and videos more helpful than text alone.</h4>
                <img className="review__photo-add" src={add} alt="add" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default ReviewComponent