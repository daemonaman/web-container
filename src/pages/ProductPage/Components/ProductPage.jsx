import React, { useEffect } from "react";
import { useState } from "react";
import "./ProductPage.css";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoStarHalf } from "react-icons/io5";
// import { FaStar } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import ratingimage1 from "../../Assets/rating image1.png";
import PRODUCTPAGEICON from "../../Assets/Productpage Image8.png";
import PRODUCTPAGEIMAGE1 from "../../Assets/Productpage Image1.png";
import PRODUCTPAGEIMAGE2 from "../../Assets/Productpage Image2.png";
import PRODUCTPAGEIMAGE3 from "../../Assets/Productpage Image3.png";
import PRODUCTPAGEIMAGE4 from "../../Assets/Productpage Image4.png";
import PRODUCTPAGEIMAGE5 from "../../Assets/Productpage Image5.png";
import PRODUCTPAGEIMAGE6 from "../../Assets/Productpage Image6.png";
import PRODUCTPAGEIMAGE7 from "../../Assets/Productpage Image7.png";
import COLOURIMAGE1 from "../../../Assets/colours image1.png";
import CARDIMAGE1 from "../../../Assets/customer image1.png";
import CARDIMAGE2 from "../../../Assets/customer image2.png";
import CARDIMAGE3 from "../../../Assets/customer image3.png";
import CARDIMAGE4 from "../../../Assets/customer image4.png";
import RATINGIMAGE1 from "../../../Assets/review image1.png";
import PRODUCTPAGEIMAGECARD from "../../../Assets/firstslideimage1.png";
import { ProductData, ProductdataThree, productDatatwo } from "./ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imgs } from "../../";
export const ProductPage = (props) => {
  const [wordData, setWordData] = useState(imgs[0]);
  const [firstIconVisible, setFirstIconVisible] = useState(true);
  const [val, setVal] = useState(0);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(
      `Latitude:
${latitude}
, Longitude:
${longitude}
`
    );
    // Make API call to OpenWeatherMap

    fetch(
      `
https://api.openweathermap.org/data/2.5/weather?lat=
${latitude}
&lon=
${longitude}
&appid=<YOUR_API_KEY>&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  const handleClick = (index) => {
    console.log(index);
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  const handleIconClick = () => {
    setFirstIconVisible(!firstIconVisible);
  };
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  function checkFunction() {
    // Your logic when the "check" button is clicked
    alert("Check button clicked!");
  }
  useEffect(() => {
    props.view_product_all(props.login.admin_id);
    return () => {};
  }, []);
  console.log(props.products);
  const data = [
    {
      headingOne: "LuvLap Silicone Food/Fruit Nibbler with Extra",
      headingTwo: "Mesh,Soft Pacifier/Feeder,Teether for Baby,",
      headingThree: "Infant,Bunny Violet & Pink",
      rating: 4.2,
      numRatings: 9682,
      mrp: 199,
      discountedPrice: 154,
      discountPercent: 23,
      colors: [
        { image: PRODUCTPAGEIMAGE6, price: 171 },
        { image: PRODUCTPAGEIMAGE7, price: 178 },
        { image: COLOURIMAGE1, price: 171 },
      ],
    },
  ];
  const productData = [
    {
      description: [
        "Safe & non-toxic 100% soft silicone & BPA free food grade plastic",
        "Soft silicone sack enables quick & easy filling with fruit or other food",
        "Easy for baby to suck and chew tiny food particles from the mesh",
        "Attractive handle to keep the baby engaged",
        "Provides oral stimulation and relief to teething gums",
        "Protective cover to keep food clean",
        "Easy to clean and sterilize",
      ],
      manufacturer: {
        heading: "Manufacturer",
        description:
          "Universal Corporation Limited, Fruit nibbler and teething toy to provide gentle relief to gums. Serves a dual purpose of feeding fruit and vegetables to babies and also be used as a teether. Can be filled with chilled fruits/vegetables to provide added relief. Made with BPA free, food-grade plastic and soft silicone, it comes in attractive handle designs to engage the baby and is easy to hold and nibble upon.",
      },
      details: [
        "Product Dimensions: 13 x 13 x 20 cm; 50 Grams",
        "Net Quantity: 1 count",
        "Included Components: Small Items",
        "Generic Name: Small Items",
        "Material: Silicone, Plastic",
        "Material Composition: Silicone, Plastic",
        "Manufacturer recommended age: 6 months - 3 years",
      ],
      card: {
        image: PRODUCTPAGEIMAGECARD,
        heading:
          "LuvLap Silicone FoodFruit Nibbler with Extra Mesh, Soft Pacifier/Feeder, Teether for Baby, Infant, Bunny Violet & Pink",
        mrp: 199,
        discountedPrice: 154,
        discountPercent: 23,
        rating: 4.2,
        numRatings: 9682,
      },
    },
  ];
  const cardData = [
    {
      image: CARDIMAGE1,
      heading: "Philips Avent Ultra Air Pacifier 0-6 Months SCF085/12",
      mrp: 199,
      discountedPrice: 474,
      discountPercent: 23,
      rating: 4.2,
      numRatings: 245,
    },
    {
      image: CARDIMAGE2,
      heading:
        "LuvLap Silicone Food/Fruit Nibbler with Extra Mesh, Soft Pacifier/Feeder,…",
      mrp: 199,
      discountedPrice: 154,
      discountPercent: 23,
      rating: 4.2,
      numRatings: 245,
    },
    {
      image: CARDIMAGE3,
      heading:
        "LuvLap Silicone Food/Fruit Nibbler with Extra Mesh, Soft Pacifier/Feeder,…",
      mrp: 199,
      discountedPrice: 154,
      discountPercent: 23,
      rating: 4.2,
      numRatings: 245,
    },
    {
      image: CARDIMAGE4,
      heading:
        "LuvLap Silicone Food/Fruit Nibbler with Extra Mesh, Soft Pacifier/Feeder,…",
      mrp: 199,
      discountedPrice: 154,
      discountPercent: 23,
      rating: 4.2,
      numRatings: 245,
    },
  ];
  return (
    <>
      <div id="PRODUCTPAGE_MAIN_BODY">
        {/* Card image Section */}
        <div>
          <div className="main-head">
            <div id="Heart_logo_productpage">
              <div className="Heart_logo_under_productpage">
                <div className="heart_logo_under_body_icon">
                  {firstIconVisible ? (
                    <div onClick={handleIconClick}>{wordData.icon}</div>
                  ) : (
                    <div onClick={handleIconClick} style={{ color: "#F00" }}>
                      {wordData.icon2}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <img src={wordData.value} id="worddata_image_body" />
            <div className="flex_row">
              {imgs.map((data, i) => (
                <div className="thumbnail" key={i}>
                  <img
                    className={wordData.id == i ? "clicked" : ""}
                    src={data.value}
                    onClick={() => handleClick(i)}
                    id="Productpage_image_under"
                  />
                </div>
              ))}
            </div>
            <div id="PRODUCTPAGE_CARD_ALL">
              {/* side card section */}

              {/* second card section */}

              {/* third card paragraph */}
              <div>
                {data.map((item, index) => (
                  <div key={index} id="PRODUCTPAGE_THIRD_CARD_MAIN_BODY">
                    <div id="PRODUCTPAGE_THIRD_HEADING_SECTION">
                      <div id="PRODUCTPAGE_THIRD_CARD_CONTENTSECTION">
                        <h3 id="PRODUCTPAGE_THIRD_HEADING_ONE">
                          {item.headingOne}
                        </h3>
                        <h3 id="PRODUCTPAGE_THIRD_HEADING_TWO">
                          {item.headingTwo}
                        </h3>
                        <h3 id="PRODUCTPAGE_THIRD_HEADING_THREE">
                          {item.headingThree}
                        </h3>
                      </div>
                    </div>
                    <div id="PRODUCTOPAGE_FOUR_SECTION_ONE">
                      <FaStar id="PRODUCTPAGE_FOUR_CARD_ICONS" />
                      <FaStar id="PRODUCTPAGE_FOUR_CARD_ICONS" />
                      <FaStar id="PRODUCTPAGE_FOUR_CARD_ICONS" />
                      <FaStar id="PRODUCTPAGE_FOUR_CARD_ICONS" />
                      <IoStarHalf id="PRODUCTPAGE_FOUR_CARD_ICONS_IMAGE" />
                      <div id="PRODUCTPAGE-FOUR_CARD_CONTENT">
                        <h3 id="PRODUCTPAGE-FOUR_CARD-HEADING-ONE">
                          {item.rating}{" "}
                          <span id="PRODUCTPAGE-FOUR_CARD_SPAN_TWO"></span>
                          <span id="PRODUCTPAGE_FOUR_CARD_SPAN">
                            {" "}
                            {item.numRatings} Ratings
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div id="PRODUCTPAGE_MRP_SECTION_MAIN_BODY">
                      <h3 id="PRODUCTPAGE_MRP_SECTION-HEADING_ONE">
                        MRP: <del>₹{item.mrp}</del>{" "}
                      </h3>
                      <span id="PRODUCTPAGE-MRP_SPAN-ONE">
                        ₹ {item.discountedPrice}
                      </span>
                      <div id="PRODUCTPAGE_MRP_VERCTICAL"></div>
                      <p id="PRODUCTPAGE_MRP_PARAGRAPH_ONE">
                        {item.discountPercent}% Off
                      </p>
                    </div>
                    <p id="PRODUCTPAGE_MRP_PARAGRAPH_TWO">
                      Inclusive of all taxes
                    </p>
                    <div id="PRODUCTPAGE_COLOR_MAIN_BODY">
                      <h3 id="PRODUCTPAGE_COLOR_HEADING_ONE">Colours</h3>
                      <div id="PRODUCTPAGE_COLOR_TOPCONTENT">
                        {item.colors.map((color, colorIndex) => (
                          <div key={colorIndex} id="PRODUCTPAGE_COLOR_CARD_ONE">
                            <img
                              src={color.image}
                              alt=""
                              id="PRODUCTPAGE_COLOR_CARD_IMAGE_ONE"
                            />
                            <div className="price">
                              {/* <p>₹ {color.price}</p> */}
                            </div>
                            {/* <h3></h3> */}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div id="PRODUCTPAGE_bUTTON_SECTION_MAIN_BODY">
                      <div id="PRODUCTPAGE_BUTTON_SECTION_ONE">
                        <div id="PRODUCTPAGE_BUTTON_SECTION_ONE_BODY">
                          <button id="PRODUCTPAGE_BUTTON_SECTION_UNDER_ONE">
                            Add To Bag
                          </button>
                        </div>
                        <div id="PRODUCTPAGE_BUTTON-SECTION_TWO_BODY">
                          <button id="PRODUCTPAGE_BUTTON_SECTION_UNDER_TWO">
                            Buy Now
                          </button>
                        </div>
                      </div>
                      <div id="PRODUCTPAGE_BUTTON_SECTION_VERTICAL-ROW"></div>
                      <div id="PRODUCTPAGE_PINCODE_SECTION">
                        <div id="PRODUCTPAGE_PINCODE-SECTION_UP_BODY">
                          <h3 id="PRODUCTPAGE_PINCODE_SECTION_HEADING">
                            {" "}
                            <span>
                              <CiLocationOn style={{ fontSize: "1.3rem" }} />
                            </span>{" "}
                            Delivery Options
                          </h3>
                        </div>
                        <div id="PRODUCTPAGE_PINCODE_INPUT_MAIN_BODY">
                          <input
                            type="text"
                            name="pin"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            placeholder="Enter pin"
                          ></input>
                          <p onClick={checkFunction}>check</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div>
          {productData.map((product, index) => (
            <div key={index} id="PRODUCTPAGE_SECRIPTION_MAIN_BODY">
              <div id="PRODUCTPAGE_DESCRIPTION_ALL">
                <div id="PRODUCTPAGE_TOP_CONTAINER">
                  <h2 id="PRODUCTPAGE_HEADING_ONE">Product Description</h2>
                </div>
                <div id="PRODUCTPAGE_ALL_UL">
                  <ul>
                    {product.description.map((item, itemIndex) => (
                      <li key={itemIndex} id="PRODUCTPAGE_ALL_LI">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="PRODUCTPAGE_DECRIPTION_TWO">
                  <h3 id="PRODUCTPAGE_ALL_SECOND_HEADING">
                    {product.manufacturer.heading}
                  </h3>
                  <p id="PRODUCTPAGE_ALL_DECRIPTION_PARA-TWO">
                    {product.manufacturer.description}
                  </p>
                  <div id="PRODUCTPAGE_DECRIPTION_ALL_PARA-MAIN_BODY_THREE">
                    {product.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        id={`PRODUCTPAGE_DECRIPTION_ALL_PARA_${detailIndex}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div id="PRODUCTPAGE_DECRIPTION_CARD">
                <div id="PRODUCTPAGE_DECRIPTION_CARD_ALL">
                  <div id="PRODUCTPAGE_DECRIPTION_CARD_UNDER">
                    <img
                      src={product.card.image}
                      alt=""
                      id="PRODUCTPAGE_DECRIPTION_CARD_IMAGE"
                    />
                    <div id="PRODUCTPAGE_DECRIPTION_CARD_IMAGE_ONE_CONTENT">
                      <h4 id="PRODUCTPAGE_DECCRIPTION_CARD_IMAGE_HEADING">
                        {product.card.heading}
                      </h4>
                    </div>
                    <div id="PRODUCTPAGE_DECCRIPTION_CARD_all_PARAGRAPHS">
                      <h3 id="PRODUCTPAGE_DECCRIPTION_CARD_MRP">
                        MRP: <del>₹{product.card.mrp}</del>
                      </h3>
                      <p id="PRODUCTPAGE_DECCRIPTION_CARD_PARA_ONE">
                        ₹ {product.card.discountedPrice}
                      </p>
                      <hr id="PRODUCTPAGE_DECCRIPTION_CARD_VERTICAL" />
                      <p id="PRODUCTPAGE_DECCRIPTION_CARD_PARA_ONE_PARA_TWO">
                        {product.card.discountPercent}% Off
                      </p>
                    </div>
                    <div id="PRODUCTPAGE_DECCRIPTION_CARD_ALL-ICONS_FLEX">
                      <div id="PRODUCTPAGE_DECCRIPTION_CARD_ALL-ICONS">
                        {[...Array(5)].map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD"
                          />
                        ))}
                      </div>
                      <div id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_PARA_CONTENT">
                        <p id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_HEAD_PARA">
                          {product.card.rating}
                        </p>
                      </div>
                      <hr id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_VERITICAL_LINE" />
                      <p id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_VERTI_PARA">
                        ({product.card.numRatings})
                      </p>
                    </div>
                  </div>
                </div>
                <div id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_VERTI_BUTON_HEAD">
                  <button id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_VERTI_BUTTON">
                    Add To Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="PRODUCTPAGE_CUSTOMER_VIWED_HEAD">
          <h2 id="PRODUCTPAGE_CUSTOMER_VIWED_HEADING_ONE">
            Customers also Viewed
          </h2>
          <div id="PRODUCTPAGE_CUSTOMER_VIWED_CARD_ALL">
            <div id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_UNDER_HEAD"
                >
                  <img
                    src={card.image}
                    alt=""
                    id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_images"
                  />
                  <div className="retails">
                    <h3 id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_HEADING_ONE">
                      {card.heading}
                    </h3>
                    <div id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_MRP">
                      <p id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_PARA_ONEE">
                        MRP:<del> ₹{card.mrp}</del>
                      </p>
                      <p id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_PARA_TWOO">
                        ₹ {card.discountedPrice}
                      </p>
                      <hr id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_HRT" />
                      <p id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_PARA_THREEE">
                        {card.discountPercent}% Off
                      </p>
                    </div>
                    <div id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_RATINGS">
                      <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                      <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                      <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                      <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                      <CiStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                      <p id="CUSTOMER_VIWED_CARDS_RATINGS">{card.rating}</p>
                      <hr id="_CUSTOMER_VIWED_CARDS_RATINGS_HRT" />
                      <p id="PRODUCTPAGE_CUSTOMER_VIWED_CARDS_RATINGS_PRA_ONE">
                        ({card.numRatings})
                      </p>
                    </div>
                    <div id="RECTANGLE_BUTTON_PRODUCTPAGE_HEAD">
                      <button id="RECTANGLE_BUTTON_PRODUCTPAGE_UNDER">
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div id="REVIEW_SECTION_PRODUCTPAGE">
            <div id="REVIEW_SECTION_PRODUCTPAGE_CARD_SECTION">
              {/* 1st */}
              <div id="">
                <p id="REVIEW_SECTION_PRODUCTPAGE_PARA_ONE">
                  Reviews & Ratings
                </p>
                <p id="REVIEW_SECTION_PRODUCTPAGE_PARA_TWO">Customer reviews</p>
                <div id="REVIEW_SECTION_PRODUCTPAGE_STAR_SECTION">
                  <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                  <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                  <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                  <FaStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                  <CiStar id="PRODUCTPAGE_CUSTOMER_VIWE_CARD_ICONS_HEAD" />
                  <p id="">4.2 out of 5</p>
                </div>
                <p id="REVIEW_SECTION_PRODUCTPAGE_PARA_THREE_FOUR">
                  9,682 global ratings
                </p>
              </div>
              <hr id="REVIEW_SECTION_PRODUCTPAGE_HRT" />
              {/* 2nd */}
              <div>
                <p id="REVIEW_SECTION_PRODUCTPAGE_PARA_THREE">4.2/5</p>
                <p id="REVIEW_SECTION_PRODUCTPAGE_PARA-FOUR">
                  Write a review and win 100 reward points !
                </p>
              </div>
              {/* 3rd */}
              <div id="REVIEW_SECTION_PRODUCTPAGE_BUTTON_UP">
                <button id="REVIEW_SECTION_PRODUCTPAGE_BUTTON_UNDER">
                  Write Review
                </button>
              </div>
              {/*  */}
            </div>
            <div className="review-part">
              <h3 id="REVIEW_SECTION_PRODUCTPAGE_TOP_HEADING">
                Photos From Customers
              </h3>
              <div id="REVIEW_SECTION_PRODUCTPAGE_IMAGE_SECTION">
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />
                <img
                  src={ratingimage1}
                  alt=""
                  id="REVIEW_SECTION_PRODUCTPAGE_IMAGE"
                />

                <div className="toggle">
                  <img
                    onClick={toggleModal}
                    // className="btn-modal"
                    src={ratingimage1}
                    alt=""
                    id="REVIEW_SECTION_PRODUCTPAGE_IMAGE_last"
                  />
                  <h3 id="REVIEW_SECTION_PRODUCTPAGE_IMAGE_HEADING">
                    100+
                    <br /> Images
                  </h3>
                </div>
              </div>
              {/* modal */}
              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <h2>all images</h2>
                  <div className="modal-content">
                    {ProductdataThree.map((it) => (
                      <>
                        <div id="OPENMODAL_ALL">
                          <img
                            src={it.images}
                            alt=""
                            style={{ width: 140, height: 160 }}
                          />

                          <button className="close-modal" onClick={toggleModal}>
                            <ImCross />
                          </button>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
              {/*  */}
              <div id="TOP_REVIEW_PRODUCTPAGE_SECTION">
                <h3 id="TOP_REVIEW_PRODUCTPAGE_HEADING_ONE">Top Reviews</h3>
                <div id="TOP_REVIEW_PRODUCTPAGE_TOP_CONTENT">
                  <img
                    src={RATINGIMAGE1}
                    alt=""
                    id="TOP_REVIEW_PRODUCTPAGE_TOP_IMAGE"
                  />
                  <h3 id="TOP_REVIEW_PRODUCTPAGE_TOP_HEADING_ONE">
                    Venumadhavi
                  </h3>
                </div>
                <div id="TOP_REVIEW_PRODUCTPAGE_STAR_HEAD">
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <CiStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                </div>
                <div id="TOP-REVIEW_STAR_ICONS_DOWN_HEAD_BODY">
                  <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_ONE">
                    Reviewed in India on 20 December 2023
                  </p>
                  <div id="TOP-REVIEW_STAR_ICONS_DOWN_HEAD">
                    <p id="">Colour: Violet & Purple</p>
                    <hr id="TOP-REVIEW_STAR_ICONS_DOWN_HRT" />
                    <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_TWO">
                      Verified Purchase
                    </p>
                  </div>
                  <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_THREE">
                    Super quality. I love the product. The pacifier has soft
                    matireial which comforts baby gums and it has a holder so
                    that baby can easy to hold the pacifier and easy to clean
                    after using it.
                  </p>
                  <div id="TOP-REVIEW_STAR_ICONS_DOWN_IMAGE-HEAD">
                    <img
                      src={ratingimage1}
                      alt=""
                      id="TOP-REVIEW_STAR_ICONS_DOWN_IMAGE_CARD"
                    />
                    <div id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_TWO">
                      <button id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_FIRST">
                        Helpful
                      </button>
                      <button id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_SECOND">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div id="TOP_REVIEW_PRODUCTPAGE_SECTION_TWO">
                <div id="TOP_REVIEW_PRODUCTPAGE_TOP_CONTENT">
                  <img
                    src={RATINGIMAGE1}
                    alt=""
                    id="TOP_REVIEW_PRODUCTPAGE_TOP_IMAGE"
                  />
                  <h3 id="TOP_REVIEW_PRODUCTPAGE_TOP_HEADING_ONE">
                    Venumadhavi
                  </h3>
                </div>
                <div id="TOP_REVIEW_PRODUCTPAGE_STAR_HEAD">
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <FaStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                  <CiStar id="TOP-REVIEW_STAR_ICONS_HEAD" />
                </div>
                <div id="TOP-REVIEW_STAR_ICONS_DOWN_HEAD_BODY">
                  <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_ONE">
                    Reviewed in India on 20 December 2023
                  </p>
                  <div id="TOP-REVIEW_STAR_ICONS_DOWN_HEAD">
                    <p id="">Colour: Violet & Purple</p>
                    <hr id="TOP-REVIEW_STAR_ICONS_DOWN_HRT" />
                    <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_TWO">
                      Verified Purchase
                    </p>
                  </div>
                  <p id="TOP-REVIEW_STAR_ICONS_DOWN_PARA_THREE">
                    Super quality. I love the product. The pacifier has soft
                    matireial which comforts baby gums and it has a holder so
                    that baby can easy to hold the pacifier and easy to clean
                    after using it.
                  </p>
                  <div id="TOP-REVIEW_STAR_ICONS_DOWN_IMAGE-HEAD">
                    <img
                      src={ratingimage1}
                      alt=""
                      id="TOP-REVIEW_STAR_ICONS_DOWN_IMAGE_CARD"
                    />
                    <div id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_TWO">
                      <button id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_FIRST">
                        Helpful
                      </button>
                      <button id="TOP-REVIEW_STAR_ICONS_DOWN_BUTTON_SECOND">
                        Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
