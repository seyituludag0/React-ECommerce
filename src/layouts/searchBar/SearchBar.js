import { Box } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input, Icon } from "semantic-ui-react";
import ProductService from "../../services/ProductService";
import { useHistory } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom"

export default function SearchBar() {
  let productService = new ProductService();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    productService.getAllProduct((result) => setFilteredProducts(result.data.data));
  }, []);

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//         .then((response)=>setProducts(response.data))
// }, [])

  const searchData = () =>{
    if (searchTerm !== '') {
      const filteredData = products.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredProducts(filteredData)
    }
    else{
      setFilteredProducts(products)
    }
    console.log(filteredProducts);
  }

  // const filteredData = APIData.filter((item) => {
  //   return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //   })


  return (
    <section>
      <div className="rt-container">
        <div className="col-rt-3 equal-height">
          <div className="sb-example-3">
            <div className="search__container">
                <Link to="/search" style={{ color:"#000" }}>
                  <Icon name="search" style={{cursor:"pointer"}} />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
