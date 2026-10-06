import React, { useState } from "react";
import styles from "../../../assets/css/admin.module.css";
import AddQuizQuestion from "./Question/AddQuizQestion";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const AddQuizModal = (props) => {

  const {quizCategoriesList} = useSelector((state)=>{ return state.quizCategory})

  const [showQuizQuestionModal, setShowQuizQuestionModal] = useState(false);
  const toggleQuizQuestionModal = () =>
    setShowQuizQuestionModal(!showQuizQuestionModal);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(),
  });

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
});

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, page: 1, pageSize });
};

const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
        return <button className="btn btn-sm btn-primary">Previous</button>;
    }
    if (type === "next") {
        return <button className="btn btn-sm btn-primary">Next</button>;
    }
    return originalElement;
};
  const handleEditClick = () => {
   
};

const handleDelete = () => {
    
};

const columns = [
    {
        title: "Question",
        dataIndex: "name",
        align: "center",
        sorter: (a, b) => a.name.length - b.name.length,
    },
    
    {
        title: "Action",
        align: "left",
        render: (text, record) => (
            <div
                className="d-flex justify-content-center"
                data-popper-placement="bottom-end"
            >
                <Link
                    className="dropdown-item px-2 text-success"
                    onClick={(e) => {
                        e.preventDefault();
                        handleEditClick(record._id);
                    }}
                >
                    <LiaUserEditSolid />
                </Link>
                <Link
                    className="dropdown-item px-2 text-danger"
                    onClick={(e) => {
                        e.preventDefault();
                        handleDelete(record._id);
                    }}
                >
                    <RiDeleteBin6Fill />
                </Link>
            </div>
        ),
    },
];


  return (
    <Modal style={{ maxWidth: '800px', width:'100%'}}isOpen={props.showAddQuizModal} toggle={props.toggleAddQuizModal}>
      <ModalHeader toggle={props.toggleAddQuizModal}> <div className="d-flex gap-4 align-items-center">Add Quiz
      <button onClick={handleSubmit} className="btn btn-primary">
        Save
      </button>
      </div></ModalHeader>
      <ModalBody>
        <div className={styles.editQuiz}>
          <div className="form-group">
            <label>Title</label>
            <Controller
              name="title"
              control={control}
              render={({ field: { value, onChange } }) => (
                <input
                  className={`form-control ${
                    errors.title ? "error-input" : ""
                  }`}
                  type="text"
                  value={value}
                  onChange={onChange}
                  autoComplete="off"
                />
              )}
              defaultValue=""
            />
            {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
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
                    }`}
                  >
                    <option disabled value="">
                      Select...
                    </option>
                    {quizCategoriesList.map((category) => (
                      <option key={category._id} value={category.name}>
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



          <button className="btn btn-success mt-2" onClick={toggleQuizQuestionModal}>
            Add Questions
          </button>
          <h3 className={styles.questionTitle}>Questions:</h3>

          <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: "",
                            showTotal: (total, range) =>
                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) =>
                                setState({ ...state, page, pageSize }),
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={""}
                        rowKey={(record) => record._id}
                    />

          <AddQuizQuestion
            showQuizQuestionModal={showQuizQuestionModal}
            toggleQuizQuestionModal={toggleQuizQuestionModal}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AddQuizModal;
