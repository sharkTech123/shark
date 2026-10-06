import React, { useEffect, useState } from "react";

import styles from "./Shop.module.css";
import { FaAngleDoubleRight, FaStar, FaArrowRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

import ProductTab from "./ProductTab";
import poster from "../../assets/images/video-poster-img.jpg";
import chooseUsImg from "../../assets/images/choose-img.jpg";
import CallBackForm from "../../components/forms/CallBackForm";

import Review from "../../components/views/Review";
import ShortFaqs from "../../components/shortFaqs/ShortFaqs";
import DrivenForm from "../../components/forms/DrivenForm";
import ProductSlider from "./ProductSlider";
import Testemonial from "../../components/testimonials/Testemonial";
import { useDispatch, useSelector } from "react-redux";
import { imageBaseUrl } from "../../utils/constants";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProducts, getAllProductsById } from "../../redux/features/productSlice";

export default function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsById(params.id));
  }, [dispatch, params.id]);

  const [filter, setFilter] = useState({
    search: "",
    page: 1,
    pageSize: 20,
  });

  useEffect(() => {
    dispatch(getAllProducts(filter.search, filter.page, filter.pageSize));
  }, [dispatch, filter.search, filter.page, filter.pageSize]);





  const product = useSelector((state) => state.product.oneproduct);
  const cartItems = useSelector((state) => state.cart.cart);

  if (!product) return <p>Product not found</p>;

  const {
    _id,
    name,
    image,
    price,
    duration,
    description,
    rating,
    postcode,
    areaIncluded,
    experience,
    transmission,
    category,
  } = product;

  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === _id);
    if (existingItem) {
      // Item already exists in cart, increase quantity
      dispatch(getIncreaseCart(_id, 1));
    } else {
      // Item not in cart, add it with quantity 1
      dispatch(
        getAddToCart({ id: _id, count: 1, service: name, price: price })
      );
    }
  };

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const myCart = cartItems.find((item) => item.id === _id);
  return (
    <div style={{backgroundColor:'black', color:'white'}}>
      <div className={styles.ProductDetailsPage}>
        <section className={styles.productDetailsPageSection}>
          <div className={styles.productDetailsPageImage}>
            <img src={imageBaseUrl + image} alt={name} />
          </div>
          <div className={styles.productDetailsPageDetails}>
            <div className={styles.productDetailsPagetNamePrice}>
              <h1>{name}</h1>
              <p>£ {price}</p>
            </div>
            <div className={styles.productDetailsPageCard}>
              <ul type="none" className={styles.productDetailsPageCardMenu}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{duration}</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span id={styles.arrowIcon}>
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.cardMenu}>{transmission}</p>
                </li>
              </ul>
            </div>
            {/* <div className={styles.postCodeBlock}>
              <p className={styles.postcodes}>Postcodes Included</p>
              <ul type="none" className={styles.postcodeList}>
                {postcode.map((postcodeItem, index) => (
                  <li key={index}>{postcodeItem}</li>
                ))}
              </ul>
            </div> */}
            {/* <div className={styles.areaIncludedBlock}>
              <p className={styles.areaIncluded}>Areas Included</p>
              <ul type="none" className={styles.areaIncludedList}>
                {areaIncluded.map((areaIncludedItem, index) => (
                  <li key={index}>{areaIncludedItem}</li>
                ))}
              </ul>
            </div> */}

            <div id={styles.cartTableBtn}>
              {myCart ? (
                <div className={styles.quantityControl}>
                  <button
                    onClick={() => handleDecrease(_id, 1)}
                    className={styles.decreaseButton}
                  >
                    -
                  </button>
                  <span>{myCart.count}</span>
                  <button
                    onClick={() => handleIncrease(_id, 1)}
                    className={styles.increaseButton}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button className={styles.bookNow} onClick={() => addToCart()}>
                  Book Now
                </button>
              )}
            </div>

            <div className={styles.productDetailsCategoryDiv}>
              <p>
                Category: <span>{category}</span>{" "}
              </p>
            </div>
          </div>
        </section>
        <div className={styles.productDetailsDiscriptionSection}>
          <div className={styles.productDetailsContainer}>
            <div className={styles.discriptionHeadingTop}>
              <h2 id={styles.thIdDiscription}>Discription</h2>
            </div>
            <div className={styles.productDetailsContent}>
              <h2>Discription Manual</h2>
              <hr />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ProductSlider />
      </section>
      <section className={styles.productDetailsProductTab}>
        <ProductTab></ProductTab>
      </section>
      {/* //////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////// */}
      <section className={styles.TSvideosContanierSection}>
        <div className={styles.theorySupportContentVideosec}>
          <video controls poster={poster} preload="none">
            <source
              src="src/assets/videos/Video-1smartlearner-B.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      {/* ////////////////////////// */}
      <section className={styles.whyChooseshortSection}>
        <div className={styles.whyChooseshortSectionContent}>
          <div className={styles.whyChooseshortSectionImage}>
            <img src={chooseUsImg} alt="Image" />
          </div>
          <div className={styles.whyChooseshortSectionText}>
            <h2>
              WHY CHOOSE <span>SMARTLEARNER ?</span>
            </h2>
            <p>
              We are the highest-rated and fastest-growing independent driving
              school in the West Midlands. We offer everything you could ever
              need to get yourself on the road. We take into consideration your
              times requirements, lesson location and anything else you require
              then choose the perfect instructor for you. We even offer 1-2-1
              theory and simulator training with a tutor for those who feel need
              additional support to pass their exams. So, forget the rest and
              learn with the best! Call us today on{" "}
              <a href="">
                {" "}
                <span>0800 118 2001</span>{" "}
              </a>
              to get yourself booked in.
            </p>
            <div className={styles.whyChooseshortSectionButtons}>
              <button className={styles.whyChooseshortSectionReadmore}>
                Read More
              </button>
              <button className={styles.whyChooseshortSectionCallus}>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* //////////////////////////////// */}
      <section className={styles.drivenBefore}>
        <h2>Search for driving lessons in your area</h2>
        <DrivenForm />
      </section>
      {/* ////////////////////////////////// */}
      <section className={styles.nextFormSection}>
        <div className={styles.nextFormContainer}>
          <div className={styles.nextFormDetailsContainer}>
            <div className={styles.nextFormDetailsContainerHeading}>
              {" "}
              <h3>REQUEST FOR A CALLBACK</h3>
              <span>
                <FaArrowRight id={styles.rightArow} />
              </span>
            </div>

            <ul type="none">
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Highest-rated Independent driving
                school in the West Midlands
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Manual and Automatic tuition
              </li>
              <li>
                {" "}
                <FaStar id={styles.redStar} /> Over 40 instructors both male and
                female
              </li>
            </ul>
          </div>
          <div className={styles.nextFormContainer}>
            <CallBackForm />
          </div>
        </div>
      </section>
      {/* ///////////////Testimonials////// */}
      <section>
        <Testemonial />
      </section>

      {/* ///////////////////////Reviews//////// */}
      <section>
        <Review />
      </section>
      {/* //////////////faqs//////////////////////// */}
      <section>
        <ShortFaqs />
      </section>
    </div>
  );
}
