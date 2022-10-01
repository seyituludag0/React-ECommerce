import React, { useEffect, useState } from "react";
import "./brands.css";
import BrandService from "../../services/BrandService";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function AllBrands() {
const [brands, setBrands] = useState([])

  useEffect(() => {
    let brandService = new BrandService();
    brandService.getAllBrands()
      .then((result) => setBrands(result.data.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>ULUDAĞ ÇORAP - Markalar</title>
      </Helmet>
      
      <section className="product spad">
        <div className="container">
          <div className="row product__filter">
            <div className="col-lg-3 box">
              {brands.map((brand) => (
                <div className="product__item" key={brand.id}>
                  {/* <h2 style={{ textAlign: "center" }}>
                    {brand.name}
                  </h2> */}
                  <div className="product__item__pic set-bg">
                    <Link to={`/brand/${brand.id}`}>
                      <img
                        src={brand.image}
                        width="100%"
                        alt={brand.name}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
