import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postcodeSchema } from '../../../schemas/postcode';
import { editPostcode } from '../../../redux/features/postcodeSlice';
import Loader from '../../../components/loader/Loader';

function EditPostcodeModal(props) {
    const dispatch = useDispatch();
    const { loading, postcode } = useSelector((state) => state.postcode);
    
    const [formData, setFormData] = useState({
        postcode: postcode ? postcode.postcode : "",
        city: postcode ? postcode.city : "",
        country: postcode ? postcode.country : "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (postcode) {
            setFormData({
                postcode: postcode.postcode,
                city: postcode.city,
                country: postcode.country,
            });
        }
    }, [postcode]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = async () => {
        try {
            await postcodeSchema.validate(formData, { abortEarly: false });
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
            formDataToSend.append('postcode', formData.postcode);
            formDataToSend.append('city', formData.city);
            formDataToSend.append('country', formData.country);
            dispatch(editPostcode(postcode._id, formDataToSend, props.toggleEditPostcodeModal));
        }
    };

    return (
        <>
            {!loading ? (
                <Modal isOpen={props.showEditPostcodeModal} toggle={props.toggleEditPostcodeModal}>
                    <ModalHeader toggle={props.toggleEditPostcodeModal}>Update Postcode</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Postcode</label>
                                <input
                                    className={`form-control ${errors.postcode ? 'error-input' : ''}`}
                                    type="text"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.postcode && <p style={{ color: 'red' }}>{errors.postcode}</p>}
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    className={`form-control ${errors.city ? 'error-input' : ''}`}
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input
                                    className={`form-control ${errors.country ? 'error-input' : ''}`}
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    autoComplete="false"
                                />
                                {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
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

export default EditPostcodeModal;
