import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid email!")
    .required("Email is required!"),
  password: Yup.string().trim().required("Password is required!"),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("First name is required!"),
  lastName: Yup.string().trim().required("Last name is required!"),
  email: Yup.string()
    .trim()
    .email("Invalid email!")
    .required("Email is required!"),
  password: Yup.string().trim().required("Password is required!"),
  confirmPassword: Yup.string()
    .trim()
    .required("Confirm Password is required!"),
  dateOfBirth: Yup.string().trim().required("Confirm Password is required!"),
  uvcCode: Yup.string().trim().required("UVC Code is required!"),
  constituencyId: Yup.string().trim().required("Constituency is required!"),
});
