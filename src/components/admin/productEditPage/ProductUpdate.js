import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import ProductService from "../../../services/ProductService";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
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
import ProductSizeService from "../../../services/ProductSizeService";
import ColorService from "../../../services/ColorService";

export default function ProductUpdate({ product }) {
  const [open, setOpen] = useState(false);
  const [productSizes, setProductSizes] = useState([]);
  const [productColors, setProductColors] = useState([]);
  
  const getCategories = () => {
    let categoryService = new CategoryService();
    categoryService.getAllCategory()
    .then((result) => setCategories(result.data.data));
  }

  const getBrands = () => {
    let brandService = new BrandService();
    brandService.getAllBrands().then((result) => setBrands(result.data.data));
  }

  const getProductSizes = () => {
    let productSizeService = new ProductSizeService();
    productSizeService.getAll().then((result) => setProductSizes(result.data.data));
  }

  const getColors = () => {
    let colorService = new ColorService();
    colorService.getAll().then((result) => setProductColors(result.data.data));
  }

  const formik = useFormik({
    initialValues: {
      id: product?.id,
      name: product?.name,
      categoryId: product?.category.id,
      brandId: product?.brand.id,
      unitsInStocks: product?.unitsInStocks,
      description: product?.description,
      price: product?.price,
    },
    // validationSchema: validationRules,
    onSubmit: (product) => {
      let productService = new ProductService();
      productService
        .update(product)
        .then((result) => toast.success(result.data.message))
        .catch("HATA!");
    },
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    let brandService = new BrandService();

    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
    brandService.getAllBrands().then((result) => setBrands(result.data.data));
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
              content="Güncelle"
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
