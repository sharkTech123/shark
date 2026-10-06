import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { createUser } from "../../../redux/features/userSlice";
import { userSchema } from "../../../schemas/account";

function AddUserModal(props) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { roleLoading, rolesList } = useSelector((state) => {
    const rolesState = state.roles || {};
    return rolesState;
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("roleName", data.roleName);

    dispatch(createUser(data, reset, props.toggleAddUserModal, props.state));
  };

  return (
    <Modal isOpen={props.showUserAddModal} toggle={props.toggleAddUserModal}>
      <ModalHeader toggle={props.toggleAddUserModal}>Create User</ModalHeader>
      <ModalBody>
        {!roleLoading && (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>User Name</label>
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className={`form-control ${
                        errors.username ? "error-input" : ""
                      }`}
                      type="text"
                      value={value}
                      onChange={onChange}
                      autoComplete="off"
                    />
                  )}
                  defaultValue=""
                />
                {errors.username && (
                  <p style={{ color: "red" }}>{errors.username.message}</p>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="input-group">
                      <input
                        className={`form-control ${
                          errors.password ? "error-input" : ""
                        }`}
                        type={showPassword ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </button>
                    </div>
                  )}
                  defaultValue=""
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="input-group">
                      <input
                        className={`form-control ${
                          errors.confirmPassword ? "error-input" : ""
                        }`}
                        type={showConfirmPassword ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                      </button>
                    </div>
                  )}
                  defaultValue=""
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
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
                      type="text"
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
                <label>Phone Number</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <input
                      className={`form-control ${
                        errors.phoneNumber ? "error-input" : ""
                      }`}
                      type="text"
                      value={value}
                      onChange={onChange}
                      autoComplete="off"
                    />
                  )}
                  defaultValue=""
                />
                {errors.phoneNumber && (
                  <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <Controller
                  name="roleName"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className={`form-control ${
                        errors.roleName ? "error-input" : ""
                      }`}
                    >
                      <option disabled value="">
                        Select...
                      </option>
                      {rolesList &&
                        rolesList.map((role) => (
                          <option key={role._id} value={role.name}>
                            {role.name}
                          </option>
                        ))}
                    </select>
                  )}
                  defaultValue=""
                />
                {errors.roleName && (
                  <p style={{ color: "red" }}>{errors.roleName.message}</p>
                )}
              </div>
              <div className="form-group">
                <label>Privacy Policy</label>

                <input type="checkbox" />
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
          </>
        )}
      </ModalBody>
    </Modal>
  );
}

export default AddUserModal;
