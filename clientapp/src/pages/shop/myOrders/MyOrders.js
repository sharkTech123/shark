import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import cartIcon from "../../../assets/images/cartIcon1.png";

import { useDispatch, useSelector } from "react-redux";
import { getAllPaypalOrders } from "../../../redux/features/orderSlice";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

const MyOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { myCart, myOrdersCount } = useSelector((state) => state.cart.myOrders);
  const { userDetails } = useSelector((state) => state.auth);
  const userMail = userDetails?.email;

  console.log("suhkdsjhsakj", userMail);

  const orders = useSelector((state) => {
    return state.order.allOrders
      .filter(
        (itm) =>
          itm.status === "completed"  && itm.email === userMail
      ) // Filtering by status
      .map((itm) => {
        return {
          ...itm,
          orderNo: itm._id,
          price: `£ ${itm.total}`,
          createdAt: new Date(itm.createdOn).toLocaleDateString(),
          completeAddress: `${itm.streetAddress1}, ${
            itm.streetAddress2 ? itm.streetAddress2 + ", " : ""
          }${itm.city}, ${itm.county}, ${itm.postcode}`,
          paymentStatus: `${itm.status}`,
          mail: `${itm.email}`,
        };
      });
  });

  const [state, setState] = useState({
    search: "",
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const statusFilter = ["completed", "failed"];
    dispatch(
      getAllPaypalOrders(state.search, state.page, state.pageSize, statusFilter)
    );
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

  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderNo",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      align: "center",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Complete Address",
      dataIndex: "completeAddress",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Amount",
      dataIndex: "price",
      align: "center",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Payment mail",
      dataIndex: "mail",
      align: "center",
      sorter: (a, b) => a.name.length - b.name.length,
    },
  ];

  return (
    <div className={styles.cartPage}>
      <div id={styles.fontAntonio}>
        <div
          className="d-flex justify-content-center align-items-center gap-4 text-center mb-4 mt-2"
          id={styles.cartFrontHeading}
        >
          <h1 className="display-4 font-weight-bold">ORDERS</h1>
          <img src={cartIcon} alt="cart icon" className={styles.carIconImg} />
        </div>
        {myCart && myCart.length === 0 ? (
          <div className="text-center">
            <h2>Your cart is empty</h2>
            <button
              className="btn btn-primary mt-4"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <Table
            className="table-striped"
            pagination={{
              current: state.page,
              pageSize: state.pageSize,
              total: myOrdersCount,
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
            dataSource={orders}
            rowKey={(record) => record._id}
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
