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
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FaHome } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet-async";

export default function TheoryLogin() {
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
    formData.append("usernameOremail", data.usernameOremail);
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
        <title>Login/Register</title>
      </Helmet>
      {!loading ? (
        <div className={styles.loginRegisterPage}>
          <div className="opicity"></div>
          <section className={styles.loginRegisterSection}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Link to="/">
                {" "}
                <img
                  src={smartlearnerLogo}
                  alt="logo"
                  style={{ maxWidth: "400px" }}
                />
              </Link>
            </div>
            {/* <div className={styles.buttonsGrid}>
              <Link to="/ADI-Training-Portal">
                <button>
                  PDI Portal{" "}
                  <MdKeyboardDoubleArrowRight className={styles.gradientIcon} />
                </button>
              </Link>
              <Link to="/">
                {" "}
                <button>
                  <FaHome className={styles.gradientIcon} />
                </button>
              </Link>
              <Link to="/Theory-Portal">
                {" "}
                <button>
                  Theory Portal{" "}
                  <MdKeyboardDoubleArrowRight className={styles.gradientIcon} />
                </button>
              </Link>
            </div> */}

            <div className={styles.ImageDisplayFlex}>
              <div className={styles.loginformContainer}>
                <section className={styles.loginRegistration}>
                  <div className={styles.loginLogo}>
                    <iframe
                      style={{ height: "150px" }}
                      src="https://lottie.host/embed/804d6f1b-6e4a-47cd-aedb-37d125ce5e3d/pyEvumb4lL.lottie"></iframe>
                  </div>

                  <h2>Sign in</h2>
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <Controller
                      name="usernameOremail"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <>
                          <em className={styles.casesensetive}>
                            Case Sensetive
                          </em>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Email or username">
                            <Form.Control
                              type="text"
                              value={value}
                              onChange={onChange}
                              placeholder="Email or username"
                              className={styles.formControlWithIcon}
                            />
                          </FloatingLabel>
                        </>
                      )}
                      defaultValue={""}
                    />
                    {errors?.email && (
                      <p style={{ color: "red" }}>{errors?.email?.message}</p>
                    )}
                    <div className={styles.forgotRow}>
                                                                <Link to="/forgot-password">
                                                                  Forgot Password?
                                                                </Link>
                                                              </div>
                    
                    <div id={styles.level}>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className={styles.formControlWithIcon}>
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              value={value}
                              onChange={onChange}
                              placeholder="Password"
                            />
                            {showPassword ? (
                              <FaEyeSlash
                                className={styles.loginFormsIcons}
                                onClick={() => setShowPassword(false)}
                              />
                            ) : (
                              <FaEye
                                className={styles.loginFormsIcons}
                                onClick={() => setShowPassword(true)}
                              />
                            )}
                          </FloatingLabel>
                        )}
                        defaultValue={""}
                      />
                    </div>
                    {errors?.password && (
                      <p style={{ color: "red" }}>
                        {errors?.password?.message}
                      </p>
                    )}
                    <br />{" "}
                    <div className={styles.formPrivacyPolicies}>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        name="signInChecked"
                      />
                      <p>Remember Me</p>
                    </div>{" "}
                    <div className={styles.loginFormBtn}>
                      <button type="submit">Login</button>
                    </div>
                  </form>
                  {/* <div className={styles.formFooter}>
                    <p>
                      Don't have an account?{" "}
                      <button>
                        {" "}
                        <Link to="/register">Register</Link>
                      </button>
                    </p>
                  </div> */}
                </section>
              </div>
               <section className={styles.loginDisplayflexImage}>
                                            <h2><span>Welcome</span> Back<br></br> TO <br/> PDI <span>Portal</span></h2>
                                             <p style={{color:"white",margin:'0.5rem 0rem'}}>You have to buy packages to visit <span style={{fontWeight:'bold'}}> Theory </span>pages</p>
                                                              <Link style={{textDecoration:"none", color:'burlywood', fontWeight:'bold'}} to="/lifetime-theory-portal">
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