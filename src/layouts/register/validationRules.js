import * as yup from "yup";
import "yup-phone"

const validationRules = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string().required(),
  phoneNumber: yup.string().phone(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export default validationRules;
