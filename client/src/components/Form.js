import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your Firstname")
    .required("Firstname is required"),

  lastName: yup.string("Enter your Lastname").required("Lastname is required"),

  phone: yup
    .number("Enter your Phone number")
    .min(9, "Phone number should be of maximum 12 characters length")
    .required("Phone number is required"),
});

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("https://user-form-mern.herokuapp.com/api/user/addUser", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      window.location.reload();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="Firstname"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Lastname"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default WithMaterialUI;
