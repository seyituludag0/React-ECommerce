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
          <Rating name="read-only" value={comment.starCount} readOnly />
          <p className="bubble thought comment-bulb" key={comment.id}>
            {comment.description}
          </p>
          </div>
        ))}
        
      </div>
    </div>
  );
}
