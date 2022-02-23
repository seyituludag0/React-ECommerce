import React, { useEffect, useState } from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomDotGroup from "./CustomDotGroup";
import ProductImageService from "/react/sock-ecommerce/src/services/ProductImageService";

export default function ImageCarousel({ productId }) {
  const [productImages, setProductImages] = useState([]);
  useEffect(() => {
    let productImageService = new ProductImageService();
    productImageService
      .getByProductId(productId)
      .then((result) => setProductImages(result.data.data));
  }, []);

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={5}
      >
        <Slider>
     
          {productImages.map((productImage, key) => (
            <div key={key}>
            <Slide tag="a" index={key}>
              <Image src={productImage.image3} />
            </Slide>

            <Slide tag="b" index={key}>
              <Image src={productImage.image2} />
            </Slide>

            <Slide tag="c" index={key}>
              <Image src={productImage.image1} />
            </Slide>

            <Slide tag="d" index={key}>
              <Image src={productImage.image4} />
            </Slide>

            <Slide tag="e" index={key}>
              <Image src={productImage.image5} />
            </Slide>
            </div>
          ))}
        </Slider>
        <Divider />
        <CustomDotGroup slides={5} />
      </CarouselProvider>
    </div>
  );
}
