import * as yup from "yup";

const validationRules = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default validationRules;
