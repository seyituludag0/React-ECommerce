import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import CommentService from "../../services/CommentService";
import CommentDelete from "./CommentDelete";
import CommentUpdate from "./CommentUpdate";

export default function CommentBulb({ productId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let commentService = new CommentService();
    commentService
      .getByProductId(productId)
      .then((result) => setComments(result.data.data));
  }, []);
  return (
    <div>
      <h1>Yorumlar</h1>
      <div>
        {comments.length !== 0 ? (
          comments.map((comment) => (
    <div key={comment.id}>
      <div>
        <Rating name="read-only" value={comment.starCount} readOnly />{" "}
        <br />
        {comment.customer.firstName} {comment.customer.lastName}
        <p className="bubble thought comment-bulb" key={comment.id}>
          {comment.description}
        </p>
        <div className="alt-menu alt-2">
          <label htmlFor="dropbox" className="dropbox">
            <Icon name="comment outline" color="orange" /> Yorumu Düzenle
          </label>
          <input type="checkbox" id="dropbox" />
          <div id="menu">
            <CommentUpdate
              comment={comment}
              productId={comment.product.id}
            />
            <CommentDelete id={comment.id} />
          </div>
        </div>
      </div>
    </div>
  ))
        ):(<p>Bu ürüne henüz yorum yapılmamış</p>)}
      </div>
    </div>
  );
}
