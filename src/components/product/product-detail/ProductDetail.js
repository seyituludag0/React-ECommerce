import React, { useEffect, useState } from "react";
import "./product-detail.css";
import { useParams } from "react-router";
import ProductService from "/react/sock-ecommerce/src/services/ProductService";
import ImageCarousel from "../../../layouts/carousel/ImageCarousel";
import { Breadcrumb, Icon } from "semantic-ui-react";
import ProductOrderService from "/react/sock-ecommerce/src/services/ProductOrderService";
import CommentForm from "../../../layouts/comments/CommentForm";
import CommentBulb from "../../../layouts/comments/CommentBulb";
import DetailPageProductAddButton from "../../../layouts/detailPageProductAddButton/DetailPageProductAddButton";
import ProductByIdImages from "../../productByIdImages/ProductByIdImages";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CommentService from "../../../services/CommentService";
import ProductSizeService from "../../../services/ProductSizeService";
import ColorService from "../../../services/ColorService";

export default function ProductDetail() {
  let { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [canComment, setCanComment] = useState(false);
  const [productStarAverage, setProductStarAverage] = useState(0);
  const [productSizes, setProductSizes] = useState([]);
  const [currentProductSize, setCurrentProductSize] = useState(null);
  const [currentProductColor, setCurrentProductColor] = useState(null);
  const [colors, setColors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  let productOrderService = new ProductOrderService();
  let productService = new ProductService();
  let commentService = new CommentService();
  let productSizeService = new ProductSizeService();
  let colorService = new ColorService();

  const userId = localStorage.getItem("userId");
  // console.log("Ürün Bedeni: " + currentProductSize?.size)
  // console.log("Ürün Rengi: " + currentProductColor?.name)
  useEffect(() => {
    onChangeCommentState();
    productService
      .getByProductId(productId)
      .then((result) => setProduct(result.data.data));
    productSizeService
      .getAll()
      .then((result) => setProductSizes(result.data.data));
    colorService.getAll().then((result) => setColors(result.data.data));
  }, []);

  const onChangeCommentState = () => {
    productOrderService
      .existsByUserIdAndProductId(productId, userId)
      .then((result) => setCanComment(result.data));
  };

  useEffect(() => {
    commentService
      .getProductStarAverage(productId)
      .then((result) => setProductStarAverage(result.data));
  }, []);

  return (
    <div className="sock-detail">
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="product__details__breadcrumb">
                  <Breadcrumb>
                    <Breadcrumb.Section>
                      <Link to="/" style={{ color: "black" }}>
                        Ana Sayfa
                      </Link>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider icon="right angle" />
                    <Breadcrumb.Section>
                      <Link to="/products" style={{ color: "black" }}>
                        Ürünler
                      </Link>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider icon="right angle" />
                    <Breadcrumb.Section active>
                      Ürün Detayı: {product?.name}
                    </Breadcrumb.Section>
                  </Breadcrumb>
                </div>
              </div>
            </div>

            <div className="row">
              <ProductByIdImages />
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
                        <img
                          src={product?.productImage.image1}
                          alt={product?.name}
                        />
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
                        <img
                          src={product?.productImage.image2}
                          alt={product?.name}
                        />
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
                        <img
                          src={product?.productImage.image3}
                          alt={product?.name}
                        />
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
                        <img
                          src={product?.productImage.image4}
                          alt={product?.name}
                        />
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
                        <img
                          src={product?.productImage.image5}
                          alt={product?.name}
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-9">
                <div className="tab-content">
                  <ImageCarousel productId={productId} />
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
                  <Rating
                    name="read-only"
                    value={productStarAverage}
                    precision={0.5}
                    readOnly
                  />
                  <span>
                    {productStarAverage
                      .toString()
                      .replace(productStarAverage.toString()[1], ",")}
                  </span>
                  <h3>
                    {product?.price}₺<span>70.00₺</span>
                  </h3>
                  <p>{product?.description}</p>
                  {/* <p>{currentProductSize?.size}-{currentProductColor?.name}</p>  */}
                  <div className="product__details__option">
                    <div className="product__details__option__size">
                      <span>Beden:</span>
                      {productSizes.map((size, key) => (
                        <div style={{ display: "inline" }} key={key}>
                          <label
                            className={
                              currentProductSize?.id === size.id
                                ? "selectedSize"
                                : ""
                            }
                            onClick={() => setCurrentProductSize(size)}
                          >
                            {size.size}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="product__details__option__color">
                      <span>Renk:</span>
                      {colors.map((color, key) => (
                        <label
                          key={key}
                          style={{ backgroundColor: `${color.colorCode}` }}
                          title={`${color.name}`}
                          className={
                            currentProductColor?.id === color.id
                              ? "selectedColor"
                              : ""
                          }
                          onClick={() => setCurrentProductColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  {/*  */}

                  {currentProductSize === null ||
                  currentProductColor === null ? null : (
                    <DetailPageProductAddButton
                      product={product}
                      productId={productId}
                      productSizeId={currentProductSize?.id}
                      productColorId={currentProductColor?.id}
                    />
                  )}

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

                  <div className="product__details__last__option">
                    <h5>
                      <span>Garantili Güvenli Ödeme</span>
                    </h5>
                    <img
                      src="https://res.cloudinary.com/uludag-sock/image/upload/v1645203987/details-payment_vxz6zy.png"
                      alt=""
                    />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
