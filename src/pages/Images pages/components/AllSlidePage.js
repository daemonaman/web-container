import React from "react";
import { useEffect } from "react";
import '../styles/AllSlidepage.css'
import LoGos2 from "../../../Assets/section Image1.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const AllSlidePage = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };
  useEffect(() => {
    props.viewBanner();
    return () => { };
  }, []);
  // console.log(props.banner.all_banner);
  // console.log(props.banner.all_banner)
  return (
    <div id="AllSidePage-mani_body">

      <Slider {...settings}>
        {Array.isArray(props.banner.all_banner) &&
          props.banner.all_banner
            .filter(item => item.categoryName === "first hero image")
            .map((item, index) => (
              <div key={index} id="">
                <img src={item.imageOrVideoUpload} alt="" id="ALlsidepage_image1" />
              </div>
            ))}
      </Slider>
      {/* <div id="">
        <img src={LOgos} alt="" id="ALlsidepage_image1" />
      </div> */}
      <div id="AllsidePage_second_image">
        {Array.isArray(props.banner.all_banner) && props.banner.all_banner.slice(0, 2).map((item, index) => (
          <div key={index} id="">
            {item.categoryName === "second hero image" && <img src={item.imageOrVideoUpload} alt="" id="AllsidePage_image2" />}
          </div>
        ))}
      </div>
    </div>
  );
};
// return (
//   <div id="AllSidePage-mani_body">
// {Array.isArray(props.banner.all_banner) && props.banner.all_banner.map((items) => (
//   <>
//     <div key={items.id}>
//       <img src={items.LOgos} alt="" id="ALlsidepage_image1" />
//     </div>
//     <div key={items.id + '_second'}>
//       <a href="">
//         <img src={LoGos2} alt="" id="AllsidePage_image2" />
//       </a>
//     </div>
//   </>
// ))}
// </div>
// );