import React from "react";
import styles from "./Cart.module.css";
import cartIcon from "../../../assets/images/cartIcon1.png";
import carImg from "../../../assets/images/car-red.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getDecreaseCart,
  getIncreaseCart,
  emptyCart,
} from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import paypalLogo from "../../../assets/images/paypalLogos.png";
import stripLogo from "../../../assets/images/RevolutLogo.png";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);

  const myCart = useSelector((state) => state.cart.cart) || [];

  const handleIncrease = (id, qty) => {
    dispatch(getIncreaseCart(id, qty));
  };

  const handleDecrease = (id, qty) => {
    dispatch(getDecreaseCart(id, qty));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const calculateSubtotal = () => {
    return myCart.length > 0
      ? myCart.reduce((acc, item) => acc + item.price * item.count, 0)
      : 0;
  };

  const subtotal = calculateSubtotal();
  const serviceCharge = subtotal * 0.025;
  const total = subtotal + serviceCharge;

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <div className={styles.cartheading}>
          <h2>My Cart</h2>
          <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
        </div>
        <div className="d-flex  mb-4" id={styles.carImg}>
          <img src={carImg} alt="car image" className={styles.cartIconCarImg} />
        </div>
        <button
          className={styles.basketbtnProceed2}
          onClick={() => navigate(-1)}
        >
          Continue Shopping
        </button>
        <div className={styles.cartContentContainer}>
          <div className={styles.cartItemsContainer}>
            {Array.isArray(myCart) && myCart.length === 0 ? (
              <div className={styles.emptyCartMessage}>Your cart is empty</div>
            ) : (
              <table className={styles.cartTable}>
                {" "}
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {myCart.map((item) => (
                    <tr key={item.id} className={styles.cartRow}>
                      <td>{item.service}</td>
                      <td>£{item.price}</td>
                      <td id={styles.questityCartBtn}>
                        <button
                          className={styles.quantityButton}
                          onClick={() => handleDecrease(item.id, 1)}
                        >
                          -
                        </button>
                        <span id={styles.countssss}>{item.count}</span>
                        <button
                          className={styles.quantityButton}
                          onClick={() => handleIncrease(item.id, 1)}
                        >
                          +
                        </button>
                      </td>
                      <td>£{(item.price * item.count).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <ol
              type="number"
              style={{
                color: "white",
                paddingLeft: "0rem",
                maxWidth: "800px",
                margin: "0px auto",
              }}
            >
              {" "}
              <p>
                One time discount offer and cannot be purchased with another
                discount offer
              </p>
              <li>
                The Beginners Package is non-refundable and only instructor
                transferable.
              </li>
              <li>
                All lessons require 24 hours' notice to be cancelled or
                rearranged at any time; failing to do this will result in you
                being liable to pay for 100% of the lesson fee.
              </li>
              <li>
                No reimbursement or extension of lesson use is applicable if six
                months have elapsed since your last lesson.
              </li>
              <li>
                We have the right to refuse the use of any vehicle for lessons
                or test dates at any time.
              </li>
              <li>
                For the full Terms & Conditions, please{" "}
                <a href="https://smartlearner.com/term-and-condition">
                  Click here
                </a>{" "}
              </li>
            </ol>
          </div>
          <div className={styles.cartBtnsContainer}>
            <div>
              <div className={styles.basketHeadingTitles}>
                <h2>BASKET TOTAL</h2>
                <div className={styles.basketHeadingTitle}>
                  <p>
                    <span>Subtotal:</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </p>
                  <p>
                    <span> Booking fee:</span>{" "}
                    <span>£{serviceCharge.toFixed(2)}</span>
                  </p>
                  <p>
                    <span>Total:</span> <span>£{total.toFixed(2)}</span>
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={paypalLogo} alt="paypal" />
                    <img
                      src={stripLogo}
                      alt="stripe"
                      style={{ maxWidth: "80px" }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.basketHeadingTitle}></div>
            </div>
            <div className={styles.btnBasketbtnws}>
              <button
                className={styles.basketbtnProceed}
                disabled={myCart.length === 0}
                onClick={() => navigate("/checkout")}
              >
                {userDetails.username
                  ? "PROCEED TO CHECKOUT"
                  : "GUEST CHECKOUT"}

                {myCart.length === 0 && (
                  <span className={styles.emptyCartTooltip}>
                    Add items to proceed to checkout.
                  </span>
                )}
              </button>
              {!userDetails.username && (
                <p
                  className={styles.basketbtnProceed23}
                  onClick={() => navigate("/register")}
                >
                  LOGIN / REGISTER
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cartContainerFooter}>
        <p>
          "Click on proceed to checkout. You’ll be prompted to sign in or create
          an account if you don’t already have one. (If you’ve used a coupon
          code, you’ll be redirected to our training portal to begin
          practicing.)"
        </p>
      </div>
    </div>
  );
};

export default Cart;
