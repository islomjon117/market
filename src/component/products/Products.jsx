import { useEffect, useState } from 'react';
import '../products/products.css';
import { IoMdAdd } from "react-icons/io";
import { FaHeart, FaRegHeart } from 'react-icons/fa';  // To‘g‘ri import yo‘li
import { productApi } from '../../data/product_rendomApi';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../context';

const Products = () => {
    const { handleHeartClick, selectedProducts, setSelectedProducts } = useFilterContext();
    const [productResponse, setProductResponse] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const response = await productApi.getProduct();
            setProductResponse(response);
        };
        getProduct();
    }, []);

    useEffect(() => {
        const localStorageData = localStorage.getItem('selectedProducts');
        if (localStorageData) {
            setSelectedProducts(JSON.parse(localStorageData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    }, [selectedProducts]);

    return (
        <div className="products">
            <div className="container">
                <div className="products_main">

                    {/* product title start */}
                    <div className="product_title">
                        <p>New arrivals</p>
                        <p>Show all</p>
                    </div>
                    {/* product title end */}

                    {/* all products start */}
                    <div className="all_products">
                        {productResponse && productResponse.data.slice(0, 4).map(product => (
                            <div className="product_box" key={product.id}>
                                <div className="product_heart_tags">
                                    {product.tags && product.tags.slice(0, 1).map(tag => (
                                        <div className="products_tags" key={tag.id}>
                                            <p>{tag.title}</p>
                                        </div>
                                    ))}
                                    <div className="product_heart_icon" onClick={() => handleHeartClick(product)}>
                                        {selectedProducts.some(p => p.id === product.id) ? 
                                            <FaHeart style={{ color: 'red' }} /> : 
                                            <FaRegHeart style={{ color: '#BFC0C0' }} />}
                                    </div>
                                </div>
                                {/* product img start */}
                                <div className="products_img">
                                    <Link to={`/showpage/${product.slug}`}>
                                        <img src={product.thumbnail} alt={product.title} /> {/* alt atributi qo‘shildi */}
                                    </Link>
                                </div>
                                {/* product img end */}
                                
                                <div className="products_title"> {/* CSS sinfi to‘g‘rilandi */}
                                    <p>{product.brand.title}</p>
                                </div>

                                <Link to={`/showpage/${product.slug}`}>
                                    <div className="product_name_price">
                                        <div className="product_name">
                                            <p>{product.title ? product.title.split(' ').slice(0, 3).join(' ') : ''}</p>
                                        </div>
                                        <div className="product_price">
                                            <p>от {product.price} сум</p>
                                        </div>
                                    </div>
                                </Link>
                                
                                <button><IoMdAdd /> Add to Сard</button>
                            </div>
                        ))}
                    </div>
                    {/* all products end */}
                </div>
            </div>
        </div>
    );
}

export default Products;
