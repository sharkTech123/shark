import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editPassworduserSchema, userSchema } from '../../../schemas/account';
import { editUser } from '../../../redux/features/userSlice';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Loader from '../../../components/loader/Loader';
import { generatePassword } from '../../../utils/commonFUn';

function EditPasswordModal(props) {
    const dispatch = useDispatch();
    const rolesList = useSelector(state => state.roles.rolesList);
    

    const { loading, user } = useSelector((state)=> state.user)
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword:"",
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
    if (user) {
        setFormData({
            password:"",
            confirmPassword:"",
        });
    }
}, [user]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = async () => {
        try {
            await editPassworduserSchema.validate(formData, { abortEarly: false });
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

    const autogenerate = async (e) => {
        e.preventDefault();
        let passcode=generatePassword()
        setFormData({
            password:passcode,
            confirmPassword:passcode,
        });
        setShowConfirmPassword(true)
        setShowPassword(true)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (isValid) {
            const formDataToSend = new FormData();
            formDataToSend.append("password", formData.password);
            dispatch(editUser(user.uniqueId, formDataToSend, props.toggleEditUserModal));
        }
    };


    return (
        <>
            {!loading ? (
                <Modal isOpen={props.editUserModalOpen} toggle={props.toggleEditUserModal}>
                    <ModalHeader toggle={props.toggleEditUserModal}>Update User Password</ModalHeader>
                    <ModalBody>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-group">
                                    <input
                                        className={`form-control ${errors.password ? 'error-input' : ''}`}
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        autoComplete="false"
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                </div>
                                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <div className="input-group">
                                    <input
                                        className={`form-control ${errors.confirmPassword ? 'error-input' : ''}`}
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        autoComplete="false"
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                </div>
                                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                            </div>
                            <div className="form-group text-center mt-3">
                                <button className="btn btn-primary account-btn btn-lg mx-2" onClick={autogenerate}>
                                    Auto Generate
                                </button>
                                <button className="btn btn-primary account-btn btn-lg mx-2" type="submit">
                                    Submit
                                </button>
                                
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            ) : (
                <Loader/>
            )}
        </>
    );
}

export default EditPasswordModal;
