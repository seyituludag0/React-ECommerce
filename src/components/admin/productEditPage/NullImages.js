import React, { useEffect, useState } from 'react';
import ProductImageService from '../../../services/ProductImageService';

export default function NullImages() {

  const [nullImages, setNullImages] = useState([]);
  const [imageObject, setImageObject] = useState({})

    useEffect(() => {
      let productImageService = new ProductImageService();
      productImageService
        .getAllProductImageNull()
        .then((result) => setNullImages(result.data.data));
    }, []);

  return (
    <div>
   
    </div>
  );
}
