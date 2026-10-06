import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAreaSchema } from '../../../schemas/category';
import { editArea } from '../../../redux/features/areaSlice';
import Loader from '../../../components/loader/Loader';

function EditAreaModal(props) {
    const dispatch = useDispatch();
    const { loading, area } = useSelector((state) => state.area);
    
    const [formData, setFormData] = useState({
        name: area ? area.name : '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (area) {
            setFormData({
                ...formData,
                name: area.name,
            });
        }
    }, [area]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = async () => {
        try {
            await createAreaSchema.validate(formData, { abortEarly: false });
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
            dispatch(editArea(area._id, formDataToSend, props.toggleEditAreaModal));
        }
    };

    return (
        <>
            {!loading ? (
                <Modal isOpen={props.editAreaModalOpen} toggle={props.toggleEditAreaModal}>
                    <ModalHeader toggle={props.toggleEditAreaModal}>Update area</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Area Name</label>
                                <input
                                    className={`form-control ${errors.name ? 'error-input' : ''}`}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                            </div>
                            <div className="form-group text-center mt-3">
                                <button className="btn btn-primary account-btn btn-lg" type="submit">
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

export default EditAreaModal;