import * as yup from "yup";
import "yup-phone"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationRules = yup.object({
  firstName: yup.string().required("Adınızı giriniz"),
  lastName: yup.string().required("Soyadınızı giriniz"),
  userName: yup.string().required("Kullanıcı adını giriniz"),
  phoneNumber: yup.string().matches(phoneRegExp, "Telefon numarası geçerli değil").min(11).required("Telefon numaranızı giriniz"),
  email: yup.string().email().required("Email adresinizi giriniz"),
  password: yup.string().required("Şifrenizi giriniz"),
});
export default validationRules;
