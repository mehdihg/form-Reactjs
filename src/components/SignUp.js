import React, { useEffect, useState } from "react";
import desk from "../img/Desk.jpg";
import styles from "../styles/SignUp.module.css";
import { FaUserAlt, FaEnvelope, FaLock, FaUnlockAlt } from "react-icons/fa";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  const [input, setInput] = useState(false);

  useEffect(() => {
    setErrors(validate(data, input, "signup"));
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
      notify("success", "Signed Up Successfully");
    }
  };
  const inputHandler = () => {
    setInput(!input);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2>Sign Up</h2>
        <div className={styles.formInput}>
          <i>
            <FaUserAlt />
          </i>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            placeholder="Name"
            onFocus={focusHandler}
          />
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
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
        <div className={styles.formInput}>
          <i>
            <FaUnlockAlt />
          </i>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formCheckBox}>
          <input
            type="checkbox"
            name="input"
            value={input}
            onChange={inputHandler}
            onClick={focusHandler}
          />
          <p>I agree all statements in Terms of services</p>
        </div>
        {errors.input && touch.input && (
          <span className={styles.isAcceptedErr}>{errors.input}</span>
        )}
        <div className={styles.formButton}>
          <button
            className={styles.signup}
            type="submit"
            disabled={Object.keys(errors).length}
          >
            Register
          </button>
          <p>Or</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
      <div className={styles.coverContainer}>
        <img src={desk} alt="signup"/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
