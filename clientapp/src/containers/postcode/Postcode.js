import React, { useEffect, useState } from "react";
import AddPostcodeModel from "./components/AddPostcodeModel";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { deletePostcode, getAllPostcodes, getPostcodeById } from "../../redux/features/postcodeSlice";
import { Table } from "antd";
import styles from '../../assets/css/admin.module.css';
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import EditPostcodeModel from "./components/EditPostcodeModel";

import { Link } from "react-router-dom";

const Postcode = () => {
    const dispatch = useDispatch();
    const { loading, postcodes, postcodesCount } = useSelector((state) => state.postcode);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });


    const [showAddPostcodeModal, setShowAddPostcodeModal] = useState(false);
    const toggleAddPostcodeModal = () => setShowAddPostcodeModal(!showAddPostcodeModal);

    const [showEditPostcodeModal, setShowEditPostcodeModal] = useState(false);
    const toggleEditPostcodeModal = () => setShowEditPostcodeModal(!showEditPostcodeModal);

    const [postcodeObj, setPostcodeObj] = useState();

    useEffect(() => {
        dispatch(getAllPostcodes(state.search, state.page, state.pageSize))
    }, [dispatch, state.search, state.page, state.pageSize])

    const onShowSizeChange = (current, pageSize) => {
        setState({ ...state, page: 1, pagesize: pageSize });
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
        dispatch(getPostcodeById(id));
        toggleEditPostcodeModal();

    }



    const handleDelete = (id) => {
        dispatch(deletePostcode(id));
    }

    const columns = [
        {
            title: "Postcode",
            dataIndex: "postcode",
            align: "center",
            sorter: (a, b) => a.postcode.length - b.postcode.length,
        },
        {
            title: "City",
            dataIndex: "city",
            align: "center",
            sorter: (a, b) => a.city.length - b.city.length,
        },
        {
            title: "Country",
            dataIndex: "country",
            align: "center",
            sorter: (a, b) => a.country.length - b.country.length,
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
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Postcodes</h2>
                    <button
                        className={styles.addButton}
                        onClick={toggleAddPostcodeModal}
                    >
                        Add Postcode
                    </button>
                </div>
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: postcodesCount,
                            showTotal: (total, range) =>
                                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                            onChange: (page, pageSize) =>
                                setState({ ...state, page, pagesize: pageSize }),
                        }}
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={postcodes}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddPostcodeModel

                showAddPostcodeModal={showAddPostcodeModal}
                toggleAddPostcodeModal={toggleAddPostcodeModal}
            />

            <EditPostcodeModel
                postcodeObj={postcodeObj}
                showEditPostcodeModal={showEditPostcodeModal}
                toggleEditPostcodeModal={toggleEditPostcodeModal}
            />
        </>
    );
};

export default Postcode;