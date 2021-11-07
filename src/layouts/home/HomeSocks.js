import React, { useState, useEffect } from "react";
import "./home.css";
import SockService from "../../services/SockService";
import FavoriteService from "../../services/FavoriteService";
import CategoryService from "../../services/CategoryService";
import { Rating } from "semantic-ui-react";
import AddToCartButton from "../cartButton/AddToCartButton";
import search from "../../components/sock/img/icon/search.png";
import compare from "../../components/sock/img/icon/compare.png";
import { Link } from "react-router-dom";
import { CartContextValue } from "../../contexts/ContextProvider";
import { HttpPostwithToken } from "../../configs/HttpConfig";
import { useUserContext } from "../../contexts/UserContext"
import { toast } from "react-toastify";



export default function HomeSocks() {
  const[state] = useUserContext();

  const [mainSocks, setMainSocks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartData, dispatch] = CartContextValue();
  let sockService = new SockService();
  let categoryService = new CategoryService();
  let favoriteService = new FavoriteService();


  useEffect(() => {
    sockService.getMainSocks().then((result) => setMainSocks(result.data.data));
    categoryService.getAllCategory().then((result) => setCategories(result.data.data));
  }, []);

  const handleAddFavorite = (sockId) => {
    // favoriteService.addFavorites(106, sockId).then((result) => toast.success(result.data.message));
    favoriteService
      .existsByCustomerIdAndSockId(106, sockId)
      .then((result) => toast.success(result.data.message));
  };

  

  const addCartApi=(sockObj)=>{
		let obj = {
			"sockId":sockObj.id,			
			"quantity":1,
			"price":sockObj.price
			
		}
		HttpPostwithToken("addToCart/addSock", obj)
		.then((res)=>{		
      console.log("obj", obj);
			res.json().then(data=>{
				if(res.ok){
					dispatch({
						"type":"add_cart",
						"data":data
					})
					toast.success("Ürün sepetinize eklendi")
				}else{
					toast.error(data.message)
				}
			})     
		}).catch(function(res){
			console.log("Error ",res);
			//alert(error.message);
		}
		)
	}

  const getProducts = (categoryId) => {
    let url = "http://localhost:8080/api/socks/";
    if(categoryId){
        url += "getSockByCategoryId?categoryId=" + categoryId
    }
    sockService.getSockByCategoryId(categoryId).then((result)=>setMainSocks(result.data.data))
  };

  const changeCategory = (category) => {
    getProducts(category.id);
  }

  return (
    <div>
     
      <section className="tabs_pro py-md-5 pt-sm-3 pb-5">
        <h5 className="head_agileinfo text-center text-capitalize pb-5">
          <span style={{ color: "#4043bf" }}>B</span>aşlıca Ürünlerimiz
        </h5>
        <div className="tabs tabs-style-line pt-md-5">
          <nav className="container">
            <ul
              id="clothing-nav"
              className="nav nav-tabs tabs-style-line"
              role="tablist"
            >
              {categories.map((category, key) => (
                <li className="nav-item" key={key} 
                style={{cursor: "pointer"}}
                onClick={()=> changeCategory(category)}>
                  <a className="nav-link active">{category.name} Çorapları</a>
                </li>
              ))}
            </ul>
          </nav>
          <div style={{ display: "flex" }}>
            {mainSocks.map((sock, key) => (
              <div className="product__item" key={key}>
                <div className="product__item__pic set-bg">
                  <img src={sock.sockImage?.image1} alt={sock.name} />
                  <ul className="product__hover">
                    <li>
                      <a onClick={() => handleAddFavorite(sock.id)}>
                        <img
                          id="myFavorite"
                          src="https://res.cloudinary.com/uludag-sock/image/upload/v1632920818/empytFavorite_gmr0mu.png"
                          // onClick={() => alert("Favorited")}
                          alt="favorite-icon"
                        />
                        <span style={{ left: "-8rem" }}>Favorilerime Ekle</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={compare} alt="compare-icon" />
                        <span>Karşılaştır</span>
                      </a>
                    </li>
                    <li>
                      <Link to={`/sock-detail/${sock.id}`}>
                        <img src={search} alt="search-icon" />
                        <span style={{ left: "-7rem" }}>Detayları Gör</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6> {sock.name} </h6>
                  <a onClick={() => addCartApi(sock)} href="javascript:void(0)">
                    + Sepete Ekle
                  </a>
                  <div className="rating">
                    <Rating icon="star" defaultRating={3} maxRating={5} />
                  </div>
                  <h5> {sock.price}₺</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-4">
                      <input type="radio" id="pc-4" />
                    </label>
                    <label className="active black" htmlFor="pc-5">
                      <input type="radio" id="pc-5" />
                    </label>
                    <label className="grey" htmlFor="pc-6">
                      <input type="radio" id="pc-6" />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
