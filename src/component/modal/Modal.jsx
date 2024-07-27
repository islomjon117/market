import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// style import
import "../modal/modal.css";

// context import
import { useFilterContext } from "../../context";

// import api
import { productApi } from "../../data/product_rendomApi";

// icon import
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const Modal = () => {
    const { closeModal, closemodaltoggle } = useFilterContext();
    const [modalproduct, setModalproduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const response = await productApi.getProduct();
            setModalproduct(response);
        };
        getProduct();
    }, []);

    return (
        <>
            {closeModal && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <div className="modal_close_btn" onClick={closemodaltoggle}>
                            <IoMdClose />
                        </div>

                        {/* modal title */}
                        <div className="modal_title">
                            <h1>Welcome</h1>
                        </div>
                        {/* modal subtitle */}
                        <div className="modal_submtitle">
                            <h2>New items that appeared in the catalog</h2>
                        </div>

                        <div className="modal_random_products">
                            <div className="modal_random_products1">
                                {modalproduct && modalproduct.data && modalproduct.data.length > 0 && modalproduct.data.slice(0, 4).map(product => (
                                    <div className="modal_random_products_box" key={product.id}>
                                        <div className="product_heart_new">
                                            <div className="heart_icon1">
                                                <CiHeart />
                                            </div>
                                        </div>

                                        <Link to={`/showpage/${product.slug}`}>
                                            <div className="modal_img">
                                                <img src={product.thumbnail} alt={product.title || 'Product Image'} />
                                            </div>
                                            <p>{product.brand.title}</p>
                                            <p className="subtitle">
                                                {product.title ? product.title.split(' ').slice(0, 2).join(' ') : 'No Title'}
                                            </p>
                                        </Link>
                                        <p className="prise">от {product.price} сум</p>
                                    </div>
                                ))}
                            </div>
                            <button className="view_all_btn">View All</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
