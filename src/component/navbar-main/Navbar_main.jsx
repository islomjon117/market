import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar_main.css';

// import icon
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import { RxPerson } from "react-icons/rx";
import { RiHeartLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";


// import image
import img1 from '../../assets/navbar_logo/logo.png'

// api import
import { headerApi } from '../../data/headerApi.js';

function Navbar_main() {

    const [headerResponse, setHeaderResponse] = useState(null);

    useEffect(() => {
        const getHeader = async () => {
            const response = await headerApi.getHeader()
            console.log(response);
            setHeaderResponse(response)
        }

        getHeader();
    }, []);


    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isLoginModal, setLoginModal] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setSearchOpen(false);
    };



    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
        setMenuOpen(false); 
    };

        const toggleLogin = () => {
            setLoginModal(!isLoginModal)
        }

    return (
        <div className='navbar'>
            <div className="container">
                <div className="nav_main">

                    {/* navbar left start */}
                    <div className="nav_left">
                        <div className='nav_manu' onClick={toggleMenu}>
                            {!isMenuOpen ? <FaBars /> : <IoMdClose />}
                        </div>
                        <div className="nav-menu" onClick={toggleMenu}>

                            {
                                headerResponse && headerResponse.slice(0, 4).map(item => (
                                    <div key={item.slug} className='navbar_links' onClick={() => setSelect(item.slug)}>
                                        {item.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* navbar left end */}

                    {/* navbar center start*/}
                    <div className="nav_center_logo">
                        <Link to="/">
                            <img src={img1} alt="" />
                        </Link>
                    </div>
                    {/* navbar center end */}

                    {/* navbar right start */}
                    <div className="nav_right">

                        <div className="search_icon" onClick={toggleSearch}>
                            <IoSearch /> Search
                        </div>
                        <div className="bag_icon">
                            <Link to="/cartpage">
                                <CgShoppingBag />
                            </Link>
                        </div>

                        <Link to='/favorites' className="person_icon heart">
                            <RiHeartLine />
                        </Link>
                        <div className="person_icon" onClick={toggleLogin}>
                            <RxPerson />
                        </div>
                    </div>
                    {/* navbar right end */}



                </div>

                {/* menu bar start */}
                <div className={!isMenuOpen ? 'nav_menu_bar nav_dynemic' : 'nav_menu_bar'}>
                    <div className="nav_menu_bar_top">
                        <div className="container">
                            {/* {
                                select !== null ? data[select - 1].title.map(item => (
                                    <div key={item.id}>
                                        {item.name}
                                    </div>
                                )) : ""
                            } */}
                        </div>
                    </div>

                    <div className="nav_menu_bar_bottom">

                    </div>
                </div>
                {/* menu bar end */}

                {/* nav search start */}
                <div className={!isSearchOpen ? 'nav_search_bar search_dynemic' : ' nav_search_bar'}>
                    <div className="nav_search_main">
                        <div className="container">

                            {/* search input start */}
                            <div className="input_search">
                                <input type="text" placeholder='Search' />
                                <div className="close_btn" onClick={toggleSearch}>
                                    {!isMenuOpen ? <IoMdClose /> : <IoMdClose />}
                                </div>
                            </div>
                            {/* search input end */}

                            {/* popular search  start*/}
                            <div className="popular_searching">
                                <div className="popular_search_title">
                                    <h3>
                                        Popular Searchings
                                    </h3>
                                </div>
                                <div className="popular_search_body">
                                    <button>Iphone 15</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                    <button>Watch Series 9</button>
                                </div>
                            </div>
                            {/* popular search end */}

                            {/* recently searched start */}
                            <div className="recently_searched">
                                <div className="recently_searched_title">
                                    <h3 className='recently_searched'>
                                        Recently searched
                                    </h3>
                                    <h3 className='remove_history'>
                                        Remove history
                                    </h3>
                                </div>
                                <div className="recently_searched_body">
                                    <button><IoSearch /> IP</button>
                                    <button className='watch_series'><IoSearch /> Watch Series 9</button>
                                </div>
                            </div>

                            {/* recently searched end */}
                        </div>
                    </div>

                    <div className="nav_search_bar_bottom">
                    </div>
                </div>
                {/* nav search end */}

                {isLoginModal &&
                    <div className="login_modal_bg">
                        <div className="login_modal">
                            <div className="login_close_btn">
                                <button onClick={toggleLogin}><IoMdClose /></button>
                            </div>
                            <div className="login_title">
                                <p>Sign in to Markt</p>
                            </div>

                            <div className="login_google_btn">
                                <button><b><FcGoogle /></b><p>Continue with Google</p></button>
                            </div>

                            <div className="login_or">
                                <h1>OR</h1>
                            </div>

                            <div className="telegram_github_btn">
                                <button className='telegram_btn'>
                                    <b className='telegram'><BsTelegram /></b>Telegram
                                </button>
                                <button className="github_btn">
                                    <b><BsGithub /></b>GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar_main