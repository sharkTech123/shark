import React, { useState, useEffect, useRef } from "react";
import styles from ".././css/LoginRegister.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "../../redux/features/authSlice";
import LoadingWeb from "../../components/loader/LoadingWeb";
import { forgotPassword } from "../../schemas/account/index";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [webLoading, setwebLoading] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPassword),
    defaultValues: {
      email: "",
    },
  });

  const handleForgotPassword = async (data) => {
    console.log("Form submitted with data:", data);
    dispatch(resetPassword(data.email, navigate));
  };

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
        <title>ForgotPassword</title>
      </Helmet>
      {!webLoading ? (
        <div className={styles.loginRegisterPage}>
          <div className="opicity"></div>
          <section className={styles.loginRegisterSection}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Link to="/">
                {" "}
                <img
                  src={smartlearnerLogo}
                  alt="logo"
                  style={{ maxWidth: "300px" }}
                />
              </Link>
            </div>

            <div className={styles.ImageDisplayFlex}>
              <div className={styles.loginformContainer}>
                <section className={styles.loginRegistration}>
                  

                  <h2>Forgot</h2>
                  <form onSubmit={handleSubmit(handleForgotPassword)}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address">
                          <Form.Control
                            type="email"
                            value={value}
                            onChange={(e) =>
                              onChange(e.target.value.toLowerCase())
                            }
                            placeholder="Email Address"
                            className={styles.formControlWithIcon}
                          />
                        </FloatingLabel>
                      )}
                    />

                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                    <br />
                    <div className={styles.loginFormBtn}>
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                  <div className={styles.formFooter}>
                    <p>
                      <button>
                        <Link to="/login">Back to Login</Link>
                      </button>
                    </p>
                  </div>
                </section>
              </div>
              <section className={styles.loginDisplayflexImage}>
                
                
                                <h2><span>Forgot</span> Your <span>Password</span></h2>
                            
                  <p style={{color:"white",margin:'0.5rem 0rem'}}>You have to buy packages to visit <span style={{fontWeight:'bold'}}> PDI </span>pages</p>
                  <Link style={{textDecoration:"none", color:'burlywood', fontWeight:'bold'}} to="/driving-instructor-packages/instructor-packages">
                    Visit Now
                  </Link>
                
              </section>
            </div>
          </section>
        </div>
      ) : (
        <LoadingWeb />
      )}
    </>
  );
}