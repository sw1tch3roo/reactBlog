import React, { useContext } from "react";
import NewButton from "../components/UI/button/NewButton";
import NewInput from "../components/UI/input/NewInput";
import { AuthContext } from "../context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true); // если пользователь зарегался, изменяем состояние на тру
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={login}>
        <NewInput type="text" placeholder="Email or phone" />
        <NewInput type="password" placeholder="Enter password" />
        <NewButton>Sign in</NewButton>
      </form>
    </div>
  );
};

export default Login;
