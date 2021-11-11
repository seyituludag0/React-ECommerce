import React, { useState, useEffect } from "react";
// import * as Yup from "yup";
import { useFormik } from "formik";
import CategoryService from "../../services/CategoryService";
import BrandService from "../../services/BrandService";
import SockService from "../../services/SockService";
import { Grid, Button, Dropdown, Form, Input } from "semantic-ui-react";

export default function FilterSock({ handleOnFilter }) {

    let sockService = new SockService();
    let categoryService = new CategoryService();
    let brandService = new BrandService();

    const [coraps, setCoraps] = useState([])

//   const sockFilterSchema = Yup.object().shape({
//     filterText: Yup.string()
//       .min(2)
//       .max(25)
//       .required("Bu alan boş geçilemez. Lütfen doldurunuz"),
//   });


  
  const formik = useFormik({
    initialValues: {
      filterText: "çorap",
      categoryId: undefined,
      brandId: undefined,
    //   colorId: undefined,
    },
    // validationSchema: sockFilterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      sockService.getByFilter(values)
        .then((result) => setCoraps(result.data.data))
        handleOnFilter(values)
    },
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
//   const [color, setColors] = useState([]);

  useEffect(()=>{
      categoryService.getAllCategory().then((result)=>setCategories(result.data.data))
      brandService.getAllBrands().then((result)=>setBrands(result.data.data))
      // console.log(coraps);
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









  return (
      
    <Grid padded className="form-xxx">
        
    <Grid.Column>
          
        <Form
         onSubmit={formik.handleSubmit}>
          <Form.Field >
          <Input
          style={{width:"14rem"}}
          id="filterText"
        name="filterText"
        placeholder="Ara"
        icon="search"
        iconPosition="left"
      />
          </Form.Field>
              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Kategoriler"
                  search
                  selection
                  multiple
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "categoryId")
                  }
                  onBlur={formik.onBlur}
                  id="categoryId"
                  defaultValue={[]}
                //   value={formik.values.categoryId}
                  options={categoryOption}
                />
                {formik.errors.categoryId &&
                  formik.touched.categoryId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.categoryId}
                    </div>
                  )}
              </Form.Field>

              <Form.Field>
                <Dropdown
                  clearable
                  item
                  placeholder="Markalar"
                  search
                  selection
                  multiple
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "brandId")
                  }
                  onBlur={formik.onBlur}
                  id="brandId"
                  defaultValue={[]}
                //   value={formik.values.brandId}
                  options={brandOption}
                />
                {formik.errors.brandId && formik.touched.brandId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.brandId}
                  </div>
                )}
              </Form.Field>

              <Button
                content="Filtrele"
                labelPosition="right"
                icon="search"
                primary
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Form>
          
    </Grid.Column>
  </Grid>

  )
}
