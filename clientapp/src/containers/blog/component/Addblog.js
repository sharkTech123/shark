import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../redux/features/blogSlice";
import { blogsSchema } from "../../../schemas/blog/index"; // Ensure you have a validation schema

const AddBlog = (props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(blogsSchema), // Adjust this path according to your structure
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("blogName", data.blogName);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("shortContent", data.shortContent);
    if (image) {
      formData.append("image", image); // Append the image to formData
    }

    // Log formData for debuggin
 
    dispatch(createBlog(formData, reset, props.toggleAddBlogModal));
    setImage(""); 
    reset();
  };
  return (
    <Modal isOpen={props.showAddBlogModal} toggle={props.toggleAddBlogModal}>
      <ModalHeader toggle={props.toggleAddBlogModal}>Create Blog</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.email ? "error-input" : ""
                  }`}
                  type="email"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Blog Name</label>
            <Controller
              name="blogName"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.blogName ? "error-input" : ""
                  }`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.blogName && (
              <p style={{ color: "red" }}>{errors.blogName.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.description ? "error-input" : ""
                  }`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.description && (
              <p style={{ color: "red" }}>{errors.description.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Content</label>
            <Controller
              name="content"
              control={control}
              render={({ field: { value, onChange } }) => (
                <textarea
                  className={`form-control ${
                    errors.content ? "error-input" : ""
                  }`}
                  value={value}
                  onChange={onChange}
                  rows={4}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.content && (
              <p style={{ color: "red" }}>{errors.content.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Short Content</label>
            <Controller
              name="shortContent"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.shortContent ? "error-input" : ""
                  }`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.shortContent && (
              <p style={{ color: "red" }}>{errors.shortContent.message}</p>
            )}
          </div>
          <div className="form-group">
            <label>Blog Image (size less then 10MB)</label>
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange } }) => (
                <input
                  className={`form-control ${
                    errors?.image ? "error-input" : ""
                  }`}
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files;
                    setImage(file[0]);
                    onChange(file);
                  }}
                  autoComplete="off"
                />
              )}
            />
            {errors.image && (
              <p style={{ color: "red" }}>{errors.image.message}</p>
            )}
          </div>
          <div className="form-group text-center mt-3">
            <button
              className="btn btn-primary account-btn btn-lg"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default AddBlog;
