import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  getOrdersById } from '../../../redux/features/orderSlice';
import { imageBaseUrl } from '../../../utils/constants';

const OrderInvoice = (props) => {
  const { singleOrder } = useSelector((state) => state.order);
  const params = useParams();
  const dispatch = useDispatch();

  // State for status
  const [status, setStatus] = useState('Processing');

  useEffect(() => {
    dispatch(getOrdersById(params.invoiceId));
  }, [dispatch, params.invoiceId]);

  useEffect(() => {
    if (singleOrder && singleOrder.status) {
      setStatus(singleOrder.status);
    }
  }, [singleOrder]);

  return (
    <div className="container p-4 bg-white shadow rounded">
      {singleOrder ? (
        <>
          <h2 className="h4 mb-3">{singleOrder._id} details</h2>
          <p className="text-muted mb-4">
            Payment via PayPal Paid on {`${new Date(singleOrder.createdOn).getDate()}/${new Date(singleOrder.createdOn).getMonth() + 1}/${new Date(singleOrder.createdOn).getFullYear()}`} @   {`${new Date(singleOrder.createdOn).getHours()}:${new Date(singleOrder.createdOn).getMinutes()}:${new Date(singleOrder.createdOn).getSeconds()}`}
          </p>
          <div className="row mb-4">
            <div className="col-md-4">
              <h3 className="h5 mb-3">General</h3>
              <div className="mb-3">
                <label className="form-label">Date created:</label>
                <span className="mb-3">
                  {`${new Date(singleOrder.createdOn).getDate()}/${new Date(singleOrder.createdOn).getMonth() + 1}/${new Date(singleOrder.createdOn).getFullYear()}`}
                </span>
                <br />
                <br />
                <label className="form-label">Time created:</label>
                <span className="mb-3">
                  {`${new Date(singleOrder.createdOn).getHours()}:${new Date(singleOrder.createdOn).getMinutes()}:${new Date(singleOrder.createdOn).getSeconds()}`}
                </span>
              </div>
              <div className="mb-3">
                <label className="form-label">Status:</label>
             <p>{singleOrder.status}</p>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="h5 mb-3">Billing</h3>
              <p>{singleOrder.streetAddress1}</p>
              {singleOrder.streetAddress2 && <p>{singleOrder.streetAddress2}</p>}
              <p>{singleOrder.city}</p>
              <p>{singleOrder.county}</p>
              <p>{singleOrder.postcode}</p>
              <p>
                Email address: 
                <a href={`mailto:${singleOrder.email}`} className="text-decoration-none"> {singleOrder.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${singleOrder.phoneNumber}`} className="text-decoration-none">{singleOrder.phoneNumber}</a>
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 mb-3">Shipping</h3>
              <p>Address:</p>
              <p>No shipping address set.</p>
            </div>
          </div>
          <div className="border-top pt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Cost</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {singleOrder.myCartList?.map((item, index) => (
                  <tr key={index}>
                    <td className="d-flex align-items-center">
                      <img width={48} height={48} src={`${imageBaseUrl}${item.image}`} alt={item.name} />
                      <a href="#" className="text-decoration-none ms-2">{item.name}</a>
                    </td>
                    <td>£ {item.myCartprice}</td>
                    <td>{item.myCartcount}</td>
                    <td>£ {(+item.myCartprice) * (+item.myCartcount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-end">
              <p className="mb-2">Items Subtotal: <span className="fw-semibold">£ {singleOrder.subtotal}</span></p>
              <p className="mb-2">2% ONLINE SERVICE CHARGE: <span className="fw-semibold">£ {singleOrder.serviceCharge}</span></p>
              <p className="mb-2">Order Total: <span className="fw-semibold">£ {singleOrder.total}</span></p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderInvoice;
