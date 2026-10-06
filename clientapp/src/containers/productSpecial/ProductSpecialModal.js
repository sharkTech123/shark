import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct, getAllProductsById } from "../../redux/features/productSpecialSlice";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getListAreas } from "../../redux/features/areaSlice";
import { getListCategories } from "../../redux/features/categorySlice";
import { getListPostcodes } from "../../redux/features/postcodeSlice";
import { imageBaseUrl } from "../../utils/constants";
import AddProductSpecialModal from "./components/AddProductSpecialModel";
import EditProductSpecialModal from "./components/EditProductSpecialModal";

const ProductSpecialModal = () => {
    const dispatch = useDispatch();
    const { loading, productCount } = useSelector((state) => state.productSpecial);
    const products = useSelector(
        (state) => {
            return state.productSpecial.products.map((itp)=>{
                return {
                    ...itp,
                    imageSrc:<img width={48} height={48} src={imageBaseUrl+itp.image}/>
                }
            })
        }
    );
    const [showAddProductModalOpen, setAddProductModalOpen] = useState(false);
    const [showEditProductModalOpen, setEditProductModalOpen] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    const toggleAddProductModal = () => setAddProductModalOpen(!showAddProductModalOpen);
    const toggleEditProductModal = () => setEditProductModalOpen(!showEditProductModalOpen);

    const [state, setState] = useState({
        search: "",
        page: 1,
        pageSize: 10,
    });

    useEffect(() => {
        dispatch(getAllProducts(state.search, state.page, state.pageSize));
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

    const handleAddUserClick = () => {
        dispatch(getListAreas())
        dispatch(getListCategories())
        dispatch(getListPostcodes())

        toggleAddProductModal();
    }
    const handleEditClick = (id) => {
        dispatch(getListAreas())
        dispatch(getListCategories())
        dispatch(getListPostcodes())
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
            title: "Name",
            dataIndex: "name",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
         {
            title: "Category",
            dataIndex: "Category",
            align: "center",
            sorter: (a, b) => a.Category.length - b.Category.length,
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
            title: "Action",
            align: "center",
            render: (text, record) => (
                <div className="d-flex justify-content-center" data-popper-placement="bottom-end">
                    <Link
                        to={"#"}
                        className="dropdown-item px-2 text-success"
                        onClick={(e) => {
                            e.preventDefault();
                            handleEditClick(record._id)
                        }
                        }
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

    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Products</h2>
                    <button className={styles.addButton} onClick={handleAddUserClick}>
                        Add Special Product
                    </button>
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
                        onChange: (page, pageSize) => setState({ ...state, page, pageSize }),
                    }}
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    dataSource={products}
                // rowKey={(record) => record._id}
                />
            </div>
            <AddProductSpecialModal
                showAddProductModalOpen={showAddProductModalOpen}
                toggleAddProductModal={toggleAddProductModal}
                state={state}
            />
            <EditProductSpecialModal
                showEditProductModalOpen={showEditProductModalOpen}
                toggleEditProductModal={toggleEditProductModal}
                product={editProduct}
                state={state}
            />
        </>
    );
};

export default ProductSpecialModal;
