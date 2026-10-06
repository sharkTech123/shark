import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./Shop.module.css";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// Import the useCart hook
import { imageBaseUrl } from "../../utils/constants";
import { getAddToCart, getDecreaseCart, getIncreaseCart } from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Products({ curElem }) {
  const {
    id,
    _id,
    name,
    image,
    price,
    duration,
    postcode,
    rating,
    experience,
    transmission,
    category,
  } = curElem;


  const myCart = useSelector((state) => {

    return state.cart.cart ? state.cart.cart.filter((itm) => (itm.id == _id)) : []

  })


  const addToCart = (prodcu) => {
    dispatch(getAddToCart({id:_id,count:1,service:name,price:price}))
  }


  const dispatch = useDispatch()

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty))
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty))
  };
  const quantity = 1;
  const inCart = true;
  return (
    <div>
      <div className={styles.chooseProductSection}>
        <div className={styles.productGrid}>
          <div key={id} className={styles.productCard}>
            <img src={imageBaseUrl + image} width={400} style={{ width: "100%", height: "200px" }} height={400} alt={name} />
            <div className={styles.productDetails}>
              <h3>{name}</h3>
              <div className={styles.ratingAndPrice}>
                <div className={styles.rating}>
                  {[...Array(rating)].map((_, index) => (
                    <span
                      key={index}
                      className={index < rating ? styles.filled : ""}>
                      <FaStar />
                    </span>
                  ))}
                </div>
                <p className={styles.price}>£{price}</p>
              </div>
              <ul type="none" className={styles.cardDetails}>
                <li>
                  <p>
                    Course Duration{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{duration} Weeks</p>
                </li>
                <li>
                  <p>
                    Experience{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{experience}</p>
                </li>
                <li>
                  <p>
                    Transmission{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{transmission}</p>
                </li>
                {/* <li>
                  <p>
                    Category{" "}
                    <span id={styles.arrowIcon}>
                      {" "}
                      <FaAngleDoubleRight id={styles.productmenuArrowIcon} />
                    </span>
                  </p>{" "}
                  <p className={styles.duration}>{category}</p>
                </li> */}
              </ul>
              {/* <div className={styles.postCodeBlock}>
                <p className={styles.postcodes}>Postcodes Included</p>
                <ul type="none" className={styles.postcodeList}>
                  {postcode.map((postcodeItem, index) => (
                    <li key={index}>{postcodeItem}</li>
                  ))}
                </ul>
              </div> */}
              <div className={styles.buttons}>
                {myCart.length == 0 ? (<button
                  className={styles.bookNow}
                  // disabled={inCart}
                  onClick={() => addToCart(curElem)}>
                  Book Now
                </button>) :
                  (<div id={styles.cartTableBtn}>
                    {" "}
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => {
                          handleDecrease(_id, 1)
                        }}
                        className={styles.decreaseButton}
                      >
                        -
                      </button>
                      <span>{myCart.length > 0 ? myCart[0]["count"] : 0}</span>
                      <button
                        onClick={() => {
                          handleIncrease(_id, 1)
                        }}
                        className={styles.increaseButton}
                      >
                        +
                      </button>
                    </div>
                  </div>)
                }
                <NavLink to={`/product/${_id}`}>
                  <button className={styles.more}>More Info</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
