import React from "react";
import banner from "./img/banner.jpg";
import author from "./img/testimonial-author.jpg";
import johnSmith from "./img/team-1.jpg";
import christineWise from "./img/team-2.jpg";
import seanRobbins from "./img/team-3.jpg";
import lucyMyers from "./img/team-4.jpg";
import client1 from "./img/clients/client-1.png";
import client2 from "./img/clients/client-2.png";
import client3 from "./img/clients/client-3.png";
import client4 from "./img/clients/client-4.png";
import client5 from "./img/clients/client-5.png";
import client6 from "./img/clients/client-6.png";
import client7 from "./img/clients/client-7.png";
import client8 from "./img/clients/client-8.png";
import testimonialPic from "./img/testimonial-pic.jpg";
import { Link } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import {Helmet} from "react-helmet"
import "../../App.css"


export default function About() {
  return (
    <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item active" aria-current="page">About us</li>
            </ol>
          </div>{/* End .container */}
        </nav>{/* End .breadcrumb-nav */}
        <div className="container">
          <div className="page-header page-header-big text-center" style={{backgroundImage: 'url("https://res.cloudinary.com/uludag-sock/image/upload/v1658320731/about-header-bg_ov3wfr.jpg")'}}>
            <h1 className="page-title text-white">About us<span className="text-white">Who we are</span></h1>
          </div>{/* End .page-header */}
        </div>{/* End .container */}
        <div className="page-content pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <h2 className="title">Our Vision</h2>{/* End .title */}
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. </p>
              </div>{/* End .col-lg-6 */}
              <div className="col-lg-6">
                <h2 className="title">Our Mission</h2>{/* End .title */}
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. <br />Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>
              </div>{/* End .col-lg-6 */}
            </div>{/* End .row */}
            <div className="mb-5" />{/* End .mb-4 */}
          </div>{/* End .container */}
          <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 mb-3 mb-lg-0">
                  <h2 className="title">Who We Are</h2>{/* End .title */}
                  <p className="lead text-primary mb-3">Pellentesque odio nisi, euismod pharetra a ultricies <br />in diam. Sed arcu. Cras consequat</p>{/* End .lead text-primary */}
                  <p className="mb-2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>
                  <a href="blog.html" className="btn btn-sm btn-minwidth btn-outline-primary-2">
                    <span>VIEW OUR NEWS</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>{/* End .col-lg-5 */}
                <div className="col-lg-6 offset-lg-1">
                  <div className="about-images">
                    <img src="assets/images/about/img-1.jpg" alt="" className="about-img-front" />
                    <img src="assets/images/about/img-2.jpg" alt="" className="about-img-back" />
                  </div>{/* End .about-images */}
                </div>{/* End .col-lg-6 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </div>{/* End .bg-light-2 pt-6 pb-6 */}
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="brands-text">
                  <h2 className="title">The world's premium design brands in one destination.</h2>{/* End .title */}
                  <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
                </div>{/* End .brands-text */}
              </div>{/* End .col-lg-5 */}
              <div className="col-lg-7">
                <div className="brands-display">
                  <div className="row justify-content-center">
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/1.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/2.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/3.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/4.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/5.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/6.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/7.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/8.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                    <div className="col-6 col-sm-4">
                      <a href="#" className="brand">
                        <img src="assets/images/brands/9.png" alt="Brand Name" />
                      </a>
                    </div>{/* End .col-sm-4 */}
                  </div>{/* End .row */}
                </div>{/* End .brands-display */}
              </div>{/* End .col-lg-7 */}
            </div>{/* End .row */}
            <hr className="mt-4 mb-6" />
            <h2 className="title text-center mb-4">Meet Our Team</h2>{/* End .title text-center mb-2 */}
            <div className="row">
              <div className="col-md-4">
                <div className="member member-anim text-center">
                  <figure className="member-media">
                    <img src="assets/images/team/member-1.jpg" alt="member photo" />
                    <figcaption className="member-overlay">
                      <div className="member-overlay-content">
                        <h3 className="member-title">Samanta Grey<span>Founder &amp; CEO</span></h3>{/* End .member-title */}
                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p> 
                        <div className="social-icons social-icons-simple">
                          <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                          <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                          <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                        </div>{/* End .soial-icons */}
                      </div>{/* End .member-overlay-content */}
                    </figcaption>{/* End .member-overlay */}
                  </figure>{/* End .member-media */}
                  <div className="member-content">
                    <h3 className="member-title">Samanta Grey<span>Founder &amp; CEO</span></h3>{/* End .member-title */}
                  </div>{/* End .member-content */}
                </div>{/* End .member */}
              </div>{/* End .col-md-4 */}
              <div className="col-md-4">
                <div className="member member-anim text-center">
                  <figure className="member-media">
                    <img src="assets/images/team/member-2.jpg" alt="member photo" />
                    <figcaption className="member-overlay">
                      <div className="member-overlay-content">
                        <h3 className="member-title">Bruce Sutton<span>Sales &amp; Marketing Manager</span></h3>{/* End .member-title */}
                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p> 
                        <div className="social-icons social-icons-simple">
                          <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                          <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                          <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                        </div>{/* End .soial-icons */}
                      </div>{/* End .member-overlay-content */}
                    </figcaption>{/* End .member-overlay */}
                  </figure>{/* End .member-media */}
                  <div className="member-content">
                    <h3 className="member-title">Bruce Sutton<span>Sales &amp; Marketing Manager</span></h3>{/* End .member-title */}
                  </div>{/* End .member-content */}
                </div>{/* End .member */}
              </div>{/* End .col-md-4 */}
              <div className="col-md-4">
                <div className="member member-anim text-center">
                  <figure className="member-media">
                    <img src="assets/images/team/member-3.jpg" alt="member photo" />
                    <figcaption className="member-overlay">
                      <div className="member-overlay-content">
                        <h3 className="member-title">Janet Joy<span>Product Manager</span></h3>{/* End .member-title */}
                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p> 
                        <div className="social-icons social-icons-simple">
                          <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                          <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                          <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                        </div>{/* End .soial-icons */}
                      </div>{/* End .member-overlay-content */}
                    </figcaption>{/* End .member-overlay */}
                  </figure>{/* End .member-media */}
                  <div className="member-content">
                    <h3 className="member-title">Janet Joy<span>Product Manager</span></h3>{/* End .member-title */}
                  </div>{/* End .member-content */}
                </div>{/* End .member */}
              </div>{/* End .col-md-4 */}
            </div>{/* End .row */}
          </div>{/* End .container */}
          <div className="mb-2" />{/* End .mb-2 */}
          <div className="about-testimonials bg-light-2 pt-6 pb-6">
            <div className="container">
              <h2 className="title text-center mb-3">What Customer Say About Us</h2>{/* End .title text-center */}
              <div className="owl-carousel owl-simple owl-testimonials-photo" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;1200&quot;: {
                                        &quot;nav&quot;: true
                                    }
                                }
                            }">
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-1.jpg" alt="user" />
                  <p>“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br />In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”</p>
                  <cite>
                    Jenson Gregory
                    <span>Customer</span>
                  </cite>
                </blockquote>{/* End .testimonial */}
                <blockquote className="testimonial text-center">
                  <img src="assets/images/testimonials/user-2.jpg" alt="user" />
                  <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”</p>
                  <cite>
                    Victoria Ventura
                    <span>Customer</span>
                  </cite>
                </blockquote>{/* End .testimonial */}
              </div>{/* End .testimonials-slider owl-carousel */}
            </div>{/* End .container */}
          </div>{/* End .bg-light-2 pt-5 pb-6 */}
        </div>{/* End .page-content */}
      </main>
  );
}
