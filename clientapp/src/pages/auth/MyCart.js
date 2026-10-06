import React, { useState, useEffect } from "react";
import styles from ".././css/LoginRegister.module.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { loginformSchema } from "../../schemas/account/index";
import { Helmet } from "react-helmet-async";

export default function MyCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginformSchema),
  });

  const handleLogin = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    dispatch(loginUser({ loginData: data, navigate }));
  };

  // ////////////////////////////////////
  const [webLoading, setwebLoading] = useState(true);
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setwebLoading(false);
    }, 500);

    return () => clearTimeout(timeout2);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>
      {!webLoading ? (
        <div className={styles.loginRegisterPage}>
          <section className={styles.loginRegisterSection}>
            <div className={styles.loginheading}>
              <h1>Welcome</h1>
              <p>Please sign in to your account using the form below.</p>
            </div>
            <div className={styles.loginformContainer}>
              <section className={styles.loginRegistration}>
                <h2>Login</h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>Sub Total</span>
                  <span>Tax</span>
                </div>
              </section>
              <div className={styles.formFooter}>
                <p>Total Amount</p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <LoadingWeb />
      )}
    </>
  );
}
