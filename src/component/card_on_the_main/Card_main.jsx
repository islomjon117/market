import React from 'react'
// import css
import '../card_on_the_main/card_main.css'

// import image 
import img1 from '../../assets/product_img/img_product.png'

const Card_main = () => {
    return (
        <>
            <div className="card_the_main">
                <div className="container">
                    <div className="card_main">
                        {/* card main start  */}
                        <div className="card_main_img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="card_main_title_body">
                            <div className="card_main_title">
                                <p> Apple Watch Series 9 </p>
                            </div>

                            <div className="card_main_body">
                                <h2>Any case. Any band. <br />Any style you want.</h2>
                            </div>
                        </div>

                        {/*card the end  */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card_main