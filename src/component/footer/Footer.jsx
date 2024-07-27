import { useEffect, useState } from 'react'
// import css
import '../footer/footer.css'

import { Link, Outlet } from 'react-router-dom'

// import image
import img1 from '../../assets/footer_img/logo.png'
import img2 from '../../assets/footer_img/logo2.png'

// icon import
import { FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

// import api
import { footerApi } from '../../data/footerApi'

const Footer = () => {

    const [footerResponse, setfooterResponse] = useState(null);
    useEffect(() => {
        const getFooter = async () => {
            const response = await footerApi.getFooter()
            setfooterResponse(response)
        }
        getFooter();
    }, []);


    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer_main">
                        <footer>
                            <div className="footer_box">

                                {/* footer logo start */}
                                <div className="footer_logo">
                                    <img src={img1} alt="" />
                                </div>
                                {/* footer logo end */}

                                {/* footer link 1 start */}
                                <div className="footer_links">
                                    {footerResponse && footerResponse.line_1.map(footer => (
                                        <div key={footer.id} className='footer_link_1'>
                                            <p>
                                                <Link to="/" className='sale'>
                                                    {footer.title}
                                                </Link>
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* footer link 1 end */}
                                <br />
                                {/* footer link 2 start */}
                                <div className="footer_links">
                                    {footerResponse && footerResponse.line_2.map(footer => (
                                        <div key={footer.id} className='footer_link_1'>
                                            <p>
                                                <Link to="/" className='sale'>
                                                    {footer.title}
                                                </Link>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                {/* footer link 2 end */}
                                <br />
                                {/* footer link 3 start */}
                                <div className="footer_links">
                                    {footerResponse && footerResponse.line_2.map(footer => (
                                        <div key={footer.id} className='footer_link_1'>
                                            <p>
                                                <Link to="/" className='sale2'>
                                                    {footer.title}
                                                </Link>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                {/* footer link 3 end */}
                            </div>

                            <br />
                            <div className="footer_top">
                                <br />
                                <p>
                                    © 2024 Markt store
                                </p>

                                <div className="shop_pay_logo">
                                    <Link><img src={img2} alt="" /></Link>
                                </div>
                                <div className="footer_icon">
                                    <div className="telegram">
                                        <Link className='telegram_i'><FaTelegram /></Link>
                                    </div>

                                    <div className="instagram">
                                        <Link className='instagram_i' to="https://www.instagram.com/nomonov_zdes/"><RiInstagramFill /></Link>
                                    </div>
                                </div>
                            </div>

                        </footer>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Footer