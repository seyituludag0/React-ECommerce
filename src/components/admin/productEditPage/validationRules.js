import * as Yup from "yup";

const validationRules = Yup.object({
  name: Yup.string().required(),
  categoryId: Yup.string().required(),
  brandId: Yup.number().required(),
  colorId: Yup.number().required(),
  bodySize:Yup.string().min(5).required(),
  unitsInStocks:Yup.number().required(),
  description:Yup.string().min(30).required(),
  price: Yup.number().required()
});
export default validationRules;