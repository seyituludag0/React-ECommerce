import React, { useEffect, useState } from "react";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomDotGroup from "./CustomDotGroup";
import ProductImageService from "/react/sock-ecommerce/src/services/ProductImageService";

export default function ImageCarousel() {
  const [productImages, setProductImages] = useState([]);
  useEffect(() => {
    let productImageService = new ProductImageService();
    productImageService
      .getByProductId(1)
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
      <Slide tag="a" index={0}>
        <Image src="https://res.cloudinary.com/uludag-sock/image/upload/v1631917944/socks/bay-sock/jhf-men-socks_dwvlvj.png" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://res.cloudinary.com/uludag-sock/image/upload/v1631917939/socks/bay-sock/2_V0v7vjd_dszjpw.jpg" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://res.cloudinary.com/uludag-sock/image/upload/v1631917936/socks/bay-sock/Marka-Kalite-Erkek-Mutlu-%C3%87orap-27-Renkler-%C3%87izgili-Ekose-Elmas-Kiraz-%C3%87orap-Erkekler-Penye-Pamuk-Calcetines-Largos-Hombre_ed4zdj.jpg" />
      </Slide>
      <Slide tag="a" index={3}>
        <Image src="https://res.cloudinary.com/uludag-sock/image/upload/v1631917921/socks/bay-sock/0_6d4a5bf33c563c621b0f0cc0ae173f0c_qcsioh.jpg" />
      </Slide>
      <Slide tag="a" index={4}>
        <Image src="https://res.cloudinary.com/uludag-sock/image/upload/v1631917915/socks/bay-sock/bay-sock_hq9ti8.jpg" />
      </Slide>
    </Slider>
        <Divider />
        <CustomDotGroup slides={4}  />
      </CarouselProvider>
    </div>
  );
}
