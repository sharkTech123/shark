import React, { useEffect, useState } from "react";
import LplateImg from "../../assets/images/1200px-Lplate.svg.png";
import yellowStarImg from "../../assets/images/blueStarImg.png"; // Yellow star image
import cartImg from "../../assets/images/bannerCart.png";
import styles from "../../pages/css/home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import {
  fetchPlans,
  createPayment,
  createUserSubscription,
  checkTrialEligibility,
  pdiApplyCouponCode,
  fetchUserSubscriptions,
} from "../../redux/features/subscriptionSlice";
import { toast } from "react-hot-toast";
import { PayPalButtons } from "@paypal/react-paypal-js";

function TheoryCorousel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.auth);
  const userId = userDetails?._id; // Added optional chaining for safety
  const { plans, loading, error } = useSelector((state) => state.subscription);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserSubscriptions(userId));
    }
    dispatch(fetchPlans());
  }, [dispatch, userId]);

  const wordLimit = 15;
  const [isReadMore, setIsReadMore] = useState(false);
  const handleReadMoreToggle = (index) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific section's read more state
    }));
  };

  const [quantities, setQuantities] = useState({});
  const [expandedCategory, setExpandedCategory] = useState("");

  const data = useSelector((state) => state.product.productsCategory);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    const offersManualCategory = data.find(
      (item) => item._id === "theory support"
    );
    if (offersManualCategory) {
      // Set default expanded category
      setExpandedCategory(`${offersManualCategory._id}_below100`);
    }
  }, [data]);

  const handleExpand = (categoryId, productType) => {
    const categoryIdentifier = `${categoryId}_${productType}`;
    setExpandedCategory(
      expandedCategory === categoryIdentifier ? "" : categoryIdentifier
    );
  };
  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const addToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}_${info.name}`;
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

  // Map category names to star colors
  const starColorMap = {
    "theory support": {
      starImg: yellowStarImg, // Assuming this category has a yellow star
      color: "#0046c3", // Yellow color for text and button
    },
    // Add more categories if needed with respective star images and colors
  };

  const handleCreateSubscription = async (plan) => {
    try {
      const order = await dispatch(createPayment(plan._id)).unwrap();
      console.log("Order received from payment creation:", order);
      if (order && order.id) {
        return order.id;
      } else {
        throw new Error("Order ID not received");
      }
    } catch (error) {
      console.error("Error during subscription creation:", error);
      throw error;
    }
  };

  const handleApprovePayment = async (plan, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Order captured:", order);
      if (!order || !order.id) {
        console.error("No order ID received");
        return;
      }

      const subscriptionData = {
        userId: userId,
        subscriptionId: plan._id,
        orderId: order.id,
        isTrial: false,
      };

      await dispatch(createUserSubscription(subscriptionData)).unwrap();
      console.log("User subscription created successfully.");
      navigate("/Theory-Portal");
      toast.success("subscription added");
    } catch (error) {
      console.error("Error during order approval:", error);
    }
  };
  const paidPlans = plans.filter(
    (plan) => plan.planCategory === "theory-portal package"
  );
  return (
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {filteredData("theory support").map((item) => {
            const below10Products = item.data.filter(
              (product) => product.price <= 10
            );
            return (
              <div
                style={{
                  background: "linear-gradient(135deg, #0c0fbd, #e4f0ff)",
                }}
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === `${item._id}_below100`
                    ? styles.expanded
                    : ""
                }`}
                onClick={() => handleExpand(item._id, "below100")} // Pass category ID and product type
              >
                <div className={styles.carouselColumnHeading}>
                  <img
                    id={styles.CorouselImgBanner}
                    src={LplateImg}
                    alt="Category Image"
                  />
                  <div className={styles.CorouselhaddingBanner}>
                    <h2 style={{ color: "rgb(191 214 255)" }}>
                      {expandedCategory === `${item._id}_below100`
                        ? "THEORY SUPPORT"
                        : "THEORY"}
                    </h2>
                    {expandedCategory === `${item._id}_below100` && (
                      <Link to="/cart">
                        <span>
                          <img
                            id={styles.CorouselImgcart}
                            src={cartImg}
                            alt="cartImg"
                          />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                {expandedCategory === `${item._id}_below100` &&
                  below10Products.length > 0 && (
                    <ul type="none">
                      {below10Products.map((info, index) => (
                        <div key={index}>
                          <li
                            className={styles.expandedColData}
                            id={styles.theoryP}>
                            <span
                              style={{
                                color: "white",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "space-between",
                                maxWidth: "250px",
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
                                  `${info._id}_${index}_${info.price}_${info.name}`
                              ) ? (
                                <button
                                  className={styles.bookNow}
                                  style={{
                                    backgroundColor:
                                      starColorMap[item._id]?.color ||
                                      "#ff0000", // Dynamic button color
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
                                          `${info._id}_${index}_${info.price}_${info.name}`,
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
                                          `${info._id}_${index}_${info.price}_${info.name}`
                                      )?.count || 0}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIncrease(
                                          `${info._id}_${index}_${info.price}_${info.name}`,
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
                          <section
                            style={{ backgroundColor: "#052c76bc" }}
                            className={styles.corouselDescription}>
                            <p>
                              {isReadMore[index]
                                ? info.description // Show full content
                                : info.description
                                    .split(" ")
                                    .slice(0, wordLimit)
                                    .join(" ") + "..."}
                            </p>
                            {info.description.split(" ").length > wordLimit && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleReadMoreToggle(index);
                                }}>
                                {isReadMore[index] ? "Read Less" : "Read More"}
                              </button>
                            )}
                          </section>
                        </div>
                      ))}
                    </ul>
                  )}
                {expandedCategory !== `${item._id}_below100` && (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === `${item._id}_below100`
                        ? styles.compress
                        : ""
                    }`}>
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                  </div>
                )}
              </div>
            );
          })}
          {filteredData("theory support").map((item) => {
            const above10Products = item.data.filter(
              (product) => product.price > 10
            );
            return (
              <div
                style={{
                  background: "linear-gradient(135deg, #0c0fbd, #e4f0ff)",
                }}
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === `${item._id}_above100`
                    ? styles.expanded
                    : ""
                }`}
                onClick={() => handleExpand(item._id, "above100")} // Pass category ID and product type
              >
                <div className={styles.carouselColumnHeading}>
                  <img
                    id={styles.CorouselImgBanner}
                    src={LplateImg}
                    alt="Category Image"
                  />
                  <div className={styles.CorouselhaddingBanner}>
                    <h2 style={{ color: "rgb(191 214 255)" }}>
                      {expandedCategory === `${item._id}_above100`
                        ? "THEORY SUPPORT"
                        : "THEORY"}
                    </h2>
                    {expandedCategory === `${item._id}_above100` && (
                      <Link to="/cart">
                        <span>
                          <img
                            id={styles.CorouselImgcart}
                            src={cartImg}
                            alt="cartImg"
                          />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                {expandedCategory === `${item._id}_above100` &&
                  above10Products.length > 0 && (
                    <ul type="none">
                      {above10Products.map((info, index) => (
                        <div key={index}>
                          <li
                            className={styles.expandedColData}
                            id={styles.theoryP}>
                            <span
                              style={{
                                color: "white",
                                backgroundColor: "black",
                                display: "flex",
                                justifyContent: "space-between",
                                maxWidth: "250px",
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
                                  `${info._id}_${index}_${info.price}_${info.name}`
                              ) ? (
                                <button
                                  className={styles.bookNow}
                                  style={{
                                    backgroundColor:
                                      starColorMap[item._id]?.color ||
                                      "#ff0000", // Dynamic button color
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
                                          `${info._id}_${index}_${info.price}_${info.name}`,
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
                                          `${info._id}_${index}_${info.price}_${info.name}`
                                      )?.count || 0}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleIncrease(
                                          `${info._id}_${index}_${info.price}_${info.name}`,
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
                          <section
                            style={{ backgroundColor: "#052c76bc" }}
                            className={styles.corouselDescription}>
                            <p>
                              {isReadMore[index]
                                ? info.description // Show full content
                                : info.description
                                    .split(" ")
                                    .slice(0, wordLimit)
                                    .join(" ") + "..."}
                            </p>
                            {info.description.split(" ").length > wordLimit && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleReadMoreToggle(index);
                                }}>
                                {isReadMore[index] ? "Read Less" : "Read More"}
                              </button>
                            )}
                          </section>
                        </div>
                      ))}
                    </ul>
                  )}
                {expandedCategory !== `${item._id}_above100` && (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === `${item._id}_above100`
                        ? styles.compress
                        : ""
                    }`}>
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                  </div>
                )}
              </div>
            );
          })}

          {filteredData("theory support").map((item) => {
            return (
              <div
                style={{
                  background: "linear-gradient(135deg, #0c0fbd, #e4f0ff)",
                }}
                key={item.id}
                className={`${styles.carouselColumn} ${
                  expandedCategory === `${item._id}_above1000`
                    ? styles.expanded
                    : ""
                }`}
                onClick={() => handleExpand(item._id, "above1000")} // Pass category ID and product type
              >
                <div className={styles.carouselColumnHeading}>
                  <img
                    id={styles.CorouselImgBanner}
                    src={LplateImg}
                    alt="Category Image"
                  />
                  <div className={styles.CorouselhaddingBanner}>
                    <h2 style={{ color: "rgb(191 214 255)" }}>Theory</h2>
                  </div>
                </div>
                {expandedCategory === `${item._id}_above1000` ? (
                  <ul type="none">
                    {paidPlans.map((plan, index) => (
                      <div>
                        <li
                          className={styles.expandedColData}
                          id={styles.theoryP}>
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "black",
                              display: "flex",
                              justifyContent: "space-between",

                              width: "100%",
                              borderRadius: "40px 0px 0px 40px",
                              padding: "8px",
                            }}>
                            <p style={{ marginBottom: "0px" }}>Theory Portal</p>
                            <p style={{ marginBottom: "0px", width: "43px" }}>
                              £ {plan.price}
                            </p>
                          </span>
                          <button
                            className={styles.bookNow}
                            style={{ backgroundColor: "#0066ff" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/Theory-subscription");
                            }}>
                            Book
                          </button>
                        </li>

                        <section
                          style={{ backgroundColor: "#052c76bc" }}
                          className={styles.corouselDescription}>
                          <p>
                            {isReadMore["theoryportaldes1"]
                              ? "Need support on passing your theory test? We offer 1-2-1 in house, from the comfort of your house on Zoom, or if you want to touch up you driving skills, get ahead or have fun, we have a driving simulator in office!" // Show full content
                              : "Need support on passing your theory test? We offer 1-2-1 in house, from the comfort of your house on Zoom, or if you want to touch up you driving skills, get ahead or have fun, we have a driving simulator in office!"
                                  .split(" ")
                                  .slice(0, wordLimit)
                                  .join(" ") + "..."}
                          </p>
                          {"Need support on passing your theory test? We offer 1-2-1 in house, from the comfort of your house on Zoom, or if you want to touch up you driving skills, get ahead or have fun, we have a driving simulator in office!".split(
                            " "
                          ).length > wordLimit && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReadMoreToggle("theoryportaldes1");
                              }}>
                              {isReadMore["theoryportaldes1"]
                                ? "Read Less"
                                : "Read More"}
                            </button>
                          )}
                        </section>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <div
                    className={`${styles.carouselStarImgContainer} ${
                      expandedCategory === `${item._id}_above1000`
                        ? styles.compress
                        : ""
                    }`}>
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                    <img src={starColorMap[item._id]?.starImg} alt="starImg" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default TheoryCorousel;
