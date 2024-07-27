import React from 'react'
// import css
import '../cart_page/cart.css'

// image import
import img1 from '../../assets/cart_page_img/image.png'

// icon import
import { FiMinus } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";
import { TbTrash } from "react-icons/tb";

const Cart_page = () => {
  return (
    <>
      <div className="cart_page">
        <div className="container">
          <div className="cart_page_main">

            {/* cart page start */}
            <div className="cart_page_title">
              <h1>
                Your cart
              </h1>
            </div>

            {/* cart select and remove all buttons start */}
            <div className="cart_select_all_remove_all">
              <div className="select_all">
                <label>
                  <input type="checkbox" />
                  <p>Select All (3)</p>
                </label>
              </div>

              <div className="remove_selection">
                <p>Remove Selection</p>
              </div>
            </div>
            {/* cart select and remove all buttons end */}

            {/* product_info_table start */}
            <div className="product_info_table">
              <div className="product_info_title">
                <p>Product</p>
              </div>
              <div className="product_info_price">
                <p>Price</p>
                <p className='product_info_quantitiy'>Quantity</p>
              </div>
              <div className="product_info_total">
                <p>Total</p>
              </div>
            </div>
            {/* product_info_table end */}
            <div className="product_select_table">

              <div className="product_select_table_label">
                <label>
                  <input type="checkbox" />
                </label>
              </div>

              <div className="product_select_table_img_info">
                <img src={img1} alt="" />
              </div>

              <div className="product_deteil">
                <p className="product_deteil_title">
                  MacBook Air 13’’ and 15’’ models with M2
                </p>
                <div className='product_deteil_color'>
                  <p className='product_display_info'>Color:</p>
                  <p>Midnight</p>
                </div>
                <div className='product_deteil_memory'>
                  <p className='product_display_info'>Memory:</p>
                  <p>16 GB</p>
                </div>
                <div className='product_deteil_ssd'>
                  <p className='product_display_info'>SSD:</p>
                  <p>256 GB</p>
                </div>
              </div>

              <div className="product_deteil_price">
                <p>
                  4 920 000 sum
                </p>
              </div>

              <div className="product_deteil_quantity">
                <div className="quantity_puls">
                  <FiMinus />
                </div>
                <div className="quantity_stock_count">
                  1
                </div>
                <div className="quantity_minus">

                  <RiAddLine />
                </div>
                <p className='quantitiy_stock'>
                  23 in stock
                </p>
              </div>

              <div className="product_deteil_total">
                <p>4 920 000 sum</p>
                <button>Remove <TbTrash /></button>
              </div>
            </div>

            <div className="product_subtotal_btn">
              <div className="subtotal_title">
                <p>Subtotal (0 items)</p>
                <p className="subtotal_price">0 sum</p>
              </div>
              <div className="subtotal_header">
                <p>
                  Tax included. Shipping calculated at checkout.
                </p>
              </div>
              <div className="subtotal_button">
                <button>
                  Check out
                </button>
              </div>
            </div>
            {/* cart page end */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart_page