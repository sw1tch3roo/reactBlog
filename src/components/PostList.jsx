import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          textAlign: "center",
        }}
      >
        Posts not found
      </h1>
    );
  }

  // деструктуризация объекта пропс
  // сразу вытаскиваем нужные значения
  return (
    <div>
      <h1
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((postFromArray, index) => (
          <CSSTransition key={postFromArray.id} timeout={500} classNames="post">
            <PostItem
              remove={remove} // передаем функцию в постайтем
              number={index + 1} // для красивой нумерации
              // постов
              post={postFromArray}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
