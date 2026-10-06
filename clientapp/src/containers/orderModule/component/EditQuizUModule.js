import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import { createQuizCategory } from '../../../../redux/features/quizCategorySlice';

import { Controller, useForm } from "react-hook-form";
import { createQuiz, editQuiz, editQuizModule } from '../../../../redux/features/quizSlice';

const EditQuizModule = (props) => {
    const dispatch = useDispatch();
    const oneproduct = useSelector((state) => state.quiz.oneQuizModule);


    const [formData, setFormData] = useState({
        moduleName: oneproduct?.moduleName || "",
        category: oneproduct?.category || ""
    });


    const [optionsData, setoptionsData] = useState({
        "moduleName": "",
        "category": ""
    });






    const { quizCategoriesList } = useSelector((state) => { return state.quizCategory })
    // const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        // resolver: yupResolver(productSchema),
    });

    // const validateForm = async () => {
    //     try {
    //         await quizCategorySchema.validate(formData, { abortEarly: false });
    //         setErrors({});
    //         return true;
    //     } catch (validationErrors) {
    //         const newErrors = {};
    //         validationErrors.inner.forEach((error) => {
    //             newErrors[error.path] = error.message;
    //         });
    //         setErrors(newErrors);
    //         return false;
    //     }
    // };


    const onSubmit = async (data) => {
        
        const { category, moduleName } = data


        const formDataToSend = new FormData();
        formDataToSend.append('category', category);
        formDataToSend.append('moduleName', formData.moduleName);
        // final_data={
        //     ...final_data,
        //     answer,
        //     category,
        //     description,
        //     question
        // }

        // // const isValid = await validateForm();
        // // if (isValid) {
        // setLoading(true);

        dispatch(editQuizModule(oneproduct.uId,formDataToSend, reset, props.toggleEditQuizCategoryModal, props.state));
        // setLoading(false);
        // // }
    };


    useEffect(() => {
        if (oneproduct) {

            setFormData({
                "moduleName": oneproduct ? oneproduct?.moduleName : "",
                "category":oneproduct ? oneproduct.category : ""
            })

            reset({
                moduleName: oneproduct ? oneproduct.moduleName : "",
                category:oneproduct ? oneproduct.category : ""
            })
        }
    }, [oneproduct]);


    return (
        <>
            <Modal
                isOpen={props.showEditQuizCategoryModal}
                toggle={props.toggleEditQuizCategoryModal}>
                <ModalHeader
                    toggle={props.toggleEditQuizCategoryModal}>
                    Edit Quiz Module
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Module Name</label>
                            <Controller
                                name="moduleName"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.question ? "error-input" : ""
                                            }`}
                                        type="text"
                                        name='moduleName'
                                        value={formData.moduleName}
                                        onChange={handleInputChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.question?.message ? (
                                <p style={{ color: "red" }}>{errors?.question?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* <div className="form-group">
                            <label>Option 1</label>
                            <Controller
                                name="optionone"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionone ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={optionsData.optionone}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionone: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionone?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionone?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 2</label>
                            <Controller
                                name="optiontwo"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.name ? "error-input" : ""
                                            }`}
                                        type="text"

                                        value={optionsData.optiontwo}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optiontwo: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optiontwo?.message ? (
                                <p style={{ color: "red" }}>{errors?.optiontwo?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 3</label>
                            <Controller
                                name="optionthree"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionthree ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={optionsData.optionthree}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionthree: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionthree?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionthree?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label>Option 4</label>
                            <Controller
                                name="optionfour"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.optionfour ? "error-input" : ""
                                            }`}
                                        type="text"

                                        value={optionsData.optionfour}
                                        onChange={(e) => {
                                            setoptionsData((prev) => {
                                                return {
                                                    ...prev,
                                                    optionfour: e.target.value
                                                }
                                            })
                                            onChange()
                                        }}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.optionfour?.message ? (
                                <p style={{ color: "red" }}>{errors?.optionfour?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>

                        <div className="form-group">
                            <label>Answer</label>
                            <select

                                onChange={(e)=>{
                                    setValue("answer",e.target.value)
                                }}
                                className={`form-control ${errors.roleName ? "error-input" : ""
                                    }`}
                            >
                                <option disabled value="">
                                    Select...
                                </option>
                                {Object.entries(optionsData).map((option, index) => (
                                    <option key={index} value={option[1]}>
                                        {option[1]}
                                    </option>
                                ))}
                            </select>

                            {errors?.answer?.message ? (
                                <p style={{ color: "red" }}>{errors?.answer?.message}</p>
                            ) : (
                                ""
                            )}
                        </div> */}



                        <div className="form-group">
                            <label>Category</label>
                            <Controller
                                name="category"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        className={`form-control ${errors.roleName ? "error-input" : ""
                                            }`}
                                    >
                                        <option disabled value="">
                                            Select...
                                        </option>
                                        {quizCategoriesList.map((category) => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                defaultValue=""
                            />

                            {errors?.name?.message ? (
                                <p style={{ color: "red" }}>{errors?.name?.message}</p>
                            ) : (
                                ""
                            )}
                        </div>

                        {/* <div className="form-group">
                            <label>Description</label>
                            <Controller
                                name="description"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <input
                                        className={`form-control  ${errors?.name ? "error-input" : ""
                                            }`}
                                        type="text"
                                        value={value}
                                        onChange={onChange}
                                        autoComplete="false"
                                    />
                                )}
                                defaultValue={""}
                            />
                            {errors?.description?.message ? (
                                <p style={{ color: "red" }}>{errors?.description?.message}</p>
                            ) : (
                                ""
                            )}
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
        </>
    )
};

export default EditQuizModule;
