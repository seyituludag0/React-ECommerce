import * as yup from "yup";

const validationRules = yup.object({
  userName: yup.string().required(),
  password: yup.string().required()
});
export default validationRules;
