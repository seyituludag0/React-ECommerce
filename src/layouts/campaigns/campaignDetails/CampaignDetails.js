import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CampaignManagementService from "../../../services/CampaignManagementService";
import moment from "moment";
import "moment/locale/tr";
import { Tooltip } from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import CartService from "../../../services/CartService";
import { toast } from "react-toastify";
import ColorService from "../../../services/ColorService";
import ProductSizeService from "../../../services/ProductSizeService";
import { Label } from "semantic-ui-react";

export default function CampaignDetails({
  product,
  productSizeId,
  productColorId,
}) {
  let cartService = new CartService();
  let colorService = new ColorService();
  let productSizeService = new ProductSizeService();

  let { campaignId } = useParams();
  const userId = localStorage.getItem("userId");
  const [campaign, setCampaign] = useState(null);
  const [promotionalProducts, setPromotionalProducts] = useState([]);
  const [copiedText, setCopiedText] = useState();
  const [count, setCount] = useState(1);
  const [cartId, setCartId] = useState();
  const [checkIfTheProductIsInTheCart, setCheckIfTheProductIsInTheCart] =
    useState(null);
  const [productInCart, setProductInCart] = useState();
  const [colors, setColors] = useState([]);
  const [currentProductColor, setCurrentProductColor] = useState(null);
  const [productSizes, setProductSizes] = useState([]);
  const [currentProductSize, setCurrentProductSize] = useState(null);

  useEffect(() => {
    cartService
      .getCartIdWithUserIdAndProductId(1, userId)
      .then((result) => setCartId(result.data));
  }, []);


  useEffect(() => {
    cartService
      .getProductInTheFromCart(7, 13, 1)
      .then((result) => setProductInCart(result.data));
  }, []);

  useEffect(() => {
    //result.data.data.currentCategoryId
    let campaignManagementService = new CampaignManagementService();
    campaignManagementService
      .getByCampaignId(campaignId)
      .then((result) => setCampaign(result.data.data));
    campaignManagementService
      .getByCurrentCategoryId(1)
      .then((result) => setPromotionalProducts(result.data.data));
  }, []);

  useEffect(()=>{
    colorService.getAll().then((result) => setColors(result.data.data));
    productSizeService
      .getAll()
      .then((result) => setProductSizes(result.data.data));
  })

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addCartApi = (productObj) => {
    if (!checkIfTheProductIsInTheCart) {
      incrementCount();
      const totalQuantity = count;
      let unitPrice = productObj.price;
      let totalPrice = unitPrice * totalQuantity;
      let obj = {
        productId: productObj.id,
        quantity: totalQuantity,
        price: totalPrice / totalQuantity,
        productSizeId: 2,
        productColorId: 1,
        userId: userId,
      };
      cartService.addToCart(obj).then((result) => {
        toast.success(result.data.message);
      });
    } else {
      // alert(productInCart?.quantity)
      const totalQuantity = productInCart?.quantity + count; // ÜRÜN MİKTARI
      let unitPrice = productObj.price; //ÜRÜN BİRİM FİYATI
      let totalPrice = unitPrice * productInCart?.quantity; // TOPLAM FİYAT
      let obj = {
        productId: productObj.id,
        quantity: totalQuantity,
        price: totalPrice / productInCart?.quantity,
        productSizeId: 2,
        productColorId: 1,
        userId: userId,
      };
      cartService.addToCart(obj).then((result) => {
        toast.success(result.data.message);
      });
    }
  };

  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <table
        style={{
          borderCollapse: "collapse",
          tableLayout: "fixed",
          borderSpacing: 0,
          msoTableLspace: "0pt",
          msoTableRspace: "0pt",
          verticalAlign: "top",
          minWidth: "320px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          width: "100%",
        }}
        cellPadding={0}
        cellSpacing={0}
      >
        <tbody>
          <tr style={{ verticalAlign: "top" }}>
            <td
              style={{
                wordBreak: "break-word",
                borderCollapse: "collapse !important",
                verticalAlign: "top",
              }}
            >
              <div
                className="u-row-container"
                style={{ padding: "0px", backgroundColor: "transparent" }}
              >
                <div
                  className="u-row"
                  style={{
                    margin: "0 auto",
                    minWidth: "320px",
                    maxWidth: "600px",
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    backgroundColor: "transparent",
                  }}
                >
                  <div
                    style={{
                      borderCollapse: "collapse",
                      display: "table",
                      width: "100%",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div
                      className="u-col u-col-100"
                      style={{
                        maxWidth: "320px",
                        minWidth: "600px",
                        display: "table-cell",
                        verticalAlign: "top",
                      }}
                    >
                      <div style={{ width: "100% !important" }}>
                        <div
                          style={{
                            padding: "0px",
                            borderTop: "0px solid transparent",
                            borderLeft: "0px solid transparent",
                            borderRight: "0px solid transparent",
                            borderBottom: "0px solid transparent",
                          }}
                        >
                          <table
                            style={{ fontFamily: "arial,helvetica,sans-serif" }}
                            role="presentation"
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            border={0}
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                    padding: "10px",
                                    fontFamily: "arial,helvetica,sans-serif",
                                  }}
                                  align="left"
                                >
                                  <div
                                    style={{
                                      lineHeight: "140%",
                                      textAlign: "center",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    <p
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "140%",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "18px",
                                          lineHeight: "25.2px",
                                          fontFamily:
                                            '"Playfair Display", serif',
                                        }}
                                      >
                                        <span
                                          style={{
                                            lineHeight: "25.2px",
                                            fontSize: "18px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              lineHeight: "25.2px",
                                              fontSize: "18px",
                                            }}
                                          >
                                            {campaign?.campaignName}
                                          </span>
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            id="u_content_button_1"
                            style={{ fontFamily: "arial,helvetica,sans-serif" }}
                            role="presentation"
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            border={0}
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    overflowWrap: "break-word",
                                    wordBreak: "break-word",
                                    padding: "10px",
                                    fontFamily: "arial,helvetica,sans-serif",
                                  }}
                                  align="left"
                                >
                                  <div align="center">
                                    <a
                                      target="_blank"
                                      className="v-size-width"
                                      style={{
                                        boxSizing: "border-box",
                                        display: "inline-block",
                                        fontFamily:
                                          "arial,helvetica,sans-serif",
                                        textDecoration: "none",
                                        WebkitTextSizeAdjust: "none",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        backgroundColor: "gray",
                                        borderRadius: "1px",
                                        WebkitBorderRadius: "1px",
                                        MozBorderRadius: "1px",
                                        width: "72%",
                                        maxWidth: "100%",
                                        overflowWrap: "break-word",
                                        wordBreak: "break-word",
                                        wordWrap: "break-word",
                                        msoBorderAlt: "none",
                                      }}
                                    >
                                      <span
                                        style={{
                                          display: "block",
                                          padding: "10px 20px",
                                          lineHeight: "120%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: "24px",
                                            lineHeight: "28.8px",
                                            fontFamily:
                                              '"Playfair Display", serif',
                                          }}
                                        >
                                          <strong>
                                            <span
                                              style={{
                                                lineHeight: "28.8px",
                                                fontSize: "24px",
                                              }}
                                            >
                                              <span>Kupon Kodunu Kopyala</span>
                                              <Tooltip
                                                title={
                                                  copiedText ===
                                                  campaign?.couponCode
                                                    ? "Kupon Kodu Kopyalandı!"
                                                    : "Kupon Kodunu Kopyala"
                                                }
                                                placement="top"
                                              >
                                                <CopyToClipboard
                                                  onCopy={() =>
                                                    setCopiedText(
                                                      campaign?.couponCode
                                                    )
                                                  }
                                                  text={campaign?.couponCode}
                                                >
                                                  <FontAwesomeIcon
                                                    icon={faCopy}
                                                  />
                                                </CopyToClipboard>
                                              </Tooltip>
                                            </span>
                                          </strong>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Campaign Info */}
                <div
                  className="u-row-container"
                  style={{ padding: "0px", backgroundColor: "transparent" }}
                >
                  <div
                    className="u-row"
                    style={{
                      margin: "0 auto",
                      minWidth: "320px",
                      maxWidth: "600px",
                      overflowWrap: "break-word",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      backgroundColor: "transparent",
                    }}
                  >
                    <div
                      style={{
                        borderCollapse: "collapse",
                        display: "table",
                        width: "100%",
                        backgroundColor: "transparent",
                      }}
                    >
                      <div
                        className="u-col u-col-100"
                        style={{
                          maxWidth: "320px",
                          minWidth: "600px",
                          display: "table-cell",
                          verticalAlign: "top",
                        }}
                      >
                        <div style={{ width: "100% !important" }}>
                          <div
                            style={{
                              padding: "0px",
                              borderTop: "0px solid transparent",
                              borderLeft: "0px solid transparent",
                              borderRight: "0px solid transparent",
                              borderBottom: "0px solid transparent",
                            }}
                          >
                            <table
                              style={{
                                fontFamily: "arial,helvetica,sans-serif",
                              }}
                              role="presentation"
                              cellPadding={0}
                              cellSpacing={0}
                              width="100%"
                              border={0}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      overflowWrap: "break-word",
                                      wordBreak: "break-word",
                                      padding: "14px 10px 10px",
                                      fontFamily: "arial,helvetica,sans-serif",
                                    }}
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellPadding={0}
                                      cellSpacing={0}
                                      border={0}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{
                                              paddingRight: "0px",
                                              paddingLeft: "0px",
                                            }}
                                            align="center"
                                          >
                                            <img
                                              align="center"
                                              border={0}
                                              src={
                                                campaign?.campaignBannerImage
                                              }
                                              alt="Image"
                                              title="Image"
                                              style={{
                                                outline: "none",
                                                textDecoration: "none",
                                                msInterpolationMode: "bicubic",
                                                clear: "both",
                                                display:
                                                  "inline-block !important",
                                                border: "none",
                                                height: "auto",
                                                float: "none",
                                                width: "100%",
                                                maxWidth: "580px",
                                              }}
                                              width={580}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              style={{
                                fontFamily: "arial,helvetica,sans-serif",
                              }}
                              role="presentation"
                              cellPadding={0}
                              cellSpacing={0}
                              width="100%"
                              border={0}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      overflowWrap: "break-word",
                                      wordBreak: "break-word",
                                      padding: "22px 44px",
                                      fontFamily: "arial,helvetica,sans-serif",
                                    }}
                                    align="left"
                                  >
                                    <div
                                      style={{
                                        lineHeight: "180%",
                                        textAlign: "center",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "180%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontFamily:
                                              "Montserrat, sans-serif",
                                            fontSize: "14px",
                                            lineHeight: "25.2px",
                                          }}
                                        >
                                          {campaign?.campaignDetails}
                                        </span>
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          lineHeight: "180%",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontFamily:
                                              "Montserrat, sans-serif",
                                            fontSize: "14px",
                                            lineHeight: "25.2px",
                                          }}
                                        >
                                          SON GÜN:{" "}
                                          {moment(
                                            campaign?.campaignExpiredDate
                                          ).format("LL")}
                                        </span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Campaign Info */}

                {/* Campaign Product */}

                {promotionalProducts.map((product) => (
                  <>
                    <div
                      className="u-row-container"
                      style={{ padding: "0px", backgroundColor: "transparent" }}
                    >
                      <div
                        className="u-row"
                        style={{
                          margin: "0 auto",
                          minWidth: "320px",
                          maxWidth: "600px",
                          overflowWrap: "break-word",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div
                          style={{
                            borderCollapse: "collapse",
                            display: "table",
                            width: "100%",
                            backgroundColor: "transparent",
                          }}
                        >
                          <div
                            className="u-col u-col-50"
                            style={{
                              maxWidth: "320px",
                              minWidth: "300px",
                              display: "table-cell",
                              verticalAlign: "top",
                            }}
                          >
                            <div style={{ width: "100% !important" }}>
                              <div
                                style={{
                                  padding: "0px",
                                  borderTop: "0px solid transparent",
                                  borderLeft: "0px solid transparent",
                                  borderRight: "0px solid transparent",
                                  borderBottom: "0px solid transparent",
                                }}
                              >
                                <table
                                  style={{
                                    fontFamily: "arial,helvetica,sans-serif",
                                  }}
                                  role="presentation"
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  border={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          overflowWrap: "break-word",
                                          wordBreak: "break-word",
                                          padding: "10px",
                                          fontFamily:
                                            "arial,helvetica,sans-serif",
                                        }}
                                        align="left"
                                      >
                                        <table
                                          width="100%"
                                          cellPadding={0}
                                          cellSpacing={0}
                                          border={0}
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                style={{
                                                  paddingRight: "0px",
                                                  paddingLeft: "0px",
                                                }}
                                                align="center"
                                              >
                                                <img
                                                  align="center"
                                                  border={0}
                                                  src={
                                                    product.productImage.image1
                                                  }
                                                  alt={product.name}
                                                  title={product.name}
                                                  style={{
                                                    outline: "none",
                                                    textDecoration: "none",
                                                    msInterpolationMode:
                                                      "bicubic",
                                                    clear: "both",
                                                    display:
                                                      "inline-block !important",
                                                    border: "none",
                                                    height: "auto",
                                                    float: "none",
                                                    width: "100%",
                                                    maxWidth: "280px",
                                                  }}
                                                  width={280}
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  style={{
                                    fontFamily: "arial,helvetica,sans-serif",
                                  }}
                                  role="presentation"
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  border={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          overflowWrap: "break-word",
                                          wordBreak: "break-word",
                                          padding: "0px 44px 8px",
                                          fontFamily:
                                            "arial,helvetica,sans-serif",
                                        }}
                                        align="left"
                                      >
                                        <div
                                          style={{
                                            lineHeight: "180%",
                                            textAlign: "center",
                                            wordWrap: "break-word",
                                          }}
                                        >
                                          <p
                                            style={{
                                              fontSize: "14px",
                                              lineHeight: "180%",
                                            }}
                                          >
                                            <span
                                              style={{
                                                textDecoration: "line-through",
                                                fontSize: "18px",
                                                lineHeight: "32.4px",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontFamily:
                                                    "Montserrat, sans-serif",
                                                  lineHeight: "32.4px",
                                                  fontSize: "18px",
                                                }}
                                              >
                                                500₺
                                              </span>
                                            </span>
                                          </p>
                                          <p
                                            style={{
                                              fontSize: "14px",
                                              lineHeight: "180%",
                                            }}
                                          >
                                            <span
                                              style={{
                                                fontSize: "18px",
                                                lineHeight: "32.4px",
                                              }}
                                            >
                                              <strong>
                                                <span
                                                  style={{
                                                    fontFamily:
                                                      "Montserrat, sans-serif",
                                                    lineHeight: "32.4px",
                                                    fontSize: "18px",
                                                  }}
                                                >
                                                  {product.price}₺
                                                </span>
                                              </strong>
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table>
                                  <div className="product__size__select">
                                    {productSizes.map((productSize, key) => (
                                      <Label
                                        color={
                                          currentProductSize?.id ===
                                          productSize.id
                                            ? "black"
                                            : ""
                                        }
                                        key={key}
                                        circular
                                        size="mini"
                                        title={`${productSize.size}`}
                                        style={{
                                          fontSize: "8.1px",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          setCurrentProductSize(productSize)
                                        }
                                      >
                                        {productSize.size}
                                      </Label>
                                    ))}
                                  </div>
                                  <div className="colors">
                                    {colors.map((color, key) => (
                                      <label
                                        key={key}
                                        className={
                                          currentProductColor?.id === color.id
                                            ? "selectedColor"
                                            : ""
                                        }
                                        style={{
                                          backgroundColor: `${color.colorCode}`,
                                        }}
                                        title={`${color.name}`}
                                        onClick={() =>
                                          setCurrentProductColor(color)
                                        }
                                      />
                                    ))}
                                  </div>
                                </table>
                                <table
                                  style={{
                                    fontFamily: "arial,helvetica,sans-serif",
                                  }}
                                  role="presentation"
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  border={0}
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          overflowWrap: "break-word",
                                          wordBreak: "break-word",
                                          padding: "10px",
                                          fontFamily:
                                            "arial,helvetica,sans-serif",
                                        }}
                                        align="left"
                                      >
                                        <div align="center">
                                          <a
                                            href="javascript:void(0)"
                                            onClick={() => addCartApi(product)}
                                            className="v-size-width"
                                            style={{
                                              boxSizing: "border-box",
                                              display: "inline-block",
                                              fontFamily:
                                                "arial,helvetica,sans-serif",
                                              textDecoration: "none",
                                              WebkitTextSizeAdjust: "none",
                                              textAlign: "center",
                                              color: "#FFFFFF",
                                              backgroundColor: "#e1000b",
                                              borderRadius: "4px",
                                              WebkitBorderRadius: "4px",
                                              MozBorderRadius: "4px",
                                              width: "83%",
                                              maxWidth: "100%",
                                              overflowWrap: "break-word",
                                              wordBreak: "break-word",
                                              wordWrap: "break-word",
                                              msoBorderAlt: "none",
                                            }}
                                          >
                                            <span
                                              style={{
                                                display: "block",
                                                padding: "13px 20px",
                                                lineHeight: "120%",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "14px",
                                                  lineHeight: "16.8px",
                                                }}
                                              >
                                                SEPETE EKLE
                                              </span>
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                {/* Campaign Product */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
