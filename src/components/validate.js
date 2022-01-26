export const validate = (data, input, type) => {
  const errors = {};
  if (type === "login") {
    if (!data.email) {
      errors.email = "Email Required";
    } else {
      delete errors.email;
    }
    if (!data.password) {
      errors.password = "Password Required";
    } else {
      delete errors.password;
    }
  }

  if (type === "signup") {
    if (!data.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email is invalid";
    } else {
      delete errors.email;
    }
    if (!data.password) {
      errors.password = "Password Required";
    } else if (data.password.length < 6) {
      errors.password = "Password Must Be More Than 5 Letter";
    } else {
      delete errors.password;
    }
    if (!data.name.trim()) {
      errors.name = "Name Required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword Required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "ConfirmPassword Not Same";
    } else {
      delete errors.confirmPassword;
    }
    if (input) {
      delete errors.input;
    } else {
      errors.input = "Checkbox Required";
    }
  }
  return errors;
};
