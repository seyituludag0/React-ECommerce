import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentService from "../../services/CommentService";

export default function CommentBulb({ sockId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let commentService = new CommentService();
    commentService.getBySockId(sockId)
      .then((result) => setComments(result.data.data));
  });

  return (
    <div>
      <h1>Yorumlar</h1>
      <div>
        {comments.map((comment, key) => (
          <div key={key}>
         <div>
         {comment.customer.firstName} {comment.customer.lastName}
          <p className="bubble thought comment-bulb" key={comment.id}>
            {comment.description}
          </p>
          <Rating name="read-only" value={comment.starCount} readOnly />
         </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
