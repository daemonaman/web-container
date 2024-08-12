import React, { Component } from "react";
import Router from "./router/containers/router_cont";
// import HotelBooking from "./pages/static/Accomodation/hotelbooking";
import './App.css'
import logo from '../src/Assets/thumbnail_Kids_Tryz_FINALLOGO_BGLESS-01.png'
import appstore from '../src/Assets/appstorimg.png'
import playstore from '../src/Assets/playstore img.png'

class App extends Component {
  render() {
    return (
      <>
         <div className="max_width">
           <Router />
         </div>
           <div className="min_height">
               <div className="main-logo">
                 <img src={logo}/>
               </div>
               <div className="main-logo-head">
                <h1>In this website mobile version & tablet<br/> version not suppoted</h1>
               </div>
               <center className="main-logo-card">
                         <center className="logo_card">
                          <img src={logo}/>
                         </center>
               </center>
               <div className="store_logo">
                  <img src={appstore} />
               </div>
               <div className="store_logo">
                  <img src={playstore} />
               </div>
           </div>
           </>
    );
  }
}
export default App;
