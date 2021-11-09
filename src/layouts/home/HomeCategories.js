import React from "react";
import "./home.css";
import women from "./images//themeforest/x1.jpg";
import men from "./images/themeforest/x.jpg";
import kid from "./images//themeforest/x2.jpg";
import { Link } from "react-router-dom"

export default function HomeCategories() {
  return (
    <div>
      <div className="row no-gutters" style={{marginTop:"-57rem"}}>
        <div className="col-sm-4">
          <div className="hovereffect">
            <img className="img-fluid" src={men} alt="" />
            <div className="overlay">
              <h5>Erkek Çorapları</h5>
              <Link className="info"  to="/category/1">
                Ürünleri Gör
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="hovereffect">
            <img className="img-fluid" src={women} alt="" />
            <div className="overlay">
              <h5>Bayan Çorapları</h5>
              <Link className="info" to="/category/2">
                Ürünleri Gör
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="hovereffect">
            <img className="img-fluid" src={kid} alt="" />
            <div className="overlay">
              <h5>Çocuk Çorapları</h5>
              <Link className="info"  to="/category/4">
                Ürünleri Gör
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="col-sm-4">
          <div className="hovereffect">
            <img className="img-fluid" src={kid} alt="" />
            <div className="overlay">
              <h5>kid's fashion</h5>
              <Link className="info"  to="/category/3">
                Ürünleri Gör
              </Link>
            </div>
          </div>
        </div> */}
        </div>
      </div>
  );
}
