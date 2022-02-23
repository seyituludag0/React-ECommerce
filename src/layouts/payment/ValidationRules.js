import * as yup from "yup";

const validationRules = yup.object({
  cardNumber: yup.number().required(),
  fullName: yup.string().required(),
  expirationDate: yup.date().required(),
  cvv: yup.number().required()
});
export default validationRules;
