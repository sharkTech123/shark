import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { edituserSchema } from "../../../schemas/account";
import { editUser } from "../../../redux/features/userSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Loader from "../../../components/loader/Loader";

function EditUserModal(props) {
  const dispatch = useDispatch();
  const rolesList = useSelector((state) => state.roles.rolesList);

  const { loading, user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: user ? user.username : "",
    email: user ? user.email : "",
    phoneNumber: user ? user.phoneNumber : "",
    roleName: user ? user.roleName : "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        roleName: user.roleName || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = async () => {
    try {
      await edituserSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      const formDataToSend = new FormData();
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      const selectedRole = rolesList.find(role => role.name === formData.roleName);
    formDataToSend.append("roleId", selectedRole ? selectedRole._id : "");


      dispatch(
        editUser(user.uniqueId, formDataToSend, props.toggleEditUserModal, props.state)
      );
    }
  };
  console.log("roled", rolesList)
  return (
    <>
      {!loading ? (
        <Modal
          isOpen={props.editUserModalOpen}
          toggle={props.toggleEditUserModal}
        >
          <ModalHeader toggle={props.toggleEditUserModal}>
            Update User
          </ModalHeader>
          <ModalBody>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>User Name</label>
                <input
                  className={`form-control ${
                    errors.username ? "error-input" : ""
                  }`}
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  autoComplete="false"
                />
                {errors.username && (
                  <p style={{ color: "red" }}>{errors.username}</p>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className={`form-control ${
                    errors.email ? "error-input" : ""
                  }`}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="false"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  className={`form-control ${
                    errors.phoneNumber ? "error-input" : ""
                  }`}
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  autoComplete="false"
                />
                {errors.phoneNumber && (
                  <p style={{ color: "red" }}>{errors.phoneNumber}</p>
                )}
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <select
                  className={`form-control ${
                    errors.roleName ? "error-input" : ""
                  }`}
                  name="roleName"
                  value={formData.roleName  || ""}
                  onChange={handleInputChange}
                >
                  <option disabled value="">
                    Select...
                  </option>
                  {rolesList.map((role) => (
                    <option key={role._id} value={role.name}>
                      {role.name}
                    
                    </option>
                  ))}
                </select>
                {errors.roleName && (
                  <p style={{ color: "red" }}>{errors.roleName}</p>
                )}  
              </div>
              {/* <div className="form-group">
                <label>Privacy Policy</label>
                <input type="checkbox" name="privacyPolicy" />
              </div> */}
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
      ) : (
        <Loader />
      )}
    </>
  );
}

export default EditUserModal;
