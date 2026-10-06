import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editBlog } from "../../../redux/features/blogSlice"; // Ensure your slice has this action
import { blogsSchema } from "../../../schemas/blog/index"; // Adjust this path according to your structure
import Loader from "../../../components/loader/Loader";

function EditBlog(props) {
  const dispatch = useDispatch();
  const { loading, blog } = useSelector((state) => state.blog);
  const [image, setImage] = useState();

  const [formData, setFormData] = useState({
    email: blog ? blog.email : "",
    blogName: blog ? blog.blogName : "",
    description: blog ? blog.description : "",
    content: blog ? blog.content : "",
    shortContent: blog ? blog.shortContent : "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(blogsSchema),
  });

  const onSubmit = async (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData?.email);
    formDataToSend.append("blogName", formData?.blogName);
    formDataToSend.append("description", formData?.description);
    formDataToSend.append("content", formData?.content);
    formDataToSend.append("shortContent", formData?.shortContent);

    if (image) {
      formDataToSend.append("image", image);
    }
    console.log("FormData to send:", formDataToSend);
    dispatch(editBlog(blog._id, formDataToSend, props.toggleEditBlogModal));
  };

  useEffect(() => {
    if (blog) {
      setFormData({
        email: blog ? blog.email : "",
        blogName: blog ? blog.blogName : "",
        description: blog ? blog.description : "",
        content: blog ? blog.content : "",
        shortContent: blog ? blog.shortContent : "",
      })
      reset({
        email: blog.email,
        blogName: blog.blogName,
        description: blog.description,
        content: blog.content,
        shortContent: blog.shortContent,
      });
    }
  }, [blog, reset]);



  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  return (
    <>
      {!loading ? (
        <Modal
          isOpen={props.showEditBlogModal}
          toggle={props.toggleEditBlogModal}>
          <ModalHeader toggle={props.toggleEditBlogModal}>
            Update Blog
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                    onChange={handleInputChange}
                    value={formData.email}
                      className={`form-control ${
                        errors.email ? "error-input" : ""
                      }`}
                      type="email"
                      autoComplete="off"
                      {...field}
                    />
                  )}
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
                  render={({ field }) => (
                    <input
                    onChange={handleInputChange}
                    value={formData.blogName}
                      className={`form-control ${
                        errors.blogName ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
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
                  render={({ field }) => (
                    <input
                    onChange={handleInputChange}
                    value={formData.description}
                      className={`form-control ${
                        errors.description ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
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
                  render={({ field }) => (
                    <textarea
                    onChange={handleInputChange}
                    value={formData.content}
                      className={`form-control ${
                        errors.content ? "error-input" : ""
                      }`}
                      rows={4}
                      autoComplete="off"
                      {...field}
                    />
                  )}
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
                  render={({ field }) => (
                    <input
                    onChange={handleInputChange}
                    value={formData.shortContent}
                      className={`form-control ${
                        errors.shortContent ? "error-input" : ""
                      }`}
                      type="text"
                      autoComplete="off"
                      {...field}
                    />
                  )}
                />
                {errors.shortContent && (
                  <p style={{ color: "red" }}>{errors.shortContent.message}</p>
                )}
              </div>

              <div className="form-group">
                <label>Blog Image</label>
                <Controller
                  name="blogImage"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <input
                      className="form-control"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files;
                        setImage(file[0])
                        onChange(file);
                      }}
                    />
                  )}
                />
                {errors.blogImage && (
                  <p style={{ color: "red" }}>{errors.blogImage.message}</p>
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default EditBlog;
