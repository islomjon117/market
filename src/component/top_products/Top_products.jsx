import React from 'react'

// import css
import '../top_products/top_products.css'


// import image
import img1 from '../../assets/top_produc_img/img1.png'
import img2 from '../../assets/top_produc_img/img2.png'

const Top_products = () => {
    return (
        <>
            <div className="top_products">
                <div className="container">
                    <div className="top_products_main">

                        {/* top product right start */}
                        <div className="top_products_right">
                            <div className="top_products_right_img">
                                <img src={img1} alt="" />
                            </div>

                            <div className="top_products_right_title">
                                <p> iPhone 15 vs iPhone 13 </p>
                            </div>

                            <div className="top_products_right_body">
                                <h2>How do they compare?</h2>
                            </div>
                        </div>
                        {/* top product right end */}

                        {/* top product left start */}
                        <div className="top_product_left">

                            <div className="top_product_left_title">
                                <p>new releases</p>
                            </div>

                            <div className="top_product_left_body">
                                <h2>The Samsung Galaxy <br /> S24 range is here</h2>
                            </div>

                            <div className="top_product_left_img">
                                <img src={img2} alt="" />
                            </div>

                        </div>
                        {/* top product left end */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top_products