import React from "react";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Divider } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={4}
      >
        {/* <h3 className="agile_btxt">
          <span>u</span>ludag <span>ç</span>orap
        </h3>
        <h4 className="w3_bbot">çorap ve iç çamaşır mağazası</h4> */}
        <Slider>
          <Slide tag="a" index={0}>
            <li className="banner banner2">
              <div className="container">
                <h3 className="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 className="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div className="slider-info mt-sm-5">
                  <h4 className="bn_right">
                    <span>E</span>rkek <span>Ç</span>orapları
                  </h4>
                  <div className="bnr_clip position-relative">
                    <h4>
                      <span className="px-2">%35 </span>e varan indirim
                    </h4>
                    <p className="text-uppercase py-2">özel satış</p>
                    <Link to="/category/1"
                      className="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={1}>
            <li className="banner">
              <div className="container">
                <h3 className="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 className="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div className="slider-info mt-sm-5">
                  <h4 className="bn_right">
                    <span>B</span>ayan <span>Ç</span>orapları
                  </h4>
                  <div className="bnr_clip position-relative">
                    <h4>
                      <span className="px-2">%45 </span>e varan indirim
                    </h4>
                    <p className="text-uppercase py-2">özel satış</p>
                    <Link to="/category/2"
                      className="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={2}>
            <li className="banner banner4">
              <div className="container">
                <h3 className="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 className="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div className="slider-info mt-sm-5">
                  <h4 className="bn_right">
                    <span>E</span>rkek <span>Çocuk Ç</span>orapları
                  </h4>
                  <div className="bnr_clip position-relative">
                    <h4>
                      <span className="px-2">%45 </span>e varan indirim
                    </h4>
                    <p className="text-uppercase py-2">özel satış</p>
                    <Link to="/category/3"
                      className="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </Slide>
          <Slide tag="a" index={3}>
            <li className="banner banner3">
              <div className="container">
                <h3 className="agile_btxt">
                  <span>u</span>ludag <span>ç</span>orap
                </h3>
                <h4 className="w3_bbot">çorap ve iç çamaşır mağazası</h4>
                <div className="slider-info mt-sm-5">
                  <h4 className="bn_right">
                    <span>K</span>ız <span>Çocuk Ç</span>orapları
                  </h4>
                  <div className="bnr_clip position-relative">
                    <h4>
                      <span className="px-2">%45 </span>e varan indirim
                    </h4>
                    <p className="text-uppercase py-2">özel satış</p>
                    <Link to="/category/4"
                      className="btn btn-primary mt-3 text-capitalize my-button"
                      style={{ color: "#fff" }}
                    >
                      şimdi incele
                    </Link>
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
