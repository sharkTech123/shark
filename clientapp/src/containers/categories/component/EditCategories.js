import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editCategory } from '../../../redux/features/categorySlice';
import { categorySchema } from '../../../schemas/category/index';
import Loader from '../../../components/loader/Loader';

function EditCategories(props) {
    const dispatch = useDispatch();
    const { loading, category } = useSelector((state) => state.category);
    
    const [formData, setFormData] = useState({
        name: category ? category.name : "",
        description: category ? category.description : "",
    });
    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (category) {
            setFormData({
                name: category.name,
                description: category.description,
            });
        }
    }, [category]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = async () => {
        try {
            await categorySchema.validate(formData, { abortEarly: false });
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
            
            dispatch(editCategory(category._id, formDataToSend, props.toggleEditCategoryModal));
        }
    };
    
    return (
        <>
            {!loading ? (
                <Modal
                    isOpen={props.showEditCategoryModal}
                    toggle={props.toggleEditCategoryModal}>
                    <ModalHeader toggle={props.toggleEditCategoryModal}>
                        Update Category
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Category Name</label>
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
            ) : (
                <Loader />
            )}
        </>
    );
}

export default EditCategories;
