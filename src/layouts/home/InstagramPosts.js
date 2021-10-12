import React from 'react'
import men from "./images/a2.jpg";
import { Favorite, Comment } from "@material-ui/icons"



export default function InstagramPosts() {
    return (
        <div>
            <section className="py-lg-5">
        {/* insta posts */}
        <h5 className="head_agileinfo text-center text-capitalize pb-5">
          <span>I</span>nstagram Gönderilerimiz</h5>
        <div className="gallery row no-gutters pt-lg-5">
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 56</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 2</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 89</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 5</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 42</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 1</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gallery row no-gutters pb-5">
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 56</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 2</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 89</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 5</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 42</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 1</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 col-6 gallery-item">
            <img src={men} className="img-fluid" alt="" />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <i className="fas fa-heart" /><Favorite /> 38</li>
                <li className="gallery-item-comments">
                  <i className="fas fa-comment" /><Comment /> 0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
