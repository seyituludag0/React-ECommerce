import React, { useEffect, useState } from "react";
import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import CampaignManangementService from "../../services/CampaignManagementService";
import { Form, Input } from "semantic-ui-react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CartService from "../../services/CartService";
import ProductService from "../../services/ProductService";
import "../../components/product/product-detail/product-detail.css"

export default function CartDetail() {
  const [countValue, setCountValue] = useState(1);
  const userId = localStorage.getItem("userId");
  const [couponCodeApplied, setCouponCodeApplied] = useState(false);
  const [product, setProduct] = useState([]);
  const [campaign, setCampaign] = useState({});
  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState();
  const [productInCart, setProductInCart] = useState()
  const [count, setCount] = useState(1)


  let productService = new ProductService();
  let cartService = new CartService();

  

  useEffect(() => {
    cartService.getCartIdWithProductAndUserIdAndProductSizeIdAndProductColorId(2, 1, 1, 1)
      .then((result) => setCartId(result.data));
    cartService
      .getCartsByUserId(userId)
      .then((result) => setCartData(result.data));
  }, [cartData]);

  useEffect(()=>{
    cartService.getProductInTheFromCart(2, 1, 1, 1)
    .then((result)=>setProductInCart(result.data))
  }, [productInCart])

  const getTotalAmount = () => {
    return cartData.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
  };

  const couponCodeApply = () => {
    setCouponCodeApplied(true);
  };
  const getDiscountedAmount = () => {
    // Matematiksel hesaplama formülü: İndirim Oranı = Toplam Fiyat * İndirim Oranı / 100 || Toplam Fiyat - İndirimli Fiyat
    const discountRate = campaign?.discountRate;
    const totalFiyat = getTotalAmount();

    // const discountPrice = (totalFiyat * discountRate != null ? discountRate: null) / 100;
    const discountPrice = (totalFiyat * discountRate) / 100;

    const discountedPrice = totalFiyat - discountPrice;

    return discountedPrice;
  };

  const removeItem = (cartObj, e) => {
    cartService
    .deleteCartById(cartObj.id)
      .then((result) => toast.success(result.message))
  };

  //DISCOUNT
  const formik = useFormik({
    initialValues: {
      couponCode: "",
    },
    onSubmit: (couponCode) => {
      let campaignManangementService = new CampaignManangementService();
      campaignManangementService
        .getByCouponCode(couponCode.couponCode)
        .then((campaign) => setCampaign(campaign.data.data));
      campaignManangementService
        .verifyCouponCode(cartId, couponCode.couponCode)
        .then((result) => toast.success(result.data.message));
        cartService.applyDiscountedPrice(cartId, 50).then((result)=>result.data.message)
      couponCodeApply();
    },
  });
  //DISCOUNT

  const deleteAllCartByUserId = (userId) => {
    cartService
      .deleteAllCartByUserId(userId)
      .then((result) => toast.success(result.data.message));
  };

  // Birim fiyatını sabit tutup önceden girecek
  // (Girdiği veya artırdığı her sayıyı birim fiyatla çarpacak) toplamı fiyat hanesine yazdıracak yani toplam fiyat olacak.

  const incrementQuantityChange = (cartObj) => {
    const totalQuantity = productInCart?.quantity + 1; // ÜRÜN MİKTARI
      let unitPrice = cartObj.product.price; //ÜRÜN BİRİM FİYATI
      let totalPrice = unitPrice * productInCart?.quantity; // TOPLAM FİYAT
      let obj = {
        productId: productInCart?.product.id,
        quantity: totalQuantity,
        price: totalPrice / productInCart?.quantity,
        productSizeId: 1,
        productColorId: 2,
        userId: userId,
      };
      cartService
      .addToCart(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
  };


  const decrementQuantityChange = (cartObj) => {
    const totalQuantity = productInCart?.quantity - 1; // ÜRÜN MİKTARI
      let unitPrice = cartObj.product.price; //ÜRÜN BİRİM FİYATI
      let totalPrice = unitPrice * productInCart?.quantity; // TOPLAM FİYAT
      let obj = {
        productId: productInCart?.product.id,
        quantity: totalQuantity,
        price: totalPrice / productInCart?.quantity,
        productSizeId: 1,
        productColorId: 2,
        userId: userId,
      };
      cartService
      .addToCart(obj)
      .then((result) => {
        toast.success(result.data.message);
      });
  };

  const clearCouponCode = () => {
    setCampaign(null);
    setCouponCodeApplied(false);
  }

  

  return (
    <div>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                {cartData.length != 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Ürün</th>
                        <th>Adet</th>
                        <th>Toplam Fiyat</th>
                        <th />
                      </tr>
                      <div
                        className="continue__btn update__btn"
                        style={{ float: "right !important" }}
                      >
                        <a
                          href="javascript:void(0)"
                          onClick={() => deleteAllCartByUserId(userId)}
                        >
                          SEPETİ BOŞALT
                        </a>
                      </div>
                    </thead>
                    <tbody>
                      {cartData.map((product, key) => (
                        <>
                        <tr key={key}>
                          <td className="product__cart__item">
                            <Link
                              to={`/product-detail/${product.productId}`}
                              style={{ color: "#000" }}
                              target="_blank"
                            >
                              <div className="product__cart__item__pic">
                                <img src={product.productImage} alt="" />
                              </div>
                              <div className="product__cart__item__text">
                                <h6>{product.productName}</h6>
                                <span>Marka: {product.brandName}</span> <br />
                                <span>
                                  Numara / Beden: {product.productSize.size}
                                </span>{" "}
                                <br />
                                <span>Renk: {product.colorName}</span>
                              </div>
                            </Link>
                          </td>
                          <td clasName="quantity__item" key={product.id}>
                            <div className="sbmincart-details-quantity">
                              <ButtonGroup disableElevation variant="contained">
                                <Button
                                  onClick={() =>
                                    decrementQuantityChange(product)
                                  }
                                >
                                  Azalt
                                </Button>
                                <Input
                                  style={{ fontSize: "1rem" }}
                                  value={product.quantity}
                                  size="mini"
                                  disabled
                                />
                                <Button
                                  onClick={() =>
                                    incrementQuantityChange(product)
                                  }
                                >
                                  Arttır
                                </Button>
                              </ButtonGroup>
                            </div>
                          </td>

                          <td className="cart__price">{product.price}₺</td>
                          <td className="cart__close">
                            <Close
                              style={{ cursor: "pointer" }}
                              onClick={() => removeItem(product)}
                            />
                          </td>
                        </tr>
                        <div>
                        <div className="product__details__option">
                            <div className="product__details__option__size">
                              <span>Beden:</span>
                                <div style={{ display: "inline" }}>
                                  <label style={{cursor:"default", backgroundColor:"black", color:"#fff"}}>
                                    {product.productSize.size}
                                    </label>
                                </div>
                            </div>
                              <div className="product__details__option__color">
                                <span>Renk: </span>
                                  <label
                                    style={{ backgroundColor: `${product.productColor.colorCode}`, cursor:"default"}}
                                  />
                              </div>
                          </div>
                        </div>
                        </>
                      ))}
                    </tbody>
                    
                  </table>
                ) : (
                  <p>
                    Sepetinizde henüz ürün yok! Hemen ürünm eklemek için
                    ürünlere <Link to="/products">göz atın</Link>
                  </p>
                )}
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/products">Alışverişe Dön</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner" /> Sepeti Güncelle
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Form onSubmit={formik.handleSubmit}>
              <Form.Field>
                  <Input
                    placeholder="Kupon Kodu"
                    error={Boolean(formik.errors.couponCode).toString()}
                    value={formik.values.couponCode}
                    name="couponCode"
                    // onChange={formik.handleChange}
                    onChange={formik.handleChange ? formik.handleChange : null }
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.couponCode && formik.touched.couponCode && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.couponCode}
                    </div>
                  )}
                  { couponCodeApplied ? <button disabled className="primary-btn">Uygula</button> : <button className="primary-btn">Uygula</button> }
                </Form.Field>

                <Form.Field>
                  {/* <Button onClick={()=> clearCouponCode()} secondary>Temizle</Button> */}
                  { couponCodeApplied ? <Button onClick={()=> clearCouponCode()} secondary>Temizle</Button> : <Button style={{backgroundColor:"black", color:"#fff", cursor: "not-allowed"}} disabled>Temizle</Button> }
                </Form.Field>
              </Form>

              <div className="cart__total">
                <h6>Fiyat Bilgileri</h6>
                <ul>
                  {couponCodeApplied ? (
                    <>
                      {/* <li className="discount-li">
                      İndirim Öncesi Fiyat
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <del>{getTotalAmount()}₺</del>
                      </li> */}
                      <li className="discount-li">
                        İndirim Oranı<span>%{campaign?.discountRate}</span>
                      </li>
                      <li className="discount-li">
                      İndirimli Fiyat <span>{getDiscountedAmount()}₺</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        Toplam Fiyat<span>{getTotalAmount()}₺</span>
                      </li>
                    </>
                  )}
                </ul>
                <Link
                  to="/cartsummary"
                  className="primary-btn"
                  style={{ color: "#fff" }}
                >
                  Devam Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
