import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import { editQuizCategory } from '../../../../redux/features/quizCategorySlice';
import Loader from '../../../../components/loader/Loader';

const EditQuizCategory = (props) => {
    const dispatch = useDispatch();
    const { loading, quizCategory } = useSelector((state) => state.quizCategory);

    const [formData, setFormData] = useState({
        name: quizCategory ? quizCategory.name : "",
        description: quizCategory ? quizCategory.description : "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (quizCategory) {
            setFormData({
                name: quizCategory.name,
                description: quizCategory.description,
            });
        }
    }, [quizCategory]);

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
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);

            dispatch(editQuizCategory(quizCategory._id, formData, props.toggleEditQuizCategoryModal, props.state));
        }
    };

    return (
        <>
            <Modal
                isOpen={props.showEditQuizCategoryModal}
                toggle={props.toggleEditQuizCategoryModal}>
                <ModalHeader toggle={props.toggleEditQuizCategoryModal}>
                    Update Quiz Category
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Quiz Category Name</label>
                            <input
                                name="name"
                                className={`form-control ${errors.name ? "error-input" : ""}`}
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                autoComplete="false"
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                name="description"
                                className={`form-control ${errors.description ? "error-input" : ""}`}
                                type="text"
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
    );
}


export default EditQuizCategory