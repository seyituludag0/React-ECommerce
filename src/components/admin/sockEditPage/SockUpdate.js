import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import SockService from "../../../services/SockService";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
import ColorService from "../../../services/ColorService";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  Grid,
  Input,
  TextArea,
  Modal,
  Icon,
  Dropdown,
} from "semantic-ui-react";

export default function SockUpdate({ sock }) {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: sock?.id,
      name: sock?.name,
      categoryId: sock?.category.id,
      brandId: sock?.brand.id,
      colorId: sock?.color.id,
      bodySize: sock?.bodySize,
      unitsInStocks: sock?.unitsInStocks,
      description: sock?.description,
      price: sock?.price,
    },
    // validationSchema: validationRules,
    onSubmit: (sock) => {
      let sockService = new SockService();
      sockService
        .update(sock)
        .then((result) => toast.success(result.data.message))
        .catch("HATA!");
    },
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    let brandService = new BrandService();
    let colorService = new ColorService();

    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
    brandService.getAllBrands().then((result) => setBrands(result.data.data));
    colorService.getAllColor().then((result) => setColors(result.data.data));
  }, []);

  const categoryOption = categories.map((category, index) => ({
    key: index,
    text: category.name,
    value: category.id,
  }));

  const brandOption = brands.map((brand, index) => ({
    key: index,
    text: brand.name,
    value: brand.id,
  }));

  const colorOption = colors.map((color, index) => ({
    key: index,
    text: color.name,
    value: color.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
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

  return (
    <div>
      <Modal
        style={myStyle}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button style={{backgroundColor:"transparent"}}>Güncelle</Button>}
      >
        <Modal.Header>Ürün Güncelle</Modal.Header>
        <Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Input
                placeholder="Ürün Adı"
                error={Boolean(formik.errors.name).toString()}
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.name}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Kategori"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "categoryId")
                }
                onBlur={formik.onBlur}
                id="categoryId"
                value={formik.values.categoryId}
                options={categoryOption}
              />
              {formik.errors.categoryId && formik.touched.categoryId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.categoryId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Marka"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "brandId")
                }
                onBlur={formik.onBlur}
                id="brandId"
                value={formik.values.brandId}
                options={brandOption}
              />
              {formik.errors.brandId && formik.touched.brandId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.brandId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Renk"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "colorId")
                }
                onBlur={formik.onBlur}
                id="colorId"
                value={formik.values.colorId}
                options={colorOption}
              />

              {formik.errors.colorId && formik.touched.colorId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.colorId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Beden/Numara"
                error={Boolean(formik.errors.bodySize).toString()}
                value={formik.values.bodySize}
                name="bodySize"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.bodySize && formik.touched.bodySize && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.bodySize}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Stok Adedi"
                type="number"
                error={Boolean(formik.errors.unitsInStocks).toString()}
                value={formik.values.unitsInStocks}
                name="unitsInStocks"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.unitsInStocks && formik.touched.unitsInStocks && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.unitsInStocks}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Fiyat"
                type="number"
                error={Boolean(formik.errors.price).toString()}
                value={formik.values.price}
                name="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.price && formik.touched.price && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.price}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <TextArea
                placeholder="Açıklama"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Ekle"
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
