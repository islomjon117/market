import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import '../electronics/electronics.css';

// import api
import { topcategoryApi } from '../../data/topcategoryApi'; 
const Electronics = () => {
    
    const [ categoryResponse, setCategoryResponse] = useState(null);
   
    useEffect(() => {
        const getCategory = async () => {
            const response = await topcategoryApi.getCategory()
            setCategoryResponse(response)
        }
        getCategory();
    }, []);

    return (
        <>
            <div className="electronics">
                <div className="container">
                    <div className="electronics_main">

                       

                        {/* electronics title start  */}
                        <div className="electronics_main_title">
                            <p>Electronics</p>
                        </div>
                        {/* electronics title end */}

                        {/* electronics product start  */}
                        <div className="electronics_products">
                            {
                            categoryResponse && categoryResponse.data.slice(0, 3).map(category => (
                                <div key={category.id} className="electronics_product">
                                    <div className="electronics_product_img" key={category.id}>
                                        <Link to={`/categories/${category.slug}`}> 
                                           <img src={category.image} alt="" />
                                        </Link>
                                    </div>
                                    <div className="electronics_product_title" key={category.slug}>
                                        <p>{category.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* electronics product end */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Electronics;
