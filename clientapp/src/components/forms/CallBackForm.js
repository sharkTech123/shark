// import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { User, Mail, PhoneCall, MessageSquare } from "lucide-react";

import { yupResolver } from "@hookform/resolvers/yup";
import { callBackFormSchema } from "../../schemas/master";
import { enquiryData } from "../../redux/features/enquirySlice";

export default function CallBackForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(callBackFormSchema),
  });
  const handleCallBackForm = async (data) => {
    data.formType = "callbackForm";

    dispatch(enquiryData({ requestData: data, reset }));
  };

  return (
    <div
      className=" flex items-center justify-center  "
      style={{ width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20"
        style={{ backgroundColor: "white" }}>
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          id="callbackIdH2"
          className="text-3xl font-bold text-black text-center mb-6">
          📞 Request a Callback
        </motion.h2>

        <form
          onSubmit={handleSubmit(handleCallBackForm)}
          className="space-y-4"
          style={{ color: "black" }}>
          {/* Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-4 text-black/60"
              style={{ width: "20px" }}
            />
            <Controller
              name="name"
              control={control}
              rules={{ required: "Full Name is required" }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="text"
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Enter Full Name"
                  style={{ border: "1px solid #d5d5d5", borderRadius: "6px" }}
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              className="absolute left-3 top-4 text-black/60"
              style={{ width: "20px" }}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="email"
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Email Address"
                  style={{ border: "1px solid #d5d5d5", borderRadius: "6px" }}
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <PhoneCall
              className="absolute left-3 top-4 text-black/60"
              style={{ width: "20px" }}
            />
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <input
                  type="tel"
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Mobile Number"
                  style={{ border: "1px solid #d5d5d5", borderRadius: "6px" }}
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                />
              )}
            />
            {errors.phoneNumber && (
              <p className="text-red-300 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 text-black/60"
              style={{ width: "20px" }}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field: { value, onChange } }) => (
                <textarea
                  rows="4"
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Your Message"
                  className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all resize-none"
                />
              )}
            />
            {errors.message && (
              <p className="text-red-300 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{ border: "none" }}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-pink-500/40 transition-all">
            SEND CALLBACK REQUEST
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
