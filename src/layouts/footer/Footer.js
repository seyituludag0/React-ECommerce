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
                  <a href="index.html">
                    <span>u</span>ludağ <span>ç</span>orap
                  </a>
                </h2>
                <ul className="bottom-links-agile">
                  <li>
                    <Link to="/">Ana Sayfa</Link>
                  </li>
                  <li>
                    <Link to="/socks">Ürünlerimiz</Link>
                  </li>
                  <li>
                    <Link href="/about">Hakkımızda</Link>
                  </li>
                  <li>
                    <Link to="/contact">Bizimle iletişime geçin</Link>
                  </li>
                </ul>
                <h3 className="text-center follow">Follow Us</h3>
                <p style={{ color: "#000", textAlign: "center" }}>
                  © 2021 Uludağ Çorap. Tüm hakları saklıdır | Tasarım by SEYİT
                  ULUDAĞ
                </p>
                <ul className="social-iconsv2 agileinfo">
                  <li>
                    <a
                      href="https://www.instagram.com/seyituludag0/"
                      target="_blank"
                      style={{ color: "#fff" }}
                    >
                      <Icon name="facebook" size="big" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/seyituludag0/"
                      target="_blank"
                    //   style={{ color: "#fff" }}
                    >
                      <Icon name="instagram" size="big" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
