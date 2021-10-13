import * as Yup from "yup";

const ValidationRules = Yup.object({
  fullName: Yup.string().required(),
  email: Yup.string().required().email(),
  message:Yup.string().min(10).required()
});
export default ValidationRules;