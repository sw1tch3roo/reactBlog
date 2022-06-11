import React, { useState, useEffect } from "react";

import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <AppRouter />
        {/* Routes  группирует маршруты и позволяет выбрать один из тех, который есть внутри*/}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
