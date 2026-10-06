import React from "react";
import { FaSearch } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { drivenBeforeFormSchema } from "../../schemas/master";
import { enquiryData } from "../../redux/features/enquirySlice";
import { FaLocationDot } from "react-icons/fa6";

export default function DrivenForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(drivenBeforeFormSchema),
  });

  const handleDrivenBeforeForm = async (data) => {
    data.formType = "drivenForm";
    dispatch(enquiryData({ requestData: data, reset }));
  };

  return (
    <section className="driverSection">
      <div className="innerFormSection">
        <div className="search-Form">
          <form onSubmit={handleSubmit(handleDrivenBeforeForm)} id="locationForm">
            <div className="infoDetails">
              <div className="redio-box">
                <h3>Have you driven before?</h3>
                <Controller
                  name="drivenBefore"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="yes"
                          checked={field.value === "yes"}
                          onChange={() => field.onChange("yes")}
                          required
                        />
                        <span className="checkmark"></span>
                        Yes
                      </label>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="no"
                          checked={field.value === "no"}
                          onChange={() => field.onChange("no")}
                          required
                        /> 
                        <span className="checkmark"></span>
                        No
                      </label>
                    </>
                  )}
                  defaultValue=""
                />
                {errors?.drivenBefore && (
                  <p style={{ color: "red" }}>{errors?.drivenBefore?.message}</p>
                )}
              </div>
              <div className="redio-box">
                <h3>What do you prefer?</h3>
                <Controller
                  name="preferredType"
                  control={control}
                  render={({ field }) => (
                    <>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="manual"
                          checked={field.value === "manual"}
                          onChange={() => field.onChange("manual")}
                          required
                        />
                        <span className="checkmark"></span>
                        Manual
                      </label>
                      <label className="redio-btn">
                        <input
                          type="radio"
                          value="auto"
                          checked={field.value === "auto"}
                          onChange={() => field.onChange("auto")}
                          required
                        />
                        <span className="checkmark"></span>
                        Auto
                      </label>
                    </>
                  )}
                  defaultValue=""
                />
                {errors?.preferredType && (
                  <p style={{ color: "red" }}>{errors?.preferredType?.message}</p>
                )}
              </div>
            </div>
            <div className="submitFleid">
              <p>
                <FaLocationDot />
              </p>
              <Controller
                name="postcode"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="ENTER POSTCODE PREFIX E.G. CV6"
                    className="your-class"
                    required
                  />
                )}
                defaultValue=""
              />
              {errors?.location && (
                <p style={{ color: "red" }}>{errors?.location?.message}</p>
              )}
              <button type="submit">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
