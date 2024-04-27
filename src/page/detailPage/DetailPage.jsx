import React, { useEffect, useState ,useMemo} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem } from '../../redux/cardSlice';
import Footer from '../../layout/footer/Footer';
import HandleSlide from '../../Components/slider/handleSlide/HandleSlide';
import AutoPlayMethods from '../../Components/slider/autoPlayProduct/AutoPlayProductSlide';
import HeaderResponsive from '../../layout/headerResponsive/HeaderResponsive';
import Notification from '../../Components/notification/Notification';
import data from "../../json/dummy.json";
import { CiShoppingCart } from 'react-icons/ci';
import { MdKeyboardArrowLeft } from "react-icons/md";
import style from "./detailPage.module.css";

const DetailPage = () => {
    const { id } = useParams();
    const productId = parseInt(id);
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [loadingState, setLoadingState] = useState(false);
    const [count, setCount] = useState(1);
    const [mainImage, setMainImage] = useState();
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoadingState(true);
            const productData = data.find(item => item.id === productId);
            setProduct(productData);
            setLoadingState(false);
        };
        getProduct();
    }, [productId]);

    const filterProduct = useMemo(() => {
        if (!product || !product.product) {
            return [];
        }
        return data.filter(item => item.product === product.product);
    }, [product]);

    const handleClickImg = (newImage) => {
        setMainImage(newImage);
    };

    const handleIncreaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleClickBtn=(productItem)=>{
        dispatch(addItem({
            ...productItem,
            count
        }));
        setShowNotification(true);
        setTimeout(()=>setShowNotification(false),1400)
    }

    const MyComponent = useMemo(() => {
        return <HandleSlide/>;
    }, []);

    const countPrice=()=>{
       return (count * product.price).toFixed(2)
    }
      
    return (
        <div className="detailPage_container">
            <HeaderResponsive/>            
            <div className="container">
            {showNotification && <Notification />}
                {loadingState ? (
                    <div>Loading...</div>
                ) : (
                    <div className="detailPage">
                        <div className={style.detailPage_goBack} onClick={() => navigate(-1)}><MdKeyboardArrowLeft/>Go Back</div>                        
                        <div className={style.product}>
                            <div className={style.product_images}>
                                <div className={style.product_images_main}>
                                    <img
                                        src={mainImage || product.thumbnail}
                                        alt="shoes"
                                        className={style.product_images_main_img}
                                    />
                                </div>
                                {product && product.images && (
                                    <div className={style.product_images_box}>
                                        {product.images.filter(image => image !== "").map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={product.product}
                                                className={style.product_images_box_other}
                                                onClick={() => handleClickImg(image)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div> 
                            <div className={style.product_info}>
                                <h3 className={style.product_info_title}>{product.title}</h3>
                                <p className={style.product_info_decs}>{product.description}</p>
                                <div className={style.product_info_sale}>
                                    <div className={style.product_info_sale_box}>
                                        <span className={style.product_info_sale_box_price}>$ {countPrice()}</span>
                                    </div>
                                </div>
                                <div className={style.product_buy}>
                                    <div className={style.product_buy_counter}>
                                        <span className={style.product_buy_counter_minus} onClick={handleDecreaseCount}>-</span>
                                        <span className={style.product_buy_counter_count}>{count}</span>
                                        <span className={style.product_buy_counter_plus} onClick={handleIncreaseCount}>+</span>
                                    </div>
                                    <div className={style.button} data-tooltip={count * product.price + ' ' + '$'} onClick={() => handleClickBtn(product)}>
                                        <div className={style['button-wrapper']}>
                                            <div className={style.text}>Add To Cart</div>
                                            <span className={style.icon}>
                                                <CiShoppingCart className={style.product_buy_btn} /> 
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )} 
            </div>
            <div className={style.offerBox}>
                <div className="container">
                    <div className="offerBox_card">
                        <p className={style.offerBox_sameProduct_title}>Same Category Products</p>
                        <AutoPlayMethods filterProduct={filterProduct} id={productId}/>
                    </div>
                    <p className={style.offerBox_title}>You maybe like</p>
                </div>
                {MyComponent}
            </div>
            <Footer/>
        </div>
    );
}

export default DetailPage;
