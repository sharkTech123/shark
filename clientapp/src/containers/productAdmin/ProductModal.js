import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  deleteProduct,
  getAllProductsById,
} from "../../redux/features/productSlice";
import AddProductModel from "./components/AddProductModel";
import EditProductModal from "./components/EditProductModal";
import { Table, Input } from "antd";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getListAreas } from "../../redux/features/areaSlice";
import { getListCategories } from "../../redux/features/categorySlice";
import { getListPostcodes } from "../../redux/features/postcodeSlice";
import { imageBaseUrl } from "../../utils/constants";

const ProductModal = () => {
  const dispatch = useDispatch();
  const { loading, productCount } = useSelector((state) => state.product);
  const products = useSelector((state) => {
    return state.product.products.map((itp) => {
      return {
        ...itp,
        imageSrc: <img width={48} height={48} src={imageBaseUrl + itp.image} />,
      };
    });
  });
  const [showAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [showEditProductModalOpen, setEditProductModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const toggleAddProductModal = () =>
    setAddProductModalOpen(!showAddProductModalOpen);
  const toggleEditProductModal = () =>
    setEditProductModalOpen(!showEditProductModalOpen);

  const [state, setState] = useState({
    categorySearch: "",
    nameSearch: "",
    search: "",
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const encodedSearch = encodeURIComponent(state.search);
    console.log("Search Query:", encodedSearch);

    dispatch(getAllProducts(encodedSearch, state.page, state.pageSize));
  }, [dispatch, state.search, state.page, state.pageSize]);

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

  const handleAddUserClick = () => {
    dispatch(getListAreas());
    dispatch(getListCategories());
    dispatch(getListPostcodes());

    toggleAddProductModal();
  };
  const handleEditClick = (id) => {
    dispatch(getListAreas());
    dispatch(getListCategories());
    dispatch(getListPostcodes());
    dispatch(getAllProductsById(id));
    // setEditProduct(product);
    // toggleAddProductModal();
    toggleEditProductModal();
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteProduct(id));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageSrc",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Transmission",
      dataIndex: "transmission",
      align: "center",
      sorter: (a, b) => a.transmission.length - b.transmission.length,
    },
    {
      title: "Area Included",
      dataIndex: "areaIncluded",
      align: "center",
      sorter: (a, b) => a.areaIncluded.length - b.areaIncluded.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      align: "center",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      align: "center",
      sorter: (a, b) => a.experience.length - b.experience.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      sorter: (a, b) => a.price.length - b.price.length,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      align: "center",
      sorter: (a, b) => a.rating.length - b.rating.length,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      align: "center",
      sorter: (a, b) => a.duration.length - b.duration.length,
    },
    {
      title: "Transmission",
      dataIndex: "transmission",
      align: "center",
      sorter: (a, b) => a.transmission.length - b.transmission.length,
    },
    {
      title: "Postcode",
      dataIndex: "postcode",
      align: "center",
      sorter: (a, b) => a.postcode.length - b.postcode.length,
    },
    {
      title: "Action",
      align: "center",
      render: (text, record) => (
        <div
          className="d-flex justify-content-center"
          data-popper-placement="bottom-end"
        >
          <Link
            to={"#"}
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
            to={"#"}
            onClick={() => handleDeleteClick(record._id)}
          >
            <RiDeleteBin6Fill />
          </Link>
        </div>
      ),
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(state.nameSearch.toLowerCase()) &&
      product.category
        .toLowerCase()
        .includes(state.categorySearch.toLowerCase())
  );

  return (
    <>
      <div className={styles.usersContainer}>
        <div className={styles.usersHeading}>
          <h2 className={styles.userHeading}>Products</h2>
          <button className={styles.addButton} onClick={handleAddUserClick}>
            Add Product
          </button>
        </div>

        <div className="search-container mb-3">
          <Input
            type="text"
            placeholder="Search by name"
            value={state.nameSearch}
            onChange={(e) => setState({ ...state, nameSearch: e.target.value })}
            style={{ width: "100%", margin: "10px auto", padding: "1rem auto" }}
          />
          <Input
            type="text"
            placeholder="search by Category"
            value={state.categorySearch}
            onChange={(e) =>
              setState({ ...state, categorySearch: e.target.value })
            }
            style={{ width: "100%", padding: "1rem auto" }}
          />
        </div>
        <Table
          className="table-striped"
          pagination={{
            current: state.page,
            pageSize: state.pageSize,
            total: productCount,
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
          dataSource={filteredProducts}
          // rowKey={(record) => record._id}
        />
      </div>
      <AddProductModel
        showAddProductModalOpen={showAddProductModalOpen}
        toggleAddProductModal={toggleAddProductModal}
        state={state}
      />
      <EditProductModal
        showEditProductModalOpen={showEditProductModalOpen}
        toggleEditProductModal={toggleEditProductModal}
        product={editProduct}
        state={state}
      />
    </>
  );
};

export default ProductModal;
