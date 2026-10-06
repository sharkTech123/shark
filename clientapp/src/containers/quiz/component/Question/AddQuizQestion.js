import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { quizSchema } from "./quizSchema";
import styles from "../QuizModal.module.css";


const AddQuizQuestion = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(),
    defaultValues: {
      question: "",
      options: ["", "", "", ""],
      correctOption: null,
      rightAnswer: "",
      image: null,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('question', data.question);
    formData.append('options', JSON.stringify(data.options));
    formData.append('correctOption', data.correctOption);
    formData.append('rightAnswer', data.rightAnswer);
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }
  };

  return (
    <Modal isOpen={props.showQuizQuestionModal} toggle={props.toggleQuizQuestionModal}>
      <ModalHeader toggle={props.toggleQuizQuestionModal}>
        Create Quiz Question
      </ModalHeader>
      <ModalBody>
        <form className={styles.quizQuestionForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Image</label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  {...field}
                  className={`form-control ${errors.image ? "error-input" : ""}`}
                  accept="image/*"
                />
              )}
            />
            {errors.image && (
              <p style={{ color: "red" }}>{errors.image.message}</p>
            )}
          </div>
          <div>
            <label>Question</label>
            <Controller
              name="question"
              control={control}
              render={({ field }) => (
                <input
                  id={styles.quizQuestionInput}
                  type="text"
                  {...field}
                  className={`form-control ${errors.question ? "error-input" : ""}`}
                />
              )}
            />
            {errors.question && (
              <p style={{ color: "red" }}>{errors.question.message}</p>
            )}
          </div>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <label>Option {index + 1}</label>
              <div className="d-flex align-items-center">
                <Controller
                  name={`options[${index}]`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className={`form-control ${errors.options && errors.options[index] ? "error-input" : ""}`}
                    />
                  )}
                />
                <Controller
                  name="correctOption"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      {...field}
                      value={index}
                      checked={field.value === index}
                      onChange={() => field.onChange(index)}
                      className="form-check-input"
                      style={{ marginLeft: '10px' }} 
                    />
                  )}
                />
              </div>
              {errors.options && errors.options[index] && (
                <p style={{ color: "red" }}>{errors.options[index].message}</p>
              )}
            </div>
          ))}
          <div>
            <label>Right Answer</label>
            <Controller
              name="rightAnswer"
              control={control}
              render={({ field }) => (
                <input
                  id={styles.quizQuestionCorrect}
                  type="text"
                  {...field}
                  className={`form-control ${errors.rightAnswer ? "error-input" : ""}`}
                />
              )}
            />
            {errors.rightAnswer && (
              <p style={{ color: "red" }}>{errors.rightAnswer.message}</p>
            )}
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
  );
};

export default AddQuizQuestion;
