import Login from './Login';
import { withFormik } from "formik"
import * as yup from "yup"

const LoginWrapper = Login

const LoginValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
})

export default withFormik({
    // Handles our submission
    handleSubmit: (values, { setSubmitting }) => {
    // This is where you could send the submitted values to the backend
    console.log("Submitted Email:", values.email)
    console.log("Submitted Password:", values.password)
    // Simulates the delay of a real request
    setTimeout(() => setSubmitting(false), 3 * 1000)
  },
  validationSchema: LoginValidation,
})(LoginWrapper)
