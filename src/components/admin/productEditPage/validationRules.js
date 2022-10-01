import * as Yup from "yup";

const validationRules = Yup.object({
  name: Yup.string().required(),
  categoryId: Yup.string().required(),
  brandId: Yup.number().required(),
  productSizeId:Yup.string().min(5).required(),
  productColorId: Yup.number().required(),
  unitsInStocks:Yup.number().required(),
  description:Yup.string().min(30).required(),
  price: Yup.number().required()
});
export default validationRules;