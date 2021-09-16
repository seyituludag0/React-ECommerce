import React, { useEffect, useState } from "react";
import "../categories/categories.css"
import CategoryService from "../../services/CategoryService";

export default function Categories() {
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
                <div className="product__item">
                  <h2>{category.name} Çorapları</h2>
                  <div className="product__item__pic set-bg">
                    <img
                      src={category.image} width="100%"
                      alt={category.name}
                    />
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
