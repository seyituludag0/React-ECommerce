import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import UserAddressService from "../../services/UserAddressService";
import CityService from "../../services/CityService";
import DistrictService from "../../services/DistrictService";
import { Button, Dropdown, Input, TextArea, Card, Form, Modal, Icon } from "semantic-ui-react";
import { toast } from "react-toastify";
import validationRules from "./validationRules";

export default function AddressUpdate({ address }) {
  const [open, setOpen] = useState(false);

  let userAddressService = new UserAddressService();
  let cityService = new CityService();
  let districtService = new DistrictService();

  const userId  = localStorage.getItem("userId");

  const myStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65rem",
    height: "45rem",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      id:            address?.id,
      customerId:    userId,
      firstName:     address?.firstName,
      lastName:      address?.lastName,
      phoneNumber:   address?.phoneNumber,
      cityId:        address?.city.id,
      districtId:    address?.district.id,
      neighbourhood: address?.neighbourhood,
      openAddress:   address?.openAddress,
      addressTitle:  address?.addressTitle,
    },
    // validationSchema: validationRules,
    onSubmit: (address) => {
        userAddressService.update(address).then((result)=>toast.success(result.data.message));
    },
  });

  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const selectedCityId = formik.values.cityId


  const getCities = () => {
    cityService.getAll().then((result)=>setCities(result.data))
  }

  const getDistricts = (cityId) => {
    districtService.getDistrictsWithCityId(cityId).then((result)=>setDistricts(result.data))
  }

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const districtOption = districts.map((district, index) => ({
    key: index,
    text: district.name,
    value: district.id,
  }));


  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };


  return (
    <div>
      <Icon name='pencil' />
      <Modal
        style={myStyle}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button style={{backgroundColor:"transparent"}}>Güncelle</Button>}
      >
        <Modal.Header>Adres Bilgilerini Güncelle</Modal.Header>
        <Modal.Description>
        <Form onSubmit={formik.handleSubmit}>
              <Form.Field>
                  <Input
                    placeholder="Ad"
                    error={Boolean(formik.errors.firstName)}
                    value={formik.values.firstName}
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.firstName}
                    </div>
                  )}
                </Form.Field>
                <Form.Field>
                  <Input
                    placeholder="Soyad"
                    error={Boolean(formik.errors.lastName)}
                    value={formik.values.lastName}
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.lastName && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.lastName}
                    </div>
                  )}
                </Form.Field>
                <Form.Field>
                  <Input
                    placeholder="Telefon Numarası"
                    error={Boolean(formik.errors.phoneNumber)}
                    value={formik.values.phoneNumber}
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.phoneNumber && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    clearable
                    item
                    placeholder="İl"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "cityId")
                    }
                    onBlur={formik.onBlur}
                    id="cityId"
                    value={formik.values.cityId}
                    options={cityOption}
                    onOpen={()=>getCities()}
                  />
                  {formik.errors.cityId && formik.touched.cityId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.cityId}
                    </div>
                  )}
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    clearable
                    item
                    placeholder="İlçe"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "districtId")
                    }
                    onBlur={formik.onBlur}
                    id="districtId"
                    value={formik.values.districtId}
                    options={districtOption}
                    onOpen={()=>getDistricts(selectedCityId)}
                  />
                  {formik.errors.districtId && formik.touched.districtId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.districtId}
                    </div>
                  )}
                </Form.Field>
                <Form.Field>
                  <Input
                    placeholder="Mahalle"
                    type="text"
                    error={Boolean(formik.errors.neighbourhood)}
                    value={formik.values.neighbourhood}
                    name="neighbourhood"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.neighbourhood && formik.touched.neighbourhood && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.neighbourhood}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <Input
                    placeholder="Açık Adres"
                    type="text"
                    error={Boolean(formik.errors.openAddress)}
                    value={formik.values.openAddress}
                    name="openAddress"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.openAddress && formik.touched.openAddress && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.openAddress}
                    </div>
                  )}
                </Form.Field>

                <Form.Field>
                  <Input
                    placeholder="Adres Başlığı"
                    type="text"
                    error={Boolean(formik.errors.addressTitle)}
                    value={formik.values.addressTitle}
                    name="addressTitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.addressTitle && formik.touched.addressTitle && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.addressTitle}
                    </div>
                  )}
                </Form.Field>
               
                
                <Button content="Güncelle"
                  labelPosition="right"
                  icon="pencil"
                  primary
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
              </Form>
        </Modal.Description>
      </Modal>
    </div>
  );
}
