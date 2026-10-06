import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddAreaModal from "./component/AddAreaModal";
import EditAreaModal from "./component/EditAreaModal";
import Loader from "../../components/loader/Loader";
import { deleteArea, getAllAreas, getAreaById } from "../../redux/features/areaSlice";
import { Link } from "react-router-dom";

function Area() {
    const dispatch = useDispatch();
    const { loading, areas, areasCount } = useSelector((state) => state.area);
    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    const [addAreaModalOpen, setAddAreaModalOpen] = useState(false);
    const toggleAddAreaModal = () => setAddAreaModalOpen(!addAreaModalOpen);

    const [editAreaModalOpen, setEditAreaModalOpen] = useState(false);
    const toggleEditAreaModal = () => setEditAreaModalOpen(!editAreaModalOpen);

    const [areaObj, setAreaObj] = useState();

    useEffect(() => {
        dispatch(getAllAreas(state.search, state.page, state.pageSize));
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
        dispatch(getAreaById(id));
        toggleEditAreaModal();
    };

    const handleDeleteClick = (id) => {
        dispatch(deleteArea(id));
    };

    const columns = [
        {
            title: "Area Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Action",
            align: "center",
            render: (text, record) => (
                <div className="d-flex justify-content-center" data-popper-placement="bottom-end">
                    <Link
                        onClick={(event) => {
                            event.preventDefault();
                            handleEditClick(record._id);
                        }}
                    >
                        <LiaUserEditSolid />
                    </Link>
                    <Link
                        className="dropdown-item px-2 text-danger"
                        to={"#"}
                        onClick={() => {
                            handleDeleteClick(record._id);
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
                    <h2 className={styles.userHeading}>Area</h2>
                    <button className={styles.addButton} onClick={toggleAddAreaModal}>
                        Add Area
                    </button>
                </div>
                {!loading ? (
                    <Table
                        className="table-striped"
                        pagination={{
                            current: state.page,
                            pageSize: state.pageSize,
                            total: areasCount,
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
                        dataSource={areas}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
            <AddAreaModal
                addAreaModalOpen={addAreaModalOpen}
                toggleAddAreaModal={toggleAddAreaModal}
            />
            <EditAreaModal
                areaObj={areaObj}
                editAreaModalOpen={editAreaModalOpen}
                toggleEditAreaModal={toggleEditAreaModal}
            />
        </>
    );
}

export default Area;
