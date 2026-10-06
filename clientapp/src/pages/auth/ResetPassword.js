import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from ".././css/LoginRegister.module.css";
import { useDispatch } from "react-redux";
import { completePasswordReset } from "../../redux/features/authSlice";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import smartlearnerLogo from "../../assets/images/White-Logo-Fixed-1024x174.png";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";

const ResetPasswordPage = () => {
  const { resetToken } = useParams(); // Get the reset token from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  useEffect(() => {
    if (!resetToken) {
      navigate("/login"); // Redirect if token is not present
    }
  }, [resetToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await dispatch(
        completePasswordReset({ resetToken, newPassword: password, navigate })
      );
      if (response.success) {
        navigate("/"); // Redirect after successful password reset
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className={styles.loginRegisterPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ResetPassword</title>
      </Helmet>
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
              

              <h2>Reset Password</h2>
              <form onSubmit={handleSubmit}>
                <div id={styles.level}>
                  <FloatingLabel
                    controlId="floatingNewPassword"
                    label="New password"
                    className={styles.formControlWithIcon}>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="New Password"
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
                </div>

                <br />

                <div id={styles.level}>
                  <FloatingLabel
                    controlId="floatingConfirmPassword"
                    label="Confirm Password"
                    className={styles.formControlWithIcon}>
                    <Form.Control
                      type={confirmShowPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                    />
                    {confirmShowPassword ? (
                      <FaEyeSlash
                        onClick={() => setConfirmShowPassword(false)}
                        className={styles.loginFormsIcons}
                      />
                    ) : (
                      <FaEye
                        onClick={() => setConfirmShowPassword(true)}
                        className={styles.loginFormsIcons}
                      />
                    )}
                  </FloatingLabel>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <br />
                <div className={styles.loginFormBtn}>
                  <button type="submit" disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </div>
              </form>
            </section>
          </div>
          <section className={styles.loginDisplayflexImage}>
            <h2 ><span>Reset</span> Your <span>Password</span></h2>
           
               <p style={{color:"white",margin:'0.5rem 0rem'}}>You have to buy packages to visit <span style={{fontWeight:'bold'}}> PDI </span>pages</p>
                                <Link style={{textDecoration:"none", color:'burlywood', fontWeight:'bold'}} to="/driving-instructor-packages/instructor-packages">
                                  Visit Now
                                </Link>
            
          </section>
        </div>
      </section>
    </div>
  );
};

export default ResetPasswordPage;