import {
  FaBuilding,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaUser,
  FaMapMarkerAlt,
  FaHashtag,
  FaEnvelope,
  FaCar,
  FaUserTie,
  FaCommentDots,
  FaChevronDown,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import styles from "./css/ContactUs.module.css"; // Import CSS module
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "../schemas/master";
import { enquiryData } from "../redux/features/enquirySlice";
import { Helmet } from "react-helmet-async";

export default function ContactUs() {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const handleContactUsForm = async (data) => {
    data.formType = "contactUsForm";

    dispatch(enquiryData({ requestData: data, reset }));
  };

  return (
    <div className={styles.ContactUsPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Get in Touch with Us</title>
        <link rel="canonical" href="https://smartlearner.com/Contact-Us" />
        <meta property="og:title" content="Get in Touch with Us" />
        <meta property="og:url" content="https://smartlearner.com/Contact-Us" />
        <meta property="og:description" content="Get in Touch with Us" />
      </Helmet>

      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={`${styles.eyebrow} ${styles.rise}`}>
            <FaCommentDots />
            Get in touch
          </span>

          <h1 className={`${styles.heroHeading} ${styles.rise} ${styles.riseD1}`}>
            Let&apos;s get you on the road
          </h1>

          <p className={`${styles.heroSubtext} ${styles.rise} ${styles.riseD2}`}>
            Questions about lessons, pass packages or an intensive course?
            Send our Coventry team a message and an instructor will be in
            touch within one working day.
          </p>

          <div className={`${styles.quickActions} ${styles.rise} ${styles.riseD3}`}>
            <a href="tel:+4402475092784" className={`${styles.quickActionBtn} ${styles.quickActionPrimary}`}>
              <FaPhoneAlt />
              +44 02475092784
            </a>
            <a href="mailto:admin@smartlearner.com" className={styles.quickActionBtn}>
              <IoMdMail />
              admin@smartlearner.com
            </a>
          </div>

          <div className={`${styles.trustRow} ${styles.rise} ${styles.riseD4}`}>
            <span className={styles.trustItem}>
              <FaCheckCircle />
              DVSA-approved instructors
            </span>
            <span className={styles.trustItem}>
              <FaCheckCircle />
              Manual &amp; automatic
            </span>
            <span className={styles.trustItem}>
              <FaCheckCircle />
              Flexible scheduling
            </span>
          </div>
        </div>
      </section>

      

      {/* ============ FORM ============ */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <div className={styles.formHeader}>
            <span className={styles.eyebrow}>
              <FaPaperPlane />
              Send a message
            </span>
            <h2 className={styles.formHeading}>Tell us about your lessons</h2>
            <p className={styles.formSubtext}>
              Fill in your details below and one of our instructors will get
              back to you to find a time that works.
            </p>
          </div>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit(handleContactUsForm)}>
              <div className={styles.formColumns}>
                <div className={styles.formColumn}>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="firstName" className={styles.srOnly}>
                      First Name
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaUser />
                    </span>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="firstName"
                          value={value}
                          onChange={onChange}
                          type="text"
                          placeholder="First Name"
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.firstName && (
                      <p className={styles.errorText}>{errors?.firstName?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="address" className={styles.srOnly}>
                      Address
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaMapMarkerAlt />
                    </span>
                    <Controller
                      name="address"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="address"
                          value={value}
                          onChange={onChange}
                          type="text"
                          placeholder="Address"
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.address && (
                      <p className={styles.errorText}>{errors?.address?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="phoneNumber" className={styles.srOnly}>
                      Mobile Number
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaPhoneAlt />
                    </span>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="phoneNumber"
                          value={value}
                          onChange={onChange}
                          type="text"
                          placeholder="Mobile No."
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.phoneNumber && (
                      <p className={styles.errorText}>{errors?.phoneNumber?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="tutionType" className={styles.srOnly}>
                      Tuition Type
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaCar />
                    </span>
                    <Controller
                      name="tutionType"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select
                          id="tutionType"
                          value={value}
                          onChange={onChange}
                          className={styles.homeForminputField}
                          required>
                          <option disabled value="">
                            --Select Tution Type--
                          </option>
                          <option value="Auto">Auto</option>
                          <option value="Manual">Manual</option>
                        </select>
                      )}
                      defaultValue=""
                    />
                    <span className={styles.selectChevron}>
                      <FaChevronDown />
                    </span>
                    {errors?.tutionType && (
                      <p className={styles.errorText}>{errors?.tutionType?.message}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formColumn}>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="lastName" className={styles.srOnly}>
                      Last Name
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaUser />
                    </span>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="lastName"
                          value={value}
                          onChange={onChange}
                          type="text"
                          placeholder="Last Name"
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.lastName && (
                      <p className={styles.errorText}>{errors?.lastName?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="postcode" className={styles.srOnly}>
                      Postal Code
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaHashtag />
                    </span>
                    <Controller
                      name="postcode"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="postcode"
                          value={value}
                          onChange={onChange}
                          type="text"
                          placeholder="Postal Code"
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.postcode && (
                      <p className={styles.errorText}>{errors?.postcode?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="email" className={styles.srOnly}>
                      Email Address
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaEnvelope />
                    </span>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          id="email"
                          value={value}
                          onChange={onChange}
                          type="email"
                          placeholder="Email Address"
                          className={styles.homeForminputField}
                          required
                        />
                      )}
                      defaultValue=""
                    />
                    {errors?.email && (
                      <p className={styles.errorText}>{errors?.email?.message}</p>
                    )}
                  </div>

                  <div className={styles.fieldWrap}>
                    <label htmlFor="instructorType" className={styles.srOnly}>
                      Instructor Preference
                    </label>
                    <span className={styles.fieldIcon}>
                      <FaUserTie />
                    </span>
                    <Controller
                      name="instructorType"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select
                          id="instructorType"
                          value={value}
                          onChange={onChange}
                          className={styles.homeForminputField}
                          required>
                          <option disabled value="">
                            --Select Instruction Type--
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="No preference">No Preference</option>
                        </select>
                      )}
                      defaultValue=""
                    />
                    <span className={styles.selectChevron}>
                      <FaChevronDown />
                    </span>
                    {errors?.instructorType && (
                      <p className={styles.errorText}>
                        {errors?.instructorType?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className={`${styles.fieldWrap} ${styles.messageWrap}`}>
                <label htmlFor="message" className={styles.srOnly}>
                  Special Instructions
                </label>
                <span className={styles.fieldIcon}>
                  <FaCommentDots />
                </span>
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <textarea
                      id="message"
                      value={value}
                      onChange={onChange}
                      placeholder="Any Special Instructions"
                      className={styles.homeForminputField}
                      required
                    />
                  )}
                  defaultValue=""
                />
                {errors?.message && (
                  <p className={styles.errorText}>{errors?.message?.message}</p>
                )}
              </div>

              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitButton}>
                  <FaPaperPlane />
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============ INFO + MAP ============ */}
      <section className={styles.infoSection}>
        <div className={styles.infoInner}>
          <div className={styles.infoCard}>
            <h2 className={styles.infoCardHeading}>Visit or write to us</h2>

            <div className={styles.infoRow}>
              <span className={styles.infoIconWrap}>
                <FaBuilding />
              </span>
              <div>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoValue}>
                  SmartLearner Driving School
                  <br />
                  4 Wheelwright Buildings, Hen Lane, Coventry, CV6 4LB, England
                </p>
              </div>
            </div>

            <hr className={styles.infoDivider} />

            <div className={styles.infoRow}>
              <span className={styles.infoIconWrap}>
                <IoMdMail />
              </span>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>
                  <a href="mailto:admin@smartlearner.com">admin@smartlearner.com</a>
                </p>
              </div>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoIconWrap}>
                <FaPhoneAlt />
              </span>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <p className={styles.infoValue}>
                  <a href="tel:+4402475092784">+44 02475092784</a>
                </p>
              </div>
            </div>

            <hr className={styles.infoDivider} />

            <div className={styles.socialRow}>
              <a
                href="https://www.facebook.com/smartlearnerdrivingschool"
                className={styles.socialBtn}
                aria-label="SmartLearner on Facebook">
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/smartlearnerdrivingschool"
                className={styles.socialBtn}
                aria-label="SmartLearner on Instagram">
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/smartlearner"
                className={styles.socialBtn}
                aria-label="SmartLearner on X">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2431.76492499033!2d-1.510095!3d52.447173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c1a41cee7455%3A0x371db3a56741de7!2sSmartLearner%20Driving%20School!5e0!3m2!1sen!2sin!4v1719565626829!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}