import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { productSchema } from "../../../schemas/product/index";
import { createProduct } from "../../../redux/features/productSlice";
import ReactSelect from "react-select";

function AddProductModel(props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const { areasList } = useSelector((state) => {
    return state.area
  });
  const { categoriesList } = useSelector((state) => { return state.category })
  const { postcodesList } = useSelector((state) => { return state.postcode })




  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
   
  });


  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category)
    formData.append("description", data.description);
    formData.append("duration", data.duration);
    if (image) {
      formData.append("image", image); // Append the image to formData
    }
    formData.append("price", data.price);
    formData.append("transmission", data.transmission);
    formData.append("experience", data.experience);
    formData.append("postcode", data.postcode);
    formData.append("areaIncluded", data.areaIncluded);
    formData.append("rating", data.rating);
    
    dispatch(createProduct(formData, reset, props.toggleAddProductModal, props.state));
   console.log("data....xyxxxx..........",data)
    reset();
   
  };





  return (
    <>
      <Modal
       key={props.showAddProductModalOpen}
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
                defaultValue=""
              />
              {errors?.name?.message ? (
                <p style={{ color: "red" }}>{errors?.name?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Category</label>
              <Controller
                name="category"
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
                    {categoriesList.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
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
              <label>Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.description ? "error-input" : ""
                      }`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
                defaultValue=""
              />
              {errors?.description?.message ? (
                <p style={{ color: "red" }}>{errors?.description?.message}</p>
              ) : (
                ""
              )}
            </div>


            <div className="form-group">
              <label>Duration (in Weeks)</label>
              <Controller
                name="duration"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${errors?.duration ? "error-input" : ""
                      }`}
                    type="number"
                    value={value}
                    onChange={onChange}
                    autoComplete="false"
                  />
                )}
                defaultValue=""
              />
              {errors?.duration?.message ? (
                <p style={{ color: "red" }}>{errors?.duration?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Upload Image</label>
              <Controller
                name="image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${errors?.image ? "error-input" : ""
                      }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setImage(file[0])
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                  
                )}
               
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
                    placeholder="£"
                    step="0.01"
                  />
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
              <label>Transmissions</label>
              <Controller
                name="transmission"
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
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
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
              <label>Experience</label>
              <Controller
                name="experience"
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
                    <option value="Beginner">Beginner</option>
                    <option value="Experience">Experience</option>
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
              <label>Postcode</label>
              <Controller
                name="postcode"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <select
                    name="postcode"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${errors.roleName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {postcodesList.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.postcode}
                      </option>
                    ))}
                  </select>
                )}
                defaultValue=""
              />

              {errors?.postcode?.message ? (
                <p style={{ color: "red" }}>{errors?.postcode?.message}</p>
              ) : (
                ""
              )}
            </div>
           
            <div className="form-group">
              <label>AreaIncluded</label>
              <Controller
                name="areaIncluded"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <select
                    name="areaIncluded"
                    value={value}
                    onChange={onChange}
                    className={`form-control ${errors.areaName ? "error-input" : ""
                      }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {areasList.map((area) => (
                      <option key={area._id} value={area._id}>
                        {area.name}
                      </option>
                    ))}
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
                defaultValue=""
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

export default AddProductModel;
