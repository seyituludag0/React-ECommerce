import React, { useEffect, useState } from "react";
import { Box, Slider } from "@material-ui/core";
import { Label } from "semantic-ui-react";
import SockService from "../services/SockService";

function valuetext(price) {
  return {price};
}

export default function MySlider() {
  const [price, setPrice] = useState([20, 37]);

  useEffect((max, min)=>{
    let sockService = new SockService();
    sockService.filterPrice(max, min)
    // .then((result)=>console.log(result.data.data))
  })


  const handleChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  return (
    <div className="slider">
      <Label> Fiyat Aralığı 
        <Box sx={{ width: 235 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </Label>
    </div>
  );
}
