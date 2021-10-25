import React, { useEffect, useState } from "react";
import "./sock-detail.css";
import { useParams } from "react-router";
import SockService from "/react/sock-ecommerce/src/services/SockService";
import payment from "../img/icon/payment.png";
import ImageCarousel from "../../../layouts/carousel/ImageCarousel";
import { Breadcrumb, Icon } from "semantic-ui-react";
// import ImageSlider from "../../../layouts/carousel/ImageSlider";
import Comment from "../../../layouts/comments/Comment";
import CommentBulb from "../../../layouts/comments/CommentBulb";
import Button from '@mui/material/Button';
import { Delete } from "@material-ui/icons"

export default function SockDetail() {
  const [sock, setSock] = useState(null);
  let { sockId } = useParams();

  useEffect(() => {
    let sockService = new SockService();
    sockService.getBySockId(sockId).then((result) => setSock(result.data.data));
  }, []);

  const sections = [
    { key: "Ürünler", content: "Ürünler", link: true },
    { key: "Ürün Detayı", content: "Ürün Detayı", link: true, active: true },
  ];

  return (
    <div className="sock-detail">
      {localStorage.getItem("token") ? (
        <section className="shop-details">
          <div className="product__details__pic">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__details__breadcrumb">
                    <Breadcrumb
                      icon="right angle"
                      sections={sections}
                      className="siyah"
                    />
                  </div>
                </div>
              </div>

              {/* IMAGES */}

              <div className="row">
                <div className="col-lg-3 col-md-3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-1"
                        role="tab"
                      >
                        <div className="product__thumb__pic set-bg">
                          <img src={sock?.sockImage.image1} alt={sock?.name} />
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-2"
                        role="tab"
                      >
                        <div className="product__thumb__pic set-bg">
                          <img src={sock?.sockImage.image2} alt={sock?.name} />
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-3"
                        role="tab"
                      >
                        <div className="product__thumb__pic set-bg">
                          <img src={sock?.sockImage.image3} alt={sock?.name} />
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-4"
                        role="tab"
                      >
                        <div className="product__thumb__pic set-bg">
                          <img src={sock?.sockImage.image4} alt={sock?.name} />
                        </div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tabs-5"
                        role="tab"
                      >
                        <div className="product__thumb__pic set-bg">
                          <img src={sock?.sockImage.image5} alt={sock?.name} />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-md-9">
                  <div className="tab-content">
                    <ImageCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product__details__content">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="product__details__text">
                    <h4>{sock?.name}</h4>
                    <h3>
                      {sock?.price}₺<span>70.00₺</span>
                    </h3>
                    <p>{sock?.description}</p>
                    <div className="product__details__option">
                      {/* <div className="product__details__option__size">
                      <span>Size:</span>
                      <label for="xxl"
                        >xxl
                        <input type="radio" id="xxl" />
                      </label>
                      <label className="active" for="xl"
                        >xl
                        <input type="radio" id="xl" />
                      </label>
                      <label for="l"
                        >l
                        <input type="radio" id="l" />
                      </label>
                      <label for="sm"
                        >s
                        <input type="radio" id="sm" />
                      </label>
                    </div> */}
                    </div>
                    <div className="product__details__cart__option">
                      <div className="quantity">
                        <div className="pro-qty">
                          <span className="fa fa-angle-up dec qtybtn" />
                          <input type="number" defaultValue={1} min="1" />
                        </div>
                      </div>
                      <a href="/" className="primary-btn">
                        Sepete Ekle
                      </a>
                    </div>
                    <div className="product__details__btns__option">
                      <a href="/">
                        <i className="fa fa-favorite" />
                        FAVORİYE EKLE
                      </a>
                    </div>
                    <CommentBulb sockId={sock?.id} />
                    <br />
                    <div className="alt-menu alt-2">
                      <label htmlFor="dropbox" className="dropbox">
                      <Icon name='comment outline' color="orange" /> Ürünü Değerlendir
                      </label>
                      <input type="checkbox" id="dropbox" />
                      <div id="menu">
                        <Comment sockId={sock?.id} />
                      </div>
                    </div>
                    <br />

                    {/* <div className="product__details__last__option">
                      <h5>
                        <span>Garantili Güvenli Ödeme</span>
                      </h5>
                      <img src={payment} alt="" />
                      <ul style={{ marginBottom: "2rem" }}>
                        <li>
                          <span>Ürün Kodu:</span> 3812912
                        </li>
                        <li>
                          <span>Kategori:</span> {sock?.category.name}
                        </li>
                        <li>
                          <span>Etiket:</span> Clothes, Skin, Body
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>Giriş Yap bi önce</h1>
      )}
    </div>
  );
}
