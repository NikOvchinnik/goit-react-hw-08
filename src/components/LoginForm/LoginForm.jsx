import { ErrorMessage, Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import style from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const initialValue = {
  email: "",
  password: "",
};

const registrSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Minimal 8 symbols!")
    .max(50, "Max 50 symbols!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const idInputEmail = useId();
  const idInputPassword = useId();

  const handleSubmit = (values, { resetForm }) => {
    const userData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(
      login(userData)
    )
      .unwrap()
      .then(() => {
       toast.success("Login success");
      })
      .catch(() => {
        toast.error("Login error");
      });

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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
