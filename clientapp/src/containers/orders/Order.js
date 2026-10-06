import React, { useEffect, useState } from "react";
import styles from "../../assets/css/admin.module.css";
import { Table,Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LiaUserEditSolid } from "react-icons/lia";
import { FaFileInvoice } from "react-icons/fa";
import { deleteRole, getAllRoles, getRoleById, setRoleNull } from "../../redux/features/roleSlice";

import Loader from "../../components/loader/Loader";

import { Link, useNavigate } from "react-router-dom";
import OrderInvoice from "./component/OrderInvoice";
import { getAllPaypalOrders } from "../../redux/features/orderSlice";

function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, orderCount, allOrdersCount } = useSelector((state) => state.order);
    const orders = useSelector((state) => {
        return state.order.allOrders
            .filter((itm) => itm.status === "completed" || itm.status === "failed") // Filtering by status
            .map((itm) => {
                return {
                    ...itm,
                    orderNo: itm._id,
                    userName: itm.firstName,
                    completeAddress: `${itm.streetAddress1}, ${itm.streetAddress2 ? itm.streetAddress2 + ", " : ""}${itm.city}, ${itm.county}, ${itm.postcode}`
                };
            });
    });
    
    const [state, setState] = useState({
        idSearch:"",
        nameSearch:'',
        search: "",
        page: 1,
        pageSize: 10,
    });

  

    const [OrderInvoiceModalOpen, setOrderInvoiceModalOpen] = useState(false);
    const toggleOrderInvoiceModal = () => setOrderInvoiceModalOpen(!OrderInvoiceModalOpen);

    const [OrderObj, setOrderObj] = useState();


    useEffect(() => {
        const statusFilter = ["completed", "failed"]; 
        dispatch(getAllPaypalOrders(state.search, state.page, state.pageSize, statusFilter));
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

    const handleEditClick = (id) => {
       
        toggleOrderInvoiceModal();
    };

   

    const columns = [
        {
            title: "Order Id",
            dataIndex: "orderNo",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "User",
            dataIndex: "userName",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Complete Address",
            dataIndex: "completeAddress",
            align: "center",
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: "Sub Total",
            dataIndex: "subtotal",
            align: "center",
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Service Charge",
            dataIndex: "serviceCharge",
            align: "center",
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Total",
            dataIndex: "total",
            align: "center",
            sorter: (a, b) => a.price - b.price,
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
                        onClick={(event) => {
                            event.preventDefault();
                            navigate(`/admin/orderInvoice/${record._id}`)
                        }}
                    >
                        <FaFileInvoice />
                    </Link>
                   
                </div>
            ),
        },
    ];
    const filteredOrders = orders.filter(
        (order) =>
            order.firstName.toLowerCase().includes(state.nameSearch.toLowerCase()) &&
        order._id
            .toLowerCase()
            .includes(state.idSearch.toLowerCase())
      );


    return (
        <>
            <div className={styles.usersContainer}>
                <div className={styles.usersHeading}>
                    <h2 className={styles.userHeading}>Orders</h2>
                    
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
            placeholder="search by Id"
            value={state.idSearch}
            onChange={(e) =>
              setState({ ...state, idSearch: e.target.value })
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
                            total: orderCount,
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
                        dataSource={filteredOrders}
                        rowKey={(record) => record._id}
                    />
                ) : (
                    <Loader />
                )}
            </div>
        
           
        </>
    )
}

export default Order