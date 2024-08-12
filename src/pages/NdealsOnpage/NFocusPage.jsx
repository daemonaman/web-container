// import React from "react";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';
// import "./NFocusPage.css";
// import SlideData from "./SlideData.js"; 

// const NDealsOnPage = () => {
//   return (
//     <>
//       <OwlCarousel  
//         mouseDrag={false}
//         loop={true}
//         touchDrag={false}
//         lazyLoad={true}
//         items={1}
//         slideBy={1}
//         nav={true}
//         responsive={{
//           1450: { items: 5, slideBy: 1 },
//           1250: { items: 4, slideBy: 1 },
//           1100: { items: 3, slideBy: 1 },
//           900: { items: 2, slideBy: 1 },
//           540: { items: 1, slideBy: 1 },
//         }}
//         dots={true}
//         autoplay={true}
//         autoplayTimeout={3000}
//         animateIn='fadeIn'
//         autoplayHoverPause={false}
//       >
//         {SlideData.map((d) => (
//           <div key={d.id}>
//             <img src={d.image} alt="" />
//             <div className="offers_main">
//               <div className="offers">
//                 <button>{d.offer}</button>
//                 <p id="deal">{d.dealType}</p>
//               </div>
//               <p>{d.description}</p>
//             </div>
//           </div>
//         ))}
//       </OwlCarousel>
//     </>
//   );
// }

// export default NDealsOnPage;
import focuslogo1 from "../../Assets/firstslideimage1.png";
import focuslogo2 from "../../Assets/firstslideimage2.png";
import focuslogo3 from "../../Assets/firstslideimage3.png";
import focuslogo4 from "../../Assets/firstslideimage4.png";
import React,{ Component }from "react";
import "./NFocusPage.css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
const slidesData = [
  {
    image: focuslogo1,
    offer: "UP to 35% off",
    dealType: "Deals of the day",
    description: "Super Saver Deals on Luvlap Product",
  },
  {
    image: focuslogo2,
    offer: "UP to 35% off",
    dealType: "Deals of the day",
    description: "Super Saver Deals on Luvlap Product",
  },
  {
    image: focuslogo3,
    offer: "UP to 35% off",
    dealType: "Deals of the day",
    description: "Super Saver Deals on Luvlap Product",
  },
  {
    image: focuslogo4,
    offer: "UP to 35% off",
    dealType: "Deals of the day",
    description: "Super Saver Deals on Luvlap Product",
  },
];
 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      display: "block",
      margin:'30px',
      color:'green',
      // marginTop:'-2rem',
     
      color: "#fff",  // Set the arrow color to white
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }}
    onClick={onClick}
  />
  );
}
const NDealsOnPage = () => {
  
  const settings = {
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow  style={{color:'black',background:'red'}}/>,
    
  };
  return (
    <>
      <div id="NFocusPage_main_body">
        <h3 className="Nfocuspage_heading_one">Deals on baby care</h3>
       
           <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide_er">
                <img src={slide.image} alt="" />
                <div className="offers_main">
                  <div className="offers">
                    <button>{slide.offer}</button>
                    <p id="deal">{slide.dealType}</p>
                  </div>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Slider>
        {/* </Swiper> */}
      </div>
    </>
  );
};

export default NDealsOnPage;
