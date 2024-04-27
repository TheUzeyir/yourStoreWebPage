import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from './page/main/MainPage'
import Login from './page/login/Login';
import AddToCartPage from './page/addToCartPage/AddToCartPage';
import DetailPage from './page/detailPage/DetailPage'
import ShopPage from './page/shopPage/ShopPage';
import NotFound from './page/notFound/NotFound';
import LikedPage from './page/likedPege/LikedPage';
import ScrollToTop from './Components/ScrollToTop';
import style from "./app.module.css"
import Contack from './page/contack/Contack';
import AboutUs from './page/aboutUs/AboutUs';
import AboutUsProducts from './Components/aboutUsProducts/AboutUsProducts';


function App() {

 return (
   <div className={style.appBox}>
     <BrowserRouter>
         <ScrollToTop/>
       <Routes >
         <Route path='/' element={<MainPage/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='yourCart' element={<AddToCartPage/>}/>
         <Route path='/product-details/:id' element={<DetailPage/>}/>
         <Route path="/shop-page/:category" element={<ShopPage />} />
         <Route path="/shop-page/category/:product" element={<ShopPage />} />
         <Route path="/shop-page/" element={<ShopPage />} />
         <Route path='/likedPage' element={<LikedPage/>}/>
         <Route path='/COntackUs' element={<Contack/>}/>
         <Route path='/AboutkUs' element={<AboutUs/>}/>
         <Route path='/AboutkUsProducts' element={<AboutUsProducts/>}/>
         <Route path='*' element={<NotFound/>}/>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App
