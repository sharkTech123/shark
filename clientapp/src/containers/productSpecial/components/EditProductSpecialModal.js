import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { productSchema } from "../../../schemas/product/index";
import { createProductSuccess, editProduct } from "../../../redux/features/productSpecialSlice";
import ReactSelect from "react-select";
import { productSpecialSchema } from '../../../schemas/productSpecial';

function EditProductSpecialModal(props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const oneproduct = useSelector((state) => state.productSpecial.oneproduct);
  const { categoriesList } = useSelector((state) => { return state.category })
  const { postcodesList } = useSelector((state) => { return state.postcode })
  const { areasList } = useSelector((state) => {
    return state.area
  });
  const [formData, setFormData] = useState({
    name: oneproduct ? oneproduct.name : "",
    Category: oneproduct ? oneproduct.Category : "",
    price: oneproduct ? oneproduct.price : "",
    rating: oneproduct ? oneproduct.rating : "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(productSpecialSchema),
  });

  const onSubmit = async (data) => {
    const newformData = new FormData();
    newformData.append("name", formData?.name);
    newformData.append("price", formData?.price);
    newformData.append("Category", formData?.Category);
    newformData.append("rating", formData?.rating);
    dispatch(
      editProduct(oneproduct._id,newformData, reset, props.toggleEditProductModal,props.state)
    );
  };

  useEffect(() => {
    if (oneproduct) {
      setFormData({
        name: oneproduct ? oneproduct.name : "",
        price: oneproduct ? oneproduct.price : "",
        Category: oneproduct ? oneproduct.Category : "",
        rating: oneproduct ? oneproduct.rating : "",
      });

      reset({
        name: oneproduct ? oneproduct.name : "",
        price: oneproduct ? oneproduct.price : "",
        Category: oneproduct ? oneproduct.Category : "",
        rating: oneproduct ? oneproduct.rating : "",
      })
    }
  }, [oneproduct]);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };



  return (
    <>
      <Modal
        isOpen={props.showEditProductModalOpen}
        toggle={() => props.toggleEditProductModal()}
      >
        <ModalHeader toggle={() => props.toggleEditProductModal()}>
          Edit Product
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
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    name="price"

                    value={formData.price}
                    onChange={handleInputChange}
                    autoComplete="false"
                    placeholder="$"
                  />
                )}
                defaultValue={""}
              />
              {errors?.price?.message ? (
                <p style={{ color: "red" }}>{errors?.price?.message}</p>
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
                    name="Category"
                    {...field}
                    value={formData.Category}
                    onChange={handleInputChange}
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

              {errors?.Category?.message ? (
                <p style={{ color: "red" }}>{errors?.Category?.message}</p>
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
                    name="rating"
                    className={`form-control  ${errors?.name ? "error-input" : ""
                      }`}
                    type="number"
                    value={formData.rating}
                    onChange={handleInputChange}
                    autoComplete="false"
                  />
                )}
                defaultValue={""}
              />
              {errors?.rating?.message ? (
                <p style={{ color: "red" }}>{errors?.rating?.message}</p>
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

export default EditProductSpecialModal