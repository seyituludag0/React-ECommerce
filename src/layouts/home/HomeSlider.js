import React from "react";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function HomeSlider() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={4}
      >
        {/* <h3 class="agile_btxt">
          <span>u</span>ludag <span>ç</span>orap
        </h3>
        <h4 class="w3_bbot">çorap ve iç çamaşır mağazası</h4> */}
        <Slider>
          <Slide tag="a" index={0}>
            <li class="banner banner2">
              <div class="container">
                <h3 class="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 class="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div class="slider-info mt-sm-5">
                  <h4 class="bn_right">
                    <span>E</span>rkek <span>Ç</span>orapları
                  </h4>
                  <div class="bnr_clip position-relative">
                    <h4>
                      <span class="px-2">%35 </span>e varan indirim
                    </h4>
                    <p class="text-uppercase py-2">özel satış</p>
                    <a
                      class="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={1}>
            <li class="banner">
              <div class="container">
                <h3 class="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 class="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div class="slider-info mt-sm-5">
                  <h4 class="bn_right">
                    <span>B</span>ayan <span>Ç</span>orapları
                  </h4>
                  <div class="bnr_clip position-relative">
                    <h4>
                      <span class="px-2">%45 </span>e varan indirim
                    </h4>
                    <p class="text-uppercase py-2">özel satış</p>
                    <a
                      class="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={2}>
            <li class="banner banner4">
              <div class="container">
                <h3 class="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 class="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div class="slider-info mt-sm-5">
                  <h4 class="bn_right">
                    <span>E</span>rkek <span>Çocuk Ç</span>orapları
                  </h4>
                  <div class="bnr_clip position-relative">
                    <h4>
                      <span class="px-2">%45 </span>e varan indirim
                    </h4>
                    <p class="text-uppercase py-2">özel satış</p>
                    <a
                      class="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={3}>
            <li class="banner banner3">
              <div class="container">
                <h3 class="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 class="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div class="slider-info mt-sm-5">
                  <h4 class="bn_right">
                    <span>K</span>ız <span>Çocuk Ç</span>orapları
                  </h4>
                  <div class="bnr_clip position-relative">
                    <h4>
                      <span class="px-2">%45 </span>e varan indirim
                    </h4>
                    <p class="text-uppercase py-2">özel satış</p>
                    <a
                      class="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}
