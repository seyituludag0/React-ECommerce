import React from 'react'
import banner from "./img/banner.jpg"
import author from "./img/testimonial-author.jpg"
import johnSmith from "./img/team-1.jpg"
import christineWise from "./img/team-2.jpg"
import seanRobbins from "./img/team-3.jpg"
import lucyMyers from "./img/team-4.jpg"

import client1 from "./img/clients/client-1.png"
import client2 from "./img/clients/client-2.png"
import client3 from "./img/clients/client-3.png"
import client4 from "./img/clients/client-4.png"
import client5 from "./img/clients/client-5.png"
import client6 from "./img/clients/client-6.png"
import client7 from "./img/clients/client-7.png"
import client8 from "./img/clients/client-8.png"
import { Breadcrumb } from 'semantic-ui-react'

export default function About() {

  const sections = [
    { key: 'Ana Sayfa', content: 'Ana Sayfa', link: true },
    { key: 'Hakkımızda', content: 'Hakkımızda', link: true, active:true },
  ]

    return (
        <div>
            <div>
        {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__text">
                  <h4>Hakkımızda</h4>
                  {/* <div className="breadcrumb__links">
                    <a href="./index.html">Ana Sayfa</a>
                    <span>About Us</span>
                  </div> */}
                  <Breadcrumb icon='right angle' sections={sections} className="siyah"  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* About Section Begin */}
        <section className="about spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about__pic">
                  <img src={banner} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="about__item">
                  <h4>Biz Kimiz ?</h4>
                  <p>İçeriğe dayalı reklamcılık programlarının bazen de uyulması gereken katı politikaları vardır. Örnek olarak Google'ı ele alalım.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="about__item">
                  <h4>Ne Yapıyoruz ?</h4>
                  <p>Bilginin saniyeler içinde kolayca elde edilebildiği bu dijital nesilde kartvizitler önemini korumaya devam ediyor.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="about__item">
                  <h4>Neden Bizi Seçmelisiniz ?</h4>
                  <p>İki veya üç katlı bir ev, evimizin oturduğu toprak parçasını en üst düzeye çıkarmak için ideal bir yoldur, ancak yaşlı veya halsiz insanlar için.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
        {/* Testimonial Section Begin */}
        <section className="testimonial">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className="testimonial__text">
                  <span className="icon_quotations" />
                  <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                    style your hair before you leave the office and you won’t have to make a trip back home.”
                  </p>
                  <div className="testimonial__author">
                    <div className="testimonial__author__pic">
                      <img src={author} alt="" />
                    </div>
                    <div className="testimonial__author__text">
                      <h5>Augusta Schultz</h5>
                      <p>Fashion Design</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="testimonial__pic set-bg" style={{backgroundImage: 'url("https://res.cloudinary.com/uludag-sock/image/upload/v1634168074/testimonial-pic_lcyqrx.jpg")'}} />
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Section End */}
        {/* Counter Section Begin */}
        <section className="counter spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num">102</h2>
                  </div>
                  <span>Our <br />Clients</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num">30</h2>
                  </div>
                  <span>Total <br />Categories</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num">102</h2>
                  </div>
                  <span>In <br />Country</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__number">
                    <h2 className="cn_num">98</h2>
                    <strong>%</strong>
                  </div>
                  <span>Happy <br />Customer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Counter Section End */}
        {/* Team Section Begin */}
        <section className="team spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span>Bizim Takım</span>
                  <h2>Bizim takımla tanışın</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img src={johnSmith} alt="" />
                  <h4>John Smith</h4>
                  <span>Fashion Design</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img src={christineWise} alt="" />
                  <h4>Christine Wise</h4>
                  <span>C.E.O</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img src={seanRobbins} alt="" />
                  <h4>Sean Robbins</h4>
                  <span>Manager</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team__item">
                  <img src={lucyMyers} alt="" />
                  <h4>Lucy Myers</h4>
                  <span>Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section End */}
        {/* Client Section Begin */}
        <section className="clients spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span>Ortak</span>
                  <h2>Mutlu Müşterilerimiz</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client1} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client2} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client3} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client4} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client5} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client6} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client7} alt="" /></a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                <a href="#" className="client__item"><img src={client8} alt="" /></a>
              </div>
            </div>
          </div>
        </section>
        {/* Client Section End */}
      </div>
        </div>
    )
}
