import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderMenu from '../../Components/headerMenu/HeaderMenu';
import data from "../../json/dummy.json";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io"; 
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import style from "./header.module.css";

const Header = () => { 
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [showSlideBar, setShowSlidebar] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState("All");
    const [resSearchBox, setResSearchBox] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);
    const menuRef = useRef(null);
    const products = useSelector((state) => state.card.value);
    const productCount = products.reduce((total, item) => total + item.count, 0);
    const handleClickProduct = (product) => {
        navigate(`/shop-page/category/${product}`);
    };
    const handleClickCategory = (product) => {
        navigate(`/shop-page/${product}`);
    };

    const handleClickNavigateMain=()=>{
        navigate('/');
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setResSearchBox(false);
        }
    };

    const clickResSearchBar = () => {
        setResSearchBox(prev => !prev);
    }

    const toggleClickDropdown = () => {
        setShowDropdown(prev => !prev);
    }

    const clickShowSlideBar = () => {
        setShowSlidebar(prev => !prev);
    }

    const closeMenu = () => {
        setShowSlidebar(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (input.trim() !== "") {
            const filtered = data.filter((item) => item.title.toLowerCase().includes(input.trim().toLowerCase()));
            setFilterData(filtered);
        } else {
            setFilterData([]);
        }
    }, [input]);

    return (
        <div className={`${style.header_box} ${style.header_sticky}`}>
            <HeaderMenu isOpen={showSlideBar} onClose={closeMenu} />
            <div className={style.header}>
                <FaBars className={style.header_icon} onClick={clickShowSlideBar} />
                <div className={style.header_left} onClick={()=>handleClickNavigateMain('')}>MULTI</div>
                <div className={style.header_main_searchBox_serchBar}>
                    <div className={style.header_main_searchBox_serchBar_productCard}>
                        <div className={style.header_main_searchBox_serchBar_productCard_header}>
                            <span className={style.header_main_searchBox_serchBar_productCard_header_dropDown_title}>{selectedDropdown}</span>
                            <IoIosArrowDown
                                className={`${style.header_main_searchBox_serchBar_productCard_header_icon} ${showDropdown ? style.header_main_searchBox_serchBar_productCard_header_icon_rotate : ''}`}
                                onClick={toggleClickDropdown}
                            />
                        </div>
                        <div className={`${style.header_main_searchBox_serchBar_productCard_productName} ${showDropdown ? style.header_main_searchBox_serchBar_productCard_productName_displayBlock : ""}`}>
                            <p className={style.header_main_searchBox_serchBar_productCard_productName_title} onClick={() => { setSelectedDropdown('Laptop'); handleClickProduct('Laptop'); }}>Laptop</p>
                            <p className={style.header_main_searchBox_serchBar_productCard_productName_title} onClick={() => { setSelectedDropdown('Monitor'); handleClickProduct('Monitor'); }}>Monitor</p>
                            <p className={style.header_main_searchBox_serchBar_productCard_productName_title} onClick={() => { setSelectedDropdown('PC'); handleClickProduct('PC'); }}>PC</p>
                            <p className={style.header_main_searchBox_serchBar_productCard_productName_title} onClick={() => { setSelectedDropdown('Computer parts'); handleClickCategory('Computer parts'); }}>Computer parts</p>
                            <p className={style.header_main_searchBox_serchBar_productCard_productName_title} onClick={() => { setSelectedDropdown('Accessories'); handleClickCategory('Accessories'); }}>Accessories</p>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder='Type to search...'
                        className={style.header_main_searchBox_serchBar_input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <CiSearch className={style.header_main_searchBox_serchBar_icon} onClick={clickResSearchBar} />
                </div>
                <div className={`${style.header_main_searchBox_serchBar_res} ${resSearchBox ? style.header_main_searchBox_serchBar_res_displayBlock : ""}`}>
                    <input
                        type="text"
                        placeholder='Type to search...'
                        className={style.header_main_searchBox_serchBar_res_input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className={style.header_right}>
                    <div className={style.header_right_Box} onClick={() => navigate('/login')}><FaUserCircle />Login</div>
                    <div className={style.header_right_Box} onClick={() => navigate('/yourCart')}>
                        <span className={style.header_right_BoxCartCount}>{productCount}</span><GrCart />Cart
                    </div>
                </div>
                <div className={style.header_right_responsive_box }>
                    <div  onClick={clickResSearchBar}><CiSearch />Search</div>
                    <div className={style.header_right_Box} onClick={() => navigate('/yourCart')}><span className={style.header_right_BoxCartCount_res}>{productCount}</span><GrCart />Cart</div>
                </div>
            </div>
            {(input.trim() !== "" || filterData.length > 0)&& (
    <div className={style.header_box_inputData}>
        <p className={style.header_box_inputData_title}>Products</p>
        {filterData.length > 0 ? (
            filterData.map((item, index) => (
                <Link to={`/product-details/${item.id}`} key={index}>                        
                    <div className={style.header_box_inputData_card}>
                        <img src={item.thumbnail} alt="" className={style.header_box_inputData_card_img} />
                        <div className={style.header_box_inputData_card_info}>
                            <span className={style.header_box_inputData_card_info_productName}>{item.title}</span>
                            <span className={style.header_box_inputData_card_info_productPrice}>{item.price}$</span>
                        </div>
                    </div>
                </Link>
            ))
        ) : (
            <p className={style.inputNoDataFoundText}>
                No Data Found
            </p>
        )}
    </div>
)}

        </div>
    );
}

export default Header;