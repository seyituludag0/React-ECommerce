import * as Yup from "yup";

const validationRules = Yup.object({
  keyword:Yup.string().max(5).required(),
});
export default validationRules;