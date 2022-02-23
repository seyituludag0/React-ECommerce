import React, { useState, useEffect } from "react";
import "./product.css";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import search from "../product/img/icon/search.png";
import favoriteAdded from "../product/img/icon/favoriteAdded.png";
import compare from "../product/img/icon/compare.png";
import { Link } from "react-router-dom";
import { Grid, Pagination } from "semantic-ui-react";
import FilterProduct from "../../layouts/filterProduct/FilterProduct";
import FavoriteService from "../../services/FavoriteService";
import { toast } from "react-toastify";
import empytFavorite from "./img/icon/empytFavorite.png";
import CommentService from "../../services/CommentService";
import { Rating } from "@mui/material";
import ProductsPageCategoryList from "../../layouts/productsPageCategoryList/ProductsPageCategoryList";
import SingleProduct from "./SingleProduct";
import { addToComparison, removeToComparison } from "../../store/actions/compareAction"
import CompareTable from "./CompareTable";
import CampaignTopBanner from "../../layouts/campaigns/campaignbanners/CampaignTopBanner";

export default function AllProduct() {
  let productService = new ProductService();
  let categoryService = new CategoryService();
  let favoriteService = new FavoriteService();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [comments, setComments] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    productService
      .getAllPagination(activePage, pageSize)
      .then((result) => setProducts(result.data.data));
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
  }, [activePage, pageSize]);


  const handleOnFilter = (filter) => {
    setFilter(filter);
    console.log("filter: ", filter);
  };


  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  
  const getProducts = (categoryId) => {
    let url = "http://localhost:8080/api/products/";
    if(categoryId){
        url += "getProductByCategoryId?categoryId=" + categoryId
    }
    productService.getProductByCategoryId(categoryId).then((result)=>setProducts(result.data.data))
  };

  const changeCategory = (category) => {
    getProducts(category.id);
  }

  return (
    <>
    <CompareTable />
      <Grid columns={3} padded>
        <Grid.Column width={3} style={{ background: "#d1d8e0" }}>
          <FilterProduct handleOnFilter={handleOnFilter} urun={products} />
        </Grid.Column>
        <Grid.Column width={10}>
          <section className="my-products">
            <div className="container">
            <CampaignTopBanner />
              <ProductsPageCategoryList changeCategory={changeCategory}/>
              <div className="row product__filter">
                <h3 style={{ textAlign: "center" }}>Tüm Ürünler</h3>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
                  {products.map((product, key) => (
                    <SingleProduct productss={product} key={key}
                    addToCompare={addToComparison}
                    removeToCompare={removeToComparison}
                    />
                  ))}
                </div>
              </div>
            </div>
            {products.length > 0 ? (
              <div className="pageable">
                <Pagination
                  activePage={activePage}
                  onPageChange={onChange}
                  totalPages={10}
                />
              </div>
            ) : (
              <>
                <div>Maalesef bu sayfa da gösterilecek ürün yok</div>
                <Pagination
                  activePage={activePage}
                  onPageChange={onChange}
                  totalPages={10}
                />
              </>
            )}
          </section>
        </Grid.Column>
      </Grid>
    </>
  );
}
