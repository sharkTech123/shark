import React, { useState } from "react";
import styles from "../../pages/shop/cart/Cart.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  getDecreaseCart,
  getIncreaseCart,
  emptyCart,
} from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import SellProductForm from "./SellProductForm";

export default function SellProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.auth.userDetails);

  const [extraCharges, setExtraCharges] = useState(0);

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
    <div>
      <SellProductForm />
      <div>
        <div className={styles.cartContainer}>
          <div className={styles.cartContentContainer}>
            <div className={styles.cartItemsContainer}>
              {Array.isArray(myCart) && myCart.length === 0 ? (
                <div className={styles.emptyCartMessage}>
                  Your cart is empty
                </div>
              ) : (
                <table className={styles.cartTable}>
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
                        <td>
                          <button
                            className={styles.quantityButton}
                            onClick={() => handleDecrease(item.id, 1)}>
                            -
                          </button>
                          <span id={styles.countssss}>{item.count}</span>
                          <button
                            className={styles.quantityButton}
                            onClick={() => handleIncrease(item.id, 1)}>
                            +
                          </button>
                        </td>
                        <td>£{(item.price * item.count).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
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
                  </div>
                </div>
                <div className={styles.basketHeadingTitle}></div>
              </div>
              <div className={styles.btnBasketbtnws}>
                <button
                  className={styles.basketbtnProceed}
                  disabled={myCart.length === 0}
                  onClick={() => navigate("/admin/adminCheckout")}>
                  PROCEED TO CHECKOUT
                  {myCart.length === 0 && (
                    <span className={styles.emptyCartTooltip}>
                      Add items to proceed to checkout.
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
