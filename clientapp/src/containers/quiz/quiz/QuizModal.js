import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListQuizCategories } from "../../../redux/features/quizCategorySlice";
import { Table, Input } from "antd";
import styles from "../../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import Loader from "../../../components/loader/Loader";
import {
  deleteQuiz,
  getAllQuizzes,
  getQuizById,
} from "../../../redux/features/quizSlice";
import EditQuizUpdatedModal from "./component/EditQuizModal";
import AddQuizUpdatedModal from "./component/AddQuizModal";

const QuizModal = () => {
  const dispatch = useDispatch();
  const { loading, quizzes, quizzesCount } = useSelector((state) => state.quiz);
  const [quizCategoryObj, setQuizCategoryObj] = useState();

  const [showAddQuizCategoryModal, setShowAddQuizCategoryModal] =
    useState(false);
  const toggleAddQuizCategoryModal = () =>
    setShowAddQuizCategoryModal(!showAddQuizCategoryModal);

  const [showEditQuizCategoryModal, setShowEditQuizCategoryModal] =
    useState(false);
  const toggleEditQuizCategoryModal = () =>
    setShowEditQuizCategoryModal(!showEditQuizCategoryModal);

  const [state, setState] = useState({
    search: "",
    categorySearch: "",
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const encodedSearch = encodeURIComponent(state.search);
    console.log("Search Query:", encodedSearch); // Log the encoded search query

    dispatch(getAllQuizzes(encodedSearch, state.page, state.pageSize));

    // Log the quizzes response whenever data changes
    if (quizzes && quizzes.length) {
      console.log("Quizzes Response:", quizzes); // Log quizzes data when it's availableewrfsdc
    }
  }, [dispatch, state.search, state.page, state.pageSize]);

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

  const handleAddClick = () => {
    dispatch(getListQuizCategories());
  };
  const handleEditClick = (id) => {
    dispatch(getListQuizCategories());
    dispatch(getQuizById(id));
    // dispatch(getAllQuizCategories(id))
    toggleEditQuizCategoryModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteQuiz(id));
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      align: "center",
      sorter: (a, b) => {
        if (!a.question || !b.question) return 0; // Handle undefined or null cases
        return a.question.length - b.question.length;
      },
    },
    {
      title: "Answer",
      dataIndex: "answer",
      align: "center",
      sorter: (a, b) => {
        if (!a.answer || !b.answer) return 0; // Handle undefined or null cases
        return a.answer.length - b.answer.length;
      },
    },
    {
      title: "Option",
      dataIndex: "option",
      align: "center",
      sorter: (a, b) => {
        if (!a.option || !b.option) return 0; // Handle undefined or null cases
        return a.option.length - b.option.length;
      },
      render: (text) => (
        <span title={text}>{Array.isArray(text) ? text.join(", ") : text}</span>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "center",
      sorter: (a, b) => {
        if (!a.description || !b.description) return 0; // Handle undefined or null cases
        return a.description.length - b.description.length;
      },
      render: (text) => (
        <span title={text}>
          {text?.length > 40 ? `${text.substring(0, 40)}...` : text}
        </span>
      ),
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      align: "center",
      sorter: (a, b) => {
        if (!a?.categoryName || !b?.categoryName) return 0; // Handle undefined or null cases
        return a.categoryName.length - b.categoryName.length;
      },
    },

    {
      title: "Action",
      align: "left",
      render: (text, record) => (
        <div
          className="d-flex justify-content-center"
          data-popper-placement="bottom-end">
          <Button
            className="dropdown-item px-2 text-success"
            onClick={(e) => {
              e.preventDefault();
              handleEditClick(record._id);
            }}>
            <LiaUserEditSolid />
          </Button>
          <Button
            className="dropdown-item px-2 text-danger"
            onClick={(e) => {
              e.preventDefault();
              handleDelete(record._id);
            }}>
            <RiDeleteBin6Fill />
          </Button>
        </div>
      ),
    },
  ];

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.question &&
      quiz.question.toLowerCase().includes(state.search.toLowerCase()) &&
      quiz.categoryName &&
      quiz.categoryName
        .toLowerCase()
        .includes(state.categorySearch.toLowerCase())
  );

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Quiz</h2>
          <button
            className={styles.addButton}
            onClick={(e) => {
              e.preventDefault();
              toggleAddQuizCategoryModal();
              handleAddClick();
            }}>
            Add Quiz
          </button>
        </div>
        {/* /////////////////////////search bar /////////////////////////// */}
        <div className="search-container" style={{ marginBottom: "20px" }}>
          <Input
            type="text"
            placeholder="Search Questions"
            value={state.search}
            onChange={(e) => setState({ ...state, search: e.target.value })}
            style={{ width: "100%", margin: "10px auto", padding: "1rem auto" }}
          />
          <Input
            type="text"
            placeholder="Search Quiz Category"
            value={state.categorySearch}
            onChange={(e) =>
              setState({ ...state, categorySearch: e.target.value })
            }
            style={{ width: "100%", padding: "1rem auto" }}
          />
        </div>

        {!loading ? (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: quizzesCount,
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
            dataSource={filteredQuizzes}
            rowKey={(record) => record._id}
          />
        ) : (
          <Loader />
        )}
      </div>
      <AddQuizUpdatedModal
        state={state}
        showAddQuizCategoryModal={showAddQuizCategoryModal}
        toggleAddQuizCategoryModal={toggleAddQuizCategoryModal}
      />
      <EditQuizUpdatedModal
        state={state}
        quizCategoryObj={quizCategoryObj}
        showEditQuizCategoryModal={showEditQuizCategoryModal}
        toggleEditQuizCategoryModal={toggleEditQuizCategoryModal}
      />
    </>
  );
};

export default QuizModal;
