export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z]+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Please enter a valid name.";
  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Please enter a valid password.";

  return null;
};
