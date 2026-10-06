import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import { createQuizCategory } from '../../../../redux/features/quizCategorySlice';
import Loader from '../../../../components/loader/Loader';



const AddQuizCategory = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = async () => {
        try {
            await quizCategorySchema.validate(formData, { abortEarly: false });
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
            setLoading(true);
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);

            dispatch(createQuizCategory(formData, props.toggleAddQuizCategoryModal, props.state));
            setLoading(false);
        }
    };

    return (
        <>
            <Modal
                isOpen={props.showAddQuizCategoryModal}
                toggle={props.toggleAddQuizCategoryModal}>
                <ModalHeader
                    toggle={props.toggleAddQuizCategoryModal}>
                    Add Quiz Category
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Quiz Category Name</label>
                            <input
                                className={`form-control ${errors.name ? "error-input" : ""}`}
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                autoComplete="false"
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                className={`form-control ${errors.description ? "error-input" : ""}`}
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                autoComplete="false"
                            />
                            {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
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
    )
};

export default AddQuizCategory;
