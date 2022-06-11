import React, { useState } from "react"; // useState - обязательный импорт
import NewButton from "./UI/button/NewButton";
// без импорта не работает
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  // console.log(router);

  return (
    // props.number - для красивой нумерации постов
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          {/* вызываем фукнцию римув получив ее из пропсов (передаем в нее теккущий пост (у него будет айди по которому он будет удален, он тоже из пропсов)) */}
          <NewButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            Open
          </NewButton>
          <NewButton onClick={() => props.remove(props.post)}>Delete</NewButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
