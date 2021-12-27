import React, { useState, useEffect } from "react";
import { Card, Input } from "semantic-ui-react";
import ProductService from "../../services/ProductService";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import SingleProduct from "../../components/product/SingleProduct";

export default function SearchFound() {
  let productService = new ProductService();
  const [products, setProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    productService.getAllProduct().then((response) => {
      setProducts(response.data.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = products.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(products);
    }
  };

  const resetInputField = () => {
    setSearchInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <Input
        value={searchInput}
        placeholder="Ara..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <IconButton color="default">
        <Close onClick={resetInputField} />
      </IconButton>

      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item, key) => {
              return (
                <Card key={key}>
                   <SingleProduct productss={item} />
                </Card>
              );
            })
          : null}
      </Card.Group>
    </div>
  );
}
