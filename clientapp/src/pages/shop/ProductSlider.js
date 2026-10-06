import React from "react";
import styles from "../css/TheorySupport.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageBaseUrl } from "../../utils/constants";
import { FaStar, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAddToCart, getDecreaseCart, getIncreaseCart } from "../../redux/features/cartSlice";

export default function ProductSlider() {
  const dispatch = useDispatch();

  const filter_products = useSelector((state) => state.product.products);

  const myCart = useSelector((state) => state.cart.cart);

  const addToCart = (product) => {
    dispatch(getAddToCart({
      id: product._id,
      count: 1,
      service: product.name,
      price: product.price
    }));
  };

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart({ id, qty }));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart({ id, qty }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div style={{backgroundColor:'black', padding:'2rem 0px'}}>
    <section className={styles.productSlider} style={{margin:'2rem'}}>
      <Slider {...settings} >
        {filter_products.map((product) => ( 
          <div key={product._id} className={styles.productCard}>
            <img src={imageBaseUrl + product.image} alt={product.name} style={{aspectRatio:'1/1', objectFit:'contain',marginRight:'auto',marginLeft:'auto', maxWidth:'300px',placeItems:'center'}} />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <div className={styles.ratingAndPrice}>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < product.rating ? styles.filled : ""}>
                      <FaStar />
                    </span>
                  ))}
                </div>
                <p className={styles.price}>£{product.price}</p>
              </div>
              <ul className={styles.cardDetails}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span className={styles.arrowIcon}>
                      <FaAngleDoubleRight className={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{product.duration}</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span className={styles.arrowIcon}>
                      <FaAngleDoubleRight className={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{product.experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span className={styles.arrowIcon}>
                      <FaAngleDoubleRight className={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{product.transmission}</p>
                </li>
              </ul>
              <div className={styles.buttons}>
                {myCart.filter((itm) => itm.id === product._id).length === 0 ? (
                  <button className={styles.bookNow} onClick={() => addToCart(product)}>
                    Book Now
                  </button>
                ) : (
                  <div className={styles.cartTableBtn}>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => {
                          handleDecrease(product._id, 1);
                        }}
                        className={styles.decreaseButton}
                      >
                        -
                      </button>
                      <span style={{color:'black'}}>{myCart.find((itm) => itm.id === product._id)?.count || 0}</span>
                      <button
                        onClick={() => {
                          handleIncrease(product._id, 1);
                        }}
                        className={styles.increaseButton}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
                <NavLink to={`/product/${product._id}`}>
                  <button className={styles.more}>More Info</button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
    </div>
  );
}
