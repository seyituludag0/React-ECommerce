import React, { useEffect, useState } from "react";
import CategoryService from "../../services/CategoryService";
import { Link } from "react-router-dom";

export default function SocksPageCategoryList({ changeCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
  let categoryService = new CategoryService();
    categoryService.getAllCategory().then((result) => setCategories(result.data.data));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="filter__controls">
          <li><Link to="/socks" style={{ color:"#000" }}>Tüm Ürünler</Link></li>
            {categories.map((category) => (
              <li key={category.id} onClick={()=> changeCategory(category)} style={{ color:"#000" }}>
               {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
