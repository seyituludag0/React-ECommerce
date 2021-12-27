import React, { useEffect, useState } from "react";
import "./product-detail.css";
import { useParams } from "react-router";
import ProductService from "/react/sock-ecommerce/src/services/ProductService";
import ImageCarousel from "../../../layouts/carousel/ImageCarousel";
import { Breadcrumb, Icon } from "semantic-ui-react";
import ProductOrderService from "/react/sock-ecommerce/src/services/ProductOrderService";
import CommentForm from "../../../layouts/comments/CommentForm";
import CommentBulb from "../../../layouts/comments/CommentBulb";
import GlobalAddToCartButton from "../../../layouts/globalAddToCartButton/GlobalAddToCartButton";
import ProductByIdImages from "../../productByIdImages/ProductByIdImages";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();
  const [canComment, setCanComment] = useState(false);
  let productOrderService = new ProductOrderService();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    let productService = new ProductService();
    onChangeCommentState();
    productService
      .getByProductId(productId)
      .then((result) => setProduct(result.data.data));
  }, []);

  const sections = [
    { key: "Ürünler", content: "Ürünler", link: true },
    { key: "Ürün Detayı", content: "Ürün Detayı", link: true, active: true },
  ];

  const onChangeCommentState = () => {
    productOrderService
      .existsByUserIdAndProductId(productId, userId)
      .then((result) => setCanComment(result.data));
  };

  return (
    <div className="sock-detail">
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
              <ProductByIdImages />
              {/* <div className="col-lg-3 col-md-3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={product?.sockImage.image1} alt={product?.name} />
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
                        <img src={product?.sockImage.image2} alt={product?.name} />
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
                        <img src={product?.sockImage.image3} alt={product?.name} />
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
                        <img src={product?.sockImage.image4} alt={product?.name} />
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
                        <img src={product?.sockImage.image5} alt={product?.name} />
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}

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
                  <h4>{product?.name}</h4>
                  <h3>
                    {product?.price}₺<span>70.00₺</span>
                  </h3>
                  <p>{product?.description}</p>
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

                    <GlobalAddToCartButton product={product} />
                  </div>
                  <div className="product__details__btns__option">
                    <a href="/">
                      <i className="fa fa-favorite" />
                      FAVORİYE EKLE
                    </a>
                  </div>

                  <CommentBulb productId={productId} />
                  <br />
                  {canComment === true ? (
                    <div className="alt-menu alt-2">
                      <label htmlFor="dropbox" className="dropbox">
                        <Icon name="comment outline" color="orange" /> Ürünü
                        Değerlendir
                      </label>
                      <input type="checkbox" id="dropbox" />
                      <div id="menu">
                        <CommentForm productId={product?.id} />
                      </div>
                    </div>
                  ) : null}
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
                          <span>Kategori:</span> {product?.category.name}
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
    </div>
  );
}
