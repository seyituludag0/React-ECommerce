import { useFormik } from "formik";
import ProductImageUpload from "../../ProductImageUpload"
import React, { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
import ProductSizeService from "../../../services/ProductSizeService";
import ColorService from "../../../services/ColorService";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import validationRules from "./validationRules"


export default function ProductAdd() {

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [productColors, setProductColors] = useState([]);
  let { id } = useParams();
  
  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: "",
      brandId: "",
      unitsInStocks: "",
      description: "",
      price: "",
    },
    validationSchema: validationRules,
    onSubmit: (product) => {
        let productService = new ProductService();
        productService.add(product).then((result)=>toast.success(result.data.message)).catch("HATA!")
    },
  });


  
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

  const productSizeOption = productSizes.map((productSize, index) => ({
    key: index,
    text: productSize.size,
    value: productSize.id,
  }));

  const productColorOption = productColors.map((productColor, index) => ({
    key: index,
    text: productColor.name,
    value: productColor.id,
  }));

 

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div className="my-div">
      <Grid.Column>
        <div className="xxxxxxx" style={{marginTop:"-4rem"}}>
          <Card fluid style={{height:"45rem"}}>
            <Card.Content header="Ürün Ekle" />
            <Card.Content>
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
                    onOpen={()=>getCategories()}
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
                    onOpen={()=>getBrands()}
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
                    placeholder="Beden"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "productSizeId")
                    }
                    onBlur={formik.onBlur}
                    id="productSizeId"
                    value={formik.values.productSizeId}
                    options={productSizeOption}
                    onOpen={()=>getProductSizes()}
                  />
                  {formik.errors.productSizeId && formik.touched.productSizeId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.productSizeId}
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
                      handleChangeSemantic(data.value, "productColorId")
                    }
                    onBlur={formik.onBlur}
                    id="productColorId"
                    value={formik.values.productColorId}
                    options={productColorOption}
                    onOpen={()=>getColors()}
                  />
                  {formik.errors.productColorId && formik.touched.productColorId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.productColorId}
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
                      {formik.errors.description &&
                        formik.touched.description && (
                          <div className={"ui pointing red basic label"}>
                            {formik.errors.description}
                          </div>
                        )}
                    </Form.Field>
                <Button content="Ekle"
                  labelPosition="right"
                  icon="add"
                  primary
                  type="submit"
                  style={{ marginLeft: "20px" }}
                />
              </Form>
            </Card.Content>
          </Card>
        </div>
      </Grid.Column>
    </div>
  );
}
