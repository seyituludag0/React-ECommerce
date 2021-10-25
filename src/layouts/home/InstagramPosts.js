import React from 'react'
import post from "./images/insta/post.jpg"
import post1 from "./images/insta/post1.jpg"
import post2 from "./images/insta/post2.jpg"
import post3 from "./images/insta/post3.jpg"
import post4 from "./images/insta/post4.jpg"
import post5 from "./images/insta/post5.jpg"
import post6 from "./images/insta/post6.jpg"
import post7 from "./images/insta/post7.jpg"
import post8 from "./images/insta/post8.jpg"
import post9 from "./images/insta/post9.jpg"
import post10 from "./images/insta/post10.jpg"
import post11 from "./images/insta/post11.jpg"
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
            <img src={post} className="img-fluid" alt="" />
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
            <img src={post1} className="img-fluid" alt="" />
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
            <img src={post2} className="img-fluid" alt="" />
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
            <img src={post3} className="img-fluid" alt="" />
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
            <img src={post4} className="img-fluid" alt="" />
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
            <img src={post5} className="img-fluid" alt="" />
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
            <img src={post6} className="img-fluid" alt="" />
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
            <img src={post7} className="img-fluid" alt="" />
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
            <img src={post8} className="img-fluid" alt="" />
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
            <img src={post9} className="img-fluid" alt="" />
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
            <img src={post10} className="img-fluid" alt="" />
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
            <img src={post11} className="img-fluid" alt="" />
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
