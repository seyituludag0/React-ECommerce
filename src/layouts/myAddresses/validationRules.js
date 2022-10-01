import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationRules = Yup.object({
  firstName:     Yup.string().required("Adınızı giriniz"),
  lastName:      Yup.string().required("Soyadınızı giriniz"),
  phoneNumber:   Yup.string().matches(phoneRegExp, "Telefon numarası geçerli değil").min(11).required("Telefon numarası giriniz"),
  cityId:        Yup.string().required("İl seçiniz"),
  districtId:    Yup.string().required("İlçe seçiniz"),
  neighbourhood: Yup.string().required("İlçe seçiniz"),
  openAddress:   Yup.string().required("İlçe seçiniz"),
  addressTitle:  Yup.string().required("İlçe seçiniz"),
});
export default validationRules;
