import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { getQuizCategoryModuleById } from "../../../../redux/features/quizCategorySlice";

import { Controller, useForm } from "react-hook-form";
import { createQuiz } from "../../../../redux/features/quizSlice";

const AddQuizUpdatedModal = (props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [optionsData, setoptionsData] = useState({
    optionone: "",
    optiontwo: "",
    optionthree: "",
    optionfour: "",
  });

  const [option1Image, setoption1Image] = useState("");
  const [questionImage, setquestionImage] = useState("");
  const [option2Image, setoption2Image] = useState("");
  const [option3Image, setoption3Image] = useState("");
  const [option4Image, setoption4Image] = useState("");

  const { quizCategoriesList, quizCategoryModule } = useSelector((state) => {
    return state.quizCategory;
  });
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
    setValue,
  } = useForm({});

  const getListAllCategoryById = (id) => {
    setValue("category", id);
    dispatch(getQuizCategoryModuleById(id));
  };
  const onSubmit = async (data) => {
    let final_data = {};
    final_data["option"] = [
      optionsData.optionone,
      optionsData.optiontwo,
      optionsData.optionthree,
      optionsData.optionfour,
    ];

    final_data["optionImage"] = [
      option1Image,
      option2Image,
      option3Image,
      option4Image,
    ];
    const { answer, category, description, question, module, answerImage } =
      data;
    const formDataToSend = new FormData();
    formDataToSend.append("answer", answer);
    formDataToSend.append("description", description);

    formDataToSend.append("category", category);
    formDataToSend.append("question", question);
    formDataToSend.append("option", final_data.option.join("^"));
    formDataToSend.append("option1Image", option1Image);
    formDataToSend.append("option2Image", option2Image);
    formDataToSend.append("option3Image", option3Image);
    formDataToSend.append("option4Image", option4Image);
    formDataToSend.append("questionImage", questionImage);

    dispatch(
      createQuiz(
        formDataToSend,
        reset,
        props.toggleAddQuizCategoryModal,
        props.state
      )
    );
    // Reset form state for options and images manually after submit
    setoptionsData({
      optionone: "",
      optiontwo: "",
      optionthree: "",
      optionfour: "",
    });
    setoption1Image("");
    setoption2Image("");
    setoption3Image("");
    setoption4Image("");
    setquestionImage("");
  };

  return (
    <>
      <Modal
        isOpen={props.showAddQuizCategoryModal}
        toggle={props.toggleAddQuizCategoryModal}>
        <ModalHeader toggle={props.toggleAddQuizCategoryModal}>
          Add Quiz
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Question</label>
              <Controller
                name="question"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.question ? "error-input" : ""
                    }`}
                    type="text"
                    value={value}
                    onChange={onChange}
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

            <div className="form-group">
              <label>Question Image</label>
              <Controller
                name="questionImage"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setquestionImage(file[0]);
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
              />
              {errors?.optionone?.message ? (
                <p style={{ color: "red" }}>{errors?.optionone?.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Option 1</label>
              <Controller
                name="optionone"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.optionone ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionone}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionone: e.target.value,
                        };
                      });
                      onChange();
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
              <label>Option 1 Image</label>
              <Controller
                name="Option1image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setoption1Image(file[0]);
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
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
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optiontwo}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optiontwo: e.target.value,
                        };
                      });
                      onChange();
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
              <label>Option 2 Image</label>
              <Controller
                name="Option2image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setoption2Image(file[0]);
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
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
                    className={`form-control  ${
                      errors?.optionthree ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionthree}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionthree: e.target.value,
                        };
                      });
                      onChange();
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
              <label>Option 3 Image</label>
              <Controller
                name="Option3image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setoption3Image(file[0]);
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
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
                    className={`form-control  ${
                      errors?.optionfour ? "error-input" : ""
                    }`}
                    type="text"
                    value={optionsData.optionfour}
                    onChange={(e) => {
                      setoptionsData((prev) => {
                        return {
                          ...prev,
                          optionfour: e.target.value,
                        };
                      });
                      onChange();
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
              <label>Option 4 Image</label>
              <Controller
                name="Option4image"
                control={control}
                render={({ field: { onChange } }) => (
                  <input
                    className={`form-control ${
                      errors?.image ? "error-input" : ""
                    }`}
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files;
                      setoption4Image(file[0]);
                      onChange(file);
                    }}
                    autoComplete="off"
                  />
                )}
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
                onChange={(e) => {
                  setValue("answer", e.target.value);
                }}
                className={`form-control ${
                  errors.roleName ? "error-input" : ""
                }`}>
                <option selected disabled value="">
                  Select...
                </option>

                <option value="Option1">Option 1</option>
                <option value="Option2">Option 2</option>
                <option value="Option3">Option 3</option>
                <option value="Option4">Option 4</option>
              </select>

              {errors?.answer?.message ? (
                <p style={{ color: "red" }}>{errors?.answer?.message}</p>
              ) : (
                ""
              )}
            </div>

            <div className="form-group">
              <label>Category</label>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      getListAllCategoryById(e.target.value);
                    }}
                    className={`form-control ${
                      errors.roleName ? "error-input" : ""
                    }`}>
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

            <div className="form-group">
              <label>Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <input
                    className={`form-control  ${
                      errors?.name ? "error-input" : ""
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
            </div>
            <div className="form-group text-center mt-3">
              <button
                className="btn btn-primary account-btn btn-lg"
                type="submit">
                Submit
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddQuizUpdatedModal;
