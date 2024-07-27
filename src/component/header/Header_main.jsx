import { useEffect, useState } from 'react';
// css import
import '../header/header_main.css';

// header mp4 import
import hero_mp4 from '../../assets/hero_mp4/hero_mp4.mp4';

// api import
import { promoApi } from '../../data/promoApi';

// image import
import img1 from '../../assets/hero_img/header_img.png';


function Header_main() {

    const [promoResponse, setPromoResponse] = useState(null);

    useEffect(() => {
        const getPromos = async () => {
            const response = await promoApi.getPromos()
            setPromoResponse(response)
        }

        getPromos();
    }, []);


    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header_main">

                        {/* header main left start */}
                        <div className="header_main_left_mp4">
                            <video src={hero_mp4} autoPlay loop muted />

                            <div className="header_mp4_text">
                                <h1>
                                    Incredible speed <br /> and battery life?
                                </h1>
                            </div>
                        </div>
                        {/* header main left end */}

                        {/* header main right start */}
                        <div className="header_main_right">
                            <div className="header_main_left_p">
                                <p>
                                    Apple Watch Series 9
                                </p>
                            </div>

                            <div className="header_main_h2">
                                <h2>
                                    Any case. Any band. <br />
                                </h2>
                                <h2>
                                    Any style you want.
                                </h2>
                            </div>

                            <div className="header_main_h3">
                                <h3>
                                    from $399
                                </h3>
                            </div>

                            <div className="header_main_right_img">
                                <img src={img1} alt=""  className='header_right_img'/>
                            </div>

                            <div className="header_main_button">
                                <button>
                                    Sale <b className='btn_star'>*</b>
                                    {promoResponse && promoResponse.title}
                                </button>
                            </div>
                        </div>
                        {/* header main right end */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_main