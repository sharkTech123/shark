import React, { useEffect, useState } from "react";
import AddQuizCategory from "./component/AddQuizCategory";
import EditQuizCategory from "./component/EditQuizCategory";
import { useDispatch, useSelector } from "react-redux";

import { deleteQuizCategory, getAllQuizCategories, getQuizCategoryById } from "../../../redux/features/quizCategorySlice";
import { Table } from "antd";
import styles from "../../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import Loader from "../../../components/loader/Loader";

const QuizCategory = () => {
    const dispatch = useDispatch();
    const { loading, quizCategories, quizCategoriesCount } = useSelector((state) => state.quizCategory);
    const [quizCategoryObj, setQuizCategoryObj] = useState();

    const [showAddQuizCategoryModal, setShowAddQuizCategoryModal] = useState(false);
    const toggleAddQuizCategoryModal = () => setShowAddQuizCategoryModal(!showAddQuizCategoryModal);

    const [showEditQuizCategoryModal, setShowEditQuizCategoryModal] = useState(false);
    const toggleEditQuizCategoryModal = () => setShowEditQuizCategoryModal(!showEditQuizCategoryModal);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10, 
    });

    useEffect(() => {
        dispatch(getAllQuizCategories(state.search, state.page, state.pageSize));
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

    const handleEditClick = (id) => {
        dispatch(getQuizCategoryById(id));
        toggleEditQuizCategoryModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteQuizCategory(id));
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => (a.name?.length || 0) - (b.name?.length || 0),
        },
        {
            title: "Description",
            dataIndex: "description",
            align: "center",
            sorter: (a, b) => (a.description?.length || 0) - (b.description?.length || 0),
            render: (text) => (
                <span title={text}>
                    {text?.length > 40 ? `${text.substring(0, 40)}...` : text}
                </span>
            ),
        },
        {
            title: "Action",
            align: "left",
            render: (text, record) => (
                <div
                    className="d-flex justify-content-center"
                    data-popper-placement="bottom-end"
                >
                    <Button
                        className="dropdown-item px-2 text-success"
                        onClick={(e) => {
                            e.preventDefault();
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Button>
                    <Button
                        className="dropdown-item px-2 text-danger"
                        onClick={(e) => {
                            e.preventDefault();
                            handleDelete(record._id);
                        }}
                    >
                        <RiDeleteBin6Fill />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Quiz Categories</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddQuizCategoryModal}
                    >
                        Add Quiz Category
                    </button>
                </div>
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: quizCategoriesCount,
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
                        dataSource={quizCategories}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddQuizCategory
                state={state}
                showAddQuizCategoryModal={showAddQuizCategoryModal}
                toggleAddQuizCategoryModal={toggleAddQuizCategoryModal}
            />
            <EditQuizCategory
                state={state}
                quizCategoryObj={quizCategoryObj}
                showEditQuizCategoryModal={showEditQuizCategoryModal}
                toggleEditQuizCategoryModal={toggleEditQuizCategoryModal}
            />
        </>
    );
};

export default QuizCategory;
