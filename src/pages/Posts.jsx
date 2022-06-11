import React, { useState, useRef, useMemo, useEffect } from "react";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import PostList from "../components/PostList";
//import "./styles/App.css";
// import NewInput from "./components/UI/input/NewInput";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import NewModal from "../components/UI/NewModal/NewModal";
import NewButton from "../components/UI/button/NewButton";
import { usePosts } from "../hooks/UsePosts";
//import axios from "axios";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader"; // крутилка а
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import NewSelect from "../components/UI/select/NewSelect";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false); // для отображения модального окна создания поста
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0); // по умолчанию постов 0 пока не получили ответ от сервера
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );
  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");\

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    // изменение состояния - процесс асинхронный
    fetchPosts(limit, page);
  }, [page, limit]); // слежка за изменением страницы
  // в массиве указываются зависимости (то есть если мы что-то делаем с постами то отрабатывает каждый раз оно)
  // но в данном случае мы вызываем юзЭффект единожды, чтобы он отрисовал нам посты с сервера

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false); // после создания поста скрываем окно
    // принимает новый пост от постформ
    // здесь изменяется состояние в конец добавялется новый пост
  };

  //получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
    // если айди элемента из массива равен тому который мы передали постом
    // функция фильтр возвращает массив
    // отфильтрованный по определенному условию
  };

  const changePage = (page) => {
    setPage(page);
    // fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <NewButton onClick={fetchPosts}>Get posts!</NewButton>
      <NewButton
        style={{ marginTop: "15px", display: "flex", marginLeft: "auto" }}
        onClick={() => setModal(true)}
      >
        Create a post
      </NewButton>
      <NewModal visible={modal} setVisible={setModal}>
        {/* create={createPost} - функция обратного вызова для передачи поста от ребенка к родителю */}
        <PostForm create={createPost}></PostForm>
      </NewModal>
      {/* тупо полоска разделяющая элементы */}
      <hr style={{ margin: "15px 0" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <NewSelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Amount of elements in the page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "See all" },
        ]}
      />
      {postError && <h1>Some error... ${postError}</h1>}
      <PostList
        remove={removePost} // передаем функцию как пропс
        posts={sortedAndSearchedPosts}
        title="List Of Posts"
      ></PostList>
      <div
        ref={lastElement}
        style={{ height: 5, background: "transparent" }}
      ></div>
      {isPostsLoading && (
        <h1
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "200px",
            }}
          >
            <Loader />
          </div>
        </h1>
      )}

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}

export default Posts;
