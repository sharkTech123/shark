// EnquiryForm.jsx
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { enquiryData } from "../../redux/features/enquirySlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquiryFormSchema } from "../../schemas/master";
import styles from "../../pages/SpecialityTraining/ExtendedTest.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function EnquiryForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(enquiryFormSchema),
  });

  // Handle form submission
  const handleEnquiryForm = async (data) => {
    // Append formType to the data object
    data.formType = "EnquiryForm";

    // Dispatch enquiry data to Redux
    dispatch(enquiryData({ requestData: data, reset }));
  };

  return (
    <div>
      <section className={styles.formContainer}>
        <hr />
        <section className={styles.innerFormSection}>
          <div className={styles.enquiryForm}>
            <div className="callBackform-Header">
              {" "}
              <h4>Enquiry Form</h4>
              <iframe
                src="https://lottie.host/embed/2372fd6d-cd24-49b1-8410-2dfa64f543b9/Io6mg1rHz4.lottie"
                width="100"
                height="100"></iframe>
            </div>

            <form onSubmit={handleSubmit(handleEnquiryForm)}>
              <div className={styles.formGroup}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Enter Full Name">
                      <Form.Control
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Enter Full Name"
                      />
                    </FloatingLabel>
                  )}
                  defaultValue={""}
                />
                {errors?.name && (
                  <p style={{ color: "red" }}>{errors?.name?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email Address">
                      <Form.Control
                        id="email"
                        type="email"
                        value={value}
                        onChange={onChange}
                        placeholder="Email Address"
                      />
                    </FloatingLabel>
                  )}
                  defaultValue={""}
                />
                {errors?.email && (
                  <p style={{ color: "red" }}>{errors?.email?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
               

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Mobile Number">
                      <Form.Control
                        id="contactNumber"
                        type="tel"
                        value={value}
                        onChange={onChange}
                        placeholder="Mobile Number"
                      />
                    </FloatingLabel>
                  )}
                  defaultValue={""}
                />
                {errors?.phoneNumber && (
                  <p style={{ color: "red" }}>{errors?.phoneNumber?.message}</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FloatingLabel controlId="floatingInput" label="Message">
                      <Form.Control
                        as="textarea"
                        value={value}
                        onChange={onChange}
                        placeholder="Message"
                        style={{ height: "100px" }}
                        required
                      />
                    </FloatingLabel>
                  )}
                  defaultValue={""}
                />
                {errors?.message && (
                  <p style={{ color: "red" }}>{errors?.message?.message}</p>
                )}
              </div>

              <div className={styles.formBtn}>
                <button type="submit" id={styles.formBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
