import React, { useState, useEffect } from "react";
import "./sock.css";
import SockService from "../../services/SockService";
import CategoryService from "../../services/CategoryService";
import search from "../sock/img/icon/search.png";
import favoriteAdded from "../sock/img/icon/favoriteAdded.png";
import compare from "../sock/img/icon/compare.png";
import { Link } from "react-router-dom";
import { Grid, Pagination } from "semantic-ui-react";
import FilterSock from "../../layouts/filterSock/FilterSock";
import FavoriteService from "../../services/FavoriteService";
import { toast } from "react-toastify";
import empytFavorite from "./img/icon/empytFavorite.png";
import CommentService from "../../services/CommentService";
import { Rating } from "@mui/material";
import GlobalAddToCartButton from "../../layouts/globalAddToCartButton/GlobalAddToCartButton";
import AllSockPageAddToCartButton from "../../layouts/allSockPageAddToCartButton/AllSockPageAddToCartButton";
import SocksPageCategoryList from "../../layouts/socksPageCategoryList/SocksPageCategoryList";
import SingleSock from "./SingleSock";
import { addToComparison, removeToComparison } from "../../store/actions/compareAction"
import CompareTable from "./CompareTable";


export default function AllSock() {
  let sockService = new SockService();
  let categoryService = new CategoryService();
  let favoriteService = new FavoriteService();

  const [socks, setSocks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let commentService = new CommentService();
    commentService.getBySockId(19)
      .then((result) => setComments(result.data.data));
  }, []);

  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    sockService
      .getAllPagination(activePage, pageSize)
      .then((result) => setSocks(result.data.data));
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
  }, [activePage, pageSize]);

  const handleAddFavorite = (sockId) => {
    favoriteService
      .addFavorites(106, sockId)
      .then((result) => toast.success(result.data.message));
  };

  const removeFromFavorite = (sockId) => {
    // favoriteService.addFavorites(60, sockId).then((result)=>toast.success("Favorilerinizden kaldırıldı"))
    favoriteService
      .existsByCustomerIdAndSockId(60, sockId)
      .then((result) => toast.success("Favorilerinizden kaldırıldı"));
  };

  const handleOnFilter = (filter) => {
    setFilter(filter);
    console.log("filter: ", filter);
  };


  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };
  
  const getProducts = (categoryId) => {
    let url = "http://localhost:8080/api/socks/";
    if(categoryId){
        url += "getSockByCategoryId?categoryId=" + categoryId
    }
    sockService.getSockByCategoryId(categoryId).then((result)=>setSocks(result.data.data))
  };

  const changeCategory = (category) => {
    getProducts(category.id);
  }

  return (
    <>
    <CompareTable />
      <Grid columns={3} padded>
        <Grid.Column width={3} style={{ background: "#d1d8e0" }}>
          <FilterSock handleOnFilter={handleOnFilter} corap={socks} />
        </Grid.Column>
        <Grid.Column width={10}>
          <section className="my-products">
            <div className="container">
              <SocksPageCategoryList changeCategory={changeCategory}/>
              <div className="row product__filter">
                <h3 style={{ textAlign: "center" }}>Tüm Ürünler</h3>
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 new-arrivals">
                  {socks.map((sock) => (
                    <SingleSock products={sock}
                    addToCompare={addToComparison}
                    removeToCompare={removeToComparison}
                    />
                  ))}
                </div>
              </div>
            </div>
            {socks.length > 0 ? (
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
