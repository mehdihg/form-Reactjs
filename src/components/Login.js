import React, { useEffect, useState } from "react";
import styles from "../styles/SignUp.module.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

import login from "../img/loggin.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [input, setInput] = useState(false);

  useEffect(() => {
    setErrors(validate(data, input, "login"));
  }, [data, touch, input]);
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "Loged In Successfully");
    } else {
      notify("error", "Please try again");
    }
  };
  const inputHandler = () => {
    setInput(!input);
  };

  return (
    <div className={styles.container}>
      <div className={styles.coverContainer}>
        <img src={login} alt="login"/>


      </div>
      <form
        onSubmit={submitHandler}
        className={`${styles.formContainer} ${styles.formContainerLogin}`}
      >
        <h2>Login</h2>

        <div className={styles.formInput}>
          <i>
            <FaEnvelope />
          </i>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="Email"
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formInput}>
          <i>
            <FaLock />
          </i>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            placeholder="Password"
            onFocus={focusHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.formCheckBox}>
          <input
            type="checkbox"
            name="input"
            value={input}
            onChange={inputHandler}
            onClick={focusHandler}
          />
          <p>Remember me</p>
        </div>
        {errors.input && touch.input && (
          <span className={styles.isAcceptedErr}>{errors.input}</span>
        )}
        <div className={styles.formButton}>
          <button className={styles.signup} type="submit">
            Login
          </button>
          <p>Or</p>
          <Link to="/signup">Register</Link>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
