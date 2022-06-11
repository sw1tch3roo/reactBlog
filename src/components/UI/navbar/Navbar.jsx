import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import NewButton from "../button/NewButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <NewButton onClick={logout}>Exit</NewButton>
      <div className="navbar__links">
        {/* <a href="/about">About us</a> - с перезагрузкой (не надо так) */}
        {/* компонент Link из react-router-dom - без перезагрузки (так надо) */}
        {/* <Link to="/about">About us</Link> - пример (to - пропс, принимающий адрес, куда надо перенаправить) */}
        <NewButton>
          <Link to="/about">About us</Link>
        </NewButton>
        <NewButton>
          <Link to="posts">Posts</Link>
        </NewButton>
      </div>
    </div>
  );
};

export default Navbar;
