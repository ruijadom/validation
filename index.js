const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

const newUser = {
  email: '',
  password: '',
  confirmPassword: '',
  handle: ''
};

let errors = {};

if (isEmpty(newUser.email)) {
  errors.email = "Email must not be empty";
} else if (!isEmail(newUser.email)) {
  errors.email = "Must be a valid email address";
}

if (isEmpty(newUser.password)) errors.password = "Must not be empty";
if (newUser.password !== newUser.confirmPassword)
  errors.confirmPassword = "Password must match";
if (isEmpty(newUser.handle)) errors.handle = "Must not be empty";

if (Object.keys(errors).length > 0) return res.status(400).json(errors);

console.log(errors)