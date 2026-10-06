import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createPostcode } from "../../../redux/features/postcodeSlice";
import { postcodeSchema } from "../../../schemas/postcode/index";

function AddPostcodeModel(props) {
  const dispatch = useDispatch();


  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(postcodeSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("postcode", data.postcode);
    formData.append("city", data.city);
    formData.append("country", data.country);

    dispatch(
      createPostcode(data, reset, props.toggleAddPostcodeModal)
    );
  };

  

  return (
    <Modal
      isOpen={props.showAddPostcodeModal}
      toggle={props.toggleAddPostcodeModal}
    >
      <ModalHeader toggle={props.toggleAddPostcodeModal}>
        Create Postcode
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Postcode</label>
            <Controller
              name="postcode"
              control={control} 
              render={({ field: { value, onChange } }) => (
                <input 
                  className={`form-control ${
                    errors.postcode ? "error-input" : ""
                  }`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.postcode && (
              <p style={{ color: "red" }}>{errors.postcode}</p>
            )}
          </div>
          <div className="form-group">
            <label>City</label>
            <Controller
              name="city"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${errors.city ? "error-input" : ""}`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
          </div>
          <div className="form-group">
            <label>Country</label>
            <Controller
              name="country"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.country ? "error-input" : ""
                  }`}
                  type="text"
                  name="country"
                  value={value}
                  onChange={onChange}
                  autoComplete="false"
                />
              )}
              defaultValue=""
            />
            {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
          </div>
          <div className="form-group text-center mt-3">
            <button
              className="btn btn-primary account-btn btn-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}

export default AddPostcodeModel;
