import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import {
  deleteBlog,
  getAllBlogs,
  getBlogById,
} from "../../redux/features/blogSlice";
import { Table } from "antd";

import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Button } from "reactstrap";
import AddBlog from "./component/Addblog";
import EditBlog from "./component/EditBlog";

const AdminBlogs = () => {
  const dispatch = useDispatch();
  const { loading, blogs, blogsCount } = useSelector((state) => state.blog);
  const [blogObj, setBlogObj] = useState();

  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const toggleAddBlogModal = () => setShowAddBlogModal(!showAddBlogModal);

  const [showEditBlogModal, setShowEditBlogModal] = useState(false);
  const toggleEditBlogModal = () => setShowEditBlogModal(!showEditBlogModal);

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(getAllBlogs(state.search, state.page, state.pageSize));
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
    dispatch(getBlogById(id));
    toggleEditBlogModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "blogName",
      align: "center",
      sorter: (a, b) => (a.title?.length || 0) - (b.title?.length || 0),
    },
    {
      title: "Description",
      dataIndex: "description",
      align: "center",
      sorter: (a, b) =>
        (a.description?.length || 0) - (b.description?.length || 0),
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
          data-popper-placement="bottom-end">
          <Button
            to={"#"}
            className="dropdown-item px-2 text-success"
            onClick={(e) => {
              e.preventDefault();
              handleEditClick(record._id);
            }}>
            <LiaUserEditSolid />
          </Button>
          <Button
            className="dropdown-item px-2 text-danger"
            to={"#"}
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

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Blogs</h2>
          <button className={styles.addButton} onClick={toggleAddBlogModal}>
            Add Blog
          </button>
        </div>
        {!loading ? (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: blogsCount,
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
            dataSource={blogs}
            rowKey={(record) => record._id}
          />
        ) : (
          <Loader />
        )}
      </div>
      <AddBlog
        showAddBlogModal={showAddBlogModal}
        toggleAddBlogModal={toggleAddBlogModal}
      />

      <EditBlog
        blogObj={blogObj}
        showEditBlogModal={showEditBlogModal}
        toggleEditBlogModal={toggleEditBlogModal}
      />
    </>
  );
};

export default AdminBlogs;
