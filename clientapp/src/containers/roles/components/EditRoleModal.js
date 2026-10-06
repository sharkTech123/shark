import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createRoleSchema } from '../../../schemas/account';
import { editRole } from '../../../redux/features/roleSlice';
import Loader from '../../../components/loader/Loader';

function EditRoleModal(props) {
    const dispatch = useDispatch();
    const { roleLoading, role } = useSelector((state) => state.roles);
    const [formData, setFormData] = useState({
        name: role ? role.name : '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (role) {
            setFormData({
                ...formData,
                name: role.name,
            });
        }
    }, [role]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = async () => {
        try {
            await createRoleSchema.validate(formData, { abortEarly: false });
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
            dispatch(editRole(role._id, formDataToSend, props.toggleEditRoleModal));
        }
    };

    return (
        <>
            {!roleLoading ? (
                <Modal isOpen={props.editRoleModalOpen} toggle={props.toggleEditRoleModal}>
                    <ModalHeader toggle={props.toggleEditRoleModal}>Update Role</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Role Name</label>
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

export default EditRoleModal;