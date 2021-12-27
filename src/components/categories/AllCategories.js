import React, { useEffect, useState } from "react";
import "../categories/categories.css";
import CategoryService from "../../services/CategoryService";
import { Link } from "react-router-dom";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getAllCategory()
      .then((result) => setCategories(result.data.data));
  }, []);

  return (
    <div>
      <section className="product spad">
        <div className="container">
          <div className="row product__filter">
            <div className="col-lg-3 box">
              {categories.map((category) => (
                <div className="product__item" key={category.id}>
                  <h2 style={{ textAlign: "center" }}>
                    {category.name} Ürünleri
                  </h2>
                  <div className="product__item__pic set-bg">
                    <Link to={`/category/${category.id}`}>
                      <img
                        src={category.image}
                        width="100%"
                        alt={category.name}
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
