import React, { useEffect } from 'react'
import '../favorites/favorites.css'

// image import
import img1 from '../../assets/category_img/series_4.png';

// context import
import { useFilterContext } from '../../context';
// icon import
import { BsFillGrid3X2GapFill } from "react-icons/bs";

import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Favorites = () => {

    const { handleLine4Click, handleLine3Click, productsimgclass, productsclass, selectedProducts, setSelectedProducts, handleHeartClick } = useFilterContext()

    useEffect(() => {
        const storedProducts = localStorage.getItem('selectedProducts');
        if (storedProducts) {
            setSelectedProducts(JSON.parse(storedProducts));
        }
    }, []);

    return (
        <>
            <div className="favorites">
                <div className="container">
                    <div className="favorites main">

                        <div className="favorites_title">
                            <h1>
                                Favorites
                            </h1>
                        </div>

                        <div className="sort_by_and_line3_line4">
                            <div className="sort_by">
                                <p>Sort by</p>
                            </div>

                            <div className="filter_series">
                                <div className="series_icon_3" onClick={handleLine3Click}>
                                    <BsFillGrid3X2GapFill />
                                </div>

                                <div className="series_icon_4" onClick={handleLine4Click}>
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="favorite_product">
                            {selectedProducts && selectedProducts.map(product => (

                                <div className={`${productsclass} category_product`} key={product.id}>
                                    <div className="category_heart_icon" onClick={() => handleHeartClick(product)}>
                                        {selectedProducts.some(p => p.id === product.id) ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: '#BFC0C0' }} />}
                                    </div>
                                    <div className={`${productsimgclass} category_product_img`}>
                                        <Link to={`/showpage/${product.slug}`}>
                                            <div>
                                                <img src={product.thumbnail} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="category_product_title favorite_product_title">
                                        <p>{product.brand.title}</p>
                                    </div>
                                    <br />
                                    <div className="category_product_name_price">

                                        <div className="category_product_name">
                                            <p>{product.title}</p>
                                        </div>
                                        <div className="category_product_price">
                                            <p>от {product.price} сум</p>
                                        </div>
                                    </div>
                                    <button className='add_btn favorite_add_btn'><IoMdAdd />Add to Card</button>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Favorites