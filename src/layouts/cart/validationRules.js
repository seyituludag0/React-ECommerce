import * as Yup from "yup";

const validationRules = Yup.object({
  couponCode: Yup.string()
    .length(10, "Kupon Kodu tam olarak 10 karakter olmalıdır")
    .uppercase()
    .required("Kupon kodunu giriniz"),
});
export default validationRules;
