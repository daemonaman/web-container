import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../DealsOnpage/DealsOnPage.css";
import Firstslideimage1 from "../../Assets/firstslideimage1.png";
import Firstslideimage2 from "../../Assets/firstslideimage2.png";
import Firstslideimage3 from "../../Assets/firstslideimage3.png";
import Firstslideimage4 from "../../Assets/firstslideimage4.png";

export const DealsOnPage = () => {
  return (
    <>
      <div id="DealsOnPage-main_body">
        <div id="dealsonpage_top_body">
          <h2 id="dealsonpage_heading1">Deals on baby care</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          id="Mydealsonpage_swiper"
        >
          <SwiperSlide>
            <div id="dealsonpage_Card_swiper">
              <img src={Firstslideimage1} alt="" id="dealsonpage_image1" />
              <div id="dealsonpage_card_content">
                <button>Up to 35% off</button> <span>Deals of the day</span>
                <h3 id="dealsonpage_heading2">
                  Super Saver Deals on Luvlap Product
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="dealsonpage_Card_swiper">
              <img src={Firstslideimage2} alt="" id="dealsonpage_image1" />
              <div id="dealsonpage_card_content">
                <button>Up to 54% off</button> <span>Deals of the day</span>
                <h3 id="dealsonpage_heading2">
                  Super Value Deals on Baby Products
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="dealsonpage_Card_swiper">
              <img src={Firstslideimage3} alt="" id="dealsonpage_image1" />
              <div id="dealsonpage_card_content">
                <button>Up to 54% off</button> <span>Deals of the day</span>
                <h3 id="dealsonpage_heading2">
                  Super Value Deals on Baby Products
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="dealsonpage_Card_swiper">
              <img src={Firstslideimage4} alt="" id="dealsonpage_image1" />
              <div id="dealsonpage_card_content">
                <button>Up to 54% off</button> <span>Deals of the day</span>
                <h3 id="dealsonpage_heading2">
                  Super Value Deals on Baby Products
                </h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
