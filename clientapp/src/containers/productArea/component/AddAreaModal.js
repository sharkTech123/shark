import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { createAreaSchema } from '../../../schemas/category';
import { createArea } from '../../../redux/features/areaSlice';

function AddAreaModal(props) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = async () => {
    try {
      await createAreaSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach(error => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const reset = () => {
    setFormData({ name: "" });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      dispatch(createArea(formDataToSend, reset, props.toggleAddAreaModal));
    }
  };

  return (
    <>
      <Modal
        isOpen={props.addAreaModalOpen}
        toggle={props.toggleAddAreaModal}
      >
        <ModalHeader toggle={props.toggleAddAreaModal}>
          Create Area
        </ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Area Name</label>
              <input
                className={`form-control ${errors.name ? "error-input" : ""}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="false"
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
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

export default AddAreaModal;