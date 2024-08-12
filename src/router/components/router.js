import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Controller from "../containers/controller_cont";
import Losuperadmin_login from "../../auth/container/superadminCont";
import Signup from "../../auth/container/SignUpCont";
// import { ProductPage } from "../../pages/ProductPage/Components/ProductPage";
import Color from "../../pages/Admin/color/container/colorCont";
import Drawer_option_con from "../containers/drawer_cont";
import Error from "../../404";
import Chatbot from '../../pages/ChatBot/Chatbot'
import NewNavbarpage from "../../pages/NewnavbarPage/Container/NewnavbarCont";
import Footer from "../../pages/Footer/Footer";
import Layout from "../../pages/Layout/container/LayoutCont";
import MyWishlistcont from "../../pages/MyWishlist Page/container/MyWishlistcont";
import Orders from "../../pages/Orders/Orders";
import { WalletPage } from "../../pages/Wallet page/WalletPage";
import Contact from "../../pages/ContactUs/ContactUs";
import { Wallet } from "@mui/icons-material";
import Sidenav from "../../pages/Contactuspage/New";
import NavPage from "../../pages/MobileScreen/Navpage/NavPage";
import { MainNavbar } from "../../pages/MainNavbar Page/MainNavbar";
import FilterProductPage from "../../pages/New Filter Page/container/productCont";
import Privacy from "../../common/footer/privecy";
import Cookies from "../../common/footer/cookies";
import Tearms from "../../common/footer/Terms";
import Return from "../../common/footer/returns";
import Shopping from "../../common/footer/Shipping";
import OrderSummary from "../../pages/Order-Summary/OrderSummary";
import Payment from "../../pages/Payment Page/Payment";
import login from "../../auth/components/superadmin_login";
import AddressPage from "../../pages/AddressPage/Container/AddressPageCont";
import ShopAgeCont from "../../pages/ShopAge/Container/ShopAgeCont";
import ProductPageByAge from "../../pages/New Filter Page/container/productAgeCont";
import ProductAllView from "../../pages/Product View/Container/ProductViewCont";
import Yourprofile from "../../pages/YourProfile/Container/YourProfileCont"
import Coupons from "../../pages/Coupons/Coupons";
import ContactUs from "../../pages/ContactUs/ContactUs";
import AboutUs from "../../pages/About/AboutUs";
import Orderview from "../../pages/Orderview/Orderview";
import Order from "../../pages/Orderviewtwo/Order";
import Filter from "../../pages/New Filter Page/components/Filter";
import BestSeller from "../../pages/BecomeSeller/Component/Bestseller";
import BlogsDetails from "../../pages/Blogsdesc/Component/BlogsDesc";
import PreDeliveryCombo from "../../pages/CartProduct/PreDeliveryCombo";
import Newtwo from "../../pages/Contactuspage/Newtwo";
import MangaeOrder from "../../pages/Contactuspage/MangaeOrder";
import ReturnRefund from "../../pages/Contactuspage/ReturnRefund";
import Seller from "../../pages/Contactuspage/Seller";
import  ShoppingcartPage  from "../../pages/Shoping cart Page/Container/Shopingcartcont";
class Routers extends Component {
  render() {
    const { login, onLogout } = this.props;
    let body;
    console.log(login);
    if (login.isHome) {
      body = (
        <div>
          <main
            style={{
              flexGrow: 1,
            }}
          >
            <Controller />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <NewNavbarpage />
                    <Layout />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/login"
                element={
                  <div>
                    <Losuperadmin_login />
                  </div>
                }
              />
              <Route
                exact
                path="/return-policy"
                element={
                  <div>
                    <NewNavbarpage />
                    <Return />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/Return"
                element={
                  <div>
                    <NewNavbarpage />
                    <ReturnRefund />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/seller"
                element={
                  <div>
                    <NewNavbarpage />
                    <Seller />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/signup"
                element={
                  <div>
                    <Signup />
                  </div>
                }
              />
              <Route
                exact
                path="/shoppingcart"
                element={
                  <div>
                    <NewNavbarpage />
                     <ShoppingcartPage/>
                    <Footer />
                  </div>
                }
              />

              <Route
                exact
                path="/chatbot"
                element={
                  <div>
                    <Chatbot />
                  </div>
                }
              />
              <Route
                exact
                path="/blogsdetails"
                element={
                  <div>
                    <NewNavbarpage />
                    <BlogsDetails />
                    <Footer />
                  </div>
                }
              />

              <Route
                exact
                path="/wishlist"
                element={
                  <div>
                    <NewNavbarpage />
                    <MyWishlistcont />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/orders"
                element={
                  <div>
                    <NewNavbarpage />
                    <Orders />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/wallet"
                element={
                  <div>
                    <NewNavbarpage />
                    <WalletPage />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/support"
                element={
                  <div>
                    <NewNavbarpage />
                    <Sidenav />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/contactUs"
                element={
                  <div>
                    <NewNavbarpage />
                    <Contact />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/products/:_id"
                element={
                  <div>
                    <NewNavbarpage />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start",padding:'20px',backgroundColor:'#f9f9f9'}}>
                      <Filter />
                      <FilterProductPage />
                    </div>
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/prouctsbyage/:age"
                element={
                  <div>
                    <NewNavbarpage />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
                      <Filter />
                      <ProductPageByAge />
                    </div>
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/productsallview"
                element={
                  <div>
                    <NewNavbarpage />
                    <ProductAllView />
                    <Footer />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/privacy-policy"
                element={
                  <div>
                    <NewNavbarpage />
                    <Privacy />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/shipping-policy"
                element={
                  <div>
                    <NewNavbarpage />
                    <Shopping />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/cookies-policy"
                element={
                  <div>
                    <NewNavbarpage />
                    <Cookies />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/contactus"
                element={
                  <div>
                    <NewNavbarpage />
                    <ContactUs />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/aboutus"
                element={
                  <div>
                    <NewNavbarpage />
                    <AboutUs />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/agefilter"
                element={
                  <div>
                    <NewNavbarpage />
                    <ShopAgeCont />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/becomeseller"
                element={
                  <div>
                    <NewNavbarpage />
                    <BestSeller />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/terms-conditions"
                element={
                  <div>
                    <NewNavbarpage />
                    <Tearms />
                    <Footer />
                  </div>
                }
              />
              {/* <Route exact path="*" element={<Error />} /> */}
              <Route
                exact
                path="/home"
                element={
                  <div>
                    <NavPage />
                  </div>
                }
              />
              {/* <Route exact path="/" element={  <Login/>} />*/}
              {/* <Route exact path="/signup" element={  <Signup/>} />  */}
              <Route exact path="*" element={<Error />} />
              <Route
                exact
                path="/orderSummary"
                element={
                  <div>
                    <NewNavbarpage />
                    <OrderSummary />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/orderview"
                element={
                  <div>
                    <NewNavbarpage />
                    <Orderview />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/orderviewtwo"
                element={
                  <div>
                    <NewNavbarpage />
                    <Order />
                    <Footer />
                  </div>
                }
              />
              {/* <Route
                exact
                path="/address"
                element={
                  <div>
                    <NewNavbarpage />
                    <AddressPage />
                    <Footer />
                  </div>
                }
              /> */}
              <Route
                exact
                path="/cartproduct"
                element={
                  <div>
                    <NewNavbarpage />
                    <PreDeliveryCombo />
                    <Footer />
                  </div>
                }
              />
              {/* <Route
                exact
                path="/help"
                element={
                  <div >
                    <NewNavbarpage />
                    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#f9f9f9' }}>
                      <Sidenav />
                      <Newtwo />
                    </div>
                    <Footer />
                  </div>
                }
              /> */}
              <Route
                exact
                path="/payment"
                element={
                  <div>
                    <NewNavbarpage />
                    <Payment />
                    <Footer />
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      );
    } else {
      if (login.role === "user") {
        body = (
          <div style={{}}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <NewNavbarpage />
                    <Layout />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/mangaeorders"
                element={
                  <div>
                    <NewNavbarpage />
                    <MangaeOrder />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/help"
                element={
                  <div >
                    <NewNavbarpage />
                    <div style={{ display:'flex', flexWrap: 'wrap', backgroundColor: '#f9f9f9'}}>
                      <Sidenav />
                      <Newtwo />
                    </div>
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/yourprofile"
                element={
                  <div>
                    <NewNavbarpage />
                    <Yourprofile />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/prouctsbyage/:age"
                element={
                  <div>
                    <NewNavbarpage />
                    <ProductPageByAge />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/shoppingcart"
                element={
                  <div>
                    <NewNavbarpage />
                    <ShoppingcartPage />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/wishlist"
                element={
                  <div>
                    <NewNavbarpage />
                    <MyWishlistcont />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/orderSummary"
                element={
                  <div>
                    <NewNavbarpage />
                    <OrderSummary />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/orders"
                element={
                  <div>
                    <NewNavbarpage />
                    <Orders />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/coupons"
                element={
                  <div>
                    <NewNavbarpage />
                    <Coupons />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/wallet"
                element={
                  <div>
                    <NewNavbarpage />
                    <WalletPage />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/payment"
                element={
                  <div>
                    <NewNavbarpage />
                    <Payment />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/support"
                element={
                  <div>
                    <NewNavbarpage />
                    <Sidenav />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/contactUs"
                element={
                  <div>
                    <NewNavbarpage />
                    <Contact />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/productsview"
                element={
                  <div>
                    <NewNavbarpage />
                    {/* <AllProductCont /> */}
                    <Footer />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/products/:_id"
                element={
                  <div>
                    <NewNavbarpage />
                    <div>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start",padding:'20px',backgroundColor:'#f9f9f9'}}>
                      <Filter />
                      <FilterProductPage />
                    </div>
                    </div>
                    <Footer />
                  </div>
                }
              />
              {/* <Route exact path="*" element={<Error />} /> */}
              <Route
                exact
                path="/home"
                element={
                  <div>
                    <NavPage />
                  </div>
                }
              />
              <Route
                exact
                path="/address"
                element={
                  <div>
                    <NewNavbarpage />
                    <AddressPage />
                    <Footer />

                  </div>
                }
              />
              <Route
                exact
                path="/agefilter"
                element={
                  <div>
                    <NewNavbarpage />
                    <ShopAgeCont />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/blogsdetails"
                element={
                  <div>
                    <NewNavbarpage />
                    <BlogsDetails />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/becomeseller"
                element={
                  <div>
                    <NewNavbarpage />
                    <BestSeller />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/aboutus"
                element={
                  <div>
                    <NewNavbarpage />
                    <AboutUs />
                    <Footer />
                  </div>
                }
              />
               <Route
                exact
                path="/payment"
                element={
                  <div>
                    <NewNavbarpage />
                    <Payment />
                    <Footer />
                  </div>
                }
              />
              <Route
                exact
                path="/productsallview"
                element={
                  <div>
                    <NewNavbarpage />
                    <ProductAllView />
                    <Footer />
                  </div>
                }
              ></Route>
            </Routes>
          </div>
        );
      }
    }

    return <Router>
      
      {body}
      {/* <div style={{ display: "flex" }}>{body}</div> */}
      
      </Router>;
  }
}

export default Routers;
