import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../category/category.css';

// image import
import img1 from '../../assets/category_img/series_4.png';

// icon import
import { IoIosCloseCircleOutline, IoMdAdd } from "react-icons/io";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { RiAddLine } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";

import { categoryApi } from '../../data/categoryApi';
import { productlistApi } from '../../data/product_list';
// import context
import { useFilterContext } from '../../context/index';

const Category = () => {
    const { isMenuOpen, toggleMenu, currentPage, setCurrrentPage, isTagsOpen, isBrandOpen, isSidebarOpen, heandleFillterClose, heandleFillterClick, toggleTags, toggleMenu2, categorytagsResponse, categoryfillterResponse, productsimgclass, productsclass, handleLine4Click, handleLine3Click, fillterBrands, setFillterBrands, tagsFillter, setTagsFillter, selectedCategories, handleCategorySelection, selectedBrands, handleBrandSelection, selectedTags, handleTagsdSelection, handleRemoveCategory, handleRemoveTags, handleRemoveBrand, categorybrands, handleClearAll, selectedProducts, setSelectedProducts, handleHeartClick } = useFilterContext();
    const { slug } = useParams();
    const [categoryResponse, setCategoryResponse] = useState(null);
    const [catId, setCatId] = useState(null);
    const [productlistResponse, setProductlistResponse] = useState(null);

    useEffect(() => {
        const getCategory = async () => {
            const response = await categoryApi.getCategory(slug);
            setCategoryResponse(response);
        };
        getCategory();
    }, [slug]);

    useEffect(() => {
        if (categoryResponse && categoryResponse.item) {
            setCatId(categoryResponse.item.id);
        }
    }, [categoryResponse]);

    useEffect(() => {
        const getProductList = async () => {
            const response = await productlistApi.getProductList(currentPage, catId, fillterBrands, tagsFillter);
            setProductlistResponse(response);
        };
        getProductList();
    }, [currentPage, catId, fillterBrands, tagsFillter]);

    const handleFilter = () => {
        setCatId(selectedCategories);
        setFillterBrands(selectedBrands);
        setTagsFillter(selectedTags);
    };

    const pages = (productlistResponse && productlistResponse.meta.last_page) ? new Array(productlistResponse.meta.last_page).fill(null) : [];

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
        <div className="category">
            <div className="container">
                <div className="category_main">
                    <div className="category_title">
                        <p>{slug}</p>
                    </div>

                    <div className="sort_by_filter">
                        <div className="sort_filters_title">
                            <div className="sort_by">
                                <p>Sort by</p>
                            </div>

                            <div className="filter_icon">
                                <p onClick={heandleFillterClick}>Fillter</p>
                            </div>

                            {/* filter start */}
                            {isSidebarOpen &&
                                <div className="fillter_side_bar">
                                    <div className="fillter_title">
                                        <p className='fillters_title'>Filters</p>
                                        <p className='bar_close' onClick={heandleFillterClose}>
                                            <span><VscChromeClose /></span>
                                        </p>
                                    </div>

                                    <div className="selected-items">
                                        {(selectedBrands.length > 0 || selectedCategories.length > 0 || selectedTags.length > 0) && (
                                            <>
                                                <div className="selected-brands">
                                                    {selectedCategories.map((categoryId, index) => (
                                                        <p key={index}>
                                                            {categoryfillterResponse?.data.find(category => category.id === categoryId)?.title || 'No Title'}
                                                            <button className='remove_btn' onClick={() => handleRemoveCategory(categoryId)}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </p>
                                                    ))}
                                                    {selectedBrands.map((brand, index) => (
                                                        <div key={index} className='category_brans_title'>
                                                            <p>
                                                                {categorybrands?.data.find(brands => brands.id === brand)?.title || 'No Title'}
                                                                <button className='remove_btn' onClick={() => handleRemoveBrand(brand)}>
                                                                    <IoIosCloseCircleOutline />
                                                                </button>
                                                            </p>
                                                        </div>
                                                    ))}
                                                    {selectedTags.map((tag, index) => (
                                                        <div key={index} className='category_tag_title'>
                                                            {categorytagsResponse?.data.find(tags => tags.id === tag)?.title || 'No Title'}
                                                            <button className='remove_btn' onClick={() => handleRemoveTags(tag)}>
                                                                <IoIosCloseCircleOutline />
                                                            </button>
                                                        </div>
                                                    ))}

                                                    <button className='clear_btn' onClick={handleClearAll}>Clear All</button>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <br /><br />
                                    <div className="fillter_body_main">
                                        <div className="fillter_category_main">
                                            <div className="fillter_category" onClick={toggleMenu}>
                                                <p className='category_title'>Category</p>
                                                <div className="fillter_category_add">
                                                    {!isMenuOpen ? <RiAddLine /> : <FiMinus />}
                                                </div>
                                            </div>
                                            {/* filter_category_checkbox start */}
                                            {isMenuOpen && categoryfillterResponse && categoryfillterResponse.data.map((categoryfillter, index) => (
                                                <div className="filter_category_checkbox" key={categoryfillter.id}>
                                                    <div className="appliances_cheakbox">
                                                        <div className="appliances_cheakbox_1">
                                                            <label className="checkbox-label1">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedCategories.includes(categoryfillter.id)}
                                                                    onChange={() => handleCategorySelection(categoryfillter.id)}
                                                                />
                                                                {categoryfillter.title}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <hr />
                                        {/* filter_brand_main start */}
                                        <div className="fillter_brand_main">
                                            <div className="fillter_brand" onClick={toggleMenu2}>
                                                <p className='brand_title'>Brand</p>
                                                <div className="fillter_brand_add">
                                                    {!isBrandOpen ? <RiAddLine /> : <FiMinus />}
                                                </div>
                                            </div>
                                            {isBrandOpen && categorybrands && categorybrands.data.map((categoryfillterBrand, index) => (
                                                <div className="filter_brand_checkbox" key={index}>
                                                    <div className="filter_brand_checkbox_1" key={categoryfillterBrand.id}>
                                                        <label className="checkbox-label">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedBrands.includes(categoryfillterBrand.id)}
                                                                onChange={() => handleBrandSelection(categoryfillterBrand.id)}
                                                            />
                                                            {categoryfillterBrand.title}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* filter_brand_main end */}
                                        <hr />
                                        <div className="fillter_tags_main">
                                            <div className="fillter_tags" onClick={toggleTags}>
                                                <p className='brand_title'>Tags</p>
                                                <div className="fillter_brand_add">
                                                    <p>{!isTagsOpen ? <RiAddLine /> : <FiMinus />}</p>
                                                </div>
                                            </div>
                                            {isTagsOpen && categorytagsResponse && categorytagsResponse.data.map((categorytags) => (
                                                <div className="filter_tags_checkbox" key={categorytags.id}>
                                                    <div className="filter_tags_checkbox_1">
                                                        <label className="checkbox-label">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedTags.includes(categorytags.id)}
                                                                onChange={() => handleTagsdSelection(categorytags.id)} // handleTagsdSelection -> handleTagsSelection
                                                            />
                                                            {categorytags.slug}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <hr />
                                        <div className="fillter_price">
                                            <p className='price_title'>Price</p>
                                            <div className="fillter_price_add">
                                                <p><RiAddLine /></p>
                                            </div>
                                        </div>

                                        <div className="fillter_sidebar_btn">
                                            <button onClick={handleFilter}>
                                                First (3)
                                            </button>
                                        </div>
                                    </div>
                                    <div className="fillter_bar"></div>
                                </div>
                            }

                            {/* filter end */}
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

                    {/* products start */}
                    <div className="selected-items">
                        {(selectedBrands.length > 0 || selectedCategories.length > 0 || selectedTags.length > 0) && (
                            <>
                                <div className="selected-product_tags container">
                                    <p className='selected-product_tags_title'>
                                        Filters <RiAddLine />
                                    </p>
                                    {selectedCategories.map((categoryId, index) => (
                                        <p key={index} className='input_title'>
                                            {categoryfillterResponse?.data.find(category => category.id === categoryId)?.title || 'No Title'}
                                            <button className='remove_btn remove_btn2' onClick={() => handleRemoveCategory(categoryId)}>
                                                <IoIosCloseCircleOutline />
                                            </button>
                                        </p>
                                    ))}
                                    {selectedBrands.map((brand, index) => (
                                        <div key={index} className='input_title'>
                                            {categorybrands?.data.find(brands => brands.id === brand)?.title || 'No Title'}
                                            <button className='remove_btn remove_btn2' onClick={() => handleRemoveBrand(brand)}>
                                                <IoIosCloseCircleOutline />
                                            </button>
                                        </div>
                                    ))}
                                    {selectedTags.map((tag, index) => (
                                        <div key={index}>
                                            {categorytagsResponse?.data.find(tags => tags.id === tag)?.title || 'No Title'}
                                            <button className='remove_btn remove_btn2' onClick={() => handleRemoveTags(tag)}>
                                                <IoIosCloseCircleOutline />
                                            </button>
                                        </div>
                                    ))}
                                    <button className='clear_btn clear_btn2' onClick={handleClearAll}>Clear All</button>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="category_product_main">
                        {productlistResponse && productlistResponse.data ? (
                            productlistResponse.data.map(category => (
                                <div className={`${productsclass || ''} category_product`} key={category.id}>
                                    <div className="heart_icon_tags">
                                        <div className="tags_product">
                                            {category.tags && category.tags.map(productTag => (
                                                <div className="product_tag_title" key={productTag.id}>
                                                    <p style={{ color: 'red', wordSpacing: '10px' }}>
                                                        {productTag.title}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="category_heart_icon" onClick={() => handleHeartClick(category)}>
                                            {selectedProducts && selectedProducts.some(p => p.id === category.id) ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart style={{ color: '#BFC0C0' }} />}
                                        </div>
                                    </div>
                                    <Link to={`/showpage/${category.slug}`}>
                                        <div className={`${productsimgclass || ''} category_product_img`}>
                                            <img src={category.thumbnail} alt="" style={{ backgroundImage: 'none' }} />
                                        </div>
                                    </Link>
                                    <br />
                                    <br />
                                    <div className="category_product_title">
                                        <p>{category.brand.title}</p>
                                    </div>
                                    <br />
                                    <div className="category_product_name_price">
                                        <Link to={`/showpage/${category.slug}`}>
                                            <div className="category_product_name">
                                                {category.title ? category.title.split(' ').slice(0, 3).join(' ') : 'No Title'}
                                            </div>
                                        </Link>
                                        <div className="category_product_price">
                                            <p>от {category.price} сум</p>
                                        </div>
                                    </div>
                                    <button className='add_btn'><IoMdAdd />Add to Cart</button>
                                </div>
                            ))
                        ) : (
                            <p>No Products Available</p>
                        )}
                    </div>

                    {/* pagination start */}
                    {productlistResponse && productlistResponse.meta && (
                        <div className="pagination">
                            {pages.map((page, index) => (
                                <div
                                    className={`pagination_btn ${currentPage === index + 1 ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setCurrrentPage(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* pagination end */}

                </div>
            </div>
        </div>
    );
};

export default Category;
