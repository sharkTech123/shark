import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { productSchema } from "../../../schemas/product/index";
import { createProduct, createProductSuccess } from "../../../redux/features/productSpecialSlice";
import ReactSelect from "react-select";

function  AddProductSpecialModal(props) {
  const dispatch = useDispatch();
  const [image,setImage] = useState();

  const { areasList } = useSelector((state) => {
    return state.area
  });
  const { categoriesList } = useSelector((state) => { return state.category })
  const { postcodesList } = useSelector((state) => { return state.postcode})




  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    
  });

  const onSubmit = async (data) => {


    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("Category", data?.Category)
    formData.append("price", data?.price)
    formData.append("rating", data?.rating);
    // dispatch(
    //   createProductSuccess(formData, reset, props.toggleAddProductModal)
    // );

    
    dispatch(createProduct(formData, reset, props.toggleAddProductModal,props.state));
  };





  return (
    <>
      <Modal
        isOpen={props.showAddProductModalOpen}
        toggle={() => props.toggleAddProductModal()}
      >
        <ModalHeader toggle={() => props.toggleAddProductModal()}>
          Create Product
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Product Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Price</label>
              <Controller
                name="price"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="number"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                    placeholder="$"
                  />
                )}
                defaultValue={""}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Category Type</label>
              <Controller
                name="Category"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-control ${errors.roleName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    <option value="AUTOMATIC">AUTOMATIC</option>
                    <option value="MANUAL">MANUAL</option>
                    <option value="THEORY">THEORY</option>
                    <option value="Intensive">Intensive</option>
                  </select>
                )}
                defaultValue=""
              />

              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Rating</label>
              <Controller
                name="rating"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="number"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
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
    </>
  );
}

export default AddProductSpecialModal;
