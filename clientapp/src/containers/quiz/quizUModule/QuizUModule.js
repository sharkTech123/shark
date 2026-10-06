import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteQuizCategory, getAllQuizCategories, getListQuizCategories, getQuizCategoryById } from "../../../redux/features/quizCategorySlice";
import { Table } from "antd";
import styles from "../../../assets/css/admin.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import Loader from "../../../components/loader/Loader";
import AddQuizModal from "../component/AddQuizModal";
import EditQuizModal from "../component/EditQuizModal";
import { deleteQuizModule, getAllQuizzes, getAllQuizzesModule, getQuizById, getQuizModuleById } from "../../../redux/features/quizSlice";
import EditQuizUpdatedModal from "./component/EditQuizUModule";
import AddQuizUpdatedModal from "./component/AddQuizUModule";
import AddQuizUModuleModal from "./component/AddQuizUModule";
import EditQuizUModuleModal from "./component/EditQuizUModule";

const QuizUModule = () => {
    const dispatch = useDispatch();
    const { loading, quizzesModule, quizzesModuleCount } = useSelector((state) => state.quiz);
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
        dispatch(getAllQuizzesModule(state.search, state.page, state.pageSize));
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
    }
    const handleEditClick = (id) => {
        dispatch(getListQuizCategories());
        dispatch(getQuizModuleById(id));
        // dispatch(getAllQuizCategories(id))
        toggleEditQuizCategoryModal();
    };

    const handleDelete = (id) => {
        dispatch(deleteQuizModule(id));
    };

    const columns = [
        {
            title: "Module Name",
            dataIndex: "moduleName",
            align: "center",
            sorter: (a, b) => a.moduleName.length - b.moduleName.length,
        },
        {
            title: "Category",
            dataIndex: "categoryName",
            align: "center",
            sorter: (a, b) => a?.categoryName.length - b?.categoryName.length
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
                    <h2 className={styles.userHeading}>Quiz Modules</h2>
                    <button
                        className={styles.addButton}
                        onClick={(e)=>{
                            e.preventDefault()
                            toggleAddQuizCategoryModal()
                            handleAddClick()
                        }}
                    >
                        Add Quiz Module
                    </button>
                </div>
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: quizzesModuleCount,
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
                        dataSource={quizzesModule}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddQuizUModuleModal
                state={state}
                showAddQuizCategoryModal={showAddQuizCategoryModal}
                toggleAddQuizCategoryModal={toggleAddQuizCategoryModal}
            />
            <EditQuizUModuleModal 
                state={state}
                quizCategoryObj={quizCategoryObj}
                showEditQuizCategoryModal={showEditQuizCategoryModal}
                toggleEditQuizCategoryModal={toggleEditQuizCategoryModal}
            />
        </>
    );
};

export default QuizUModule;
