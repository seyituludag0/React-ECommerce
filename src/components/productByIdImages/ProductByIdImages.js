import React, { useState, useEffect } from "react";
import ProductImageService from "../../services/ProductImageService";

export default function ProductByIdImages({ productId }) {
  const [productImages, setProductImages] = useState([])

  useEffect(() => {
    let productImageService = new ProductImageService();
    productImageService
      .getByProductId(0)
      .then((result) => setProductImages(result.data.data));
  }, []);

  return (
    <div className="col-lg-3 col-md-3">
          {
              productImages.map((productImage)=>(
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={productImage.image1}  />
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
                        <img src={productImage.image2}  />
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
                        <img src={productImage.image3}  />
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
                        <img src={productImage.image4}  />
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
                        <img src={productImage.image5}  />
                      </div>
                    </a>
                  </li>
                </ul>
              ))
          }
      </div>
  );
}
