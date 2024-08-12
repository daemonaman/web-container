import React from "react";
import "../FocusonPage/FocusOnPage.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import focusimage1 from "../../Assets/focuon image1.png";
import focusimage2 from "../../Assets/focuon image2.png";
import focusimage3 from "../../Assets/focuon image3.png";
import focusimage4 from "../../Assets/focuon image4.png";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const FocusOnPage = () => {
  return (
    <div className="main_focus">
      <div id="focusonpage_top_section">
        <h3 className="focusonpagea_heading_one">Focus On</h3>
        <p className="focusonpage_paragraph_one">Today’s standout labels</p>
      </div>
      <div id="FocusonPage_main_body">
        <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation={true}
          autoplay={true}
          spaceBetween={10}
          showsPagination={false} 
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
         
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
         
          className="mySwiperr"
        >
          <SwiperSlide>
            <div>
              <Card sx={{ maxWidth: 415, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 450 }}
                  image={focusimage1}
                  title="green iguana"
                />
                {/* <CardMedia
                  sx={{ height: 30 ,zIndex:1 }}
                  image={focusimage4}
                  title="green iguana"
                /> */}
                <div className="Black_img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '14.5rem',
                    width: '100%',
                    height: '30vh',
                    backgroundImage:
                      'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 14.41%, rgba(0, 0, 0, 0.50) 41.6%, rgba(0, 0, 0, 0.60) 50.09%, rgba(0, 0, 0, 0.70) 62.41%, rgba(0, 0, 0, 0.90) 77.28%)',
                    zIndex: 101,
                  }}
                />
              </Card>
              {/* <img src={focusimage1} alt="" id="focusimage1_card_image" /> */}
              <div id="Focusonpage_black_background">
                <h2 className="Focusonpage_card_heading_one">Upto 30% Off </h2>
                <Link to="/shopnow">
                  <button id="focusonpage_card_button_under">Shop Now</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card sx={{ maxWidth: 415, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 450 }}
                  image={focusimage1}
                  title="green iguana"
                />
                {/* <CardMedia
                  sx={{ height: 30 ,zIndex:1 }}
                  image={focusimage4}
                  title="green iguana"
                /> */}
                <div className="Black_img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '14.5rem',
                    width: '100%',
                    height: '30vh',
                    backgroundImage:
                      'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 14.41%, rgba(0, 0, 0, 0.50) 41.6%, rgba(0, 0, 0, 0.60) 50.09%, rgba(0, 0, 0, 0.70) 62.41%, rgba(0, 0, 0, 0.90) 77.28%)',
                    zIndex: 101,
                  }}
                />
              </Card>
              {/* <img src={focusimage1} alt="" id="focusimage1_card_image" /> */}
              <div id="Focusonpage_black_background">
                <h2 className="Focusonpage_card_heading_one">Upto 30% Off </h2>
                <Link to="/shopnow">
                  <button id="focusonpage_card_button_under">Shop Now</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card sx={{ maxWidth: 415, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 450 }}
                  image={focusimage1}
                  title="green iguana"
                />
                {/* <CardMedia
                  sx={{ height: 30 ,zIndex:1 }}
                  image={focusimage4}
                  title="green iguana"
                /> */}
                <div className="Black_img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '14.5rem',
                    width: '100%',
                    height: '30vh',
                    backgroundImage:
                      'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 14.41%, rgba(0, 0, 0, 0.50) 41.6%, rgba(0, 0, 0, 0.60) 50.09%, rgba(0, 0, 0, 0.70) 62.41%, rgba(0, 0, 0, 0.90) 77.28%)',
                    zIndex: 101,
                  }}
                />
              </Card>
              {/* <img src={focusimage1} alt="" id="focusimage1_card_image" /> */}
              <div id="Focusonpage_black_background">
                <h2 className="Focusonpage_card_heading_one">Upto 30% Off </h2>
                <Link to="/shopnow">
                  <button id="focusonpage_card_button_under">Shop Now</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card sx={{ maxWidth: 415, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 450 }}
                  image={focusimage1}
                  title="green iguana"
                />
                {/* <CardMedia
                  sx={{ height: 30 ,zIndex:1 }}
                  image={focusimage4}
                  title="green iguana"
                /> */}
                <div className="Black_img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '14.5rem',
                    width: '100%',
                    height: '30vh',
                    backgroundImage:
                      'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 14.41%, rgba(0, 0, 0, 0.50) 41.6%, rgba(0, 0, 0, 0.60) 50.09%, rgba(0, 0, 0, 0.70) 62.41%, rgba(0, 0, 0, 0.90) 77.28%)',
                    zIndex: 101,
                  }}
                />
              </Card>
              {/* <img src={focusimage1} alt="" id="focusimage1_card_image" /> */}
              <div id="Focusonpage_black_background">
                <h2 className="Focusonpage_card_heading_one">Upto 30% Off </h2>
                <Link to="/shopnow">
                  <button id="focusonpage_card_button_under">Shop Now</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card sx={{ maxWidth: 415, position: 'relative' }}>
                <CardMedia
                  sx={{ height: 450 }}
                  image={focusimage1}
                  title="green iguana"
                />
                {/* <CardMedia
                  sx={{ height: 30 ,zIndex:1 }}
                  image={focusimage4}
                  title="green iguana"
                /> */}
                <div className="Black_img"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    top: '14.5rem',
                    width: '100%',
                    height: '30vh',
                    backgroundImage:
                      'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 14.41%, rgba(0, 0, 0, 0.50) 41.6%, rgba(0, 0, 0, 0.60) 50.09%, rgba(0, 0, 0, 0.70) 62.41%, rgba(0, 0, 0, 0.90) 77.28%)',
                    zIndex: 101,
                  }}
                />
              </Card>
              {/* <img src={focusimage1} alt="" id="focusimage1_card_image" /> */}
              <div id="Focusonpage_black_background">
                <h2 className="Focusonpage_card_heading_one">Upto 30% Off </h2>
                <Link to="/shopnow">
                  <button id="focusonpage_card_button_under">Shop Now</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>

  );
};
export default FocusOnPage
