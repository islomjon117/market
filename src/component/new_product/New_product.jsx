import React from 'react'
// import css
import '../new_product/new_product.css'

import vid_mp4 from '../../assets/new_product/vid.mp4'

const New_product = () => {
    return (
        <>
            <div className="new_product">
                <div className="container">
                    <div className="new_product_main">

                        <div iv className="new_product_main_mp4">
                            <video src={vid_mp4} autoPlay loop muted />
                        </div>
                        {/*new product  title start */}
                        <div className="new_product_main_title">
                            <p>Galaxy S24 Ultra</p>
                        </div>
                        {/* new product title end */}
                        {/* new product body start */}
                        <div className="new_product_main_body">
                            <p>Galaxy AI is here</p>
                        </div>
                        {/* new product body end */}

                        {/* new product button start */}
                        <div className="new_product_button">
                            <button>ShOP NOW *</button>
                        </div>
                        {/* new product button end */}
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default New_product