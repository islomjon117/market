import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import css
import '../product_show/product_show.css'

// import icon 
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";

// import api 
import { productshowApi } from '../../data/product_show'

import { useFilterContext } from '../../context';

function Product_show() {

    const { handleClick, isClicked } = useFilterContext();
    const { slug } = useParams();

    const [productshowResponse, setProductshowResponse] = useState(null);

    useEffect(() => {
        const getProductshow = async () => {
            try {
                const response = await productshowApi.getproductshow(slug);
                setProductshowResponse(response);
                console.log('API Response:', response);
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            }
        };
        getProductshow();
    }, [slug]);

    // Show loading or error message if product data is not available
    if (!productshowResponse) {
        return <p>Loading...</p>; // Or a loading spinner
    }

    const { data: productData } = productshowResponse;

    // Check if data exists and contains title
    if (!productData) {
        return <p>No product data available</p>;
    }

    return (
        <div className="product_show">
            <div className="container">
                <div className="product_show_main">
                    <div className="prosta_div">
                        <div className="product_show_right">
                            {productData.images && productData.images.map((image, index) => (
                                <div className="product_show_right_img_1" key={index}>
                                    <div className="product_show_right_images_1">
                                        <img src={image} alt={`Product ${index}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="product_show_right_info">
                            <p className='title'>Description</p>
                            <div className="product_show_right_info">
                                <p className='info'>{productData.description || "No description available"}</p>
                                <div className="arrow_down">
                                    <MdKeyboardArrowDown />
                                </div>
                            </div>
                        </div>
                        <div className="product_show_characteristics">
                            <div className="product_show_characteristics_title">
                                <p>Characteristics</p>
                            </div>
                            <div className="product_show_characteristics_names">
                                <div className="product_show_characteristics_name">
                                    <p className='model'>Model</p>
                                    <p className='cpu'>CPU</p>
                                    <p className='korpus_1'>Корпус</p>
                                    <p className='komplektasiya'>Комплектация</p>
                                    <p className='dopolnitelno'>Дополнительно</p>
                                    <p className='korpus_2'>Корпус</p>
                                </div>
                                <div className="product_show_characteristics_name_left">
                                    <div className="product_show_characteristics_name_left_top">
                                        <hr />
                                        <p className='model'>{productData.characteristics?.model || "No model available"}</p>
                                        <hr />
                                        <p className='cpu'>{productData.characteristics?.cpu || "No CPU available"}</p>
                                        <hr />
                                        <p className='korpus_1'>{productData.characteristics?.korpus_1 || "No korpus_1 available"}</p>
                                        <hr />
                                        <p className='komplektasiya'>{productData.characteristics?.komplektasiya || "No komplektasiya available"}</p>
                                        <hr />
                                        <p className='dopolnitelno'>{productData.characteristics?.dopolnitelno || "No dopolnitelno available"}</p>
                                    </div>
                                    <hr />
                                    <div className="product_show_characteristics_name_left_korpus">
                                        <div className="product_show_characteristics_name_left_korpus_1">
                                            <p>Материал ремешка</p>
                                            <p>Тип застежки</p>
                                            <p>Цвет корпуса</p>
                                            <p>Материал корпуса</p>
                                            <p>Материал задней панели</p>
                                            <p>Длина</p>
                                        </div>
                                        <div className="product_show_characteristics_name_left_korpus_2">
                                            <p>{productData.characteristics?.strapMaterial || "No strap material available"}</p>
                                            <p>{productData.characteristics?.claspType || "No clasp type available"}</p>
                                            <p>{productData.characteristics?.bodyColor || "No body color available"}</p>
                                            <p>{productData.characteristics?.bodyMaterial || "No body material available"}</p>
                                            <p>{productData.characteristics?.backPanelMaterial || "No back panel material available"}</p>
                                            <p>{productData.characteristics?.length || "No length available"}</p>
                                        </div>
                                    </div>
                                    <div className="arrow_down_2">
                                        <MdKeyboardArrowDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product_show_left">
                        <div className="product_title_and_heart">
                            <div className="product_show_title">
                                <h1>{productData.brand?.slug || "No brand available"}</h1>
                            </div>
                            <div className={!isClicked ? 'product_show_heart' : 'heart_2'} onClick={handleClick}>
                                {!isClicked ? <FaRegHeart /> : <FaHeart style={{ color: 'blue' }} />}
                            </div>
                        </div>
                        <div className="product_show_left_subtitle">
                            <h1>{productData.title || "No title available"}</h1>
                        </div>
                        {productData.attributes && productData.attributes.map((attribute, index) => (
                            <div className="product_show_select_color" key={index}>
                                <div className="select_color_title">
                                    <p>{attribute.title || "No title available"}</p>
                                </div>
                                {attribute.data && attribute.data.map((detail, index) => (
                                    <div className="product_color_filter" key={index}>
                                        <div className={attribute.title !== "color" ? 'select_butotns' : 'product_color_select'} style={{ backgroundColor: detail.title }}>
                                            {attribute.title !== "color" ? detail.title : ''} {attribute.title === "display" ? "mm" : ''}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="quantity_btn">
                            <p className='quantity_title'>Quantity</p>
                            <div className="quantity_button">
                                <div className="quantity_puls">
                                    <RiAddLine />
                                </div>
                                <div className="quantity_stock_count">
                                    1
                                </div>
                                <div className="quantity_minus">
                                    <FiMinus />
                                </div>
                                <p className='quantitiy_stock'>
                                    23 in stock
                                </p>
                            </div>
                        </div>
                        <div className="product_show_price">
                            <h2>{productData.price || "No price available"} sum</h2>
                        </div>
                        <div className="product_show_add_to_card_btn">
                            <button>Add to cart</button>
                        </div>
                        <div className="product_show_buy_now_btn">
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_show;
