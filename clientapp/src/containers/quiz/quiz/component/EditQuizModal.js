import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { quizCategorySchema } from "../../../../schemas/quizCategory/index";
import {
  createQuizCategory,
  getQuizCategoryModuleById,
} from "../../../../redux/features/quizCategorySlice";

import { Controller, useForm } from "react-hook-form";
import { createQuiz, editQuiz } from "../../../../redux/features/quizSlice";
import { imageBaseUrl } from "../../../../utils/constants";
import "./AdminQuiz.css";

const EditQuizUpdatedModal = (props) => {
  const [option1Image, setoption1Image] = useState("");
  const [questionImage, setquestionImage] = useState("");
  const [option2Image, setoption2Image] = useState("");
  const [option3Image, setoption3Image] = useState("");
  const [option4Image, setoption4Image] = useState("");

  const dispatch = useDispatch();
  const oneproduct = useSelector((state) => state.quiz.quiz);

  const [formData, setFormData] = useState({
    description: oneproduct?.description || "",
  });

  const [optionsData, setoptionsData] = useState({
    optionone: oneproduct?.option ? oneproduct.option[0] : "",
    optiontwo: oneproduct?.option ? oneproduct.option[1] : "",
    optionthree: oneproduct?.option ? oneproduct.option[2] : "",
    optionfour: oneproduct?.option ? oneproduct.option[3] : "",
    answer: oneproduct?.answer || "",
    optionImage: oneproduct?.optionImage || [],
    questionImage: oneproduct?.questionImage || "",
  });
  const { quizCategoriesList, quizCategoryModule } = useSelector((state) => {
    return state.quizCategory;
  });
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
    setValue,
  } = useForm({
    // resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    let final_data = {};
    final_data["option"] = [
      optionsData.optionone,
      optionsData.optiontwo,
      optionsData.optionthree,
      optionsData.optionfour,
    ];
    final_data["optionImage"] = [
      option1Image, // Preserve previous image if not changed
      option2Image, // Preserve previous image if not changed
      option3Image, // Preserve previous image if not changed
      option4Image, // Preserve previous image if not changed
    ];

    const { answer, category, description, question, module } = data;

    const formDataToSend = new FormData();
    formDataToSend.append("answer", answer);
    formDataToSend.append("description", description);
    formDataToSend.append("category", category);
    formDataToSend.append("question", question);
    formDataToSend.append("option", final_data.option.join("^"));
    if (option1Image) {
      formDataToSend.append("option1Image", option1Image);
    }
    if (option2Image) {
      formDataToSend.append("option2Image", option2Image);
    }
    if (option3Image) {
      formDataToSend.append("option3Image", option3Image);
    }
    if (option4Image) {
      formDataToSend.append("option4Image", option4Image);
    }
    if (questionImage) {
      formDataToSend.append("questionImage", questionImage);
    }

    console.log("dayyttttt", formDataToSend);
    dispatch(
      editQuiz(
        oneproduct.uId,
        formDataToSend,
        reset,
        props.toggleEditQuizCategoryModal,
        props.state
      )
    );
  };

  useEffect(() => {
    if (oneproduct) {
      setoptionsData({
        optionone: oneproduct?.option ? oneproduct.option[0] : "",
        optiontwo: oneproduct?.option ? oneproduct.option[1] : "",
        optionthree: oneproduct?.option ? oneproduct.option[2] : "",
        optionfour: oneproduct?.option ? oneproduct.option[3] : "",
        answer: oneproduct?.answer || "",
        optionImage: oneproduct?.optionImage || [],
        questionImage: oneproduct?.questionImage || "",
      });

      dispatch(getQuizCategoryModuleById(oneproduct.category));

      reset({
        question: oneproduct ? oneproduct.question : "",
        answer: oneproduct ? oneproduct.answer : "",
        description: oneproduct ? oneproduct.description : "",
        category: oneproduct ? oneproduct.category : "",
        module: oneproduct ? oneproduct.module : "",
      });
    }
  }, [oneproduct, setValue, reset]);

  const handleImageRemove = async (type, index = null) => {
    try {
      const payload = {
        quizId: oneproduct._id,
        imageType: type, // "questionImage" or "optionImage"
        index: index, // Index for option images only
      };

      const response = await fetch(
        "https://api.smartlearner.com/api/quiz/remove-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        if (type === "questionImage") {
          setoptionsData((prev) => ({
            ...prev,
            questionImage: "",
          }));
        } else if (type === "optionImage") {
          setoptionsData((prev) => {
            const updatedImages = [...prev.optionImage];
            updatedImages[index] = "";
            return { ...prev, optionImage: updatedImages };
          });
        }
      }
    } catch (err) {
      console.error("Failed to remove image", err);
    }
  };

  return (
    <>
      <Modal
        isOpen={props.showEditQuizCategoryModal}
        toggle={props.toggleEditQuizCategoryModal}>
        <ModalHeader toggle={props.toggleEditQuizCategoryModal}>
          Edit Quiz
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
              {optionsData.questionImage && (
                <div className="editquizdeletebtnbox">
                  <img
                    src={imageBaseUrl + optionsData.questionImage}
                    alt="Current Question"
                    style={{ width: "50px", height: "50px", marginTop: "10px" }}
                  />
                  <button
                    className="editquizdeletebtn"
                    type="button"
                    onClick={() => handleImageRemove("questionImage")}>
                    ❌
                  </button>
                </div>
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
              {optionsData.optionImage[0] && (
                <div className="editquizdeletebtnbox">
                  <img
                    src={imageBaseUrl + optionsData.optionImage[0]}
                    alt="Current Option 1"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <button
                    className="editquizdeletebtn"
                    type="button"
                    onClick={() => handleImageRemove("optionImage", 0)}>
                    ❌
                  </button>
                </div>
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
              {optionsData.optionImage[1] && (
                <div className="editquizdeletebtnbox">
                  <img
                    src={imageBaseUrl + optionsData.optionImage[1]}
                    alt="Current Question"
                    style={{ width: "50px", height: "50px", marginTop: "10px" }}
                  />
                  <button
                    className="editquizdeletebtn"
                    type="button"
                    onClick={() => handleImageRemove("optionImage", 1)}>
                    ❌
                  </button>
                </div>
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
              {optionsData.optionImage[2] && (
                <div className="editquizdeletebtnbox">
                  <img
                    src={imageBaseUrl + optionsData.optionImage[2]}
                    alt="Current Question"
                    style={{ width: "50px", height: "50px", marginTop: "10px" }}
                  />
                  <button
                    className="editquizdeletebtn"
                    type="button"
                    onClick={() => handleImageRemove("optionImage", 2)}>
                    ❌
                  </button>
                </div>
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
              {optionsData.optionImage[3] && (
                <div className="editquizdeletebtnbox">
                  <img
                    src={imageBaseUrl + optionsData.optionImage[3]}
                    alt="Current Question"
                    style={{ width: "50px", height: "50px", marginTop: "10px" }}
                  />
                  <button
                    className="editquizdeletebtn"
                    type="button"
                    onClick={() => handleImageRemove("optionImage", 3)}>
                    ❌
                  </button>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Answer</label>
              <select
                onChange={(e) => {
                  const selectedAnswer = e.target.value;
                  setValue("answer", selectedAnswer); // Update the form's "answer" value
                  setoptionsData((prev) => ({
                    ...prev,
                    answer: selectedAnswer, // Update local state for options
                  }));
                }}
                className={`form-control ${errors.answer ? "error-input" : ""}`}
                value={optionsData.answer || ""}>
                <option disabled value="">
                  Select...
                </option>
                <option value="Option1">{optionsData.optionone}</option>
                <option value="Option2">{optionsData.optiontwo}</option>
                <option value="Option3">{optionsData.optionthree}</option>
                <option value="Option4">{optionsData.optionfour}</option>
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

export default EditQuizUpdatedModal;
