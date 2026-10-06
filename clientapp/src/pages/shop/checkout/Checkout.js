import React, { useState } from "react";
import "./Checkout.css";
import FinalCheckout from "./FinalCheckout";
import { useSelector } from "react-redux";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",

    streetAddress1: "",
    streetAddress2: "",
    city: "",

    postcode: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLocalChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="chackoutPageD">
      <div className="checkoutPage">
        <div
          className="max-w-lg  p-4 bg-dark dark:bg-zinc-800 text-white dark:text-white"
          id="chackoutpageComponent">
          <h1 className="text-3xl font-bold text-center mb-4">Checkout</h1>

          <hr className="border-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
          <form role="form" action="https://gateway.verofy.com" method="post">
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block font-semibold mb-1"
                htmlFor="streetAddress1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded mb-2"
                type="text"
                id="streetAddress1"
                placeholder="House number and street name"
                value={formData.streetAddress1}
                onChange={handleChange}
                required
              />
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="streetAddress2"
                placeholder="Apartment, suite, unit, etc. (Optional)"
                value={formData.streetAddress2}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="city">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="postcode">
                Postcode <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="phoneNumber">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                style={{ color: "black" }}
                className="w-full p-2 border border-zinc-300 rounded"
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
        {/* /////////////////////////////////////////////////////// */}
        <FinalCheckout
          formData={formData}
          setFormData={setFormData}
          handleLocalChange={handleLocalChange}
        />
      </div>
    </div>
  );
}
