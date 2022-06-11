import React, { useState } from "react"; // useState - обязательный импорт
// без импорта не работает
import NewButton from "./UI/button/NewButton";
import NewInput from "./UI/input/NewInput";

const PostForm = ({ create }) => {
  //console.log(props);
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
      <NewInput
        value={post.title}
        onChange={(element) =>
          setPost({ ...post, title: element.target.value })
        }
        type="text"
        placeholder="Name of post"
      ></NewInput>
      <NewInput
        value={post.body}
        onChange={(element) => setPost({ ...post, body: element.target.value })}
        //  сверху разворачиваем старый пост, и перезатираем нужное кнокретное поле
        type="text"
        placeholder="Description of post"
      ></NewInput>
      <NewButton
        style={{ display: "flex", marginLeft: "auto" }}
        onClick={addNewPost}
      >
        Create a post
      </NewButton>
    </form>
  );
};

export default PostForm;
