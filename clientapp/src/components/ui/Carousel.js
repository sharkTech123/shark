import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/1200px-Lplate.svg.png";
import redStarImg from "../../assets/images/redStar.png";
import blueStarImg from "../../assets/images/blueStarImg.png";
import yellowStarImg from "../../assets/images/yellowStar.png";
import greenStarImg from "../../assets/images/greenStar.png";
import goldStarImg from "../../assets/images/goldstar.png";
import redCartImg from "../../assets/images/redCartImg.png";
import yellowCartImg from "../../assets/images/yellowCartImg.png";
import pinkCartImg from "../../assets/images/pinkCartImg.png";
import greenCartImg from "../../assets/images/greenCartImg.png";
import cartbanner from "../../assets/images/bannerCart.png";
import defaultCartImg from "../../assets/images/bannerCart.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";

function Corousel() {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({});
  const [expandedCategory, setExpandedCategory] = useState("");

  const data = useSelector((state) => state.product.productsCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    const offersManualCategory = data.find((item) => item._id === "manual");
    if (offersManualCategory) {
      setExpandedCategory(offersManualCategory._id);
    }
  }, [data]);

  const handleExpandCategory = (id) => {
    if (expandedCategory === id) {
      setExpandedCategory("");
    } else {
      setExpandedCategory(id);
    }
  };

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const addToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  const filteredData = (categoryName) => {
    return data.filter((item) => item._id === categoryName);
  };

  // Function to return the correct star image array based on category
  const getStarImagesForCategory = (categoryName) => {
    switch (categoryName) {
      case "manual":
        return [redStarImg, redStarImg, redStarImg, redStarImg, redStarImg];
      case "automatic":
        return [
          blueStarImg,
          blueStarImg,
          blueStarImg,
          blueStarImg,
          blueStarImg,
        ];
      case "theory support":
        return [
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
          yellowStarImg,
        ];
      case "intensive":
        return [
          greenStarImg,
          greenStarImg,
          greenStarImg,
          greenStarImg,
          greenStarImg,
        ];
      default:
        return [
          goldStarImg,
          goldStarImg,
          goldStarImg,
          goldStarImg,
          goldStarImg,
        ];
    }
  };

  // Function to return the correct cart image based on category
  const getCartImageForCategory = (categoryName) => {
    switch (categoryName) {
      case "manual":
        return redCartImg;
      case "automatic":
        return pinkCartImg;
      case "theory Support":
        return yellowCartImg;
      case "intensive":
        return greenCartImg;
      default:
        return defaultCartImg;
    }
  };

  // Function to return the corresponding color for each category heading and buttons
  const getHeadingAndButtonColorForCategory = (categoryName) => {
    switch (categoryName) {
      case "manual":
        return "red";
      case "automatic":
        return "#00a1f1";
      case "theory Support":
        return "#FFD700";
      case "intensive":
        return "green";
      default:
        return "gold";
    }
  };

  return (
    <>
      <section
        className={styles.carouselContainer}
        style={{ maxWidth: "1300px", margin: "0px auto" }}>
        <div className={styles.carousel} style={{ justifyContent: "center" }}>
          {["manual", "automatic", "theory Support", "intensive"].map(
            (categoryName) =>
              filteredData(categoryName).map((item) => (
                <div
                  key={item.id}
                  className={`${styles.carouselColumn} ${
                    expandedCategory === item._id ? styles.expanded : ""
                  }`}
                  onClick={() => handleExpandCategory(item._id)}>
                  <div className={styles.carouselColumnHeading}>
                    <img
                      id={styles.CorouselImgBanner}
                      src={LplateImg}
                      alt="Category Image"
                    />
                    <div className={styles.CorouselhaddingBanner}>
                      <h2
                        style={{
                          color:
                            getHeadingAndButtonColorForCategory(categoryName),
                        }}>
                        {item._id === "theory support"
                          ? expandedCategory === item._id
                            ? "theory support".toUpperCase()
                            : "theory".toUpperCase()
                          : item._id.toUpperCase()}
                      </h2>
                      {expandedCategory === item._id && (
                        <Link to="/cart">
                          <span>
                            <img
                              id={styles.CorouselImgcart}
                              src={cartbanner} // Dynamic cart image
                              alt="cartImg"
                            />
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                  {expandedCategory === item._id ? (
                    <ul type="none">
                      {item.data.map((info, index) => (
                        <div key={index}>
                          <li className={styles.expandedColData}>
                            <span
                              style={{
                                color: "white",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "space-between",
                                maxWidth: "235px",
                                width: "100%",
                                borderRadius: "40px 0px 0px 40px",
                                padding: "8px",
                              }}>
                              <p style={{ marginBottom: "0px" }}>{info.name}</p>
                              <p style={{ marginBottom: "0px", width: "43px" }}>
                                £ {info.price}
                              </p>
                            </span>
                            <div className={styles.btnGroup}>
                              {myCart.length === 0 ||
                              !myCart.find(
                                (cartItem) =>
                                  cartItem.id ===
                                  `${info._id}_${index}_${info.price}`
                              ) ? (
                                <button
                                  className={styles.bookNow}
                                  style={{
                                    backgroundColor:
                                      getHeadingAndButtonColorForCategory(
                                        categoryName
                                      ),
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(info, index);
                                  }}>
                                  Book
                                </button>
                              ) : (
                                <div id={styles.cartTableBtn}>
                                  <div className={styles.quantityControl}>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDecrease(
                                          `${info._id}_${index}_${info.price}`,
                                          1
                                        );
                                      }}
                                      className={styles.decreaseButton}>
                                      -
                                    </button>
                                    <span>
                                      {myCart.find(
                                        (cartItem) =>
                                          cartItem.id ===
                                          `${info._id}_${index}_${info.price}`
                                      )?.count || 0}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIncrease(
                                          `${info._id}_${index}_${info.price}`,
                                          1
                                        );
                                      }}
                                      className={styles.increaseButton}>
                                      +
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </li>
                        </div>
                      ))}
                    </ul>
                  ) : (
                    <div
                      className={`${styles.carouselStarImgContainer} ${
                        expandedCategory === item._id ? styles.compress : ""
                      }`}>
                      {getStarImagesForCategory(categoryName).map(
                        (star, idx) => (
                          <img key={idx} src={star} alt={`starImg${idx}`} />
                        )
                      )}
                    </div>
                  )}
                </div>
              ))
          )}
        </div>
      </section>
    </>
  );
}

export default Corousel;
