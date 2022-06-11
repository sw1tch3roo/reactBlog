import React, { useContext } from "react";
import { Routes, Link, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router";
import Loader from "./UI/loader/Loader";

// import About from "../pages/About";
// import Posts from "../pages/Posts";
// import Error from "../pages/Error";
// import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  //   console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }
  return (
    // { path, element, exact } = route (просто разложили массив)
    isAuth ? (
      <Routes>
        {privateRoutes.map(({ path, element, exact }, key) => (
          <Route path={path} element={element} exact={exact} key={key} />
        ))}
      </Routes>
    ) : (
      <Routes>
        {publicRoutes.map(({ path, element, exact }, key) => (
          <Route path={path} element={element} exact={exact} key={key} />
        ))}
      </Routes>
    )
  );
};

export default AppRouter;

/* <Route path="/about" element={<About />} />
      {/* exact - пропс, чтоыб роутер воспринимал ссылки как разные  */

//   <Route exact path="/posts" element={<Posts />} />
//   <Route path="/error" element={<Error />} />
//   {/* чтобы маршурут был динамическим, нужно сначала указать двоеточие, а затем название параметра */}
//   <Route exact path="/posts/:id" element={<PostIdPage />} />
//   {/* Navigate позволяет перемещать человека по нужному нам адресу (если он ввел несуществующий) */}
//   <Route path="*" element={<Navigate replace to="/error" />} /> */}
