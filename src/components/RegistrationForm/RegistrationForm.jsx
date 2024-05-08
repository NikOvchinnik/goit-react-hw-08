import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import style from "./RegistrationForm.module.css"
import {register} from "../../redux/auth/operations"

const initialValue = {
  name: "",
  email: "",
  password: "",
};

const registrSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimal 3 symbols!")
    .max(50, "Max 50 symbols!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Minimal 8 symbols!")
    .max(50, "Max 50 symbols!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const idInputName = useId();
  const idInputEmail = useId();
  const idInputPassword = useId();

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(register(userData))
      .unwrap()
      .then(() => console.log("Registration success!"))
      .catch (() => console.log("User with this login already exists !"));
    
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={registrSchema}
    >
      <Form className={style.contactForm}>
        <div className={style.inputContainer}>
          <label htmlFor={idInputName}>Name</label>
          <Field type="text" name="name" id={idInputName} />
          <ErrorMessage name="name" component="p" className={style.errorText} />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor={idInputEmail}>Email</label>
          <Field type="email" name="email" id={idInputEmail} />
          <ErrorMessage
            name="email"
            component="p"
            className={style.errorText}
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor={idInputPassword}>Password</label>
          <Field type="password" name="password" id={idInputPassword} />
          <ErrorMessage
            name="password"
            component="p"
            className={style.errorText}
          />
        </div>

        <button type="submit" className={style.btnContactForm}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
