import React, { useState, useEffect } from "react";
import SockImageService from "../../services/SockImageService";

export default function SockByIdImages() {
  const [sockImages, setSockImages] = useState([]);

  useEffect(() => {
    let sockImageService = new SockImageService();
    sockImageService
      .getBySockId(19)
      .then((result) => setSockImages(result.data.data));
  }, []);

  return (
    <div className="col-lg-3 col-md-3">
          {
              sockImages.map((sockImage)=>(
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={sockImage.image1}  />
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={sockImage.image2}  />
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={sockImage.image3}  />
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={sockImage.image4}  />
                      </div>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-5"
                      role="tab"
                    >
                      <div className="product__thumb__pic set-bg">
                        <img src={sockImage.image5}  />
                      </div>
                    </a>
                  </li>
                </ul>
              ))
          }
      </div>
  );
}
