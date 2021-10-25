import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerv2-w3ls">
          <div className="footer-w3lagile-innerr">
            <div className="footer-bottomv2 py-5">
              <div className="container">
                <h2 className="agile_btxt" style={{ textAlign: "center" }}>
                  <Link to="/">
                    <span>u</span>ludağ <span>ç</span>orap
                  </Link>
                </h2>
                <ul className="bottom-links-agile">
                  <li>
                    <Link to="/">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link to="/socks">Ürünlerimiz</Link>
                  </li>
                  <li>
                    <Link to="/about">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link to="/contact">Bizimle iletişime geçin</Link>
                  </li>
                </ul>
                <h3 className="text-center follow">Bizi Sosyal Medya Hesaplarımızdan takip edebilirsiniz</h3>
                <ul className="social-iconsv2 agileinfo">
                  <li>
                    <a style={{color:"#4043bf"}}
                      href="https://www.facebook.com/bunyamin.uludag.5"
                      target="_blank"
                    >
                      <Icon name="facebook" size="big" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/coraplarimiz/"
                      target="_blank"
                    >
                      <Icon name="instagram" size="big" />
                    </a>
                  </li>
                </ul>
                <p style={{ color: "#000", textAlign: "center" }}>
                  © 2021 Uludağ Çorap | Tüm hakları saklıdır | Tasarım by <a style={{color:"#4043bf"}} href="https://seyituludag.herokuapp.com/" target="_blank">SEYİT ULUDAĞ</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
